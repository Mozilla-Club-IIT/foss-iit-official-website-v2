import type { ReactNode } from "react";

import { mapToLines } from "@/utils/react/shared";

type Props = {
    title: string | string[];
    subtitle: string | string[];
    children?: ReactNode;
};

export default function HeroLayout({ title, subtitle, children }: Props) {
    return (
        <div className="z-10 flex flex-col md:px-16">
            <h1 className="text-3xl text-text-neutral leading-tight uppercase md:text-5xl">
                {Array.isArray(title) ? mapToLines(title) : title}
            </h1>
            <span className="text-md mt-8 font-medium font-italic md:text-lg">
                {Array.isArray(subtitle) ? mapToLines(subtitle) : subtitle}
            </span>
            <div className="mt-24 w-max flex flex-col items-center gap-5 xs:flex-row xs:gap-8">
                {children}
            </div>
        </div>
    );
}
