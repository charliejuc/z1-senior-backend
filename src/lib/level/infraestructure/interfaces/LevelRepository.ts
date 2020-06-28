import { Repository } from './../../../shared/domain/interfaces/Repository'
import { Level } from '../../domain/Level'
import { LevelDeleteParams } from '../../domain/interfaces/LevelParams'
import { LevelId } from '../../domain/value-object/LevelId'

export interface LevelRepository extends Repository {
    findById(id: LevelId): Promise<Level>

    create(level: Level): Promise<Level>

    delete(deleteParams: LevelDeleteParams): Promise<boolean>
}
