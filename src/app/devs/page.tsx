import Image from "next/image";
import type { FC } from "react";

import type { Member } from "@/types/internal";

import TechnologyCard from "@/components/cards/TechnologyCard";
import AccentedButton from "@/components/buttons/AccentedButton";
import TrailingIconButton from "@/components/buttons/TrailingIconButton";
import HeroLayout from "@/components/hero/HeroLayout";
import MemberCard from "@/components/cards/MemberCard";

export default function Devs() {
    return (
        <div className="containerify z-20 flex flex-col">
            <Hero />
            <TechnologiesUsed />
            <Developers />
        </div>
    );
}

const Hero: FC = () => {
    return (
        <div className="flex items-center justify-between" style={{ height: "calc(100vh - 8rem)" }}>
            <HeroLayout
                title={["MEET THE", "DEVELOPERS"]}
                subtitle={[
                    "Get to the know the ins and out of the website",
                    "and the team behind it",
                ]}
            >
                <AccentedButton label="The Team" />
                <TrailingIconButton label="Tech used" icon="i-mdi-arrow-top-right" />
            </HeroLayout>

            <div className="h-full w-1/3 pr-20">
                <Image
                    width={510}
                    height={768}
                    src={"/opensource-code.png"}
                    alt="Open Source"
                    className="!h-full"
                    style={{ objectFit: "contain" }}
                />
            </div>
        </div>
    );
};

const TechnologiesUsed: FC = () => {
    return (
        <div className="mt-24 w-full flex flex-col gap-8 px-16">
            <h1 className="text-5xl font-medium leading-tight uppercase text-text-primary">
                Technologies Used
            </h1>
            <div className="grid grid-cols-5">
                <TechnologyCard name="Sanity" icon="i-logos-sanity" />
                <TechnologyCard name="React" icon="i-logos-react" />
                <TechnologyCard name="NextJS" icon="i-logos-nextjs invert" />
                <TechnologyCard name="Typescript" icon="i-logos-typescript-icon" />
                <TechnologyCard name="UnoCSS" icon="i-logos-unocss invert" />
            </div>
            <button className="mx-auto inline-flex text-center text-2xl">
                Take a peek inside the code
                <div className="i-mdi-arrow-top-right text-xl"></div>
            </button>
        </div>
    );
};

const Developers: FC = () => {
    return (
        <div className="mb-24 mt-26 flex flex-col gap-8 px-16">
            <h1 className="text-5xl font-medium leading-tight uppercase text-text-primary">
                Developers
            </h1>
            <div className="grid grid-cols-3 gap-6">
                {developers.map((developer) => {
                    return (
                        <MemberCard
                            key={developer.name}
                            name={developer.name}
                            role={developer.role}
                            imageURL={developer.imageURL}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const developers: Member[] = [
    {
        name: "Sahan Dissanayake",
        role: "UI/UX Designer",
        imageURL: "/react-logo.png",
    },
    {
        name: "Sahan Dissanayake",
        role: "UI/UX Designer",
        imageURL: "/react-logo.png",
    },
    {
        name: "Sahan Dissanayake",
        role: "UI/UX Designer",
        imageURL: "/react-logo.png",
    },
    {
        name: "Sahan Dissanayake",
        role: "UI/UX Designer",
        imageURL: "/react-logo.png",
    },
    {
        name: "Sahan Dissanayake",
        role: "UI/UX Designer",
        imageURL: "/react-logo.png",
    },
];
