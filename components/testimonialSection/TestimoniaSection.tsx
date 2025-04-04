import {BookOpen} from "lucide-react";

export default function TestimonialSection() {
    return (
        <section className='bg-gray-50 py-20'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col items-center max-w-3xl mx-auto text-center'>
                    <div className='bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6'>
                        <BookOpen className='h-8 w-8 text-primary'/>
                    </div>
                    <h2 className='text-3xl font-bold text-gray-900 mb-6'>
                        자바로 코딩 테스트 완벽 대비
                    </h2>
                    <p className='text-xl text-gray-700 mb-10'>
                        실전 문제를 풀어보며 코딩테스트와 기술 인터뷰를 준비하세요.
                        Java Kata는 취업과 이직을 준비하는 개발자를 위한 최적의 솔루션입니다.
                    </p>
                    <div className='bg-white p-6 rounded-lg shadow-md border border-gray-100 w-full'>
                        <blockquote className="italic text-gray-600">
                            "Java Kata로 매일 문제를 풀면서 알고리즘 실력이 크게 향상되었어요. <br/>덕분에 원하던 회사에 합격할 수 있었습니다!"
                        </blockquote>
                        <p className="mt-4 font-semibold text-gray-900">raon, Java Kata 개발자</p>
                    </div>
                </div>
            </div>
        </section>
    )
}