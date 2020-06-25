export interface Answer {
    text: string
    correct: boolean
}

export type ContentQuestionType = 'simple' | 'multiple' | 'open'
export interface Question {
    text: string
    type: ContentQuestionType

    // only for simple and multiple questions
    answers?: Answer[]
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

export interface ContentCreateParams {
    order: number
    type: ContentTypeObject
}
