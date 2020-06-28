import { LessonDeleteParams } from './../domain/interfaces/LessonParams'
import { LessonRepositorySetter } from '../infrestructure/abstract/LessonRepositorySetter'

export class LessonDeleteUseCase extends LessonRepositorySetter {
    async handle(
        lessonDeleteParams: LessonDeleteParams
    ): Promise<number> {
        const deleted = await this.lessonRepository.delete(
            lessonDeleteParams
        )

        return deleted ? 1 : 0
    }
}
