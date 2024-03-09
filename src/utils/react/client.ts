"use client";

import {
    config,
    type SpringValue,
    type TransitionFn,
    useChain,
    useSpring,
    useSpringRef,
    useTransition,
} from "@react-spring/web";
import { useEffect, useState } from "react";

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
): [{ x: SpringValue<number> }, TransitionFn<T, { opacity: number; y: number }>] {
    const springRef = useSpringRef();
    const springs = useSpring({
        ref: springRef,
        x: active ? 100 : 0,
    });

    const transRef = useSpringRef();
    const transition = useTransition(active ? elements : [], {
        ref: transRef,
        trail: 50,
        from: { opacity: 0, y: 20 },
        enter: { opacity: 1, y: 0 },
        config: {
            ...config.molasses,
            duration: 500,
        },
    });

    useChain([springRef, transRef]);

    return [springs, transition];
}
