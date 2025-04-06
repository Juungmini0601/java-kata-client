'use client'
// TODO Client Component ServerComponent 차이가 뭐여

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {Lock, Mail, User} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";
import IconInput from "@/components/form/IconInput";
import {useForm} from "react-hook-form";
import {SignupFormData, signupSchema} from "@/lib/validations";
import {zodResolver} from "@hookform/resolvers/zod";
import {signupAPI} from "@/lib/api/auth";
import {useModalStore} from "@/stores/useModalStore";


export default function SignupPage() {
    const router = useRouter();
    // FormState
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema)
    });

    const onSubmit = async (formData: SignupFormData) => {
        const {email, password, nickname} = formData;
        const {result, error} = await signupAPI(email, password, nickname);

        if (result === 'SUCCESS') {
            router.push('/signin');
        } else {
            if (error) {
                if (error.code === 'E400') {
                    useModalStore.getState().openModal('ERROR', '입력 값을 다시 확인 해주세요.')
                } else if (error.code === 'E500') {
                    useModalStore.getState().openModal('ERROR', '관리자에게 문의 해주세요.')
                }
            }
        }
    }

    return (
        // 바깥 쪽에 min-h-screen을 주면 레이아웃 잡기 편함
        <div className='min-h-screen flex items-center justify-center bg-[rgb(235,240,245)] p-6'>
            {/* max-w-md size 최대 768주고 mx-auto 줘서 하얀 박수 중간 정렬함*/}
            <Card className='w-full max-w-md mx-auto bg-white shadow-lg sm:rounded-xl'>
                <CardHeader className='text-left pt-8'>
                    <h1 className='text-3xl font-bold text-primary mb-4'>Java Kata</h1>
                    <h2 className='text-2xl font-bold text-gray-900'>회원가입</h2>
                    <p className='text-sm text-gray-500 mt-1'>회원가입하고 알고리즘 문제를 만나보세요!</p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                        <IconInput
                            placeholder="이메일을 입력하세요."
                            icon={<Mail size={18}/>}
                            {...register("email", {required: "이메일은 필수 입니다."})}
                        />
                        {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
                        <IconInput
                            type='password'
                            placeholder="비밀번호를 입력하세요."
                            icon={<Lock size={18}/>}
                            {...register("password", {required: "비밀번호는 필수 입니다."})}
                        />
                        {errors.password && <p className='text-sm text-red-500'>{errors.password.message}</p>}
                        <IconInput
                            placeholder="닉네임을 입력해주세요."
                            icon={<User size={18}/>}
                            {...register("nickname", {required: "닉네임은 필수 입니다."})}
                        />
                        {errors.nickname && <p className='text-sm text-red-500'>{errors.nickname.message}</p>}

                        <Button type='submit'
                                className={cn("w-full cursor-pointer", isSubmitting && 'opacity-75')}
                                disabled={isSubmitting}>
                            회원가입
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className='flex justify-end pb-8'>
                    <p className='text-sm text-gray-500'>
                        이미 계정이 있으신가요? {" "} <Link href={'/signin'} className='text-primary font-bold'>로그인</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}