import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import GoogleButton from '@/components/GoogleButton'

export default async function Login() {
  const session = await getServerSession()

  if (session) {
    redirect('/')
  }

  return (
    <section className="container flex items-center justify-center h-screen px-8 bg-gray-50">
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-xl font-bold">
          Bienvenido a las finanzas de la familia Grajales Urquijo 👋
        </h1>
        <div className="p-10 bg-white border rounded-lg shadow">
          <h1 className="mb-4 text-lg font-semibold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
            Ingresa a tu cuenta
          </h1>

          <GoogleButton />
        </div>
      </div>
    </section>
  )
}
