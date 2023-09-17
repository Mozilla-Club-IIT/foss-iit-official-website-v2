"use client";

import { useEffect, useState } from "react";
import {
    useChain,
    useSpring,
    useSpringRef,
    useTransition,
    config,
    type SpringValue,
    type TransitionFn,
} from "@react-spring/web";

export function useIsVisible(ref: React.RefObject<HTMLElement>, { cancelOnFirstHit = false }) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
            if (cancelOnFirstHit && entry.isIntersecting) {
                observer.disconnect();
            }
        });

        observer.observe(ref.current!);

        return () => {
            observer.disconnect();
        };
    }, [ref, cancelOnFirstHit]);

    return isIntersecting;
}

export function useChainedTransition<T>(
    active: boolean,
    elements: Array<T>,
): [{ x: SpringValue<number> }, TransitionFn<T, { opacity: number }>] {
    const springRef = useSpringRef();
    const springs = useSpring({
        ref: springRef,
        x: active ? 100 : 0,
        config: {
            ...config.molasses,
            duration: 500,
        },
    });

    const transRef = useSpringRef();
    const transition = useTransition(active ? elements : [], {
        ref: transRef,
        trail: 50,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        config: {
            ...config.molasses,
            duration: 500,
        },
    });

    useChain([springRef, transRef]);

    return [springs, transition];
}
