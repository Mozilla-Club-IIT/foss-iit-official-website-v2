"use client";

import { FC, useEffect, useRef, useState } from "react";
import { animated } from "@react-spring/web";

import { useChainedTransition, useIsVisible } from "@/utils/react/client";
import { events } from "@/constants/placeholders";
import { Event } from "@/types/internal";

import {
    EventTreeCardFlexWrapper,
    EventTreeCardGridWrapper,
} from "@/components/cards/EventTreeCard";

export default function EventTimeLine() {
    const [isMobile, setMobileStatus] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setMobileStatus(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return isMobile ? <Mobile events={events} /> : <Desktop events={events} />;
}

const Desktop: FC<{ events: Event[] }> = ({ events }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useIsVisible(ref, { cancelOnFirstHit: true });
    const [springs, transition] = useChainedTransition(isInView, events);

    return (
        <div
            ref={ref}
            className="relative grid grid-cols-2 mt-24 items-center gap-12 gap-x-16 px-12"
        >
            {transition((style, item, _, i) => {
                return (
                    <EventTreeCardGridWrapper
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
                            opacity: springs.x,
                        }}
                        className="absolute h-8 w-8 border-4 border-accent-border rounded-full bg-bg-dark transition-opacity -left-3"
                    />
                ))}
            </div>
        </div>
    );
};

const Mobile: FC<{ events: Event[] }> = ({ events }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useIsVisible(ref, { cancelOnFirstHit: true });
    const [springs, transition] = useChainedTransition(isInView, events);

    return (
        <div ref={ref} className="relative mt-24 flex flex-col items-center gap-12 pl-8">
            {transition((style, item, _, i) => {
                return (
                    <div className="relative">
                        <animated.div
                            key={i}
                            style={{
                                opacity: springs.x,
                            }}
                            className="absolute z-10 h-8 w-8 border-4 border-accent-border rounded-full bg-bg-dark transition-opacity -left-11"
                        />
                        <EventTreeCardFlexWrapper key={item.name} style={style} event={item} />
                    </div>
                );
            })}
            <div className="absolute inset-y-0 left-0 w-2">
                <animated.div
                    className="h-full w-2 transform-gpu bg-text-secondary transition-transform"
                    style={{
                        height: springs.x.to((y) => `${y}%`),
                    }}
                />
            </div>
        </div>
    );
};
