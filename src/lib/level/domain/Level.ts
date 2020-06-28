import { LevelParams } from './interfaces/LevelParams'
import { LevelDescription } from './value-object/LevelDescription'
import { LevelId } from './value-object/LevelId'
import { LevelTitle } from './value-object/LevelTitle'

export class Level {
    private readonly _id: LevelId
    private readonly _title: LevelTitle
    private readonly _description: LevelDescription

    constructor(levelParams: LevelParams) {
        this._id = new LevelId(levelParams.id)
        this._title = new LevelTitle(levelParams.title)
        this._description = new LevelDescription(
            levelParams.description
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
