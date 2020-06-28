import { LevelCreateUseCase } from '@/lib/level/application/LevelCreateUseCase'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import {
    LevelInputTypeGraphQL,
    LevelTypeGraphQL
} from '../types/LevelTypes'
import { LevelInMemoryRepository } from './../../repositories/LevelInMemoryRepository'

const levelRepository = new LevelInMemoryRepository()
const levelCreateUseCase = new LevelCreateUseCase(levelRepository)

@Resolver(LevelTypeGraphQL)
export class LevelResolvers {
    @Query(() => LevelTypeGraphQL)
    async getLevel(@Arg('id') id: string): Promise<LevelTypeGraphQL> {
        return {
            id: 'sdfdsafa',
            title: 'sdfdsafa',
            description: 'sdfdsafa'
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
