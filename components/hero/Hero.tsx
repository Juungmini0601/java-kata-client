import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

export default function Hero() {
    return (
        <div className='relative  py-24 px-4 border-b'>
            <div className='max-w-3xl mx-auto text-center'>
                {/*text gradient*/}
                <h1 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FF6600] to-[#FA6000] bg-clip-text text-transparent'>
                    자바로 배우는 알고리즘의 첫걸음!
                </h1>
                <p className='text-gray-700 text-xl mb-8'>
                    기초부터 탄탄하게, 실전 알고리즘을 자바로 쉽게 배워보세요.
                </p>
                {/* TODO Navigation */}
                <Button
                    className='hover:secondary cursor-pointer font-medium py-2 px-6 rounded-md text-lg flex mx-auto items-center gap-2'>
                    시작하기
                    <ArrowRight className='h-5 w-5'/>
                </Button>
            </div>
            {/* 배경 뒤 동그라미 오버레이 되서 컨텐츠 클릭 안됨*/}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute -bottom-2 -right-2 w-64 h-64 bg-[#FF6600] opacity-5 rounded-full"></div>
                <div className="absolute top-20 -left-10 w-40 h-40 bg-[#FA6000] opacity-5 rounded-full"></div>
            </div>
        </div>
    )
}
