import {
    ContentCreateParams,
    ContentNameType,
    ContentQuestionType,
    ContentTypeObject,
    Question,
    Answer
} from '@/lib/content/domain/interfaces/ContentParams'
import { Field, InputType, ObjectType, Int } from 'type-graphql'

@ObjectType()
export class QuestionTypeGraphQL implements Question {
    @Field()
    text!: string

    @Field()
    type!: ContentQuestionType

    // only for simple and multiple questions
    @Field(() => [AnswerTypeGraphQL])
    answers?: AnswerTypeGraphQL[]
}

@ObjectType()
export class AnswerTypeGraphQL implements Answer {
    @Field()
    text!: string

    @Field(() => Boolean)
    correct!: boolean
}

@ObjectType()
export class ContentTypeObjectTypeGraphQL
    implements ContentTypeObject {
    @Field()
    name!: ContentNameType

    // text type keys
    @Field()
    text?: string
    // \text type keys

    // quizz type keys
    @Field(() => [QuestionTypeGraphQL])
    questions?: QuestionTypeGraphQL[]
    // \quizz type keys
}

@InputType()
export class AnswerInputTypeGraphQL implements Answer {
    @Field()
    text!: string

    @Field(() => Boolean)
    correct!: boolean
}

@InputType()
export class QuestionInputTypeGraphQL implements Question {
    @Field()
    text!: string

    @Field()
    type!: ContentQuestionType

    // only for simple and multiple questions
    @Field(() => [AnswerInputTypeGraphQL])
    answers?: AnswerInputTypeGraphQL[]
}

@InputType()
export class ContentTypeObjectInputTypeGraphQL
    implements ContentTypeObject {
    @Field()
    name!: ContentNameType

    // text type keys
    @Field()
    text?: string
    // \text type keys

    // quizz type keys
    @Field(() => [QuestionInputTypeGraphQL], { nullable: true })
    questions?: QuestionInputTypeGraphQL[]
    // \quizz type keys
}

@ObjectType()
export class ContentTypeGraphQL implements ContentCreateParams {
    @Field()
    id?: string

    @Field(() => Int)
    order!: number

    @Field(() => ContentTypeObjectTypeGraphQL)
    type!: ContentTypeObjectTypeGraphQL
}

@ObjectType()
export class ContentDeleteTypeGraphQL {
    @Field()
    deletedCount!: number
}

@InputType()
export class ContentInputTypeGraphQL implements ContentCreateParams {
    @Field(() => Int)
    order!: number

    @Field(() => ContentTypeObjectInputTypeGraphQL)
    type!: ContentTypeObjectInputTypeGraphQL
}
