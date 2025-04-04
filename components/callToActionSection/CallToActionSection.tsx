import {Button} from "@/components/ui/button";

export default function CallToActionSection() {
    return (
        <div className='py-16 bg-gray-900'>
            <div className='container mx-auto px-4 text-center'>
                <h2 className='text-3xl font-bold text-white mb-6'>
                    지금 Java Kata와 함께 알고리즘 실력을 키워보세요
                </h2>
                <p className='text-gray-400 mb-8 max-w-2xl mx-auto'>
                    다양한 난이도의 문제를 통해 단계별로 실력을 향상시킬 수 있습니다. <br/>
                    지금 바로 시작하세요!
                </p>
                {/* TODO Navigation */}
                <Button className='cursor-pointer font-bold text-lg py-6 px-8 hover:secondary'>
                    무료로 시작하기
                </Button>
            </div>
        </div>
    )
}