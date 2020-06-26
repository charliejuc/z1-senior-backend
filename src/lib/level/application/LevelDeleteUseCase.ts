import { LevelDeleteParams } from './../domain/interfaces/LevelParams'

export class LevelDeleteUseCase {
    handle(levelDeleteParams: LevelDeleteParams): boolean {
        return Boolean(levelDeleteParams.id)
    }
}
