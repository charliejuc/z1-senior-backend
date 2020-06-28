import express from 'express'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-express'
import { LevelPingResolver } from './lib/level/infraestructure/graphql/resolvers/LevelPingResolver'

export async function startServer(): Promise<express.Application> {
    const app = express()
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [LevelPingResolver]
        })
    })
    server.applyMiddleware({
        app,
        path: '/graphql'
    })

    return app
}
