import { ContentDeleteParams } from '../domain/interfaces/ContentParams'
import { ContentRepositorySetter } from '../infrestructure/abstract/ContentRepositorySetter'

export class ContentDeleteUseCase extends ContentRepositorySetter {
    async handle(
        contentDeleteParams: ContentDeleteParams
    ): Promise<boolean> {
        return await this.contentRepository.delete(
            contentDeleteParams
        )
    }
}
