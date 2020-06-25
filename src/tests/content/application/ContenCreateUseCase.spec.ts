import { ContentQuestionType } from './../../../lib/content/domain/interfaces/ContentCreateParams'
import { ContentCreateUseCase } from '@/lib/content/application/ContentCreateUseCase'
import { ContentId } from '@/lib/content/domain/value-object/ContentId'
import { ContentType } from '@/lib/content/domain/value-object/ContentType'
import { Order } from '@/lib/shared/domain/value-object/Order'
import { ContentMock } from '../domain/ContentMock'

const contentMock = new ContentMock()

test('ContentCreateUseCase should be exists', () => {
    expect(ContentCreateUseCase).toBeTruthy()
})

describe('ContentCreateUseCase should return a valid Content instance(type: "text")', () => {
    const randomContentParams = contentMock.random('text')
    const contentCreateUseCase = new ContentCreateUseCase()

    const content = contentCreateUseCase.handle(randomContentParams)

    test('should have id', () => {
        expect(content.id).toBeInstanceOf(ContentId)
    })

    test('should have order', () => {
        expect(content.order).toBeInstanceOf(Order)
        expect(content.order.order).toBe(randomContentParams.order)
    })

    describe('should have type', () => {
        test('type', () => {
            expect(content.type).toBeInstanceOf(ContentType)
        })

        test('type.questions', () => {
            expect(content.type.questions).toBeFalsy()
        })

        test('type.text', () => {
            expect(content.type.text).toBeTruthy()
            expect(content.type.text).toBe(
                randomContentParams.type.text
            )
        })
    })
})

describe('ContentCreateUseCase should return a valid Content instance(type: "quizz")', () => {
    describe('Question type "simple"', () => {
        const questionType: ContentQuestionType = 'simple'
        const randomContentParams = contentMock.random('quizz', {
            questionType
        })
        const contentCreateUseCase = new ContentCreateUseCase()

        const content = contentCreateUseCase.handle(
            randomContentParams
        )

        test('should have id', () => {
            expect(content.id).toBeInstanceOf(ContentId)
        })

        test('should have order', () => {
            expect(content.order).toBeInstanceOf(Order)
            expect(content.order.order).toBe(
                randomContentParams.order
            )
        })

        describe('should have type', () => {
            test('type', () => {
                expect(content.type).toBeInstanceOf(ContentType)
            })

            test('type.questions', () => {
                expect(content.type.questions).toBeTruthy()

                const questions = content.type.questions ?? []

                expect(questions[0].text).toBeTruthy()
                expect(questions[0].type).toBe(questionType)
            })

            test('type.questions.answers', () => {
                const questions = content.type.questions ?? []
                expect(questions).toBeTruthy()

                const answers = questions[0].answers ?? []
                expect(answers.length).toBeGreaterThan(0)
            })

            test('type.text', () => {
                expect(content.type.text).toBeNull()
            })
        })
    })
})
