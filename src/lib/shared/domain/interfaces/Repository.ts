export interface Repository {
    findById(id: object | number): Promise<object>
    create(data: object): Promise<object>
    delete(data: object): Promise<boolean>
}
