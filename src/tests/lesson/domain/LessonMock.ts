import { LessonCreateParams } from '@/lib/lesson/domain/interfaces/LessonCreateParams'
import faker from 'faker'

export class LessonMock {
    random(): LessonCreateParams {
        return {
            title: faker.name.title(),
            description: faker.lorem.paragraph(),
            order: Math.floor(Math.random() * 10000)
        }
    }
}
