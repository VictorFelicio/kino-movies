import mergeClasses from '@/utils/mergeClasses';
import React from 'react';

interface GridProps {
    children: React.ReactNode;
    className?: string;
    column?: boolean;
    numCols?: number;
    numRows?: number;
}
export default function Grid({
    children,
    className,
    column,
    numCols = 1,
    numRows = 1,
}: GridProps) {
    return (
        <div
            className={mergeClasses(`grid grid-rows-${numRows}`, {
                [`grid-cols-${numCols}`]: column,
            })}
        >
            {children}
        </div>
    );
}
