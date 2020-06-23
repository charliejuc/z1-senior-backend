export class LessonDescription {
    private readonly _description: string

    constructor(description: string) {
        this._description = description
    }

    public get description(): string {
        return this._description
    }
}
