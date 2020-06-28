import { LevelDeleteParams } from './../domain/interfaces/LevelParams'
import { LevelRepositorySetter } from '../infraestructure/abstract/LevelRepositorySetter'

export class LevelDeleteUseCase extends LevelRepositorySetter {
    async handle(
        levelDeleteParams: LevelDeleteParams
    ): Promise<number> {
        const deleted = await this.levelRepository.delete(
            levelDeleteParams
        )

        return deleted ? 1 : 0
    }
}
