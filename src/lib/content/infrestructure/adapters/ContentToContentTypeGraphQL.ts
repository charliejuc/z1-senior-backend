import { Content } from '../../domain/Content'
import {
    ContentTypeGraphQL,
    QuestionTypeGraphQL
} from '../graphql/types/ContentTypes'
import { ContentQuestion } from './../../domain/value-object/ContentQuestion'

export class ContentToContentTypeGraphQL {
    parse(content: Content): ContentTypeGraphQL {
        return {
            id: content.id.id,
            order: content.order.order,
            type: {
                name: content.type.name,
                text: content.type.text ?? undefined,
                questions:
                    this.parseQuestions(content.type.questions) ??
                    undefined
            }
        }
    }

    private parseQuestions(
        contentQuestions: ContentQuestion[] | null
    ): QuestionTypeGraphQL[] | null {
        if (contentQuestions === null) {
            return contentQuestions
        }

        return contentQuestions.map(
            (question: ContentQuestion): QuestionTypeGraphQL => ({
                text: question.text,
                type: question.type,
                answers: question.answers ?? undefined
            })
        )
    }
}
