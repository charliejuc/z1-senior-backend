import { LessonId } from './../value-object/LessonId'

export interface LessonCreateParams {
    title: string
    description: string
    order: number
}

export interface LessonParams extends LessonCreateParams {
    id: string
}

export interface LessonDeleteParams {
    id: LessonId
}
