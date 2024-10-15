import mergeClasses from '@/utils/mergeClasses';
import React from 'react';

interface FlexProps {
    children: React.ReactNode;
    clasName?: string;
    col?: boolean;
    row?: boolean;
}
export default function Flex({ children, clasName, col, row }: FlexProps) {
    return (
        <div
            className={mergeClasses(
                'flex justify-center items-center gap-2',
                {
                    'flex-col': col,
                    'flex-row': row,
                },
                clasName
            )}
        >
            {children}
        </div>
    );
}
