export interface IApiResponse {
    message: string;
    status: number | null,
    data?: any;
    meta?: IMeta
}

export interface IMeta {
    totalData: string | number
    totalPages: number
    currentPage: number
    pageSize: number
}
