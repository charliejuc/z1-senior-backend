import { LessonDeleteParams } from './../domain/interfaces/LessonParams'
import { LessonRepositorySetter } from '../infraestructure/abstract/LessonRepositorySetter'

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
