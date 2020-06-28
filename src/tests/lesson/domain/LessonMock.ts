import { LessonCreateParams } from '@/lib/lesson/domain/interfaces/LessonParams'
import faker from 'faker'
import { LessonCreateUseCase } from '@/lib/lesson/application/LessonCreateUseCase'
import { LessonDeleteUseCase } from '@/lib/lesson/application/LessonDeleteUseCase'
import { LessonInMemoryRepository } from '@/lib/lesson/infrestructure/repositories/LessonInMemoryRepository'
import { LessonFindByIdUseCase } from '@/lib/lesson/application/LessonFindByIdUseCase'

const lessonInMemoryRepository = new LessonInMemoryRepository()
export class LessonMock {
    LessonFindByIdUseCase(): LessonFindByIdUseCase {
        return new LessonFindByIdUseCase(lessonInMemoryRepository)
    }

    LessonCreateUseCase(): LessonCreateUseCase {
        return new LessonCreateUseCase(lessonInMemoryRepository)
    }

    LessonDeleteUseCase(): LessonDeleteUseCase {
        return new LessonDeleteUseCase(lessonInMemoryRepository)
    }

    random(): LessonCreateParams {
        return {
            title: faker.name.title(),
            description: faker.lorem.paragraph(),
            order: Math.floor(Math.random() * 10000)
        }
    }
}
