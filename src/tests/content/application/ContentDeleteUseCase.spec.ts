import { ContentDeleteUseCase } from '@/lib/content/application/ContentDeleteUseCase'
import { ContentMock } from '../domain/ContentMock'
import { Content } from '@/lib/content/domain/Content'

const contentMock = new ContentMock()

describe('ContentDeleteUseCase', () => {
    describe('"text"', () => {
        const randomContentParams = contentMock.random('text')
        const contentCreateUseCase = contentMock.ContentCreateUseCase()
        let content: Content

        beforeAll(async () => {
            content = await contentCreateUseCase.handle(
                randomContentParams
            )
        })

        test('should be exists', () => {
            expect(ContentDeleteUseCase).toBeTruthy()
        })

        test('should return true', async () => {
            const contentDeleteUseCase = contentMock.ContentDeleteUseCase()

            const deleted = await contentDeleteUseCase.handle({
                id: content.id
            })

            expect(deleted).toBeTruthy()
        })

        test('should return false', async () => {
            const contentDeleteUseCase = contentMock.ContentDeleteUseCase()

            const deleted = await contentDeleteUseCase.handle({
                id: content.id
            })

            expect(deleted).toBeFalsy()
        })
    })

    describe('"quizz" "simple"', () => {
        const randomContentParams = contentMock.random('quizz', {
            questionType: 'simple'
        })
        const contentCreateUseCase = contentMock.ContentCreateUseCase()
        let content: Content

        beforeAll(async () => {
            content = await contentCreateUseCase.handle(
                randomContentParams
            )
        })

        test('should be exists', () => {
            expect(ContentDeleteUseCase).toBeTruthy()
        })

        test('should return true', async () => {
            const contentDeleteUseCase = contentMock.ContentDeleteUseCase()

            const deleted = await contentDeleteUseCase.handle({
                id: content.id
            })

            expect(deleted).toBeTruthy()
        })

        test('should return false', async () => {
            const contentDeleteUseCase = contentMock.ContentDeleteUseCase()

            const deleted = await contentDeleteUseCase.handle({
                id: content.id
            })

            expect(deleted).toBeFalsy()
        })
    })

    describe('"quizz" "multiple"', () => {
        const randomContentParams = contentMock.random('quizz', {
            questionType: 'multiple'
        })
        const contentCreateUseCase = contentMock.ContentCreateUseCase()
        let content: Content

        beforeAll(async () => {
            content = await contentCreateUseCase.handle(
                randomContentParams
            )
        })

        test('should be exists', () => {
            expect(ContentDeleteUseCase).toBeTruthy()
        })

        test('should return true', async () => {
            const contentDeleteUseCase = contentMock.ContentDeleteUseCase()

            const deleted = await contentDeleteUseCase.handle({
                id: content.id
            })

            expect(deleted).toBeTruthy()
        })

        test('should return false', async () => {
            const contentDeleteUseCase = contentMock.ContentDeleteUseCase()

            const deleted = await contentDeleteUseCase.handle({
                id: content.id
            })

            expect(deleted).toBeFalsy()
        })
    })

    describe('"quizz" "open"', () => {
        const randomContentParams = contentMock.random('quizz', {
            questionType: 'open'
        })
        const contentCreateUseCase = contentMock.ContentCreateUseCase()
        let content: Content

        beforeAll(async () => {
            content = await contentCreateUseCase.handle(
                randomContentParams
            )
        })

        test('should be exists', () => {
            expect(ContentDeleteUseCase).toBeTruthy()
        })

        test('should return true', async () => {
            const contentDeleteUseCase = contentMock.ContentDeleteUseCase()

            const deleted = await contentDeleteUseCase.handle({
                id: content.id
            })

            expect(deleted).toBeTruthy()
        })

        test('should return false', async () => {
            const contentDeleteUseCase = contentMock.ContentDeleteUseCase()

            const deleted = await contentDeleteUseCase.handle({
                id: content.id
            })

            expect(deleted).toBeFalsy()
        })
    })
})
