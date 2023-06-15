import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

export interface Context {
  db: PrismaClient
  request: NextApiRequest
  response: NextApiResponse
}

interface ResolverFunction {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: (parent: any, args: any, context: Context) => Promise<any>
}

export interface Resolver {
  Query: ResolverFunction
  Mutation: ResolverFunction
  [key: string]: ResolverFunction
}
