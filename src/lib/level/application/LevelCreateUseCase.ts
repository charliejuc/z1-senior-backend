import { Level } from '@/lib/level/domain/Level'
import { LevelCreateParams } from '../domain/interfaces/LevelParams'

export class LevelCreateUseCase {
    handle(levelCreateParams: LevelCreateParams): Level {
        return new Level(levelCreateParams)
    }
}
