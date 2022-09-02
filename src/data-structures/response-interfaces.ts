export interface IResponeFormat<T> {
    status: ResponseStatus;
    data: Record<any, T>;
}

export enum ResponseStatus {
    success = 'success',
    fail = 'fail',
    error = 'error'
}