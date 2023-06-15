import { Resolver } from '@/types'
import { tipoGasto } from './queries'
import { createTipoGasto } from './mutations'

export const resolvers: Resolver = {
  Query: {
    tipoGasto,
  },
  Mutation: {
    createTipoGasto,
  },
}
