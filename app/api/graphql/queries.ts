import { Context } from '@/types'

export const tipoGasto = async (
  parent: unknown,
  args: unknown,
  context: Context
) => {
  return await context.db.tipoGasto.findMany()
}
