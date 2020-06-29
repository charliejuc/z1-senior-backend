import { ContentRepository } from '../interfaces/ContentRepository'

export abstract class ContentRepositorySetter {
    protected contentRepository: ContentRepository

    constructor(contentRepository: ContentRepository) {
        this.contentRepository = contentRepository
    }
}
