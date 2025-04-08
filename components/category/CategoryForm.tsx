'use client'

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {PlusCircle} from 'lucide-react';
import React from "react";
import {useForm} from "react-hook-form";
import {CategoryFormData, categoryFormSchema} from "@/lib/validations";
import {zodResolver} from "@hookform/resolvers/zod";
import {createCategoryAPI} from "@/lib/api/category";
import {useModalStore} from "@/stores/useModalStore";
import {useCategoriesState} from "@/stores/useCategoryStore";

export default function CategoryForm() {
    const {categories, setCategories} = useCategoriesState();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<CategoryFormData>({
        resolver: zodResolver(categoryFormSchema)
    });

    const onSubmit = async (formData: CategoryFormData) => {
        const {categoryName} = formData;
        const {data, error} = await createCategoryAPI(categoryName);

        if (!error) {
            setCategories([...categories, data]);
            reset();
            return;
        }

        if (error.code === 'E401') {
            useModalStore.getState().openModal('ERROR', '로그인이 필요합니다.')
            return;
        }

        if (error.code === 'E403') {
            useModalStore.getState().openModal('ERROR', '관리자만 카테고리를 생성 할 수 있습니다.')
            return
        }

        if (error.code === 'E500') {
            useModalStore.getState().openModal('ERROR', '관리자에게 문의 해주세요.')
        }

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-3">
            <Input
                type="text"
                placeholder="새 카테고리 이름"
                className="flex-grow focus-visible:border-primary focus-visible:ring-0"
                {...register("categoryName", {required: "카테고리이름은 필수 입니다."})}
            />
            {errors.categoryName && <p className='text-sm text-red-500'>{errors.categoryName.message}</p>}
            <Button
                type="submit"
                className="bg-primary hover:bg-secondary cursor-pointer  text-white"
            >
                <PlusCircle className="mr-2 h-4 w-4"/> 추가
            </Button>
        </form>
    )
}