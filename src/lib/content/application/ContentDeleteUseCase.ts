import { ContentDeleteParams } from '../domain/interfaces/ContentParams'
import { ContentRepositorySetter } from '../infraestructure/abstract/ContentRepositorySetter'

export class ContentDeleteUseCase extends ContentRepositorySetter {
    async handle(
        contentDeleteParams: ContentDeleteParams
    ): Promise<number> {
        const deleted = await this.contentRepository.delete(
            contentDeleteParams
        )

        return deleted ? 1 : 0
    }
}
