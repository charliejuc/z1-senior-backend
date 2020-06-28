import { LevelFindByIdUseCase } from '@/lib/level/application/LevelFindByIdUseCase'
import { LevelMock } from '../domain/LevelMock'
import { Level } from '@/lib/level/domain/Level'
import { LevelId } from '@/lib/level/domain/value-object/LevelId'

const levelMock = new LevelMock()

describe('LevelFindByIdUseCase', () => {
    const randomLevelParams = levelMock.random()
    const levelCreateUseCase = levelMock.LevelCreateUseCase()
    let level: Level

    beforeAll(async () => {
        level = await levelCreateUseCase.handle(randomLevelParams)
    })

    test('should be exists', () => {
        expect(LevelFindByIdUseCase).toBeTruthy()
    })

    test('should return level', async () => {
        const levelFindByIdUseCase = levelMock.LevelFindByIdUseCase()

        const levelFound = await levelFindByIdUseCase.handle(level.id)

        expect(levelFound).toBeInstanceOf(Level)
    })

    test('should not return level', async () => {
        const levelFindByIdUseCase = levelMock.LevelFindByIdUseCase()

        let error
        try {
            await levelFindByIdUseCase.handle(new LevelId())
        } catch (err) {
            error = err
        }

        expect(error.message).toMatch(/not found/i)
    })
})
