import {forwardRef, ReactNode} from "react";
import {Input} from "@/components/ui/input";

interface IconInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon: ReactNode;
}

// TODO
// ReactHook Form 때문에 ref를 전달 해 줄 수 있어야한다.
const IconInput = forwardRef<HTMLInputElement, IconInputProps>(
    ({icon, className, ...props}, ref) => {
        return (
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    {icon}
                </div>
                <Input
                    ref={ref}
                    {...props}
                    className={`pl-10 focus-visible:border-primary focus-visible:ring-0 ${className}`}
                />
            </div>
        );
    }
);

export default IconInput;
