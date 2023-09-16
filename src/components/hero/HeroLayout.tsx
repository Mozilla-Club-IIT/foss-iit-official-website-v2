import type { ReactNode } from "react";

import { mapToLines } from "@/utils/react/shared";

type Props = {
    title: string | string[];
    subtitle: string | string[];
    children?: ReactNode;
};

export default function HeroLayout({ title, subtitle, children }: Props) {
    return (
        <div className="flex flex-col px-16">
            <h1 className="text-5xl leading-tight uppercase text-text-neutral">
                {Array.isArray(title) ? mapToLines(title) : title}
            </h1>
            <span className="mt-8 text-lg font-medium font-italic">
                {Array.isArray(subtitle) ? mapToLines(subtitle) : subtitle}
            </span>
            <div className="mt-24 inline-flex gap-8">{children}</div>
        </div>
    );
}
