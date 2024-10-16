import { LoginForm } from '../components/forms/login'

export function LoginPage() {
  return (
    <main className="h-screen bg-gradient-to-b from-teal-950 to-teal-700 flex items-center justify-center">
      <section className="bg-stone-50 h-[706px] max-w-[587px] rounded-md shadow-lg px-28 flex flex-col items-center py-16">
        <h1 className="text-stone-600 font-medium text-[2.5rem] tracking-normal mb-12 shrink-0">
          Entrar no Manage Wise
        </h1>

        <LoginForm />
      </section>
    </main>
  )
}
