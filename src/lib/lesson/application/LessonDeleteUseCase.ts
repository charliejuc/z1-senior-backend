import { LessonDeleteParams } from './../domain/interfaces/LessonParams'
import { LessonRepositorySetter } from '../infrestructure/abstract/LessonRepositorySetter'

export class LessonDeleteUseCase extends LessonRepositorySetter {
    async handle(
        levelDeleteParams: LessonDeleteParams
    ): Promise<boolean> {
        return await this.lessonRepository.delete(levelDeleteParams)
    }
}
