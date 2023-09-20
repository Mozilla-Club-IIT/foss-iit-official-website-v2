import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/constants/placeholders";
import { REGISTER } from "@/constants/links";

import HeroLayout from "@/components/hero/HeroLayout";
import ProjectCard from "@/components/cards/ProjectCard";

import IsometricCubeSet from "public/isometric-cubeset.webp";

export default function Home() {
    return (
        <>
            <Hero />
            <WhoAreWe />
            <Projects />
        </>
    );
}

const Hero: FC = () => {
    return (
        <div className="relative flex items-center" style={{ height: "calc(100vh - 8rem)" }}>
            <HeroLayout
                title={["Mozilla Campus Club", "And FOSS Community Of IIT"]}
                subtitle="Contribute, Inspire and Innovate"
            >
                <a href={REGISTER} target="_blank" className="button-accented">
                    Join Us
                </a>
                <Link href="/about" className="button-layout">
                    Learn More
                </Link>
            </HeroLayout>

            <div className="absolute right-0 hidden w-2/5 -bottom-22 lg:block">
                <Image src={IsometricCubeSet} alt="" />
            </div>
        </div>
    );
};

const WhoAreWe: FC = () => {
    return (
        <div className="container-content-prose">
            <h1 className="text-style-heading">Who are we</h1>
            <p>
                FOSS (Free and Open-Source Software) community of IIT was initiated in our
                university in November 2020 to promote the use and development of free and
                open-source software.
            </p>
            <p>
                Although the FOSS community is new to IIT, we have already conducted programs to
                advance the club’s progress and collaborated for events with the FOSS communities of
                reputed universities to advocate and is responsible for.
            </p>
            <p>
                The Mozilla Campus Club of Informatics Institute of Technology (IIT) has been in a
                society with a long-standing reputation for hosting sessions and events that
                encourage students to contribute to keeping resources and information on the
                Internet public and accessible to all.
            </p>
        </div>
    );
};

const Projects: FC = () => {
    return (
        <div className="mb-24 gap-8 container-content-block">
            <h1 className="text-style-heading">Projects</h1>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.name} {...project} />
                ))}
            </div>
        </div>
    );
};
