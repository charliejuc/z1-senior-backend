import { LevelCreateUseCase } from '@/lib/level/application/LevelCreateUseCase'
import faker from 'faker'

test('LevelCreateUseCase should be exists', () => {
    expect(LevelCreateUseCase).toBeTruthy()
})

describe('LevelCreateUseCase should return a valid Level instance', () => {
    const levelCreateUseCase = new LevelCreateUseCase()

    const level = levelCreateUseCase.handle({
        title: faker.name.title(),
        description: faker.lorem.paragraph()
    })

    test('should has id', () => {
        expect(typeof level.id.id).toBe('string')
    })

    test('should has title', () => {
        expect(typeof level.title.title).toBe('string')
    })

    test('should has description', () => {
        expect(typeof level.description.description).toBe('string')
    })
})
