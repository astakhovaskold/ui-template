export interface Common {
    readonly id: string;
}

export interface PaginationResult<T> {
    content: Array<T>;
    totalItems: number;
    totalElements: number;
}
