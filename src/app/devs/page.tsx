import type { Metadata } from "next";
import Image from "next/image";
import type { FC } from "react";

import { DEVELOPERS } from "@/constants/data";

import TrailingIconButton from "@/components/buttons/TrailingIconButton";
import MemberCard from "@/components/cards/MemberCard";
import TechnologyCard from "@/components/cards/TechnologyCard";
import HeroLayout from "@/components/hero/HeroLayout";

import SourceCodeImage from "@/assets/decorations/code.png";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Mozilla Campus Club of IIT - Developers",
};

export default function Devs() {
    return (
        <>
            <Hero />
            <TechnologiesUsed />
            <Developers />
        </>
    );
}

const Hero: FC = () => {
    return (
        <div
            className="relative max-h-5xl flex items-center justify-between"
            style={{ height: "calc(100vh - 8rem)" }}
        >
            <HeroLayout
                title={["MEET THE", "DEVELOPERS"]}
                subtitle={[
                    "Get to the know the ins and out of the website",
                    "and the team behind it",
                ]}
            >
                <Link href="#team" className="button-accented">The team</Link>
                <TrailingIconButton label="Tech used" icon="i-mdi-arrow-top-right" />
            </HeroLayout>

            <div className="absolute bottom-0 right-0 z-10 hidden h-full w-1/3 lg:right-16 md:block">
                <Image
                    width={510}
                    height={768}
                    src={SourceCodeImage}
                    alt="Open Source"
                    className="object-contain !h-full"
                    aria-hidden
                />
            </div>
        </div>
    );
};

const TechnologiesUsed: FC = () => {
    return (
        <section id="tech-used" className="container-content-block gap-8">
            <h1 className="text-style-heading">Technologies Used</h1>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-[repeat(5,12rem)] md:grid-cols-[repeat(5,9rem)] md:self-center">
                <TechnologyCard name="Prismic" icon="i-logos-prismic-icon" />
                <TechnologyCard name="React" icon="i-logos-react" />
                <TechnologyCard name="NextJS" icon="i-logos-nextjs invert" />
                <TechnologyCard name="Typescript" icon="i-logos-typescript-icon" />
                <TechnologyCard name="UnoCSS" icon="i-logos-unocss invert" />
            </div>
            <button className="mx-auto inline-flex text-center text-xl md:text-2xl">
                Take a peek inside the code
                <div className="i-mdi-arrow-top-right text-xl"></div>
            </button>
        </section>
    );
};

const Developers: FC = () => {
    return (
        <section id="team" className="my-24 container-content-block gap-8">
            <h1 className="text-style-heading">Designers, Developers</h1>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {DEVELOPERS.map((developer) => (
                    <MemberCard key={developer.name} member={developer} />
                ))}
            </div>
        </section>
    );
};
