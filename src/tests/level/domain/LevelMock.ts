import { LevelInMemoryRepository } from './../../../lib/level/infraestructure/repositories/LevelInMemoryRepository'
import faker from 'faker'
import { LevelCreateParams } from '@/lib/level/domain/interfaces/LevelParams'
import { LevelCreateUseCase } from '@/lib/level/application/LevelCreateUseCase'
import { LevelDeleteUseCase } from '@/lib/level/application/LevelDeleteUseCase'
import { LevelFindByIdUseCase } from '@/lib/level/application/LevelFindByIdUseCase'

const levelInMemoryRepository = new LevelInMemoryRepository()
export class LevelMock {
    LevelFindByIdUseCase(): LevelFindByIdUseCase {
        return new LevelFindByIdUseCase(levelInMemoryRepository)
    }

    LevelCreateUseCase(): LevelCreateUseCase {
        return new LevelCreateUseCase(levelInMemoryRepository)
    }

    LevelDeleteUseCase(): LevelDeleteUseCase {
        return new LevelDeleteUseCase(levelInMemoryRepository)
    }

    random(): LevelCreateParams {
        return {
            title: faker.name.title(),
            description: faker.lorem.paragraph()
        }
    }
}
