"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

import cn from "@/utils/cn";
import type { ExternalLink, Member } from "@/types/internal";

import SocialLink from "@/components/buttons/SocialLink";

type Props = Member & {
    className?: string;
};

const MemberDetailRow: FC<
    Omit<Member, "externalLinks"> & {
        isExpanded: boolean;
        onExpand: () => void;
    }
> = ({ name, role, imageURL, isExpanded, onExpand }) => {
    return (
        <div className="h-22 min-h-22 flex items-center gap-3">
            <Image
                src={imageURL}
                height={64}
                width={64}
                alt={`${name}'s profile picture`}
                className="h-16 min-w-16 w-16 rounded-full object-cover"
            />
            <div className="flex flex-1 flex-col gap-1">
                <span className="font-medium leading-tight text-text-primary">{name}</span>
                <span className="text-xs leading-tight text-text-primary/50">{role} </span>
            </div>
            <button onClick={() => onExpand()} className="inline-flex">
                <div
                    className={cn(
                        "i-mdi-chevron-down h-6 w-6 text-text-secondary transition-transform transform-gpu use-transition-emphasized",
                        { "rotate-180": isExpanded },
                    )}
                />
            </button>
        </div>
    );
};

const MemberExpandedDetailsRow: FC<Pick<Member, "externalLinks">> = ({ externalLinks }) => {
    const springs = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    return (
        <animated.div className="h-full flex flex-col gap-2 p-2" style={springs}>
            <span className="text-xs text-text-primary/60">
                <p>Undergraduate trainee - Software Engineering @ IFS R&D</p>
                <p>3rd Year undergraduate - IIT</p>
            </span>
            <div className="grid grid-cols-5 mt-1">
                {Object.entries(externalLinks).map(([key, value]) => (
                    <SocialLink
                        key={key}
                        type={key as ExternalLink}
                        href={value}
                        className="border-[#D7D7D7]/14"
                    />
                ))}
            </div>
            <div className="my-2 h-0 b-t-2 b-t-border-separator/35" />
            <span className="pb-1 font-bold leading-2 text-text-primary/50">
                People Who Reports To Director of IT
            </span>
            <div className="flex gap-4">
                {Array.from({ length: 5 })
                    .fill("/portraits/nadul.png")
                    .map((x) => (
                        <Image
                            key={x as string}
                            src={x as string}
                            height={32}
                            width={32}
                            alt="nadul"
                            className="h-8 min-w-8 w-8 rounded-full object-cover"
                        />
                    ))}
            </div>
        </animated.div>
    );
};
export default function MemberCard({ name, role, imageURL, externalLinks, className }: Props) {
    const [isVisible, setVisibility] = useState(true);

    return (
        <div className={cn("relative w-full h-22", className)}>
            <div
                className={cn(
                    "absolute inset-0 h-22 flex flex-col rounded-3xl bg-white/9 px-3",
                    "transition-height transform-gpu use-transition-emphasized",
                    {
                        "h-72 bg-[#2B2B2B]! z-30 shadow-lg": isVisible,
                    },
                )}
                onBlur={() => setVisibility(false)}
            >
                <MemberDetailRow
                    name={name}
                    role={role}
                    imageURL={imageURL}
                    isExpanded={isVisible}
                    onExpand={() => setVisibility((x) => !x)}
                />
                {isVisible && <MemberExpandedDetailsRow externalLinks={externalLinks} />}
            </div>
        </div>
    );
}
