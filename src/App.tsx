import Logo from "./assets/logo/Logo.svg";
import TrashIcon from "./assets/icons/trash.svg";
import SunIcon from "./assets/icons/sun.svg";
import CloudIcon from "./assets/icons/cloud.svg";
import MoonIcon from "./assets/icons/moon.svg";
import UserIcon from "./assets/icons/user.svg";
import React from "react";

type Schedule = {
  id: number;
  date: string;
  time: string;
  client: string;
};

const today = new Date().toISOString().split("T")[0];

function App() {
  const [schedule, setSchedule] = React.useState<Schedule[]>(() => {
    const stored = localStorage.getItem("schedule");

    if (stored) {
      return JSON.parse(stored);
    }

    return [];
  });
  const [date, setDate] = React.useState(today);
  const [time, setTime] = React.useState("");
  const [client, setClient] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(today);

  function getHour(time: string) {
    return Number(time.split(":")[0]);
  }

  function newSchedule() {
    if (!date || !time || !client) {
      return;
    }

    const newItem = {
      id: Date.now(),
      date,
      time,
      client,
    };

    setSchedule([...schedule, newItem]);
    setClient("");
    setTime("");
  }

  function removeSchedule(id: number) {
    const schedules = schedule.filter((item) => item.id !== id);

    setSchedule(schedules);
  }

  const filteredSchedule = schedule.filter((item) => {
    if (!selectedDate) return true;
    return item.date === selectedDate;
  });

  const morningSchedule = filteredSchedule
    .filter((item) => {
      const hour = getHour(item.time);
      return hour >= 9 && hour <= 12;
    })
    .sort((a, b) => getHour(a.time) - getHour(b.time));

  const afternoonSchedule = filteredSchedule
    .filter((item) => {
      const hour = getHour(item.time);
      return hour >= 13 && hour <= 18;
    })
    .sort((a, b) => getHour(a.time) - getHour(b.time));

  const nightSchedule = filteredSchedule
    .filter((item) => {
      const hour = getHour(item.time);
      return hour >= 19 && hour <= 21;
    })
    .sort((a, b) => getHour(a.time) - getHour(b.time));

  function isTimeBooked(time: string) {
    return schedule.some((item) => item.date === date && item.time === time);
  }

  React.useEffect(() => {
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }, [schedule]);

  function clearSchedule() {
    setSchedule([]);
    localStorage.removeItem("schedule");
  }

  return (
    <div className="min-h-screen bg-gray-800 text-gray-100 flex flex-col lg:flex-row">
      <div className="absolute w-36 h-14 top-0 left-0 py-3 px-5 bg-gray-600 rounded-br-xl">
        <img src={Logo} onClick={clearSchedule} />
      </div>
      <div className="w-full lg:w-1/4 flex flex-col gap-6 items-center bg-gray-700 lg:m-3 py-20 px-10 lg:p-16 lg:rounded-2xl">
        <div className="w-full flex flex-col">
          <h1 className="text-title-lg font-bold mb-1">
            Agende um atendimento
          </h1>
          <p className="text-gray-300 text-body-sm">
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento
          </p>
        </div>
        <div className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-title-md text-gray-200">Data</p>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full h-12 bg-gray-700 border border-gray-500 rounded-lg px-4 py-3 text-gray-200"
            />
          </div>
          <div>
            <p className="text-title-md text-gray-200 mb-2">Horários</p>
            <div className="mb-3">
              <p className="text-body-sm text-gray-300">Manhã</p>
              <div className="grid lg:grid-cols-4 grid-cols-3 gap-2">
                <button
                  onClick={() => setTime("09:00")}
                  disabled={isTimeBooked("09:00")}
                  className={`h-10 w-full border hover:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-gray-700 bg-gray-600 cursor-pointer rounded-lg ${time === "09:00" ? "border-yellow text-yellow" : "border-gray-500 text-gray-200"}`}
                >
                  09:00
                </button>
                <button
                  onClick={() => setTime("10:00")}
                  disabled={isTimeBooked("10:00")}
                  className={`h-10 w-full border hover:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-gray-700 bg-gray-600 cursor-pointer rounded-lg ${time === "10:00" ? "border-yellow text-yellow" : "border-gray-500 text-gray-200"}`}
                >
                  10:00
                </button>
                <button
                  onClick={() => setTime("11:00")}
                  disabled={isTimeBooked("11:00")}
                  className={`h-10 w-full border hover:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-gray-700 bg-gray-600 cursor-pointer rounded-lg ${time === "11:00" ? "border-yellow text-yellow" : "border-gray-500 text-gray-200"}`}
                >
                  11:00
                </button>
                <button
                  onClick={() => setTime("12:00")}
                  disabled={isTimeBooked("12:00")}
                  className={`h-10 w-full border hover:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-gray-700 bg-gray-600 cursor-pointer rounded-lg ${time === "12:00" ? "border-yellow text-yellow" : "border-gray-500 text-gray-200"}`}
                >
                  12:00
                </button>
              </div>
            </div>
            <div className="mb-3">
              <p className="text-body-sm text-gray-300">Tarde</p>
              <div className="grid lg:grid-cols-4 grid-cols-3 gap-2">
                <button
                  onClick={() => setTime("13:00")}
                  disabled={isTimeBooked("13:00")}
                  className={`h-10 w-full border hover:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-gray-700 bg-gray-600 cursor-pointer rounded-lg ${time === "13:00" ? "border-yellow text-yellow" : "border-gray-500 text-gray-200"}`}
                >
                  13:00
                </button>
                <button
                  onClick={() => setTime("14:00")}
                  disabled={isTimeBooked("14:00")}
                  className={`h-10 w-full border hover:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-gray-700 bg-gray-600 cursor-pointer rounded-lg ${time === "14:00" ? "border-yellow text-yellow" : "border-gray-500 text-gray-200"}`}
                >
                  14:00
                </button>
                <button
                  onClick={() => setTime("15:00")}
                  disabled={isTimeBooked("15:00")}
                  className={`h-10 w-full border hover:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-gray-700 bg-gray-600 cursor-pointer rounded-lg ${time === "15:00" ? "border-yellow text-yellow" : "border-gray-500 text-gray-200"}`}
                >
                  15:00
                </button>
                <button
                  onClick={() => setTime("16:00")}
                  disabled={isTimeBooked("16:00")}
                  className={`h-10 w-full border hover:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-gray-700 bg-gray-600 cursor-pointer rounded-lg ${time === "16:00" ? "border-yellow text-yellow" : "border-gray-500 text-gray-200"}`}
                >
                  16:00
                </button>
                <button
                  onClick={() => setTime("17:00")}
                  disabled={isTimeBooked("17:00")}
                  className={`h-10 w-full border hover:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-gray-700 bg-gray-600 cursor-pointer rounded-lg ${time === "17:00" ? "border-yellow text-yellow" : "border-gray-500 text-gray-200"}`}
                >
                  17:00
                </button>
                <button
                  onClick={() => setTime("18:00")}
                  disabled={isTimeBooked("18:00")}
                  className={`h-10 w-full border hover:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-gray-700 bg-gray-600 cursor-pointer rounded-lg ${time === "18:00" ? "border-yellow text-yellow" : "border-gray-500 text-gray-200"}`}
                >
                  18:00
                </button>
              </div>
            </div>
            <div>
              <p className="text-body-sm text-gray-300">Noite</p>
              <div className="grid lg:grid-cols-4 grid-cols-3 gap-2">
                <button
                  onClick={() => setTime("19:00")}
                  disabled={isTimeBooked("19:00")}
                  className={`h-10 w-full border hover:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-gray-700 bg-gray-600 cursor-pointer rounded-lg ${time === "19:00" ? "border-yellow text-yellow" : "border-gray-500 text-gray-200"}`}
                >
                  19:00
                </button>
                <button
                  onClick={() => setTime("20:00")}
                  disabled={isTimeBooked("20:00")}
                  className={`h-10 w-full border hover:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-gray-700 bg-gray-600 cursor-pointer rounded-lg ${time === "20:00" ? "border-yellow text-yellow" : "border-gray-500 text-gray-200"}`}
                >
                  20:00
                </button>
                <button
                  onClick={() => setTime("21:00")}
                  disabled={isTimeBooked("21:00")}
                  className={`h-10 w-full border hover:bg-gray-500 disabled:border-gray-600 disabled:cursor-not-allowed disabled:text-gray-500 disabled:bg-gray-700 bg-gray-600 cursor-pointer rounded-lg ${time === "21:00" ? "border-yellow text-yellow" : "border-gray-500 text-gray-200"}`}
                >
                  21:00
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 text-title-md text-gray-200 h-6">Cliente</p>
            <div className="w-full h-12 border border-gray-500 rounded-lg py-3 px-3 flex gap-2">
              <img src={UserIcon} className="w-5 h-5" />
              <input
                type="text"
                onChange={(e) => setClient(e.target.value)}
                value={client}
                className="outline-none w-full text-gray-200 text-body-md"
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <button
            className="w-full h-14 bg-yellow rounded-lg text-gray-900 text-title-sm cursor-pointer"
            onClick={newSchedule}
          >
            AGENDAR
          </button>
        </div>
      </div>
      <div className="w-full lg:w-3/4 lg:m-3 py-20 px-10 lg:px-28 flex flex-col items-center gap-8">
        <div className="w-full flex flex-col lg:flex-row gap-8 justify-between items-center">
          <div className="w-full flex flex-col gap-1">
            <h1 className="text-gray-100 text-title-lg">Sua agenda</h1>
            <p className="text-gray-300 text-body-sm">
              Consulte os seus cortes de cabelo agendados por dia
            </p>
          </div>
          <div className="w-full lg:w-38">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full h-12 bg-gray-800 border border-gray-500 rounded-lg px-4 py-3 text-gray-200"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col w-full rounded-lg border border-gray-600">
            <div className="flex justify-between w-full py-3 px-5 border-b border-gray-600 items-center">
              <div className="flex gap-3">
                <img className="w-5 h-5" src={SunIcon} alt="" />
                <p className="text-gray-300 text-body-sm">Manhã</p>
              </div>
              <div>
                <p className="text-gray-400 text-body-sm">09h-12h</p>
              </div>
            </div>
            <div className="w-full flex flex-col px-5 py-5 items-center gap-0.5">
              {morningSchedule.length === 0 ? (
                <p className="text-body-sm text-gray-300 w-full">Nenhum agendamento para este período</p>
              ) : (
                morningSchedule.map((item) => (
                  <div
                    key={item.id}
                    className="w-full flex justify-between items-center h-8"
                  >
                    <div className="flex gap-5">
                      <p className="text-gray-200 text-title-md w-12 text-center">
                        {item.time}
                      </p>
                      <p className="text-gray-200 text-body-md">
                        {item.client}
                      </p>
                    </div>
                    <button
                      onClick={() => removeSchedule(item.id)}
                      className="cursor-pointer w-4 h-4"
                    >
                      <img src={TrashIcon} alt="" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="flex flex-col w-full rounded-lg border border-gray-600">
            <div className="flex justify-between w-full py-3 px-5 border-b border-gray-600 items-center">
              <div className="flex gap-3">
                <img className="w-5 h-5" src={CloudIcon} alt="" />
                <p className="text-gray-300 text-body-sm">Tarde</p>
              </div>
              <div>
                <p className="text-gray-400 text-body-sm">13h-18h</p>
              </div>
            </div>
            <div className="w-full flex flex-col px-5 py-5 items-center gap-0.5">
              {afternoonSchedule.length === 0 ? (
                <p className="text-body-sm text-gray-300 w-full">Nenhum agendamento para este período</p>
              ) : (
                afternoonSchedule.map((item) => (
                  <div
                    key={item.id}
                    className="w-full flex justify-between items-center h-8"
                  >
                    <div className="flex gap-5">
                      <p className="text-gray-200 text-title-md w-12 text-center">
                        {item.time}
                      </p>
                      <p className="text-gray-200 text-body-md">
                        {item.client}
                      </p>
                    </div>
                    <button
                      onClick={() => removeSchedule(item.id)}
                      className="cursor-pointer w-4 h-4"
                    >
                      <img src={TrashIcon} alt="" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="flex flex-col w-full rounded-lg border border-gray-600">
            <div className="flex justify-between w-full py-3 px-5 border-b border-gray-600 items-center">
              <div className="flex gap-3">
                <img className="w-5 h-5" src={MoonIcon} alt="" />
                <p className="text-gray-300 text-body-sm">Noite</p>
              </div>
              <div>
                <p className="text-gray-400 text-body-sm">19h-21h</p>
              </div>
            </div>
            <div className="w-full flex flex-col px-5 py-5 items-center gap-0.5">
              {nightSchedule.length === 0 ? (
                <p className="text-body-sm text-gray-300 w-full">Nenhum agendamento para este período</p>
              ) : (
                nightSchedule.map((item) => (
                  <div
                    key={item.id}
                    className="w-full flex justify-between items-center h-8"
                  >
                    <div className="flex gap-5">
                      <p className="text-gray-200 text-title-md w-12 text-center">
                        {item.time}
                      </p>
                      <p className="text-gray-200 text-body-md">
                        {item.client}
                      </p>
                    </div>
                    <button
                      onClick={() => removeSchedule(item.id)}
                      className="cursor-pointer w-4 h-4"
                    >
                      <img src={TrashIcon} alt="" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
