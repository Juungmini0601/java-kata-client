import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from '@/components/ui/alert-dialog';

interface DeleteConfirmationDialogProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    categoryName: string;
}

export default function CategoryDeleteConfirmDialog({
                                                        isOpen,
                                                        onClose,
                                                        onConfirm,
                                                        categoryName
                                                    }: DeleteConfirmationDialogProps) {
    return (
        <AlertDialog open={isOpen} onOpenChange={onClose}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>카테고리 삭제</AlertDialogTitle>
                    <AlertDialogDescription>
                        <span className="font-medium text-primary">{categoryName}</span> 카테고리를 삭제하시겠습니까?
                        <br/>이 작업은 되돌릴 수 없습니다.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className='cursor-pointer'>취소</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={onConfirm}
                        className="bg-primary hover:bg-secondary cursor-pointer text-white"
                    >
                        삭제
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}