import Image from "next/image";

import type { ExternalLink, Event } from "@/types/internal";

import SocialLink from "@/components/buttons/SocialLink";

type Props = Omit<Event, "startingDate" | "description"> & {
    className?: string;
};

export default function EventCard({ name, imageURL, className }: Props) {
    return (
        <div className="flex flex-col items-center justify-between overflow-hidden rounded-6 bg-[#9B9B9B]/22">
            <div className="relative h-64 w-76">
                <Image
                    src={imageURL}
                    alt={`${name} picture`}
                    layout="fill"
                    className="bg-center object-cover"
                />
            </div>

            <p className="inline-flex py-4 text-center text-xl font-bold">{name}</p>
        </div>
    );
}
