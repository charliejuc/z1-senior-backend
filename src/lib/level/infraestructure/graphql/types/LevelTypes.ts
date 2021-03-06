import { LevelCreateParams } from '@/lib/level/domain/interfaces/LevelParams'
import { Field, InputType, ObjectType } from 'type-graphql'

@ObjectType()
export class LevelTypeGraphQL implements LevelCreateParams {
    @Field()
    id?: string

    @Field()
    title!: string

    @Field()
    description!: string
}

@ObjectType()
export class LevelDeleteTypeGraphQL {
    @Field()
    deletedCount!: number
}

@InputType()
export class LevelInputTypeGraphQL implements LevelCreateParams {
    @Field()
    title!: string

    @Field()
    description!: string
}
