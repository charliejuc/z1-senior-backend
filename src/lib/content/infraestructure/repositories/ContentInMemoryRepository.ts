import { ContentId } from '../../domain/value-object/ContentId'
import { ContentQuestion } from '../../domain/value-object/ContentQuestion'
import { Content } from '../../domain/Content'
import {
    ContentDeleteParams,
    ContentParams,
    Question
} from '../../domain/interfaces/ContentParams'
import { ContentRepository } from '../interfaces/ContentRepository'

const ContentData: Map<string, ContentParams> = new Map()

export class ContentInMemoryRepository implements ContentRepository {
    async findById(id: ContentId): Promise<Content> {
        const contentParams = ContentData.get(id.id)

        if (contentParams === undefined) {
            throw new Error(`Content with "${id.id}" id not found`)
        }

        return new Content(contentParams)
    }

    async create(content: Content): Promise<Content> {
        ContentData.set(content.id.id, {
            id: content.id.id,
            order: content.order.order,
            type: {
                name: content.type.name,
                text: content.type.text ?? undefined,
                questions: content.type.questions?.map(
                    (question: ContentQuestion): Question => ({
                        text: question.text,
                        type: question.type,
                        answers: question.answers ?? undefined
                    })
                )
            }
        })

        return content
    }

    async delete(
        deleteParams: ContentDeleteParams
    ): Promise<boolean> {
        return ContentData.delete(deleteParams.id.id)
    }
}
