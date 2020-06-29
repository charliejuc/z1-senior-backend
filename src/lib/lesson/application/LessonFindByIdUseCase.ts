import { Lesson } from '../domain/Lesson'
import { LessonId } from '../domain/value-object/LessonId'
import { LessonRepositorySetter } from '../infraestructure/abstract/LessonRepositorySetter'

export class LessonFindByIdUseCase extends LessonRepositorySetter {
    async handle(id: LessonId): Promise<Lesson> {
        return await this.lessonRepository.findById(id)
    }
}
