import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { ApolloServer } from '@apollo/server'
import { NextRequest } from 'next/server'
import { resolvers } from './resolvers'
import { typeDefs } from './types'
import { PrismaClient } from '@prisma/client'
import { Context } from '@/types'
import { NextApiRequest } from 'next'

const prisma = new PrismaClient()

const server = new ApolloServer({
  resolvers,
  typeDefs,
})

const handler = startServerAndCreateNextHandler<NextApiRequest, Context>(
  server,
  {
    context: async (request, response) => {
      return {
        request,
        response,
        db: prisma,
      }
    },
  }
)

export async function GET(request: NextRequest) {
  return handler(request)
}

export async function POST(request: NextRequest) {
  return handler(request)
}
