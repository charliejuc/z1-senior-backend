export interface Repository {
    create(data: object): Promise<object>
    delete(data: object): Promise<boolean>
}
