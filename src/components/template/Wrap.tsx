import mergeClasses from '@/utils/mergeClasses';
import React from 'react';

interface WrapProps {
    children: React.ReactNode;
    className?: string;
}

export default function Wrap({ children, className }: WrapProps) {
    return (
        <div className={mergeClasses('w-full overflow-hidden', className)}>
            {children}
        </div>
    );
}
