export interface Pagination {
    TotalCount: number,
    PageSize: number,
    CurrentPage: number,
    HasNext: boolean,
    HasPrevious: boolean
}

export class PaginatedResult<T> {
    result: T;
    pagination: Pagination;
}
