import type { FC } from "react";

import clsx from "clsx";
import cn from "@/utils/cn";
import type { Member, MemberGroup, MemberUnion } from "@/types/internal";

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
        <div className="max-h-xl flex items-center" style={{ height: "calc(100vh - 8rem)" }}>
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
            <div className="h-full w-[2px] rounded-2xl bg-border-separator/49" />
        </div>
    );
};

const FlexibleMemberCard: FC<{ member: Member }> = ({ member }) => {
    return (
        <div className="col-span-full contents justify-center md:flex">
            <MemberCard member={member} className="col-span-full md:w-104" />
        </div>
    );
};

const MemberTree: FC = () => {
    return (
        <div className="grid grid-cols-8 mb-36 mt-24 justify-items-center md:gap-x-6">
            <FlexibleMemberCard member={members[0] as Member} />
            <TreeSpacer />
            <FlexibleMemberCard member={members[1] as Member} />
            <TreeSpacer className="h-32" />

            {(members[2] as MemberUnion[]).map((x, i) => {
                // @ts-expect-error Check if item is a mem type or not.
                const isMember = x["role"] !== undefined;

                return (
                    <MemberCard
                        key={x.name}
                        member={isMember ? (x as Member) : undefined}
                        group={isMember ? undefined : (x as MemberGroup)}
                        className={clsx(
                            "col-span-full my-2 md:col-span-2 md:my-0",
                            i === 0 ? "md:col-start-2" : "",
                        )}
                    />
                );
            })}

            <TreeSpacer className="h-32" />

            {(members[3] as MemberUnion[]).map((member, i) => {
                // @ts-expect-error Check if item is a mem type or not.
                const isMember = member["role"] !== undefined;

                return (
                    <MemberCard
                        key={member.name}
                        member={isMember ? (member as Member) : undefined}
                        group={isMember ? undefined : (member as MemberGroup)}
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
