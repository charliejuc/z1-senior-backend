import { Order } from '@/lib/shared/domain/value-object/Order'
import { ContentParams } from './interfaces/ContentParams'
import { ContentId } from './value-object/ContentId'
import { ContentType } from './value-object/ContentType'

export class Content {
    private readonly _id: ContentId
    private readonly _type: ContentType
    private readonly _order: Order

    constructor(contentParams: ContentParams) {
        this._id = new ContentId(contentParams.id)
        this._type = new ContentType(contentParams.type)
        this._order = new Order(contentParams.order)
    }

    public get id(): ContentId {
        return this._id
    }

    public get type(): ContentType {
        return this._type
    }

    public get order(): Order {
        return this._order
    }
}
