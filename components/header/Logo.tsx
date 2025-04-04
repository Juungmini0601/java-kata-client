import {cn} from '@/lib/utils';

export default function Logo({className}: { className?: string }) {
    return (
        <div className={cn('flex', className)}>
            <div>
                {/* TODO 로고 들어올 예정*/}
                <span></span>
            </div>
            <span className='font-bold text-xl text-primary'>Java Kata</span>
        </div>
    )
}