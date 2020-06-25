import {
    ContentNameType,
    ContentTypeObject,
    Question
} from '../interfaces/ContentCreateParams'
import { ContentQuestion } from './ContentQuestion'

export class ContentType {
    private readonly _name: ContentNameType
    private readonly _text: string | null
    private readonly _questions: ContentQuestion[] | null

    constructor(contentType: ContentTypeObject) {
        this._name = contentType.name
        this._text = contentType.text ?? null

        this._questions =
            contentType.questions !== undefined
                ? contentType.questions.map(
                      (question: Question): ContentQuestion =>
                          new ContentQuestion({
                              text: question.text,
                              type: question.type,
                              answers: question.answers
                          })
                  )
                : null
    }

    public get name(): ContentNameType {
        return this._name
    }

    public get text(): string | null {
        return this._text
    }

    public get questions(): ContentQuestion[] | null {
        return this._questions
    }
}
