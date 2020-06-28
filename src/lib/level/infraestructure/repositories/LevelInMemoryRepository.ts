import {
    LevelDeleteParams,
    LevelParams
} from '../../domain/interfaces/LevelParams'
import { Level } from '../../domain/Level'
import { LevelRepository } from '../interfaces/LevelRepository'
import { LevelId } from '../../domain/value-object/LevelId'

const LevelData: Map<string, LevelParams> = new Map()

export class LevelInMemoryRepository implements LevelRepository {
    async findById(id: LevelId): Promise<Level> {
        const levelParams = LevelData.get(id.id)

        if (levelParams === undefined) {
            throw new Error(`Level with "${id.id}" id not found`)
        }

        return new Level(levelParams)
    }

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
