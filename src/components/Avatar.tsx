import clsx from "clsx";
import Image from "next/image";

import type { Member } from "@/types/internal";

const sizing = {
    "16": ["size-16", "size-8"],
    "8": ["size-8", "size-4"],
    "fill": ["bg-center", "size-16"],
};

type Props = Pick<Member, "name" | "imageURL"> & {
    size?: keyof typeof sizing;
};

export default function Avatar({ name, imageURL, size = "16" }: Props) {
    const [wrapperClass, innerClass] = sizing[size];
    const fill = size === "fill";

    if (imageURL === null) {
        return (
            <div
                className={clsx(
                    "inline-flex items-center justify-center bg-bg-lighter text-surface-light",
                    fill ? "size-full" : "rounded-full",
                    wrapperClass,
                )}
            >
                <div className={clsx("i-mdi-person-outline", innerClass)} />
            </div>
        );
    }

    return (
        <Image
            src={imageURL}
            height={fill ? undefined : 256}
            width={fill ? undefined : 256}
            alt={`${name}'s profile picture`}
            fill={fill}
            className={clsx(!fill && "rounded-full", wrapperClass)}
        />
    );
}
