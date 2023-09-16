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
        <div className="grid grid-cols-2 my-24 items-center gap-12">
            {Array.from({ length: 5 }).map((_, i) => (
                <EventCardWrapper key={`event-${i}`} event={event} isEven={i % 2 === 0} />
            ))}
        </div>
    );
}
