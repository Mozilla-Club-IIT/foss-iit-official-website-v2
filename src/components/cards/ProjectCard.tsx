import clsx from "clsx";
import Image from "next/image";
import { type FC, useMemo } from "react";

import type { Project } from "@/types/internal";

type Props = Project;

export default function ProjectCard({ name, imageURL, accent, date }: Props) {
    return (
        <div
            className={clsx("w-full flex flex-col items-center justify-between rounded-xl", {
                "bg-white": accent === "light",
                "bg-bg-dark": accent === "dark",
            })}
        >
            <span
                className={clsx("inline-flex text-start p-4 text-xl w-full tracking-tight", {
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
            <DetailsRow name={name} accent={accent} date={date} />
        </div>
    );
}

const DetailsRow: FC<Pick<Project, "date" | "accent" | "name">> = ({ name, accent, date }) => {
    const isUpcoming = useMemo(() => typeof date === "string" || date > new Date(), [date]);

    return (
        <div
            className={clsx("flex items-center border-t-1 w-full h-12 px-4", {
                "b-t-border-separator text-bg-dark": accent === "light",
                "b-t-border-separator/50 text-text-primary": accent === "dark",
            })}
        >
            {isUpcoming && <p>Coming soon</p>}
            <div className="flex-1" />
            <button
                // href={`/projects/${name}`}
                disabled
                className={clsx(
                    "inline-flex items-center justify-center rounded-xl px-4 h-8 disabled:opacity-10",
                    {
                        "bg-bg-dark text-white": accent === "light",
                        "bg-white text-bg-dark": accent === "dark",
                    },
                )}
            >
                More
            </button>
        </div>
    );
};
