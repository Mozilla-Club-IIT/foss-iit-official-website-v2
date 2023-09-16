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

import { EventCardWrapper } from "@/components/cards/EventCard";

const event: Event = {
    name: "OpenHack 3.0",
    imageURL: "",
    description: [
        "The signature event of the club was successfully held as an inter-university hackathon and a designathon in 2022. The event is expected to be held in 2023 as well.",
    ],
    startingDate: new Date("2023-08-18"),
};

const data: Event[] = Array.from({ length: 5 }).map((_, i) => ({
    ...event,
    name: `OpenHack ${i}`,
}));

export default function EventTimeLine() {
    const divRef = useRef<HTMLDivElement>(null);
    const isInView = useIsVisible(divRef, { cancelOnFirstHit: false });

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
    const transition = useTransition(isInView ? data : [], {
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
        <div ref={divRef} className="relative grid grid-cols-2 my-24 items-center gap-12 gap-x-16">
            {transition((style, item, _, i) => {
                return (
                    <EventCardWrapper
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
                {Array.from({ length: 5 }).map((_, i) => (
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
