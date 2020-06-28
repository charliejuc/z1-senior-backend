import { LessonCreateUseCase } from '@/lib/lesson/application/LessonCreateUseCase'
import { LessonDeleteUseCase } from '@/lib/lesson/application/LessonDeleteUseCase'
import { LessonFindByIdUseCase } from '@/lib/lesson/application/LessonFindByIdUseCase'
import { LessonParams } from '@/lib/lesson/domain/interfaces/LessonParams'
import { LessonInMemoryRepository } from '@/lib/lesson/infrestructure/repositories/LessonInMemoryRepository'
import faker from 'faker'

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

    random(): LessonParams {
        return {
            title: faker.name.title(),
            description: faker.lorem.paragraph(),
            order: Math.floor(Math.random() * 10000)
        }
    }
}
