import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { REGISTER } from "@/constants/links";
import { wifBoard } from "@/constants/placeholders";

import WIFMemberCard from "@/components/cards/WIFMemberCard";
import HeroLayout from "@/components/hero/HeroLayout";

export default function Home() {
    return (
        <>
            <Hero />
            <AboutUs />
            <OurMission />
            <OurVision />
            <BoardOfOfficials />
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
                title="WOMEN IN FOSS COMMUNITY OF IIT"
                subtitle={[
                    "Empowering Diversity, Fostering Collaboration,",
                    "and Building a Stronger FOSS Community Together",
                ]}
            >
                <a target="_blank" href={REGISTER} className="button-accented">Join Us</a>
                <Link href="#officials" className="button-layout">
                    Board of Officials
                </Link>
            </HeroLayout>
            <div className="absolute bottom-0 right-0 z-10 hidden w-2/5 lg:right-20 md:block">
                <Image
                    src="/wif-developer.png"
                    width={782}
                    height={521}
                    alt="WIF Female Developer"
                />
            </div>
        </div>
    );
};

const AboutUs: FC = () => {
    return (
        <div className="mt-24 max-w-full flex flex-col text-text-secondary container-content-prose">
            <h1 className="uppercase text-text-primary">ABOUT US</h1>
            <p>
                The Women in FOSS Community at IIT is an affinity group within the FOSS Community
                where we empower, inspire, and uplift women in the open-source landscape, creating a
                vibrant and supportive network where innovation and collaboration flourish. Join us
                at WIF and become a part of our vibrant community
            </p>
        </div>
    );
};

const OurMission: FC = () => {
    return (
        <div className="mt-24 max-w-full flex flex-col text-text-secondary container-content-prose">
            <h1 className="uppercase text-text-primary">Our Mission</h1>
            <p>
                To empower and inspire women, fostering a vibrant and inclusive environment
                regardless of gender identity, where innovation thrives, talent is empowered, and
                open web advocacy ignites.
            </p>
        </div>
    );
};

const OurVision: FC = () => {
    return (
        <div className="mt-24 max-w-full flex flex-col text-text-secondary container-content-prose">
            <h1 className="uppercase text-text-primary">Our Vision</h1>
            <p>
                We aspire to create an inclusive open-source community that encourages diversity,
                fosters innovation, and empowers women to lead in technology. Our goal is to inspire
                a future where women’s contributions play a pivotal role in advancing
                open-source software.
            </p>
        </div>
    );
};

const BoardOfOfficials: FC = () => (
    <div
        id="officials"
        className="my-24 max-w-full flex flex-col gap-8 text-text-secondary container-content-prose"
    >
        <h1 className="leading-tight uppercase text-text-primary">Board Of Officials</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] justify-center gap-6">
            {wifBoard.map((member) => (
                <WIFMemberCard
                    key={member.name}
                    name={member.name}
                    imageURL={member.imageURL}
                    externalLinks={member.externalLinks}
                />
            ))}
        </div>
    </div>
);
