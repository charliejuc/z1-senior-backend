import { LessonFindByIdUseCase } from '@/lib/lesson/application/LessonFindByIdUseCase'
import { LessonMock } from '../domain/LessonMock'
import { Lesson } from '@/lib/lesson/domain/Lesson'
import { LessonId } from '@/lib/lesson/domain/value-object/LessonId'

const lessonMock = new LessonMock()

describe('LessonFindByIdUseCase', () => {
    const randomLessonParams = lessonMock.random()
    const lessonCreateUseCase = lessonMock.LessonCreateUseCase()
    let lesson: Lesson

    beforeAll(async () => {
        lesson = await lessonCreateUseCase.handle(randomLessonParams)
    })

    test('should be exists', () => {
        expect(LessonFindByIdUseCase).toBeTruthy()
    })

    test('should return lesson', async () => {
        const lessonFindByIdUseCase = lessonMock.LessonFindByIdUseCase()

        const lessonFound = await lessonFindByIdUseCase.handle(
            lesson.id
        )

        expect(lessonFound).toBeInstanceOf(Lesson)
    })

    test('should not return lesson', async () => {
        const lessonFindByIdUseCase = lessonMock.LessonFindByIdUseCase()

        let error
        try {
            await lessonFindByIdUseCase.handle(new LessonId())
        } catch (err) {
            error = err
        }

        expect(error.message).toMatch(/not found/i)
    })
})
