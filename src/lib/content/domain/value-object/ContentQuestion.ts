import {
    Question,
    ContentQuestionType,
    Answer
} from '../interfaces/ContentParams'

export class ContentQuestion {
    private readonly _text: string
    private readonly _type: ContentQuestionType
    private readonly _answers: Answer[] | null

    constructor(question: Question) {
        this._text = question.text
        this._type = question.type
        this._answers = question.answers ?? null
    }

    public get text(): string {
        return this._text
    }

    public get type(): ContentQuestionType {
        return this._type
    }

    public get answers(): Answer[] | null {
        return this._answers
    }
}
