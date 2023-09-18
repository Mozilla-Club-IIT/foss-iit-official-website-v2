import Image from "next/image";

import type { ExternalLink, WIFBoardOfficial } from "@/types/internal";

import SocialLink from "@/components/buttons/SocialLink";

type Props = WIFBoardOfficial & {
    className?: string;
};

export default function WIFMemberCard({ name, imageURL, externalLinks = {} }: Props) {
    return (
        <div className="flex flex-col items-center justify-between overflow-hidden rounded-6 bg-[#9B9B9B]/22">
            <div className="relative h-64 w-full">
                <Image
                    src={imageURL}
                    alt={`${name} picture`}
                    layout="fill"
                    className="bg-center object-cover"
                />
            </div>

            <p className="mb-0 mt-3 text-center text-xl font-bold">{name}</p>

            <div className="my-3 flex gap-2">
                {Object.entries(externalLinks).map(([key, value]) => (
                    <SocialLink
                        key={key}
                        type={key as ExternalLink}
                        href={value}
                        className="border-[#D7D7D7]/14"
                    />
                ))}
            </div>
        </div>
    );
}
