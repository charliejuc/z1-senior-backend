// import faker from 'faker'
import {
    ContentCreateParams,
    ContentNameType
} from '@/lib/content/domain/interfaces/ContentCreateParams'
import faker from 'faker'
import { ContentConfig, ContentQuizzMock } from './ContentQuizzMock'

type methodsAllowed = 'randomText' | 'randomQuizz'

const contentQuizzMock = new ContentQuizzMock()
export class ContentMock {
    random(
        name: ContentNameType,
        contentConfig?: ContentConfig
    ): ContentCreateParams {
        const nameFirstUppercased =
            name[0].toUpperCase() + name.slice(1)
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

    private randomQuizz(
        contentConfig?: ContentConfig
    ): ContentCreateParams {
        return contentQuizzMock.random(contentConfig)
    }
}
