'use client';
import React, { Children, cloneElement } from 'react';
import Wrap from './Wrap';
import Container from './Container';
import Flex from './Flex';
import mergeClasses from '@/utils/mergeClasses';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface CarouselProps {
    children: JSX.Element[];
    slideAuto?: boolean;
}

function ButtonSide(props: {
    left?: boolean;
    right?: boolean;
    children: React.ReactNode;
}) {
    return (
        <button
            className={mergeClasses(
                `
            group absolute top-0 flex h-full
            cursor-pointer items-center justify-center
            px-4 focus:outline-none
            `,
                { 'left-0': props.left, 'right-0': props.right }
            )}
        >
            <span
                className={`
                inline-flex h-10 w-10 items-center justify-center
                bg-gray-700/30
                rounded-full group-focus:outline-none group-focus:ring-4 group-focus:ring-white
                group-hover:bg-gray-800/60
            `}
            >
                {props.children}
            </span>
        </button>
    );
}
export default function Carousel({ children, slideAuto }: CarouselProps) {
    const currentIndex = 0;
    const NUMBER_OF_ITENS = children.length;
    return (
        <Wrap>
            <Container>
                <Wrap>
                    <div className="relative rounded-lg mb-5">
                        {Children.map(children, (son: JSX.Element, i) => {
                            const sonProps = son.props;
                            return cloneElement(son, {
                                className: `${
                                    i === currentIndex ? '' : 'hidden'
                                }`,
                            });
                        })}
                    </div>
                    <Flex clasName="absolute bottom-5 left-1/2 z-30 translate-x-1/2 gap-2">
                        {Array.from({ length: NUMBER_OF_ITENS }).map((_, i) => {
                            return (
                                <button
                                    key={i}
                                    className={mergeClasses(
                                        'h-3 w-3 rounded-full bg-gray-800',
                                        { 'bg-gray-500': i === currentIndex }
                                    )}
                                >
                                    0
                                </button>
                            );
                        })}
                    </Flex>
                </Wrap>
            </Container>
            <ButtonSide left>
                <CaretLeft size={20} />
            </ButtonSide>
            <ButtonSide right>
                <CaretRight size={20} />
            </ButtonSide>
        </Wrap>
    );
}
