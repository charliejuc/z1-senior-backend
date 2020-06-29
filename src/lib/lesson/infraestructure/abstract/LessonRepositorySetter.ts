import { LessonRepository } from '../interfaces/LessonRepository'

export abstract class LessonRepositorySetter {
    protected lessonRepository: LessonRepository

    constructor(lessonRepository: LessonRepository) {
        this.lessonRepository = lessonRepository
    }
}
