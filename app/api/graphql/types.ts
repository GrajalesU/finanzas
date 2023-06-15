import { gql } from 'graphql-tag'

export const typeDefs = gql`
  type TipoGasto {
    id_tipo_gasto: Int!
    nombre: String!
  }

  type Query {
    tipoGasto: [TipoGasto!]!
  }

  type Mutation {
    createTipoGasto(nombre: String!): TipoGasto!
  }
`
