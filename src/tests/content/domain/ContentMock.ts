// import faker from 'faker'
import {
    ContentCreateParams,
    ContentNameType,
    ContentQuestionType
} from '@/lib/content/domain/interfaces/ContentCreateParams'
import faker from 'faker'

type methodsAllowed =
    | 'randomText'
    | 'randomQuizz'
    | 'randomQuizzSimple'

interface ContentConfig {
    questionType: ContentQuestionType
}

export class ContentMock {
    random(
        name: ContentNameType,
        contentConfig?: ContentConfig
    ): ContentCreateParams {
        const nameFirstUppercased = `${name[0].toUpperCase()}${name.slice(
            1
        )}`
        const methodName: methodsAllowed = `random${nameFirstUppercased}` as methodsAllowed

        return name === 'quizz'
            ? this[methodName](contentConfig)
            : this[methodName]()
    }

    private randomText(): ContentCreateParams {
        return {
            order: Math.floor(Math.random() * 10000),
            type: {
                name: 'text',
                text: faker.name.title()
            }
        }
    }

    // Quizz mock collaborator
    private randomQuizz(
        contentConfig?: ContentConfig
    ): ContentCreateParams {
        if (contentConfig === undefined) {
            throw new Error(
                'Quizz requires "contenConfig.questionType"'
            )
        }

        const questionType = contentConfig.questionType
        const questionTypeFirstUppercased = `${questionType[0].toUpperCase()}${questionType.slice(
            1
        )}`
        const methodName = `randomQuizz${questionTypeFirstUppercased}` as methodsAllowed

        return this[methodName]()
    }

    private randomQuizzSimple(): ContentCreateParams {
        return {
            order: Math.floor(Math.random() * 10000),
            type: {
                name: 'quizz',
                questions: [
                    {
                        text: faker.name.title(),
                        type: 'simple',
                        answers: [
                            {
                                text: faker.name.title(),
                                correct: true
                            }
                        ]
                    }
                ]
            }
        }
    }
}
