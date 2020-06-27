import { Repository } from './../../../shared/domain/interfaces/Repository'
import { Level } from '../../domain/Level'
import { LevelDeleteParams } from '../../domain/interfaces/LevelParams'

export interface LevelRepository extends Repository {
    create(level: Level): Promise<Level>

    delete(deleteParams: LevelDeleteParams): Promise<boolean>
}
