import { Level } from '@/lib/level/domain/Level'
import { LevelRepositorySetter } from '../abstract/LevelRepositorySetter'
import { LevelCreateParams } from '../domain/interfaces/LevelParams'

export class LevelCreateUseCase extends LevelRepositorySetter {
    async handle(
        levelCreateParams: LevelCreateParams
    ): Promise<Level> {
        const level = new Level(levelCreateParams)

        return await this.levelRepository.create(level)
    }
}
