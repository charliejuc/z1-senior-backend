import { ContentId } from './../../domain/value-object/ContentId'
import { Repository } from './../../../shared/domain/interfaces/Repository'
import { Content } from '../../domain/Content'
import { ContentDeleteParams } from '../../domain/interfaces/ContentParams'

export interface ContentRepository extends Repository {
    findById(id: ContentId): Promise<Content>

    create(content: Content): Promise<Content>

    delete(deleteParams: ContentDeleteParams): Promise<boolean>
}
