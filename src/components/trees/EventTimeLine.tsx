"use client";

import { useRef } from "react";
import {
    useSpring,
    animated,
    useSpringRef,
    useTransition,
    useChain,
    config,
} from "@react-spring/web";

import type { Event } from "@/types/internal";
import { useIsVisible } from "@/utils/react/client";

import { EventTreeCardWrapper } from "@/components/cards/EventTreeCard";
import { events } from "@/constants/placeholders";

export default function EventTimeLine() {
    const divRef = useRef<HTMLDivElement>(null);
    const isInView = useIsVisible(divRef, { cancelOnFirstHit: true });

    const springRef = useSpringRef();
    const springs = useSpring({
        ref: springRef,
        x: isInView ? 100 : 0,
        config: {
            ...config.molasses,
            duration: 500,
        },
    });

    const transRef = useSpringRef();
    const transition = useTransition(isInView ? events : [], {
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

    return (
        <div
            ref={divRef}
            className="relative grid grid-cols-2 mt-24 items-center gap-12 gap-x-16 px-12"
        >
            {transition((style, item, _, i) => {
                return (
                    <EventTreeCardWrapper
                        key={item.name}
                        event={item}
                        style={style}
                        isEven={i % 2 === 0}
                    />
                );
            })}
            <div className="absolute inset-x-1/2 inset-y-14 w-2">
                <animated.div
                    className="h-full w-2 transform-gpu bg-text-secondary transition-transform"
                    style={{
                        height: springs.x.to((y) => `${y}%`),
                    }}
                />
                {events.map((_, i) => (
                    <animated.div
                        key={i}
                        // 9rem for the component and 3rem for the vertical gap
                        style={{
                            top: `${i * 12}rem`,
                            opacity: springs.x.to((y) => (y >= i * 20 ? 1 : 0)),
                        }}
                        className="absolute h-8 w-8 border-4 border-accent-border rounded-full bg-bg-dark transition-opacity -left-3"
                    />
                ))}
            </div>
        </div>
    );
}
