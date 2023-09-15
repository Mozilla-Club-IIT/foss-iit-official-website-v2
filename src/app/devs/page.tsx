import Image from "next/image";
import type { FC } from "react";

import DeveloperCard from "./DeveloperCard";
import TechnologyCard from "./TechnologyCard";

export default function Devs() {
    return (
        <div className="z-20 flex flex-col">
            <Hero />
            <TechnologiesUsed />
            <Developers />
        </div>
    );
}

const Hero: FC = () => {
    return (
        <div className="flex items-center justify-between" style={{ height: "calc(100vh - 8rem)" }}>
            <div className="flex flex-col px-16">
                <h1 className="text-5xl leading-tight uppercase text-text-neutral">
                    MEET THE <br />
                    DEVELOPERS
                </h1>
                <span className="mt-8 text-3xl leading-relaxed capitalize font-italic">
                    Get to the know the ins and outs of the website <br /> and the team behind it
                </span>

                <div className="mt-24 inline-flex gap-8">
                    <button className="bg-accent h-10 rounded-xl px-6 font-medium shadow">
                        Join Us
                    </button>
                    <button className="h-10 inline-flex items-center">
                        Learn More
                        <div className="i-mdi-arrow-top-right mb-1 ml-1 h-4 w-4" />
                    </button>
                </div>
            </div>
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
        <div className="mt-24 w-full flex flex-col px-16">
            <h1 className="text-5xl leading-tight uppercase text-text-neutral">
                Technologies Used
            </h1>
            <div className="my-8 flex flex-wrap justify-center gap-6">
                {technologies.map((technology, index) => {
                    return (
                        <TechnologyCard
                            key={index}
                            imgURL={technology.imgURL}
                            name={technology.name}
                        />
                    );
                })}
            </div>
            <button className="mx-auto inline-flex text-center text-3xl font-300 leading-relaxed">
                Take a peek inside the code
                <div className="i-mdi-arrow-top-right mt-2 text-3xl"></div>
            </button>
        </div>
    );
};

const Developers: FC = () => {
    return (
        <div className="mt-24 w-full flex flex-col px-16">
            <h1 className="text-5xl leading-tight uppercase text-text-neutral">Developers</h1>
            <div className="my-8 flex flex-wrap gap-6">
                {developers.map((developer, index) => {
                    return (
                        <DeveloperCard
                            key={index}
                            imgURL={developer.imgURL}
                            name={developer.fullname}
                            role={developer.title}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const technologies = [
    { imgURL: "/MongoDB-logo.png", name: "Sanity" },
    { imgURL: "/react-logo.png", name: "React" },
    { imgURL: "/express-logo.png", name: "NextJS" },
    { imgURL: "/typescript-logo.png", name: "TypeScript" },
    { imgURL: "/nodejs-logo.png", name: "UNOCSS" },
];

const developers = [
    {
        fullname: "Sahan Dissanayake",
        title: "UI/UX Designer",
        imgURL: "/react-logo.png",
    },
    {
        fullname: "Sahan Dissanayake",
        title: "UI/UX Designer",
        imgURL: "/react-logo.png",
    },
    {
        fullname: "Sahan Dissanayake",
        title: "UI/UX Designer",
        imgURL: "/react-logo.png",
    },
    {
        fullname: "Sahan Dissanayake",
        title: "UI/UX Designer",
        imgURL: "/react-logo.png",
    },
    {
        fullname: "Sahan Dissanayake",
        title: "UI/UX Designer",
        imgURL: "/react-logo.png",
    },
];
