import { Lesson } from '@/lib/lesson/domain/Lesson'
import { LessonCreateParams } from '../domain/interfaces/LessonCreateParams'

export class LessonCreateUseCase {
    handle(lessonCreateParams: LessonCreateParams): Lesson {
        return new Lesson(lessonCreateParams)
    }
}
