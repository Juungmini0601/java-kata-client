import {api} from "@/lib/api/api";

// /api/v1/problems/categories
import {CategoryListResponse, CategoryResponse} from "@/types/category";
import {ApiResponse} from "@/types/apiResponses";

export async function getCategoriesAPI(): Promise<CategoryListResponse> {
    const response = await api.get('/api/v1/problems/categories')

    return response.json()
}

export async function createCategoryAPI(categoryName: string): Promise<CategoryResponse> {
    const response = await api.post('/api/v1/admin/problems/categories', {categoryName})
    return response.json()
}

export async function updateCategoryAPI(categoryId: number, categoryName: string): Promise<CategoryResponse> {
    const response = await api.put(`/api/v1/admin/problems/categories/${categoryId}`, {categoryName})
    return response.json()
}

export async function deleteCategoryAPI(categoryId: number): Promise<ApiResponse<void>> {
    const response = await api.delete(`/api/v1/admin/problems/categories/${categoryId}`);
    return response.json();
}