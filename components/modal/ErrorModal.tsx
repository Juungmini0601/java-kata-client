import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

export default function ErrorModal({message, onClose}: { message: string; onClose: () => void }) {
    return (
        <Dialog open onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>에러</DialogTitle>
                </DialogHeader>
                <div className="py-2 text-md">{message}</div>
                <div className='flex justify-end items-center'>
                    <Button className='cursor-pointer' onClick={onClose}>닫기</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}