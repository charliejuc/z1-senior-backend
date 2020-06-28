import { ContentFindByIdUseCase } from '@/lib/content/application/ContentFindByIdUseCase'
import { ContentMock } from '../domain/ContentMock'
import { Content } from '@/lib/content/domain/Content'
import { ContentId } from '@/lib/content/domain/value-object/ContentId'

const contentMock = new ContentMock()

describe('ContentFindByIdUseCase', () => {
    const randomContentParams = contentMock.random('text')
    const contentCreateUseCase = contentMock.ContentCreateUseCase()
    let content: Content

    beforeAll(async () => {
        content = await contentCreateUseCase.handle(
            randomContentParams
        )
    })

    test('should be exists', () => {
        expect(ContentFindByIdUseCase).toBeTruthy()
    })

    test('should return content', async () => {
        const contentFindByIdUseCase = contentMock.ContentFindByIdUseCase()

        const contentFound = await contentFindByIdUseCase.handle(
            content.id
        )

        expect(contentFound).toBeInstanceOf(Content)
    })

    test('should not return content', async () => {
        const contentFindByIdUseCase = contentMock.ContentFindByIdUseCase()

        let error
        try {
            await contentFindByIdUseCase.handle(new ContentId())
        } catch (err) {
            error = err
        }

        expect(error.message).toMatch(/not found/i)
    })
})
