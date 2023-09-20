"use client";

import { type FC, useEffect, useState } from "react";

import type { Event } from "@/types/internal";
import { events } from "@/constants/placeholders";

import {
    EventTreeCardFlexWrapper,
    EventTreeCardGridWrapper,
} from "@/components/cards/EventTreeCard";

export default function EventTimeLine() {
    const [isMobile, setMobileStatus] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setMobileStatus(window.innerWidth < 1024);
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
    return (
        <div
            id="upcomingevents"
            className="relative grid grid-cols-2 mt-24 items-center gap-12 gap-x-16 px-12"
        >
            {events.map((item, i) => (
                <EventTreeCardGridWrapper key={item.name} event={item} isEven={i % 2 === 0} />
            ))}
            <div className="absolute inset-x-1/2 inset-y-14 w-2">
                <div className="h-full w-2 transform-gpu bg-text-secondary transition-transform" />
                {events.map((_, i) => (
                    <div
                        key={i}
                        // 9rem for the component and 3rem for the vertical gap
                        style={{ top: `${i * 12}rem` }}
                        className="absolute h-8 w-8 border-4 border-accent-border rounded-full bg-bg-dark transition-opacity -left-3"
                    />
                ))}
            </div>
        </div>
    );
};

const Mobile: FC<{ events: Event[] }> = ({ events }) => {
    return (
        <div id="upcomingevents" className="relative mt-24 flex flex-col items-center gap-12 pl-8">
            {events.map((item) => (
                <div key={item.name} className="relative w-full">
                    <div className="absolute z-10 h-8 w-8 border-4 border-accent-border rounded-full bg-bg-dark transition-opacity -left-11" />
                    <EventTreeCardFlexWrapper key={item.name} event={item} />
                </div>
            ))}
            <div className="absolute inset-y-0 left-0 w-2">
                <div className="h-full w-2 transform-gpu bg-text-secondary transition-transform" />
            </div>
        </div>
    );
};
