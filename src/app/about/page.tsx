import type { FC } from "react";

import cn from "@/utils/cn";
import type { Member } from "@/types/internal";

import MemberCard from "@/components/cards/MemberCard";
import HeroLayout from "@/components/hero/HeroLayout";
// import AccentedButton from "@/components/buttons/AccentedButton";
// import TrailingIconButton from "@/components/buttons/TrailingIconButton";

export default function About() {
    return (
        <div className="containerify z-20 flex flex-col">
            <Hero />
            <MemberTree />
        </div>
    );
}

const Hero: FC = () => {
    return (
        <div className="flex items-center" style={{ height: "calc(100vh - 8rem)" }}>
            <HeroLayout
                title={["GET TO KNOW", "THE BOARD of officials"]}
                subtitle={[
                    "Meet the Minds Behind Mozilla Campus Club and FOSS Community at IIT: ",
                    "Our Distinguished Board of Officials",
                ]}
            />
        </div>
    );
};

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

const TreeSpacer: FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={cn("col-span-full h-48 flex items-center justify-center py-8", className)}>
            <div className="b-x-border-separator/49 h-full b-x-1" />
        </div>
    );
};

const MemberTree: FC = () => {
    return (
        <div className="grid grid-cols-8 my-24 justify-items-center gap-x-6 px-12">
            <div className="col-span-full flex justify-center">
                <MemberCard
                    name={(members[0] as Member).name}
                    role={(members[0] as Member).role}
                    imageURL={(members[0] as Member).imageURL}
                    className="w-104"
                />
            </div>

            <TreeSpacer />

            <div className="col-span-full flex justify-center">
                <MemberCard
                    name={(members[1] as Member).name}
                    role={(members[1] as Member).role}
                    imageURL={(members[1] as Member).imageURL}
                    className="w-104"
                />
            </div>

            <TreeSpacer className="h-32" />

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

            <TreeSpacer className="h-32" />

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
