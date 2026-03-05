import Logo from "./assets/logo/Logo.svg";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col lg:flex-row">
      <div className="absolute w-36 h-14 top-0 left-0 py-3 px-5 bg-gray-600 rounded-br-xl">
        <img src={Logo} />
      </div>
      <div className="w-full lg:w-1/4 flex flex-col gap-6 items-center bg-gray-800 lg:m-3 py-20 px-10 lg:p-16 lg:rounded-2xl">
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
              className="w-full h-12 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-200"
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
            <p className="mb-2 text-title-md text-gray-200">Cliente</p>
            <input
              type="text"
              className="w-full h-12 border border-gray-500 rounded-lg text-gray-200 text-body-md outline-none py-3 px-10"
            />
          </div>
        </div>
        <div className="w-full">
          <button className="w-full h-14 bg-yellow rounded-lg text-gray-900 text-title-sm cursor-pointer">
            AGENDAR
          </button>
        </div>
      </div>
      <div className="w-full lg:w-3/4 p-3">
        <div>
          <h2 className="text-xl font-bold text-yellow mb-6">Sua agenda</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
