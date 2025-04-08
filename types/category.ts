import {ApiResponse} from "@/types/apiResponses";

export interface Category {
    id: number;
    categoryName: string;
    createdAt: string;
    updatedAt: string;
}

export type CategoryResponse = ApiResponse<Category>;
export type CategoryListResponse = ApiResponse<Category[]>;