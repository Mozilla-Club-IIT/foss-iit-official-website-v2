"use client";

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
