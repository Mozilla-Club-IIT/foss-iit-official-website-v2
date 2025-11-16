import cn from "@/utils/cn";

import Image, { type StaticImageData } from "next/image";

const sizing = {
    "16": ["size-16", "size-8"],
    "8": ["size-8", "size-4"],
};

type Props = {
    name: string;
    imageURL: string | StaticImageData | null;
    size?: keyof typeof sizing;
    className?: string;
    height?: number;
    width?: number;
};

export default function Avatar({
    name,
    imageURL,
    size = "16",
    className,
    height = 256,
    width = 256,
}: Props) {
    const [wrapperClass, innerClass] = sizing[size];

    if (imageURL === null) {
        return (
            <div
                className={cn(
                    "inline-flex items-center justify-center bg-bg-lighter text-surface-light rounded-full",
                    wrapperClass,
                    className,
                )}
            >
                <div className={cn("i-mdi-person-outline", innerClass)} />
            </div>
        );
    }

    return (
        <Image
            src={imageURL}
            height={height}
            width={width}
            alt={`${name}'s profile picture`}
            className={cn("rounded-full", wrapperClass, className)}
        />
    );
}
