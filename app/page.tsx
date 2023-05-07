'use client'
import { signIn } from 'next-auth/react'

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <span>
        Hola, bienvenido a la aplicación de finanzas de la familia Grajales
        Urquijo
      </span>

      <span>Si no haces parte de la familia no puedes estar aquí </span>

      <button onClick={() => signIn()}>Iniciar Sesión</button>
    </div>
  )
}
