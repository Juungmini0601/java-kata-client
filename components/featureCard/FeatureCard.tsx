import {Check, Code} from "lucide-react";

const features = [
    {
        title: "리트코드처럼 풀고, 바로 채점까지!",
        description: "문제를 풀면 즉시 채점! 실시간 피드백으로 빠르게 성장합니다.",
        icon: Check,
    },
    {
        title: "자바 개발자를 위한 알고리즘 훈련소",
        description: "자바에 최적화된 문제 구성과 채점 시스템으로 실력을 완성하세요.",
        icon: Code,
    },
];

export function FeatureCards() {
    return (
        <section className='py-20 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    {features.map((feature, index) => (
                        <div key={index}
                             className="flex flex-col items-center text-center p-8 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                            <div
                                className="bg-[#FF6600]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <feature.icon className="h-8 w-8 text-[#FF6600]"/>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}