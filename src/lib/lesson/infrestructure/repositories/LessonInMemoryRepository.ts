import {
    LessonDeleteParams,
    LessonParams
} from '../../domain/interfaces/LessonParams'
import { Lesson } from '../../domain/Lesson'
import { LessonRepository } from '../interfaces/LessonRepository'

const LessonData: Map<string, LessonParams> = new Map()

export class LessonInMemoryRepository implements LessonRepository {
    async create(lesson: Lesson): Promise<Lesson> {
        LessonData.set(lesson.id.id, {
            id: lesson.id.id,
            title: lesson.title.title,
            description: lesson.description.description,
            order: lesson.order.order
        })

        return lesson
    }

    async delete(deleteParams: LessonDeleteParams): Promise<boolean> {
        return LessonData.delete(deleteParams.id.id)
    }
}
