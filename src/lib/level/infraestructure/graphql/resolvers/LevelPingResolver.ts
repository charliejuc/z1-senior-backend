import { Query, Resolver } from 'type-graphql'

@Resolver()
export class LevelPingResolver {
    @Query(() => String)
    ping(): string {
        return 'Pong!'
    }
}
