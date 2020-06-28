import { LevelCreateUseCase } from '@/lib/level/application/LevelCreateUseCase'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import {
    LevelInputTypeGraphQL,
    LevelTypeGraphQL
} from '../types/LevelTypes'
import { LevelInMemoryRepository } from './../../repositories/LevelInMemoryRepository'
import { LevelId } from '@/lib/level/domain/value-object/LevelId'
import { LevelFindByIdUseCase } from '@/lib/level/application/LevelFindByIdUseCase'
import { UserInputError } from 'apollo-server-express'

const levelRepository = new LevelInMemoryRepository()
const levelCreateUseCase = new LevelCreateUseCase(levelRepository)
const levelFindByIdUseCase = new LevelFindByIdUseCase(levelRepository)

@Resolver(LevelTypeGraphQL)
export class LevelResolvers {
    @Query(() => LevelTypeGraphQL)
    async findLevel(
        @Arg('id') id: string
    ): Promise<LevelTypeGraphQL> {
        try {
            const level = await levelFindByIdUseCase.handle(
                new LevelId(id)
            )

            return {
                id: level.id.id,
                title: level.title.title,
                description: level.description.description
            }
        } catch (error) {
            throw new UserInputError(error.message)
        }
    }

    @Mutation(() => LevelTypeGraphQL)
    async createLevel(
        @Arg('levelParams', () => LevelInputTypeGraphQL)
        levelParams: LevelInputTypeGraphQL
    ): Promise<LevelTypeGraphQL> {
        const level = await levelCreateUseCase.handle(levelParams)

        return {
            id: level.id.id,
            title: level.title.title,
            description: level.description.description
        }
    }
}
