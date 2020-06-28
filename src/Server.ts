import { ContentResolvers } from './lib/content/infrestructure/graphql/resolvers/ContentResolvers'
import express from 'express'
import { buildSchema } from 'type-graphql'
import { ApolloServer } from 'apollo-server-express'
import { LevelResolvers } from './lib/level/infraestructure/graphql/resolvers/LevelResolvers'
import { LessonResolvers } from './lib/lesson/infrestructure/graphql/resolvers/LessonResolvers'

export async function startServer(): Promise<express.Application> {
    const app = express()
    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [
                LevelResolvers,
                LessonResolvers,
                ContentResolvers
            ],
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
