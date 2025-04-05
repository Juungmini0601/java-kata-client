'use client'

import {usePathname} from "next/navigation";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
    // Client 컴포넌트에서만 쓸 수 있음 아 서버에서는 경로를 못가져오나보네
    // Next 없이는 useLocation 쓰면 가져올 수 있음
    const pathname = usePathname();
    console.error('404 Error: User attempted to non-existent page: ', pathname)

    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-[rgb(235,240,245)] p-6'>
            <div className='text-center bg-white p-8 rounded-xl shadow-md max-w-md w-full'>
                <h1 className='text-4xl font-bold text-gray-900 mb-2'>404</h1>
                <p className='text-xl text-gray-600 mb-6'>페이지를 찾을 수 없습니다.</p>
                <Button>
                    <Link href={'/'}>홈으로 돌아가기</Link>
                </Button>
            </div>

        </div>
    )
}