import { LevelRepository } from './../infraestructure/interfaces/LevelRepository'

export abstract class LevelRepositorySetter {
    protected levelRepository: LevelRepository

    constructor(levelRepository: LevelRepository) {
        this.levelRepository = levelRepository
    }
}
