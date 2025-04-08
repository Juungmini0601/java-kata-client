'use client'

import Navbar from "@/components/header/Navbar";
import CategoryEditConfirmDialog from "@/components/category/CategoryEditDialog";
import CategoryDeleteConfirmDialog from "@/components/category/CategoryDeleteConfirmDialog";
import {useEffect, useState} from "react";
import CategoryForm from "@/components/category/CategoryForm";
import CategoryList from "@/components/category/CategoryList";
import {deleteCategoryAPI, getCategoriesAPI} from "@/lib/api/category";
import {useCategoriesState} from "@/stores/useCategoryStore";
import {Category} from "@/types/category";

export default function AdminCategoriesPage() {
    const [editCategory, setEditCategory] = useState<Category | null>(null);
    const [deleteCategory, setDeleteCategory] = useState<Category | null>(null);

    const {categories, setCategories} = useCategoriesState();
    const [editDialogOpen, setEditDialogOpn] = useState(false)
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

    const handleEdit = (category: Category) => {
        setEditCategory(category);
        setEditDialogOpn(true);
    }

    const handleDelete = (category: Category) => {
        setDeleteCategory(category);
        setDeleteDialogOpen(true);
    }

    const handleDeleteConfirm = async () => {
        if (deleteCategory === null) return;
        const {error} = await deleteCategoryAPI(deleteCategory?.id);

        if (error) {
            console.error(error);
            return;
        }

        setDeleteCategory(null);
        setDeleteDialogOpen(false);

        setCategories(categories.filter(category => category.id !== deleteCategory?.id));
    }

    useEffect(() => {
        const fetchCategoreis = async () => {
            const {result, data, error} = await getCategoriesAPI();
            if (result === 'SUCCESS') {
                setCategories(data);
                return;
            }

            if (error) {
                console.error(error);
                return;
            }
        }

        fetchCategoreis();
    }, [])

    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar/>
            <main className='flex-grow pt-16'>
                <div className='mt-8 max-w-6xl p-6 sm:p-8 rounded-lg shadow-sm mx-auto'>
                    {/* 상단 카테고리 폼 */}
                    <div className='p-6 mx-auto'>
                        <h1 className='text-2xl sm:text-3xl font-bold text-primary mb-6'>카테고리 관리</h1>
                        <div className='p-6 border border-gray-200 rounded-lg mb-6'>
                            <CategoryForm/>
                        </div>
                    </div>
                    {/*  카테고리 리스트   */}
                    <CategoryList
                        categories={categories}
                        onEdit={(category) => handleEdit(category)}
                        onDelete={(category) => handleDelete(category)}
                    />
                </div>
            </main>
            {/* TODO 카테고리 수정 삭제 기능 추가 */}
            {/* Edit Dialog */}
            <CategoryEditConfirmDialog
                isOpen={editDialogOpen}
                category={editCategory}
                onClose={() => setEditDialogOpn(false)}
            />

            {/* Delete Confirmation Dialog */}
            <CategoryDeleteConfirmDialog
                isOpen={deleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                onConfirm={handleDeleteConfirm}
                categoryName={deleteCategory?.categoryName || ''}
            />
        </div>
    );
}