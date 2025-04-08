import {Category} from "@/types/category";
import {create} from "zustand";

interface CategoriesState {
    categories: Category[]
    setCategories: (categories: Category[]) => void
}

export const useCategoriesState = create<CategoriesState>((set) => ({
    categories: [],
    setCategories: (categories) => set({categories}),
}))