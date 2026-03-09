import Logo from "./assets/logo/Logo.svg";
import TrashIcon from "./assets/icons/trash.svg";
import SunIcon from "./assets/icons/sun.svg";
import CloudIcon from "./assets/icons/cloud.svg";
import MoonIcon from "./assets/icons/moon.svg";
import UserIcon from "./assets/icons/user.svg"

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-100 flex flex-col lg:flex-row">
      <div className="absolute w-36 h-14 top-0 left-0 py-3 px-5 bg-gray-600 rounded-br-xl">
        <img src={Logo} />
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
              className="w-full h-12 bg-gray-700 border border-gray-500 rounded-lg px-4 py-3 text-gray-200"
            />
          </div>
          <div>
            <p className="text-title-md text-gray-200 mb-2">Horários</p>
            <div className="mb-3">
              <p className="text-body-sm text-gray-300">Manhã</p>
              <div className="grid lg:grid-cols-4 grid-cols-3 gap-2">
                <button className="h-10 w-full text-gray-200 bg-gray-600 border border-gray-500 cursor-pointer rounded-lg">
                  09:00
                </button>
                <button className="h-10 w-full text-gray-200 bg-gray-600 border border-gray-500 cursor-pointer rounded-lg">
                  10:00
                </button>
                <button className="h-10 w-full text-gray-200 bg-gray-600 border border-gray-500 cursor-pointer rounded-lg">
                  11:00
                </button>
                <button className="h-10 w-full text-gray-200 bg-gray-600 border border-gray-500 cursor-pointer rounded-lg">
                  12:00
                </button>
              </div>
            </div>
            <div className="mb-3">
              <p className="text-body-sm text-gray-300">Tarde</p>
              <div className="grid lg:grid-cols-4 grid-cols-3 gap-2">
                <button className="h-10 w-full text-gray-200 bg-gray-600 border border-gray-500 cursor-pointer rounded-lg">
                  13:00
                </button>
                <button className="h-10 w-full text-gray-200 bg-gray-600 border border-gray-500 cursor-pointer rounded-lg">
                  14:00
                </button>
                <button className="h-10 w-full text-gray-200 bg-gray-600 border border-gray-500 cursor-pointer rounded-lg">
                  15:00
                </button>
                <button className="h-10 w-full text-gray-200 bg-gray-600 border border-gray-500 cursor-pointer rounded-lg">
                  16:00
                </button>
                <button className="h-10 w-full text-gray-200 bg-gray-600 border border-gray-500 cursor-pointer rounded-lg">
                  17:00
                </button>
                <button className="h-10 w-full text-gray-200 bg-gray-600 border border-gray-500 cursor-pointer rounded-lg">
                  18:00
                </button>
              </div>
            </div>
            <div>
              <p className="text-body-sm text-gray-300">Noite</p>
              <div className="grid lg:grid-cols-4 grid-cols-3 gap-2">
                <button className="h-10 w-full text-gray-200 bg-gray-600 border border-gray-500 cursor-pointer rounded-lg">
                  19:00
                </button>
                <button className="h-10 w-full text-gray-200 bg-gray-600 border border-gray-500 cursor-pointer rounded-lg">
                  20:00
                </button>
                <button className="h-10 w-full text-gray-200 bg-gray-600 border border-gray-500 cursor-pointer rounded-lg">
                  21:00
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 text-title-md text-gray-200 h-6">Cliente</p>
            <div className="w-full h-12 border border-gray-500 rounded-lg py-3 px-3 flex gap-2">
              <img src={UserIcon} className="w-5 h-5" />
              <input type="text" className="outline-none w-full text-gray-200 text-body-md" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <button className="w-full h-14 bg-yellow rounded-lg text-gray-900 text-title-sm cursor-pointer">
            AGENDAR
          </button>
        </div>
      </div>
      <div className="w-full lg:w-3/4 lg:m-3 py-20 px-28 flex flex-col items-center gap-8">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-gray-100 text-title-lg">Sua agenda</h1>
            <p className="text-gray-300 text-body-sm">
              Consulte os seus cortes de cabelo agendados por dia
            </p>
          </div>
          <div>
            <input
              type="date"
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
              <div className="w-full flex justify-between items-center h-8">
                <div className="flex gap-5">
                  <p className="text-gray-200 text-title-md w-12 text-center">11:00</p>
                  <p className="text-gray-200 text-body-md">Ryan Dorwart</p>
                </div>
                <button className="cursor-pointer w-4 h-4">
                  <img src={TrashIcon} alt="" />
                </button>
              </div>
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
              <div className="w-full flex justify-between items-center h-8">
                <div className="flex gap-5">
                  <p className="text-gray-200 text-title-md w-12 text-center">13:00</p>
                  <p className="text-gray-200 text-body-md">Livia Curtis</p>
                </div>
                <button className="cursor-pointer w-4 h-4">
                  <img src={TrashIcon} alt="" />
                </button>
              </div>
              <div className="w-full flex justify-between items-center h-8">
                <div className="flex gap-5">
                  <p className="text-gray-200 text-title-md w-12 text-center">14:00</p>
                  <p className="text-gray-200 text-body-md">Randy Calzoni</p>
                </div>
                <button className="cursor-pointer w-4 h-4">
                  <img src={TrashIcon} alt="" />
                </button>
              </div>
              <div className="w-full flex justify-between items-center h-8">
                <div className="flex gap-5">
                  <p className="text-gray-200 text-title-md w-12 text-center">16:00</p>
                  <p className="text-gray-200 text-body-md">Marley Franci</p>
                </div>
                <button className="cursor-pointer w-4 h-4">
                  <img src={TrashIcon} alt="" />
                </button>
              </div>
              <div className="w-full flex justify-between items-center h-8">
                <div className="flex gap-5">
                  <p className="text-gray-200 text-title-md w-12 text-center">17:00</p>
                  <p className="text-gray-200 text-body-md">Jaylon Korsgaard</p>
                </div>
                <button className="cursor-pointer w-4 h-4">
                  <img src={TrashIcon} alt="" />
                </button>
              </div>
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
              <div className="w-full flex justify-between items-center h-8">
                <div className="flex gap-5">
                  <p className="text-gray-200 text-title-md w-12 text-center">21:00</p>
                  <p className="text-gray-200 text-body-md">Maria Herwitz</p>
                </div>
                <button className="cursor-pointer w-4 h-4">
                  <img src={TrashIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
