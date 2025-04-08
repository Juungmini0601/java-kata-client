'use client'

import {Category} from "@/types/category";
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {useForm} from "react-hook-form";
import {CategoryFormData, categoryFormSchema} from "@/lib/validations";
import {zodResolver} from "@hookform/resolvers/zod";
import React, {useEffect} from "react";
import {useCategoriesState} from "@/stores/useCategoryStore";
import {updateCategoryAPI} from "@/lib/api/category";

interface EditCategoryDialogProps {
    isOpen: boolean;
    category: Category | null;
    onClose: () => void;
}

export default function CategoryEditConfirmDialog({
                                                      isOpen, category, onClose
                                                  }: EditCategoryDialogProps) {
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
        const {id} = category || {};

        if (id && categoryName) {
            const {data, error} = await updateCategoryAPI(id, categoryName);
            // 카테고리에서 아이디 가 같은 값을 덮어 써야 함
            if (!error) {
                const newCategories = categories.map(category => {
                    if (category.id === id) {
                        return {...category, ...data}
                    }
                    return category;
                })
                setCategories(newCategories);
                onClose();

                return;
            }
            // TODO 예외 알람
            console.error(error);
        }
    }

    // 폼이 열릴때마다 모달에서 값 바꿔줄거임
    useEffect(() => {
        reset({categoryName: category?.categoryName || ""})
    }, [isOpen, category])

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogHeader>
                        <DialogTitle>카테고리 수정</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                        <Input
                            placeholder="카테고리 이름"
                            className="w-full focus-visible:border-primary focus-visible:ring-0"
                            autoFocus
                            {...register("categoryName", {required: "카테고리이름은 필수 입니다."})}
                        />
                        {errors.categoryName && <p className='text-sm text-red-500'>{errors.categoryName.message}</p>}
                    </div>
                    <DialogFooter>
                        <Button type="button" className="cursor-pointer" variant="outline" onClick={onClose}>
                            취소
                        </Button>
                        <Button type="submit" className="bg-primary hover:bg-secondary cursor-pointer text-white">
                            수정 완료
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}