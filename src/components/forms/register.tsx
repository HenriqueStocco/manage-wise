import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { Input } from '../ui/input'

export function RegisterForms() {
  return (
    <form className="container flex flex-col gap-12 items-center py-14">
      <div className="container gap-4 flex flex-col">
        <h4 className="text-xl text-stone-700 tracking-wide font-medium">
          Informações da empresa
        </h4>

        <div>
          <Input
            className="h-10 w-64 mr-2 mb-2"
            type="text"
            name="social-reason"
            placeholder="Razão Social"
          />
          <Input
            type="text"
            name="cnpj"
            placeholder="CNPJ"
            maxLength={14}
            className="h-10 w-[150px] mr-2 mb-2"
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Telefone"
            className="h-10 w-[140px] mb-2"
          />
          <Input
            type="text"
            name="address"
            placeholder="Endereço"
            className="h-10 w-[350px] mr-2"
          />

          <Input
            type="text"
            name="city"
            placeholder="Cidade"
            className="h-10 w-[150px] mr-2"
          />

          <CountryStates />
        </div>
      </div>

      <div className="container gap-4 flex flex-col">
        <h4 className="text-xl text-stone-700 tracking-wide font-medium">
          Informações do administrador
        </h4>

        <div>
          <Input
            type="text"
            name="username"
            placeholder="Nome de usuário"
            className="h-10 w-[240px] mr-2 mb-2"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className=" h-10 w-[330px] mr-2 mb-2"
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            className="h-10 w-[420px] mr-2 mb-2"
          />
          <Input
            type="text"
            name="cpf"
            placeholder="CPF"
            className="h-10 w-[150px] mr-2 mb-2"
          />
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-5 py-4">
        <Button type="submit">Entrar</Button>

        <span className="flex gap-3 justify-center items-center">
          <Checkbox />
          <p className="text-stone-500">Lembre-se</p>
        </span>
      </div>
    </form>
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
      className="scroll-p-0 w-14 h-10 rounded-md text-center bg-stone-100 shadow-inner text-stone-500 text-sm scroll-m-0 overflow-hidden scroll-smooth"
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
