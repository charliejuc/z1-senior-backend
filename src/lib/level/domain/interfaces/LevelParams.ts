import { LevelId } from '../value-object/LevelId'

export interface LevelCreateParams {
    title: string
    description: string
}

export interface LevelParams extends LevelCreateParams {
    id?: string
}

export interface LevelDeleteParams {
    id: LevelId
}
