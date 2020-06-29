import { LessonCreateUseCase } from '@/lib/lesson/application/LessonCreateUseCase'
import { LessonFindByIdUseCase } from '@/lib/lesson/application/LessonFindByIdUseCase'
import { LessonId } from '@/lib/lesson/domain/value-object/LessonId'
import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import {
    LessonInputTypeGraphQL,
    LessonTypeGraphQL,
    LessonDeleteTypeGraphQL
} from '../types/LessonTypes'
import { LessonInMemoryRepository } from '../../repositories/LessonInMemoryRepository'
import { LessonDeleteUseCase } from '@/lib/lesson/application/LessonDeleteUseCase'

const lessonRepository = new LessonInMemoryRepository()
const lessonCreateUseCase = new LessonCreateUseCase(lessonRepository)
const lessonFindByIdUseCase = new LessonFindByIdUseCase(
    lessonRepository
)
const lessonDeleteUseCase = new LessonDeleteUseCase(lessonRepository)

@Resolver(LessonTypeGraphQL)
export class LessonResolvers {
    @Query(() => LessonTypeGraphQL)
    async findLesson(
        @Arg('id') id: string
    ): Promise<LessonTypeGraphQL> {
        const lesson = await lessonFindByIdUseCase.handle(
            new LessonId(id)
        )

        return {
            id: lesson.id.id,
            title: lesson.title.title,
            description: lesson.description.description,
            order: lesson.order.order
        }
    }

    @Mutation(() => LessonTypeGraphQL)
    async createLesson(
        @Arg('lessonParams', () => LessonInputTypeGraphQL)
        lessonParams: LessonInputTypeGraphQL
    ): Promise<LessonTypeGraphQL> {
        const lesson = await lessonCreateUseCase.handle(lessonParams)

        return {
            id: lesson.id.id,
            title: lesson.title.title,
            description: lesson.description.description,
            order: lesson.order.order
        }
    }

    @Mutation(() => LessonDeleteTypeGraphQL)
    async deleteLesson(
        @Arg('id') id: string
    ): Promise<LessonDeleteTypeGraphQL> {
        const deletedCount = await lessonDeleteUseCase.handle({
            id: new LessonId(id)
        })

        return {
            deletedCount
        }
    }
}
