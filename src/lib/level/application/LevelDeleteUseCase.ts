import { LevelDeleteParams } from './../domain/interfaces/LevelParams'
import { LevelRepositorySetter } from '../infraestructure/abstract/LevelRepositorySetter'

export class LevelDeleteUseCase extends LevelRepositorySetter {
    async handle(
        levelDeleteParams: LevelDeleteParams
    ): Promise<boolean> {
        return await this.levelRepository.delete(levelDeleteParams)
    }
}
