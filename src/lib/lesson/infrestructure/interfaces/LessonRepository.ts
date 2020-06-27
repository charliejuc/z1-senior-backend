import { Repository } from './../../../shared/domain/interfaces/Repository'
import { Lesson } from '../../domain/Lesson'
import { LessonDeleteParams } from '../../domain/interfaces/LessonParams'

export interface LessonRepository extends Repository {
    create(lesson: Lesson): Promise<Lesson>

    delete(deleteParams: LessonDeleteParams): Promise<boolean>
}
