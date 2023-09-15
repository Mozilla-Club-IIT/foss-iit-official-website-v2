import cn from "@/utils/cn";
import clsx from "clsx";

export type Props = {
    name: string;
    role: string;
    imageURL: string;
    className?: string;
};

export default function MemberCard({ name, role, imageURL, className }: Props) {
    return (
        <div
            className={cn(
                "h-22 w-full flex gap-4 items-center rounded-3xl px-3 bg-white/9 ",
                className,
            )}
        >
            <div className="h-16 min-w-16 w-16 rounded-full bg-red"></div>
            <div className="flex flex-1 flex-col gap-1">
                <span className="leading-tight text-text-primary">{name}</span>
                <span className="text-sm leading-tight text-text-primary/60">{role} </span>
            </div>
            <div className="inline-flex">
                <div className="i-mdi-chevron-down h-6 w-6 text-text-secondary" />
            </div>
        </div>
    );
}
