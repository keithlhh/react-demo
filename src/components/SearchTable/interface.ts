export interface defaultResponseProps<T> {
    totalCount: number;
    pageNo: number;
    pageSize: number;
    list: T[]
}