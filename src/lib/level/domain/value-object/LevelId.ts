import { v4 as uuidv4 } from 'uuid'

export class LevelId {
    private readonly _id = uuidv4()

    public get id(): string {
        return this._id
    }
}
