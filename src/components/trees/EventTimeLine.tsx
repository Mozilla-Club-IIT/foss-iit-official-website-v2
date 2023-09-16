"use client";

import type { Event } from "@/types/internal";

import { EventCardWrapper } from "@/components/cards/EventCard";

const event: Event = {
    name: "OpenHack 3.0",
    imageURL: "",
    description: [
        "The signature event of the club was successfully held as an inter-university hackathon and a designathon in 2022. The event is expected to be held in 2023 as well.",
    ],
    startingDate: new Date("2023-08-18"),
};

export default function EventTimeLine() {
    return (
        <div className="relative grid grid-cols-2 my-24 items-center gap-12">
            {Array.from({ length: 5 }).map((_, i) => (
                <EventCardWrapper key={`event-${i}`} event={event} isEven={i % 2 === 0} />
            ))}
            <div className="absolute inset-x-1/2 inset-y-14 w-2">
                <div className="h-full w-2 bg-text-secondary" />
                {Array.from({ length: 5 }).map((_, i) => (
                    <div
                        key={i}
                        // 9rem for the component and 3rem for the vertical gap
                        style={{ top: `${i * 12}rem` }}
                        className="absolute h-8 w-8 border-4 border-accent-border rounded-full bg-bg-dark -left-3"
                    />
                ))}
            </div>
        </div>
    );
}
