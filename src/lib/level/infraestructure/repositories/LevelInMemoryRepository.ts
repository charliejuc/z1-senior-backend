import {
    LevelDeleteParams,
    LevelParams
} from '../../domain/interfaces/LevelParams'
import { Level } from '../../domain/Level'
import { LevelRepository } from '../interfaces/LevelRepository'

const LevelData: Map<string, LevelParams> = new Map()

export class LevelInMemoryRepository implements LevelRepository {
    async create(level: Level): Promise<Level> {
        LevelData.set(level.id.id, {
            id: level.id.id,
            title: level.title.title,
            description: level.description.description
        })

        return level
    }

    async delete(deleteParams: LevelDeleteParams): Promise<boolean> {
        return LevelData.delete(deleteParams.id.id)
    }
}
