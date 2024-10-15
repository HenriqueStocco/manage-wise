export function App() {
  return (
    // bg-gradient-to-r from-teal-950 to-teal-700
    <main className="h-screen bg-gradient-to-b from-teal-950 to-teal-700 flex items-center justify-center">
      <section className="bg-stone-50 h-[800px] max-w-[800px] rounded-md shadow-lg py-16 px-20">
        <h1 className="text-stone-600 text-[40px] font-medium tracking-normal">
          Cadastre sua empresa
        </h1>

        <form className="container flex flex-col gap-12 items-center py-10">
          <div className="container gap-4 flex flex-col">
            <h4 className="text-xl text-stone-700 tracking-wide font-medium">
              Informações da empresa
            </h4>

            <div>
              <input
                type="text"
                name="social-reason"
                placeholder="Razão Social"
                className="bg-stone-100 shadow-inner rounded-md placeholder:text-stone-400 placeholder:text-base px-2 h-10 w-64 mr-2 mb-2 focus:bg-stone-50 hover:bg-stone-50 outline-none border-collapse"
              />
              <input
                type="text"
                name="cnpj"
                placeholder="CNPJ"
                maxLength={14}
                className="bg-stone-100 shadow-inner rounded-md placeholder:text-stone-400 placeholder:text-sm px-2 h-10 w-[150px] mr-2 mb-2 focus:bg-stone-50 hover:bg-stone-50 outline-none border-collapse"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefone"
                className="bg-stone-100 shadow-inner rounded-md placeholder:text-stone-400 placeholder:text-base px-2 h-10 w-[140px] mb-2 focus:bg-stone-50 hover:bg-stone-50 outline-none border-collapse"
              />
              <input
                type="text"
                name="address"
                placeholder="Endereço"
                className="bg-stone-100 shadow-inner rounded-md placeholder:text-stone-400 placeholder:text-base px-2 h-10 w-[350px] mr-2 focus:bg-stone-50 hover:bg-stone-50 outline-none border-collapse"
              />
              <input
                type="text"
                name="city"
                placeholder="Cidade"
                className="bg-stone-100 shadow-inner rounded-md placeholder:text-stone-400 placeholder:text-base px-2 h-10 w-[150px] mr-2 focus:bg-stone-50 hover:bg-stone-50 outline-none border-collapse"
              />

              <CountryStates />
            </div>
          </div>

          <div className="container gap-4 flex flex-col">
            <h4 className="text-xl text-stone-700 tracking-wide font-medium">
              Informações do administrador
            </h4>

            <div>
              <input
                type="text"
                name="username"
                placeholder="Nome de usuário"
                className="bg-stone-100 shadow-inner rounded-md placeholder:text-stone-400 placeholder:text-base px-2 h-10 w-[240px] mr-2 mb-2 focus:bg-stone-50 hover:bg-stone-50 outline-none border-collapse"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-stone-100 shadow-inner rounded-md placeholder:text-stone-400 placeholder:text-base px-2 h-10 w-[330px] mr-2 mb-2 focus:bg-stone-50 hover:bg-stone-50 outline-none border-collapse"
              />
              <input
                type="password"
                name="password"
                placeholder="Senha"
                className="bg-stone-100 shadow-inner rounded-md placeholder:text-stone-400 placeholder:text-base px-2 h-10 w-[420px] mr-2 mb-2 focus:bg-stone-50 hover:bg-stone-50 outline-none border-collapse"
              />
              <input
                type="text"
                name="cpf"
                placeholder="CPF"
                className="bg-stone-100 shadow-inner rounded-md placeholder:text-stone-400 placeholder:text-base px-2 h-10 w-[150px] mr-2 mb-2 focus:bg-stone-50 hover:bg-stone-50 outline-none border-collapse"
              />
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-5 py-4">
            <button
              type="submit"
              className="bg-teal-400 h-10 w-80 rounded-lg text-stone-50 shadow-md hover:bg-teal-400/95 hover:text-stone-100"
            >
              Entrar
            </button>

            <span className="flex gap-3 justify-center items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="stroke-stone-400 size-4"
              />
              <p className="text-stone-500">Lembre-se</p>
            </span>
          </div>
        </form>
      </section>
    </main>
  )
}

type CountryStatesType = {
  [state: string]: string
}[]

const countryStates: CountryStatesType = [
  { ac: 'AC' },
  { al: 'AL' },
  { ap: 'AP' },
  { am: 'AM' },
  { ba: 'BA' },
  { ce: 'CE' },
  { df: 'DF' },
  { es: 'ES' },
  { go: 'GO' },
  { ma: 'MA' },
  { mt: 'MT' },
  { ms: 'MS' },
  { mg: 'MG' },
  { pa: 'PA' },
  { pb: 'PB' },
  { pr: 'PR' },
  { pe: 'PE' },
  { pi: 'PI' },
  { rj: 'RJ' },
  { rn: 'RN' },
  { rs: 'RS' },
  { ro: 'RO' },
  { rr: 'RR' },
  { sc: 'SC' },
  { se: 'SE' },
  { to: 'TO' },
]

function CountryStates() {
  return (
    <select
      name="states"
      about="brazil-states"
      className="scroll-p-0 w-14 h-10 rounded-md text-center bg-stone-100 shadow-inner text-stone-500 text-sm"
    >
      {countryStates.map((value, index) => {
        const [, val] = Object.entries(value)[0]
        return <Option key={Math.floor(index) * 2} value={val} />
      })}
    </select>
  )
}

function Option({ value, key }: { value: string; key: number }) {
  return (
    <option
      value={value}
      key={key}
      className="text-stone-500 text-md w-20 bg-stone-100"
    >
      {value}
    </option>
  )
}
