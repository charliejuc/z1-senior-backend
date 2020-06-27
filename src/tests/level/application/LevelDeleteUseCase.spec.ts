import { LevelDeleteUseCase } from '@/lib/level/application/LevelDeleteUseCase'
import { LevelMock } from '../domain/LevelMock'
import { Level } from '@/lib/level/domain/Level'

const levelMock = new LevelMock()

describe('LevelDeleteUseCase', () => {
    const randomLevelParams = levelMock.random()
    const levelCreateUseCase = levelMock.LevelCreateUseCase()
    let level: Level

    beforeAll(async () => {
        level = await levelCreateUseCase.handle(randomLevelParams)
    })

    test('should be exists', () => {
        expect(LevelDeleteUseCase).toBeTruthy()
    })

    test('should return true', async () => {
        const levelDeleteUseCase = levelMock.LevelDeleteUseCase()

        const deleted = await levelDeleteUseCase.handle({
            id: level.id
        })

        expect(deleted).toBeTruthy()
    })

    test('should return false', async () => {
        const levelDeleteUseCase = levelMock.LevelDeleteUseCase()

        const deleted = await levelDeleteUseCase.handle({
            id: level.id
        })

        expect(deleted).toBeFalsy()
    })
})
