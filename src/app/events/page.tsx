import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

import { PAST_EVENTS } from "@/constants/data";

import EventCard from "@/components/cards/EventCard";
import HeroLayout from "@/components/hero/HeroLayout";
import { MotionWrapper } from "@/components/MotionWrapper";
import EventTimeLine from "@/components/trees/EventTimeLine";

import RedString from "@/assets/decorations/events.webp";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mozilla Campus Club of IIT - Events",
};

export default function Events() {
    return (
        <MotionWrapper>
            <div className="absolute right-0 hidden w-full -top-14 lg:block">
                <Image src={RedString} alt="" />
            </div>
            <Hero />
            <EventTimeLine />
            <PastEvents />
        </MotionWrapper>
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
                <Link href="#upcomingevents" className="button-accented">
                    Latest Events
                </Link>
                <Link href="#pastevents" className="button-layout">
                    All Events
                </Link>
            </HeroLayout>
        </div>
    );
};

const PastEvents: FC = () => {
    return (
        // NOTE(Curstantine): temp mt override, right now the event tree is a bit small.
        <div id="pastevents" className="mb-24 mt-32 gap-4 container-content-block">
            <h1 className="text-style-heading">Past Events</h1>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] justify-items-center gap-4 2xl:grid-cols-[repeat(auto-fill,minmax(18rem,1fr))] md:justify-items-start">
                {PAST_EVENTS.map((event) => {
                    return (
                        <EventCard key={event.name} name={event.name} imageURL={event.imageURL} />
                    );
                })}
            </div>
        </div>
    );
};
