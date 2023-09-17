import type { ReactNode } from "react";

import { mapToLines } from "@/utils/react/shared";

type Props = {
    title: string | string[];
    subtitle: string | string[];
    children?: ReactNode;
};

export default function HeroLayout({ title, subtitle, children }: Props) {
    const newLocal = "text-3xl md:text-5xl leading-tight uppercase text-text-neutral";
    return (
        <div className="flex flex-col md:px-16">
            <h1 className={newLocal}>{Array.isArray(title) ? mapToLines(title) : title}</h1>
            <span className="text-md mt-8 font-medium font-italic md:text-lg">
                {Array.isArray(subtitle) ? mapToLines(subtitle) : subtitle}
            </span>
            <div className="mt-24 inline-flex gap-8">{children}</div>
        </div>
    );
}
