'use client'
// TODO Client Component ServerComponent 차이가 뭐여

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Lock, Mail} from "lucide-react";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {signinAPI} from "@/lib/api/auth";
import {useRouter} from "next/navigation";
import IconInput from "@/components/form/IconInput";

export default function SigninPage() {
    const router = useRouter();
    // Form State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // Button State
    const [loadding, setLoadding] = useState(false);

    const handleSignin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoadding(true);

        const {result, data, error} = await signinAPI(email, password);
        if (result === 'SUCCESS') {
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);

            router.push('/');
        } else {
            // TODO 예외 조금 더 개선
            if (error) {
                alert(error.message);
            }
        }

        setLoadding(false);
    }

    return (
        // 바깥 쪽에 min-h-screen을 주면 레이아웃 잡기 편함
        <div className='min-h-screen flex items-center justify-center bg-[rgb(235,240,245)] p-6'>
            {/* max-w-md size 최대 768주고 mx-auto 줘서 하얀 박수 중간 정렬함*/}
            <Card className='w-full max-w-md mx-auto bg-white shadow-lg sm:rounded-xl'>
                <CardHeader className='text-left pt-8'>
                    <h1 className='text-3xl font-bold text-primary mb-4'>Java Kata</h1>
                    <h2 className='text-2xl font-bold text-gray-900'>로그인</h2>
                    <p className='text-sm text-gray-500 mt-1'>로그인하고 알고리즘 문제를 만나보세요!</p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSignin} className='space-y-4'>
                        <IconInput
                            type="email"
                            placeholder="이메일을 입력하세요."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            icon={<Mail size={18}/>}
                            required
                        />
                        <IconInput
                            type="password"
                            placeholder="비밀번호를 입력하세요."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            icon={<Lock size={18}/>}
                            required
                        />
                        <Button type='submit'
                                className={cn("w-full cursor-pointer", loadding && 'opacity-75')}
                                disabled={loadding}>
                            로그인
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className='flex justify-end pb-8'>
                    <p className='text-sm text-gray-500'>
                        계정이 없으신가요? {" "} <Link href={'/signup'} className='text-primary font-bold'>회원가입</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}