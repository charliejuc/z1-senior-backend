import { LevelCreateUseCase } from '@/lib/level/application/LevelCreateUseCase'
import { LevelId } from '@/lib/level/domain/value-object/LevelId'
import { LevelTitle } from '@/lib/level/domain/value-object/LevelTitle'
import { LevelDescription } from '@/lib/level/domain/value-object/LevelDescription'
import { LevelMock } from '../domain/LevelMock'

const levelMock = new LevelMock()

test('LevelCreateUseCase should be exists', () => {
    expect(LevelCreateUseCase).toBeTruthy()
})

describe('LevelCreateUseCase should return a valid Level instance', () => {
    const randomLevelParams = levelMock.random()
    const levelCreateUseCase = new LevelCreateUseCase()

    const level = levelCreateUseCase.handle(randomLevelParams)

    test('should have id', () => {
        expect(level.id).toBeInstanceOf(LevelId)
        expect(typeof level.id.id).toBe('string')
    })

    test('should have title', () => {
        expect(level.title).toBeInstanceOf(LevelTitle)
        expect(level.title.title).toBe(randomLevelParams.title)
    })

    test('should have description', () => {
        expect(level.description).toBeInstanceOf(LevelDescription)
        expect(level.description.description).toBe(
            randomLevelParams.description
        )
    })
})
