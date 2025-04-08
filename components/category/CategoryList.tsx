import {Category} from "@/types/category";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table';
import {Button} from '@/components/ui/button';
import {Edit2, Trash2} from 'lucide-react';

interface CategoryListProps {
    categories: Category[];
    onEdit: (category: Category) => void;
    onDelete: (category: Category) => void;
}

export default function CategoryList({categories, onEdit, onDelete}: CategoryListProps) {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-3">카테고리 목록</h2>
            {categories.length === 0 ? (
                <div className="text-center py-10 bg-gray-50 rounded-md">
                    <p className="text-gray-500">등록된 카테고리가 없습니다.</p>
                    <p className="text-sm text-gray-400 mt-1">위 입력창을 통해 새로운 카테고리를 추가해보세요.</p>
                </div>
            ) : (
                <div className="border rounded-md overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">번호</TableHead>
                                <TableHead>이름</TableHead>
                                <TableHead className="hidden md:table-cell">생성일</TableHead>
                                <TableHead className="hidden md:table-cell">수정일</TableHead>
                                <TableHead className="w-[120px] text-right">관리</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {categories.map((category, index) => (
                                <TableRow key={category.id}>
                                    <TableCell className="font-medium">{category.id}</TableCell>
                                    <TableCell>{category.categoryName}</TableCell>
                                    <TableCell
                                        className="hidden md:table-cell">{category.createdAt}</TableCell>
                                    <TableCell
                                        className="hidden md:table-cell">{category.updatedAt ?? '없음'}</TableCell>
                                    <TableCell className="flex justify-end gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => onEdit(category)}
                                            className="h-8 px-2 text-primary hover:text-secondary cursor-pointer hover:bg-orange-50"
                                        >
                                            <Edit2 className="h-3.5 w-3.5"/>
                                            <span className="sr-only">수정</span>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => onDelete(category)}
                                            className="h-8 px-2 text-primary hover:text-secondary cursor-pointer hover:bg-red-50"
                                        >
                                            <Trash2 className="h-3.5 w-3.5"/>
                                            <span className="sr-only">삭제</span>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
}