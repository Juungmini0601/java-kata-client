'use client'

import Logo from "@/components/header/Logo";
import {Button} from "@/components/ui/button";
import {LogIn} from "lucide-react";
import Link from "next/link";
import {useAuthStore} from "@/stores/useAuthUserStore";
import {removeToken} from "@/lib/localStorage";
import {useRouter} from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const {user, setUser} = useAuthStore();

    const handleSignOut = () => {
        removeToken();
        setUser(null);
        router.push('/');
    }

    return (
        <nav className='fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 shadow-sm z-50'>
            {/* container 줘서 줄이고 mx -auto로 정렬 h full 줘서 nav에 꽉 차도록함*/}
            <div className='container mx-auto h-full flex items-center justify-between px-10 py-5'>
                <Logo className='cursor-pointer'/>
                <div className='flex items-center gap-4'>
                    {user && <>
                        <p className='text-gray-700'>{user.nickname}</p>
                        <Button className='cursor-pointer' variant='outline' onClick={handleSignOut}>
                            <LogIn/>
                            로그아웃
                        </Button>
                    </>}
                    {!user && (
                        <Link href={'/signin'}>
                            <Button className='cursor-pointer' variant='outline'>
                                <LogIn/>
                                로그인
                            </Button>
                        </Link>)}

                    {/* TODO Navigation */}
                    <Button className='cursor-pointer hover:secondary'>
                        학습하기
                    </Button>
                </div>
            </div>
        </nav>
    )
}