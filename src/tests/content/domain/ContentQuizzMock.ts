import {
    Answer,
    Question
} from '../../../lib/content/domain/interfaces/ContentParams'
import defaults from 'defaults'
import {
    ContentCreateParams,
    ContentQuestionType
} from '@/lib/content/domain/interfaces/ContentParams'
import faker from 'faker'

type methodsAllowed =
    | 'randomQuizzSimple'
    | 'randomQuizzMultiple'
    | 'randomQuizzOpen'

export interface ContentConfig {
    questionType: ContentQuestionType
}

export interface RandomQuestionOptions {
    answers?: boolean
}

export class ContentQuizzMock {
    private readonly orderMax = 10000
    private readonly answersMin = 2
    private readonly answersMax = 15
    private readonly answersLengthRange =
        this.answersMax - this.answersMin

    random(contentConfig?: ContentConfig): ContentCreateParams {
        if (contentConfig === undefined) {
            throw new Error(
                'Quizz requires "contenConfig.questionType"'
            )
        }

        const questionType = contentConfig.questionType
        const questionTypeFirstUppercased =
            questionType[0].toUpperCase() + questionType.slice(1)
        const methodName = `randomQuizz${questionTypeFirstUppercased}` as methodsAllowed

        return this[methodName]()
    }

    private randomQuizzSimple(): ContentCreateParams {
        return this.randomQuizzBase('simple')
    }

    private randomQuizzMultiple(): ContentCreateParams {
        return this.randomQuizzBase('multiple')
    }

    private randomQuizzOpen(): ContentCreateParams {
        return this.randomQuizzBase('open', {
            answers: false
        })
    }

    private randomQuizzBase(
        type: ContentQuestionType,
        randomQuestionOptions?: RandomQuestionOptions
    ): ContentCreateParams {
        return {
            order: Math.floor(Math.random() * this.orderMax),
            type: {
                name: 'quizz',
                questions: [
                    this.randomQuestion(type, randomQuestionOptions)
                ]
            }
        }
    }

    private randomQuestion(
        type: ContentQuestionType,
        options?: RandomQuestionOptions
    ): Question {
        options = defaults(options, {
            answers: true
        })
        const question: Question = {
            type,
            text: faker.name.title()
        }

        if (options?.answers === true) {
            question.answers = this.randomAnswers()
        }

        return question
    }

    private randomAnswers(): Answer[] {
        const randomInRange = Math.floor(
            Math.random() * this.answersLengthRange
        )
        const answersLength = randomInRange + this.answersMin

        return Array.from(Array(answersLength)).map(
            (): Answer => ({
                text: faker.name.title(),
                correct: Math.random() > 0.5
            })
        )
    }
}
