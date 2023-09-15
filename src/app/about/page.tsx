import type { FC } from "react";

import MemberCard, { type Props as MemberCardProps } from "@/components/cards/MemberCard";

// import AccentedButton from "@/components/buttons/AccentedButton";
// import TrailingIconButton from "@/components/buttons/TrailingIconButton";

export default function About() {
    return (
        <div className="z-20 flex flex-col">
            <Hero />
            <MemberTree />
        </div>
    );
}

const Hero: FC = () => {
    return (
        <div className="flex items-center" style={{ height: "calc(100vh - 8rem)" }}>
            <div className="flex flex-col px-16">
                <h1 className="text-5xl leading-tight uppercase text-text-neutral">
                    GET TO KNOW <br /> THE Board of officials
                </h1>
                <span className="mt-8 text-lg font-medium font-italic">
                    Meet the Minds Behind Mozilla Campus Club and FOSS Community at IIT: <br />
                    Our Distinguished Board of Officials
                </span>

                <div className="mt-24 h-10 inline-flex gap-8">
                    {/* <AccentedButton label="Join Us" /> */}
                    {/* <TrailingIconButton icon="i-mdi-arrow-top-right" label="Learn More" /> */}
                </div>
            </div>
        </div>
    );
};

type Member = Omit<MemberCardProps, "position">;
const members: Record<0 | 1 | 2 | 3, Member | Member[]> = {
    0: {
        name: "Sahan Ekanayake",
        role: "President - Mozzila Campus club of IIT",
        imageURL: "",
    },
    1: {
        name: "Sachith Arianatha",
        role: "President - Mozilla Campus club of IIT",
        imageURL: "",
    },
    2: [
        { name: "Bhagya", role: "President - Mozilla Campus club of IIT", imageURL: "" },
        { name: "Vinuja", role: "President - Mozilla Campus club of IIT", imageURL: "" },
        { name: "Devmal", role: "President - Mozilla Campus club of IIT", imageURL: "" },
    ],
    3: [
        { name: "Media Directors", role: "President - Mozilla Campus club of IIT", imageURL: "" },
        { name: "Manupa Chathurwara", role: "Director of IIT", imageURL: "" },
        { name: "Abrar", role: "Director Membership & Club Growth", imageURL: "" },
        { name: "Shakthi ", role: "Editor", imageURL: "" },
    ],
};

const MemberTree: FC = () => {
    return (
        <div className="grid grid-cols-8 my-24 justify-items-center gap-x-6 gap-y-24 px-12">
            <div className="col-span-full flex justify-center">
                <MemberCard
                    name={(members[0] as Member).name}
                    role={(members[0] as Member).role}
                    imageURL={(members[0] as Member).imageURL}
                    className="w-104"
                />
            </div>

            <div className="col-span-full flex justify-center">
                <MemberCard
                    name={(members[1] as Member).name}
                    role={(members[1] as Member).role}
                    imageURL={(members[1] as Member).imageURL}
                    className="w-104"
                />
            </div>

            {(members[2] as Member[]).map((member, i) => {
                return (
                    <MemberCard
                        key={member.name}
                        name={member.name}
                        role={member.role}
                        imageURL={member.imageURL}
                        className={`col-span-2 ${i === 0 ? "col-start-2" : ""}`}
                    />
                );
            })}

            {(members[3] as Member[]).map((member, i) => {
                return (
                    <MemberCard
                        key={member.name}
                        name={member.name}
                        role={member.role}
                        imageURL={member.imageURL}
                        className={`col-span-2 ${i === 0 ? "col-start-1" : ""}`}
                    />
                );
            })}
        </div>
    );
};
