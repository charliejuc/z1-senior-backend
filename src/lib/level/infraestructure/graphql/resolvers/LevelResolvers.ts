import { LevelCreateUseCase } from '@/lib/level/application/LevelCreateUseCase'
import { LevelCreateParams } from '@/lib/level/domain/interfaces/LevelParams'
import {
    Arg,
    Field,
    Mutation,
    ObjectType,
    Query,
    Resolver,
    InputType
} from 'type-graphql'
import { LevelInMemoryRepository } from './../../repositories/LevelInMemoryRepository'

@ObjectType()
export class LevelTypeGraphQL implements LevelCreateParams {
    @Field()
    id?: string

    @Field()
    title!: string

    @Field()
    description!: string
}

@InputType()
export class LevelInputTypeGraphQL implements LevelCreateParams {
    @Field()
    title!: string

    @Field()
    description!: string
}

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
