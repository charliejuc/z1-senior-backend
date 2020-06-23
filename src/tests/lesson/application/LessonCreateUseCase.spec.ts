import { LessonCreateUseCase } from '@/lib/lesson/application/LessonCreateUseCase'
import { LessonId } from '@/lib/lesson/domain/value-object/LessonId'
import { LessonTitle } from '@/lib/lesson/domain/value-object/LessonTitle'
import { LessonDescription } from '@/lib/lesson/domain/value-object/LessonDescription'
import { LessonMock } from '../domain/LessonMock'
import { Order } from '@/lib/shared/domain/value-object/Order'

const lessonMock = new LessonMock()

test('LessonCreateUseCase should be exists', () => {
    expect(LessonCreateUseCase).toBeTruthy()
})

describe('LessonCreateUseCase should return a valid Lesson instance', () => {
    const randomLessonParams = lessonMock.random()
    const lessonCreateUseCase = new LessonCreateUseCase()

    const lesson = lessonCreateUseCase.handle(randomLessonParams)

    test('should have id', () => {
        expect(lesson.id).toBeInstanceOf(LessonId)
        expect(typeof lesson.id.id).toBe('string')
    })

    test('should have title', () => {
        expect(lesson.title).toBeInstanceOf(LessonTitle)
        expect(lesson.title.title).toBe(randomLessonParams.title)
    })

    test('should have description', () => {
        expect(lesson.description).toBeInstanceOf(LessonDescription)
        expect(lesson.description.description).toBe(
            randomLessonParams.description
        )
    })

    test('should have order', () => {
        expect(lesson.order).toBeInstanceOf(Order)
        expect(lesson.order.order).toBe(randomLessonParams.order)
    })
})
