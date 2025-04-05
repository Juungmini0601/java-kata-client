import {Input} from '@/components/ui/input';
import {ReactNode} from 'react';

interface IconInputProps {
    type: string,
    placeholder: string,
    icon: ReactNode,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
}

export default function IconInput({
                                      type,
                                      placeholder,
                                      icon,
                                      value,
                                      onChange,
                                      required = false,
                                  }: IconInputProps) {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                {icon}
            </div>
            <Input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="pl-10 focus-visible:border-primary focus-visible:ring-0"
            />
        </div>
    );
}
