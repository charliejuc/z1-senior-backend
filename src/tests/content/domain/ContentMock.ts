// import faker from 'faker'
import { ContentCreateUseCase } from '@/lib/content/application/ContentCreateUseCase'
import { ContentDeleteUseCase } from '@/lib/content/application/ContentDeleteUseCase'
import {
    ContentCreateParams,
    ContentNameType
} from '@/lib/content/domain/interfaces/ContentParams'
import { ContentInMemoryRepository } from '@/lib/content/infraestructure/repositories/ContentInMemoryRepository'
import faker from 'faker'
import { ContentConfig, ContentQuizzMock } from './ContentQuizzMock'
import { ContentFindByIdUseCase } from '@/lib/content/application/ContentFindByIdUseCase'

type methodsAllowed = 'randomText' | 'randomQuizz'

const contentQuizzMock = new ContentQuizzMock()
const contentInMemoryRepository = new ContentInMemoryRepository()
export class ContentMock {
    ContentFindByIdUseCase(): ContentFindByIdUseCase {
        return new ContentFindByIdUseCase(contentInMemoryRepository)
    }

    ContentCreateUseCase(): ContentCreateUseCase {
        return new ContentCreateUseCase(contentInMemoryRepository)
    }

    ContentDeleteUseCase(): ContentDeleteUseCase {
        return new ContentDeleteUseCase(contentInMemoryRepository)
    }

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
