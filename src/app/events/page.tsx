import type { FC } from "react";
import Image from "next/image";

import { pastEvents } from "@/constants/placeholders";

import AccentedButton from "@/components/buttons/AccentedButton";
import TrailingIconButton from "@/components/buttons/TrailingIconButton";
import HeroLayout from "@/components/hero/HeroLayout";
import EventTimeLine from "@/components/trees/EventTimeLine";
import EventCard from "@/components/cards/EventCard";

import RedString from "public/onlygodknowswhatthisis.webp";

export default function Events() {
    return (
        <>
            <div className="absolute right-0 hidden w-full -top-14 lg:block">
                <Image src={RedString} alt="" />
            </div>
            <Hero />
            <EventTimeLine />
            <PastEvents />
        </>
    );
}

const Hero: FC = () => {
    return (
        <div className="max-h-5xl flex items-center" style={{ height: "calc(100vh - 8rem)" }}>
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
        </div>
    );
};

const PastEvents: FC = () => {
    return (
        <div className="mb-24 gap-4 container-content-block">
            <h1 className="text-style-heading">Past Events</h1>
            <div className="grid grid-cols-1 justify-items-center gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 md:justify-items-start">
                {pastEvents.map((event) => {
                    return (
                        <EventCard key={event.name} name={event.name} imageURL={event.imageURL} />
                    );
                })}
            </div>
        </div>
    );
};
