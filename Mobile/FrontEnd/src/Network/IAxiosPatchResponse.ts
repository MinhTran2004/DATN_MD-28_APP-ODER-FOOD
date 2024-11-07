export type IAxiosPatchRespose<T> = IAxiosPatchErrorResponse | IAxiosPatchSuccessResponse<T>

export type IAxiosPatchSuccessResponse <T> = {
    message: string;
    result : T;
}

export type IAxiosPatchErrorResponse  = {
    error: string;
}
