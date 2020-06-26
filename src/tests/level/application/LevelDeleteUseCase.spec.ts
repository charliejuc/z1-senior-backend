import { LevelDeleteUseCase } from '@/lib/level/application/LevelDeleteUseCase'
import { LevelMock } from '../domain/LevelMock'

const levelMock = new LevelMock()

test('LevelDeleteUseCase should be exists', () => {
    expect(LevelDeleteUseCase).toBeTruthy()
})

describe('LevelDeleteUseCase success', () => {
    const randomLevelParams = levelMock.random()
    const levelCreateUseCase = levelMock.LevelCreateUseCase()

    const level = levelCreateUseCase.handle(randomLevelParams)

    test('should return true', () => {
        const levelDeleteUseCase = levelMock.LevelDeleteUseCase()

        levelDeleteUseCase.handle({
            id: level.id
        })
    })
})
