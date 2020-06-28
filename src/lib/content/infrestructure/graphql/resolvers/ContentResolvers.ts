import { ContentCreateUseCase } from '@/lib/content/application/ContentCreateUseCase'
import { ContentDeleteUseCase } from '@/lib/content/application/ContentDeleteUseCase'
import { ContentFindByIdUseCase } from '@/lib/content/application/ContentFindByIdUseCase'
import { ContentId } from '@/lib/content/domain/value-object/ContentId'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import {
    ContentDeleteTypeGraphQL,
    ContentInputTypeGraphQL,
    ContentTypeGraphQL
} from '../types/ContentTypes'
import { ContentToContentTypeGraphQL } from './../../adapters/ContentToContentTypeGraphQL'
import { ContentInMemoryRepository } from './../../repositories/ContentInMemoryRepository'

const contentRepository = new ContentInMemoryRepository()
const contentCreateUseCase = new ContentCreateUseCase(
    contentRepository
)
const contentFindByIdUseCase = new ContentFindByIdUseCase(
    contentRepository
)
const contentDeleteUseCase = new ContentDeleteUseCase(
    contentRepository
)

const contentToContentTypeGraphQL = new ContentToContentTypeGraphQL()

@Resolver(ContentTypeGraphQL)
export class ContentResolvers {
    @Query(() => ContentTypeGraphQL)
    async findContent(
        @Arg('id') id: string
    ): Promise<ContentTypeGraphQL> {
        const content = await contentFindByIdUseCase.handle(
            new ContentId(id)
        )

        return contentToContentTypeGraphQL.parse(content)
    }

    @Mutation(() => ContentTypeGraphQL)
    async createContent(
        @Arg('contentParams', () => ContentInputTypeGraphQL)
        contentParams: ContentInputTypeGraphQL
    ): Promise<ContentTypeGraphQL> {
        const content = await contentCreateUseCase.handle(
            contentParams
        )

        return contentToContentTypeGraphQL.parse(content)
    }

    @Mutation(() => ContentDeleteTypeGraphQL)
    async deleteContent(
        @Arg('id') id: string
    ): Promise<ContentDeleteTypeGraphQL> {
        const deletedCount = await contentDeleteUseCase.handle({
            id: new ContentId(id)
        })

        return {
            deletedCount
        }
    }
}
