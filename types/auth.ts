import {ApiResponse} from "@/types/apiResponses";

interface AuthData {
    accessToken: string;
    refreshToken: string;
}

export type AuthResponse = ApiResponse<AuthData>;