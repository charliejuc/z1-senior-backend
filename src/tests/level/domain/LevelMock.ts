import faker from 'faker'
import { LevelCreateParams } from '@/lib/level/domain/interfaces/LevelParams'
import { LevelCreateUseCase } from '@/lib/level/application/LevelCreateUseCase'
import { LevelDeleteUseCase } from '@/lib/level/application/LevelDeleteUseCase'

export class LevelMock {
    LevelCreateUseCase(): LevelCreateUseCase {
        return new LevelCreateUseCase()
    }

    LevelDeleteUseCase(): LevelDeleteUseCase {
        return new LevelDeleteUseCase()
    }

    random(): LevelCreateParams {
        return {
            title: faker.name.title(),
            description: faker.lorem.paragraph()
        }
    }
}
