import Image from "next/image";

import type { Event } from "@/types/internal";

type Props = Omit<Event, "startingDate" | "description"> & {
    className?: string;
};

export default function EventCard({ name, imageURL }: Props) {
    return (
        <div className="w-full flex flex-col items-center justify-between rounded-xl bg-white/10">
            <Image
                height={512}
                width={512}
                quality={100}
                src={imageURL}
                alt={name}
                draggable={false}
                className="aspect-square w-full rounded-t-xl object-cover md:p-4"
            />
            <span className="inline-flex px-2 py-4 text-center text-pretty text-xl font-bold">
                {name}
            </span>
        </div>
    );
}
