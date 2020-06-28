import { ContentId } from '@/lib/content/domain/value-object/ContentId'

export interface ContentCreateParams {
    order: number
    type: ContentTypeObject
}

export interface ContentParams extends ContentCreateParams {
    id?: string
}

export interface ContentDeleteParams {
    id: ContentId
}

export type ContentNameType = 'text' | 'quizz'
export interface ContentTypeObject {
    name: ContentNameType

    // text type keys
    text?: string
    // \text type keys

    // quizz type keys
    questions?: Question[]
    // \quizz type keys
}

export type ContentQuestionType = 'simple' | 'multiple' | 'open'
export interface Question {
    text: string
    type: ContentQuestionType

    // only for simple and multiple questions
    answers?: Answer[]
}

export interface Answer {
    text: string
    correct: boolean
}
