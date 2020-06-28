import express from 'express'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-express'
import { LevelResolvers } from './lib/level/infraestructure/graphql/resolvers/LevelResolvers'

export async function startServer(): Promise<express.Application> {
    const app = express()
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [LevelResolvers],
            validate: false
        }),
        debug: process.env.NODE_ENV === 'development'
    })
    server.applyMiddleware({
        app,
        path: '/graphql'
    })

    return app
}
