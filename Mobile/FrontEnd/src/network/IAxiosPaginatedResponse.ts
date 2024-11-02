export interface IAxiosPaginatedRespose<T> {
    total: number,
    page: number,
    pages: number,
    data: T[]
}
