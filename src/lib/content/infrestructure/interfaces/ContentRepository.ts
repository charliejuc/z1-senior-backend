import { Repository } from './../../../shared/domain/interfaces/Repository'
import { Content } from '../../domain/Content'
import { ContentDeleteParams } from '../../domain/interfaces/ContentParams'

export interface ContentRepository extends Repository {
    create(content: Content): Promise<Content>

    delete(deleteParams: ContentDeleteParams): Promise<boolean>
}
