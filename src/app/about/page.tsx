import type { FC } from "react";

import clsx from "clsx";
import cn from "@/utils/cn";
import type { Member } from "@/types/internal";

import MemberCard from "@/components/cards/MemberCard";
import HeroLayout from "@/components/hero/HeroLayout";

import { members } from "@/constants/placeholders";

export default function About() {
    return (
        <>
            <Hero />
            <MemberTree />
        </>
    );
}

const Hero: FC = () => {
    return (
        <div className="max-h-3xl flex items-center" style={{ height: "calc(100vh - 8rem)" }}>
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

const TreeSpacer: FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={cn("col-span-full h-48 flex items-center justify-center py-8", className)}>
            <div className="h-full b-x-1 b-x-border-separator/49" />
        </div>
    );
};

const FlexibleMemberCard: FC<{ member: Member }> = ({ member }) => {
    return (
        <div className="col-span-full contents justify-center md:flex">
            <MemberCard {...member} className="col-span-full md:w-104" />
        </div>
    );
};

const MemberTree: FC = () => {
    return (
        <div className="grid grid-cols-8 my-24 justify-items-center md:gap-x-6">
            <FlexibleMemberCard member={members[0] as Member} />
            <TreeSpacer />
            <FlexibleMemberCard member={members[1] as Member} />
            <TreeSpacer className="h-32" />

            {(members[2] as Member[]).map((member, i) => {
                return (
                    <MemberCard
                        key={member.name}
                        {...member}
                        className={clsx(
                            "col-span-full my-2 md:col-span-2 md:my-0",
                            i === 0 ? "md:col-start-2" : "",
                        )}
                    />
                );
            })}

            <TreeSpacer className="h-32" />

            {(members[3] as Member[]).map((member, i) => {
                return (
                    <MemberCard
                        key={member.name}
                        {...member}
                        className={clsx(
                            "col-span-full my-2 md:col-span-2 md:my-0",
                            i === 0 ? "md:col-start-1" : "",
                        )}
                    />
                );
            })}
        </div>
    );
};
