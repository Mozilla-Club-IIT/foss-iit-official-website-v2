import { FC } from "react";

import AccentedButton from "@/components/buttons/AccentedButton";
import TrailingIconButton from "@/components/buttons/TrailingIconButton";
import HeroLayout from "@/components/hero/HeroLayout";
import EventTimeLine from "@/components/trees/EventTimeLine";

export default function Home() {
    return (
        <div className="z-20 flex flex-col containerify">
            <Hero />
            <EventTimeLine />
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
