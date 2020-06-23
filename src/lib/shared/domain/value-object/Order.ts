export class Order {
    private readonly _order: number

    constructor(order: number) {
        this._order = order
    }

    public get order(): number {
        return this._order
    }
}
