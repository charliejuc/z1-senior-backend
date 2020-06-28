import { Level } from '../domain/Level'
import { LevelId } from '../domain/value-object/LevelId'
import { LevelRepositorySetter } from '../infraestructure/abstract/LevelRepositorySetter'

export class LevelFindByIdUseCase extends LevelRepositorySetter {
    async handle(id: LevelId): Promise<Level> {
        return await this.levelRepository.findById(id)
    }
}
