const BASE_URL = 'http://localhost:8080'

export async function apiFetch(
    endPoint: string,
    options: RequestInit = {}
): Promise<Response> {
    const accessToken = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

    const headers: HeadersInit = {
        ...options.headers,
        ...(accessToken && {Authorization: `Bearer ${accessToken}`}),
        'Content-Type': 'application/json',
    };

    return fetch(`${BASE_URL}${endPoint}`, {
        ...options,
        headers,
    });
}

export const api = {
    get: (endPoint: string) => apiFetch(endPoint),
    // eslint-disable-next-line
    post: (endPoint: string, body: any) => apiFetch(endPoint, {method: 'POST', body: JSON.stringify(body)}),
    // eslint-disable-next-line
    put: (endPoint: string, body: any) => apiFetch(endPoint, {method: 'PUT', body: JSON.stringify(body)}),
    delete: (endPoint: string) => apiFetch(endPoint, {method: 'DELETE'})
}