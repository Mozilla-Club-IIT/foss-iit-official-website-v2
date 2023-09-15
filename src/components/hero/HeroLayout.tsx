import type { ReactNode } from "react";

type Props = {
    title: string | string[];
    subtitle: string | string[];
    children?: ReactNode;
};

const makeLine = (lines: string[]) => {
    return lines.map((line) => <p key={line}>{line}</p>);
};

export default function HeroLayout({ title, subtitle, children }: Props) {
    return (
        <div className="flex flex-col px-16">
            <h1 className="text-5xl leading-tight uppercase text-text-neutral">
                {Array.isArray(title) ? makeLine(title) : title}
            </h1>
            <span className="mt-8 text-lg font-medium font-italic">
                {Array.isArray(subtitle) ? makeLine(subtitle) : subtitle}
            </span>
            <div className="mt-24 inline-flex gap-8">{children}</div>
        </div>
    );
}
