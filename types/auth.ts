import {ApiResponse} from "@/types/apiResponses";

interface AuthData {
    accessToken: string;
    refreshToken: string;
}

export type AuthResponse = ApiResponse<AuthData>;

export interface AuthUserData {
    id: number,
    email: string,
    nickname: string,
    role: string,
    createdAt: string,
    updatedAt?: string
}

export type AuthUserResponse = ApiResponse<AuthUserData>;

export interface TokenRefreshRequest {
    accessToken: string;
}