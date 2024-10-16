import { RegisterForms } from '../components/forms/register'

export function RegisterPage() {
  return (
    <main className="h-screen bg-gradient-to-b from-teal-950 to-teal-700 flex items-center justify-center">
      <section className="bg-stone-50 h-[800px] max-w-[800px] rounded-md shadow-lg py-16 px-20">
        <h1 className="text-stone-600 text-[40px] font-medium tracking-normal">
          Cadastre sua empresa
        </h1>

        <RegisterForms />
      </section>
    </main>
  )
}
