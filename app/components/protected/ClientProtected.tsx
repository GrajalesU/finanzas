'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

interface ClientProtectedProps {
  children: React.ReactNode
}

const ClientProtected = ({ children }: ClientProtectedProps) => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/singin')
    },
  })
  const loading = status === 'loading'

  if (loading) return <div>Cargando...</div>

  return <>{children}</>
}

export default ClientProtected
