'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'

export default function GoogleButton() {
  return (
    <button
      onClick={() =>
        signIn('google', {
          redirect: false,
          callbackUrl: '/',
        })
      }
      className="bg-blue-500 px-2 py-1 rounded text-white hover:bg-blue-600 transition-colors"
    >
      <a href="/api/auth/signin" className="flex items-center gap-2">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="Google Logo"
          width={32}
          height={32}
          className="w-8 h-8 p-1 mr-4 bg-white rounded-full"
        />
        <span>Ingresar con Google</span>
      </a>
    </button>
  )
}
