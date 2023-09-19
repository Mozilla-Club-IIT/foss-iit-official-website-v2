import type { FC } from "react";
import Image from "next/image";

import AccentedButton from "@/components/buttons/AccentedButton";
import TrailingIconButton from "@/components/buttons/TrailingIconButton";
import HeroLayout from "@/components/hero/HeroLayout";
import EventTimeLine from "@/components/trees/EventTimeLine";
import EventCard from "@/components/cards/EventCard";

import { events } from "@/constants/placeholders";

import RedString from "public/onlygodknowswhatthisis.png";

export default function Events() {
    return (
        <>
            <Hero />
            <EventTimeLine />
            <PastEvents />
        </>
    );
}

const Hero: FC = () => {
    return (
        <div
            className="relative max-h-5xl flex items-center"
            style={{ height: "calc(100vh - 8rem)" }}
        >
            <HeroLayout
                title="Our Events"
                subtitle={[
                    "Embark on a journey of knowledge, collaboration,",
                    "and innovation.",
                    "Discover a dynamic array of events brought to you by",
                    "the Mozilla Campus Club and FOSS Community at IIT.",
                ]}
            >
                <AccentedButton label="Latest Events" />
                <TrailingIconButton icon="i-mdi-arrow-top-right" label="All Events" />
            </HeroLayout>
            <div className="absolute hidden w-[calc(100%+12rem)] -right-24 -top-14 lg:block">
                <Image src={RedString} alt="" />
            </div>
        </div>
    );
};

const PastEvents: FC = () => {
    return (
        <div className="mb-24 gap-4 container-content-block">
            <h1 className="text-style-heading">Past Events</h1>
            <div className="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:justify-items-start">
                {events.map((event) => {
                    return (
                        <EventCard key={event.name} name={event.name} imageURL={event.imageURL} />
                    );
                })}
            </div>
        </div>
    );
};
