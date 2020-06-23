import { Content } from '@/lib/content/domain/Content'
import { ContentCreateParams } from '../domain/interfaces/ContentCreateParams'

export class ContentCreateUseCase {
    handle(contentCreateParams: ContentCreateParams): Content {
        return new Content(contentCreateParams)
    }
}
