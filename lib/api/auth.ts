import {api} from "@/lib/api/api";
import {AuthResponse, AuthUserResponse} from "@/types/auth";

// /api/v1/auth/token
export async function signinAPI(email: string, password: string): Promise<AuthResponse> {
    if (localStorage.getItem('accessToken')) {
        localStorage.removeItem('accessToken')
    }

    if (localStorage.getItem('refreshToken')) {
        localStorage.removeItem('refreshToken')
    }

    const response = await api.post('/api/v1/auth/token', {email, password})
    console.log(response)

    return response.json();
}

export async function getAuthAPI(): Promise<AuthUserResponse> {
    const response = await api.get('/api/v1/auth')
    return response.json();
}

export async function tokenRefreshAPI(accessToken: string): Promise<AuthResponse> {
    const response = await api.post('/api/v1/auth/token/refresh', {accessToken})
    return response.json();
}