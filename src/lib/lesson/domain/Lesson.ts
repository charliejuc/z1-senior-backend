import { Order } from '@/lib/shared/domain/value-object/Order'
import { LessonParams } from './interfaces/LessonParams'
import { LessonDescription } from './value-object/LessonDescription'
import { LessonId } from './value-object/LessonId'
import { LessonTitle } from './value-object/LessonTitle'

export class Lesson {
    private readonly _id: LessonId
    private readonly _title: LessonTitle
    private readonly _description: LessonDescription
    private readonly _order: Order

    constructor(lessonParams: LessonParams) {
        this._id = new LessonId(lessonParams.id)
        this._title = new LessonTitle(lessonParams.title)
        this._description = new LessonDescription(
            lessonParams.description
        )
        this._order = new Order(lessonParams.order)
    }

    public get id(): LessonId {
        return this._id
    }

    public get title(): LessonTitle {
        return this._title
    }

    public get description(): LessonDescription {
        return this._description
    }

    public get order(): Order {
        return this._order
    }
}
