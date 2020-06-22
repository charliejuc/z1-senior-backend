export class LevelTitle {
    private readonly _title: string

    constructor(title: string) {
        this._title = title
    }

    public get title(): string {
        return this._title
    }
}
