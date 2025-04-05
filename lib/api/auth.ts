import {api} from "@/lib/api/api";
import {AuthResponse} from "@/types/auth";

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