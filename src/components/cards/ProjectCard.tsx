import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { type FC, useMemo } from "react";

import type { Project } from "@/types/internal";

type Props = Project;

export default function ProjectCard({ name, imageURL, accent, date, link }: Props) {
    return (
        <div
            className={clsx("w-full flex flex-col items-center justify-between rounded-xl", {
                "bg-white": accent === "light",
                "bg-bg-dark": accent === "dark",
            })}
        >
            <span
                className={clsx("w-full inline-flex p-4 text-start text-xl tracking-tight", {
                    "text-bg-dark": accent === "light",
                    "text-white": accent === "dark",
                })}
            >
                {name}
            </span>
            <Image
                src={imageURL}
                alt={name}
                width={1024}
                height={1024}
                quality={100}
                className="aspect-square w-full rounded-t-xl object-cover"
            />
            <DetailsRow accent={accent} date={date} link={link} />
        </div>
    );
}

const DetailsRow: FC<Pick<Project, "date" | "accent" | "link">> = ({ accent, date, link }) => {
    const isUpcoming = useMemo(() => typeof date === "string" || date > new Date(), [date]);

    return (
        <div
            className={clsx("h-12 w-full flex items-center border-t-1 px-4", {
                "b-t-border-separator text-bg-dark": accent === "light",
                "b-t-border-separator/50 text-text-primary": accent === "dark",
            })}
        >
            {isUpcoming && <p>Coming soon</p>}
            <div className="flex-1" />
            <Link
                href={link?.href ?? "#"}
                target={link?.external ? "_blank" : undefined}
                aria-disabled={link === undefined}
                className={clsx(
                    "h-8 inline-flex items-center justify-center rounded-xl px-4 aria-disabled:pointer-events-none aria-disabled:opacity-10",
                    {
                        "bg-bg-dark text-white": accent === "light",
                        "bg-white text-bg-dark": accent === "dark",
                    },
                )}
            >
                More
            </Link>
        </div>
    );
};
