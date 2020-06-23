import faker from 'faker'
import { LevelCreateParams } from '@/lib/level/domain/interfaces/LevelCreateParams'

export class LevelMock {
    random(): LevelCreateParams {
        return {
            title: faker.name.title(),
            description: faker.lorem.paragraph()
        }
    }
}
