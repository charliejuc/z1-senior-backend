import { Lesson } from '@/lib/lesson/domain/Lesson'
import { LessonCreateParams } from '../domain/interfaces/LessonParams'
import { LessonRepositorySetter } from '../infrestructure/abstract/LessonRepositorySetter'

export class LessonCreateUseCase extends LessonRepositorySetter {
    async handle(
        lessonCreateParams: LessonCreateParams
    ): Promise<Lesson> {
        const lesson = new Lesson(lessonCreateParams)

        return await this.lessonRepository.create(lesson)
    }
}
