import { LessonDeleteUseCase } from '@/lib/lesson/application/LessonDeleteUseCase'
import { LessonMock } from '../domain/LessonMock'
import { Lesson } from '@/lib/lesson/domain/Lesson'

const lessonMock = new LessonMock()

describe('LessonDeleteUseCase', () => {
    const randomLessonParams = lessonMock.random()
    const lessonCreateUseCase = lessonMock.LessonCreateUseCase()
    let lesson: Lesson

    beforeAll(async () => {
        lesson = await lessonCreateUseCase.handle(randomLessonParams)
    })

    test('should be exists', () => {
        expect(LessonDeleteUseCase).toBeTruthy()
    })

    test('should return true', async () => {
        const lessonDeleteUseCase = lessonMock.LessonDeleteUseCase()

        const deleted = await lessonDeleteUseCase.handle({
            id: lesson.id
        })

        expect(deleted).toBeTruthy()
    })

    test('should return false', async () => {
        const lessonDeleteUseCase = lessonMock.LessonDeleteUseCase()

        const deleted = await lessonDeleteUseCase.handle({
            id: lesson.id
        })

        expect(deleted).toBeFalsy()
    })
})
