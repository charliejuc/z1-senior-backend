import { LessonId } from './value-object/LessonId'
import { LessonCreateParams } from './interfaces/LessonParams'
import { LessonTitle } from './value-object/LessonTitle'
import { LessonDescription } from './value-object/LessonDescription'
import { Order } from '@/lib/shared/domain/value-object/Order'

export class Lesson {
    private readonly _id = new LessonId()
    private readonly _title: LessonTitle
    private readonly _description: LessonDescription
    private readonly _order: Order

    constructor(lessonCreateParams: LessonCreateParams) {
        this._title = new LessonTitle(lessonCreateParams.title)
        this._description = new LessonDescription(
            lessonCreateParams.description
        )
        this._order = new Order(lessonCreateParams.order)
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
