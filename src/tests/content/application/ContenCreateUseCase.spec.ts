import { ContentQuestionType } from '../../../lib/content/domain/interfaces/ContentParams'
import { ContentCreateUseCase } from '@/lib/content/application/ContentCreateUseCase'
import { ContentId } from '@/lib/content/domain/value-object/ContentId'
import { ContentType } from '@/lib/content/domain/value-object/ContentType'
import { Order } from '@/lib/shared/domain/value-object/Order'
import { ContentMock } from '../domain/ContentMock'
import { Content } from '@/lib/content/domain/Content'

const contentMock = new ContentMock()

test('ContentCreateUseCase should be exists', () => {
    expect(ContentCreateUseCase).toBeTruthy()
})

describe('ContentCreateUseCase should return a valid Content instance(type: "text")', () => {
    const randomContentParams = contentMock.random('text')
    const contentCreateUseCase = contentMock.ContentCreateUseCase()
    let content: Content

    beforeAll(async () => {
        content = await contentCreateUseCase.handle(
            randomContentParams
        )
    })

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
        const contentCreateUseCase = contentMock.ContentCreateUseCase()
        let content: Content

        beforeAll(async () => {
            content = await contentCreateUseCase.handle(
                randomContentParams
            )
        })

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
                expect(questions[0].type).toBe('simple')
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

    describe('Question type "multiple"', () => {
        const questionType: ContentQuestionType = 'multiple'
        const randomContentParams = contentMock.random('quizz', {
            questionType
        })
        const contentCreateUseCase = contentMock.ContentCreateUseCase()

        describe('should have type', () => {
            let content: Content

            beforeAll(async () => {
                content = await contentCreateUseCase.handle(
                    randomContentParams
                )
            })

            test('type', () => {
                expect(content.type).toBeInstanceOf(ContentType)
            })

            test('type.questions', () => {
                const questions = content.type.questions ?? []

                expect(questions[0].text).toBeTruthy()
                expect(questions[0].type).toBe('multiple')
            })

            test('type.questions.answers', () => {
                const questions = content.type.questions ?? []
                expect(questions).toBeTruthy()

                const answers = questions[0].answers
                expect(answers).toBeTruthy()
            })

            test('type.text', () => {
                expect(content.type.text).toBeNull()
            })
        })
    })
    describe('Question type "open"', () => {
        const questionType: ContentQuestionType = 'open'
        const randomContentParams = contentMock.random('quizz', {
            questionType
        })
        const contentCreateUseCase = contentMock.ContentCreateUseCase()
        let content: Content

        beforeAll(async () => {
            content = await contentCreateUseCase.handle(
                randomContentParams
            )
        })

        describe('should have type', () => {
            test('type', () => {
                expect(content.type).toBeInstanceOf(ContentType)
            })

            test('type.questions', () => {
                const questions = content.type.questions ?? []

                expect(questions[0].text).toBeTruthy()
                expect(questions[0].type).toBe('open')
            })

            test('type.questions.answers', () => {
                const questions = content.type.questions ?? []
                expect(questions).toBeTruthy()

                const answers = questions[0].answers
                expect(answers).toBeFalsy()
            })

            test('type.text', () => {
                expect(content.type.text).toBeNull()
            })
        })
    })
})
