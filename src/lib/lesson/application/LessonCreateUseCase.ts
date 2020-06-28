import { Lesson } from '@/lib/lesson/domain/Lesson'
import { LessonParams } from '../domain/interfaces/LessonParams'
import { LessonRepositorySetter } from '../infrestructure/abstract/LessonRepositorySetter'

export class LessonCreateUseCase extends LessonRepositorySetter {
    async handle(lessonParams: LessonParams): Promise<Lesson> {
        const lesson = new Lesson(lessonParams)

        return await this.lessonRepository.create(lesson)
    }
}
