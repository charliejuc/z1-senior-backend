import { Content } from '../domain/Content'
import { ContentId } from '../domain/value-object/ContentId'
import { ContentRepositorySetter } from '../infrestructure/abstract/ContentRepositorySetter'

export class ContentFindByIdUseCase extends ContentRepositorySetter {
    async handle(id: ContentId): Promise<Content> {
        return await this.contentRepository.findById(id)
    }
}
