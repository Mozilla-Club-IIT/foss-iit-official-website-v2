import type { ExternalLink, Member } from "@/types/internal";

import Avatar from "@/components/Avatar";
import SocialLink from "@/components/buttons/SocialLink";
import cn from "@/utils/cn";

type Props = Member & {
    className?: string;
};

export default function WIFMemberCard(
    { name, role, imageURL, externalLinks = {}, className }: Props,
) {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-between overflow-hidden rounded-6 bg-[#9B9B9B]/22",
                className,
            )}
        >
            <Avatar
                name={name}
                imageURL={imageURL}
                className="size-64 rounded-b-none rounded-t-6 my-0 "
            />

            <span className="mb-0 mt-3 text-center text-xl font-bold">{name}</span>
            <span className="text-sm text-text-secondary leading-tight">{role}</span>

            <div className="my-3 flex gap-2">
                {Object.entries(externalLinks).map(([key, value]) => (
                    <SocialLink
                        key={key}
                        type={key as ExternalLink}
                        href={value}
                        className="border-[#D7D7D7]/14 text-text-secondary"
                    />
                ))}
            </div>
        </div>
    );
}
