import { Context } from '@/types'

interface TArgsCreateTipoGasto {
  nombre: string
}

export const createTipoGasto = async (
  parent: unknown,
  args: TArgsCreateTipoGasto,
  context: Context
) => {
  const { nombre } = args as TArgsCreateTipoGasto
  return await context.db.tipoGasto.create({
    data: {
      nombre,
    },
  })
}
