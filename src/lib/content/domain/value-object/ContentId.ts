import { v4 as uuidv4 } from 'uuid'

export class ContentId {
    private readonly _id: string

    constructor(id?: string) {
        this._id = id ?? uuidv4()
    }

    public get id(): string {
        return this._id
    }
}
