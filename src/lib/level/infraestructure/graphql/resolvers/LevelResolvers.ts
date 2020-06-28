import { LevelCreateUseCase } from '@/lib/level/application/LevelCreateUseCase'
import { LevelFindByIdUseCase } from '@/lib/level/application/LevelFindByIdUseCase'
import { LevelId } from '@/lib/level/domain/value-object/LevelId'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import {
    LevelInputTypeGraphQL,
    LevelTypeGraphQL,
    LevelDeleteTypeGraphQL
} from '../types/LevelTypes'
import { LevelInMemoryRepository } from './../../repositories/LevelInMemoryRepository'
import { LevelDeleteUseCase } from '@/lib/level/application/LevelDeleteUseCase'

const levelRepository = new LevelInMemoryRepository()
const levelCreateUseCase = new LevelCreateUseCase(levelRepository)
const levelFindByIdUseCase = new LevelFindByIdUseCase(levelRepository)
const levelDeleteUseCase = new LevelDeleteUseCase(levelRepository)

@Resolver(LevelTypeGraphQL)
export class LevelResolvers {
    @Query(() => LevelTypeGraphQL)
    async findLevel(
        @Arg('id') id: string
    ): Promise<LevelTypeGraphQL> {
        const level = await levelFindByIdUseCase.handle(
            new LevelId(id)
        )

        return {
            id: level.id.id,
            title: level.title.title,
            description: level.description.description
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

    @Mutation(() => LevelDeleteTypeGraphQL)
    async deleteLevel(
        @Arg('id') id: string
    ): Promise<LevelDeleteTypeGraphQL> {
        const deletedCount = await levelDeleteUseCase.handle({
            id: new LevelId(id)
        })

        return {
            deletedCount
        }
    }
}
