import { LessonCreateParams } from '@/lib/lesson/domain/interfaces/LessonParams'
import { Field, InputType, ObjectType } from 'type-graphql'

@ObjectType()
export class LessonTypeGraphQL implements LessonCreateParams {
    @Field()
    id?: string

    @Field()
    title!: string

    @Field()
    description!: string

    @Field()
    order!: number
}

@ObjectType()
export class LessonDeleteTypeGraphQL {
    @Field()
    deletedCount!: number
}

@InputType()
export class LessonInputTypeGraphQL implements LessonCreateParams {
    @Field()
    title!: string

    @Field()
    description!: string

    @Field()
    order!: number
}
