import { Order } from '@/lib/shared/domain/value-object/Order'
import { ContentCreateParams } from './interfaces/ContentCreateParams'
import { ContentId } from './value-object/ContentId'
import { ContentType } from './value-object/ContentType'

export class Content {
    private readonly _id = new ContentId()
    private readonly _type: ContentType
    private readonly _order: Order

    constructor(contentCreateParams: ContentCreateParams) {
        this._type = new ContentType(contentCreateParams.type)
        this._order = new Order(contentCreateParams.order)
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
