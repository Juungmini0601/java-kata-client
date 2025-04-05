import {api} from "@/lib/api/api";
import {AuthResponse} from "@/types/auth";

// /api/v1/auth/token
export async function signinAPI(email: string, password: string): Promise<AuthResponse> {
    const response = await api.post('/api/v1/auth/token', {email, password})
    return response.json();
}