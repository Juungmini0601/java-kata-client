export interface ApiResponse<T> {
    result: 'SUCCESS' | 'ERROR';
    data: T;
    error: ApiError | null;
}

export interface ApiError {
    code: string;
    message: string;
    data: string;
}