import { LevelId } from './value-object/LevelId'
import { LevelCreateParams } from './interfaces/LevelParams'
import { LevelTitle } from './value-object/LevelTitle'
import { LevelDescription } from './value-object/LevelDescription'

export class Level {
    private readonly _id = new LevelId()
    private readonly _title: LevelTitle
    private readonly _description: LevelDescription

    constructor(levelCreateParams: LevelCreateParams) {
        this._title = new LevelTitle(levelCreateParams.title)
        this._description = new LevelDescription(
            levelCreateParams.description
        )
    }

    public get id(): LevelId {
        return this._id
    }

    public get title(): LevelTitle {
        return this._title
    }

    public get description(): LevelDescription {
        return this._description
    }
}
