import { FC } from "react";

import AccentedButton from "@/components/buttons/AccentedButton";
import TrailingIconButton from "@/components/buttons/TrailingIconButton";
import HeroLayout from "@/components/hero/HeroLayout";
import EventTimeLine from "@/components/trees/EventTimeLine";
import EventCard from "@/components/cards/EventCard";

import { events } from "@/constants/placeholders";

export default function Home() {
    return (
        <div className="z-20 flex flex-col containerify">
            <Hero />
            <EventTimeLine />
            <PastEvents />
        </div>
    );
}

const Hero: FC = () => {
    return (
        <div className="flex items-center" style={{ height: "calc(100vh - 8rem)" }}>
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
        <div className="mb-24 mt-26 flex flex-col gap-8 px-16">
            <h1 className="text-5xl font-medium leading-tight uppercase text-text-primary">
                Past Events
            </h1>
            <div className="grid grid-cols-4 gap-6">
                {events.map((event) => {
                    return (
                        <EventCard key={event.name} name={event.name} imageURL={event.imageURL} />
                    );
                })}
            </div>
        </div>
    );
};
