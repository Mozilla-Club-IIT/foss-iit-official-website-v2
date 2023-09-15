import Image from "next/image";

import SocialLink from "../buttons/SocialLink";

type Props = {
    imgURL: string;
    name: string;
    socials: { [social: string]: string };
    className?: string;
};

export default function MemberSquareCard({ imgURL, name, socials }: Props) {
    return (
        <div className="flex flex-col items-center justify-between overflow-hidden rounded-6 bg-[#9B9B9B]/22">
            <div className="relative h-64 w-76">
                <Image
                    src={imgURL}
                    alt={`${name} picture`}
                    layout="fill"
                    className="bg-center object-cover"
                />
            </div>

            <p className="mb-0 mt-3 text-center text-xl font-bold">{name}</p>

            <div className="my-3 flex gap-2">
                <SocialLink
                    href={socials["linkedin"]}
                    icon="i-bxl-linkedin"
                    className="border-[#D7D7D7]/14"
                />
                <SocialLink
                    href={socials["linkedin"]}
                    icon="i-bxl-linkedin"
                    className="border-[#D7D7D7]/14"
                />
                <SocialLink
                    href={socials["linkedin"]}
                    icon="i-bxl-linkedin"
                    className="border-[#D7D7D7]/14"
                />
                <SocialLink
                    href={socials["linkedin"]}
                    icon="i-bxl-linkedin"
                    className="border-[#D7D7D7]/14"
                />
            </div>
        </div>
    );
}
