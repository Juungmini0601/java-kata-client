import {api} from "@/lib/api/api";
import {AuthResponse, AuthUserResponse, CreateUserResponse} from "@/types/auth";

// /api/v1/auth/token
export async function signinAPI(email: string, password: string): Promise<AuthResponse> {
    if (localStorage.getItem('accessToken')) {
        localStorage.removeItem('accessToken')
    }

    if (localStorage.getItem('refreshToken')) {
        localStorage.removeItem('refreshToken')
    }

    const response = await api.post('/api/v1/auth/token', {email, password})

    return response.json();
}

export async function signupAPI(email: string, password: string, nickname: string): Promise<CreateUserResponse> {
    const response = await api.post('/api/v1/users', {email, password, nickname})

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