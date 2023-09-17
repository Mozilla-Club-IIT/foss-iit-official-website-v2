import { mapToLines } from "@/utils/react/shared";
import clsx from "clsx";

type ContactCardProps = {
    icon: string;
    label: string | string[];
};

export default function ContactCard({ icon, label }: ContactCardProps) {
    return (
        <div className="h-16 flex items-center gap-5 rounded-xl bg-white/10 px-3 md:h-18 md:px-5">
            <div className={clsx("h-6 w-6 shrink-0 md:h-7 md:w-7", icon)} />
            <span className="text-xs font-500 leading-normal md:text-base">
                {Array.isArray(label) ? mapToLines(label) : label}
            </span>
        </div>
    );
}
