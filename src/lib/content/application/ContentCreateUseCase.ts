import { Content } from '@/lib/content/domain/Content'
import { ContentCreateParams } from '../domain/interfaces/ContentParams'
import { ContentRepositorySetter } from '../infraestructure/abstract/ContentRepositorySetter'

export class ContentCreateUseCase extends ContentRepositorySetter {
    async handle(
        contentCreateParams: ContentCreateParams
    ): Promise<Content> {
        const content = new Content(contentCreateParams)

        return await this.contentRepository.create(content)
    }
}
