import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { Input } from '../ui/input'

function LoginForm() {
  return (
    <form>
      <div className="flex flex-col items-left gap-3 mb-8">
        <Input
          className="h-[50px] w-[361px]"
          type="text"
          name="company-code"
          placeholder="Código da Empresa"
        />
        <Input
          type="email"
          name="user-email"
          placeholder="Email"
          maxLength={14}
          className="h-[50px] w-[361px]"
        />
        <Input
          type="password"
          name="user-password"
          placeholder="Senha"
          className="h-[50px] w-[361px]"
        />
      </div>

      <div className="flex flex-col items-start justify-between gap-5 py-4">
        <Button type="submit" className="w-[361px] h-[50px] text-xl">
          Fazer Login
        </Button>

        <span className="flex gap-3 justify-center items-center">
          <Checkbox />
          <p className="text-stone-500">Lembre-se</p>
        </span>
      </div>
    </form>
  )
}

export { LoginForm }
