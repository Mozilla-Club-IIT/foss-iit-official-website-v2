import { mapToLines } from "@/utils/react/shared";
import clsx from "clsx";

type ContactCardProps = {
    icon: string;
    label: string | string[];
};

export default function ContactCard({ icon, label }: ContactCardProps) {
    return (
        <div className="h-18 max-w-128 min-w-64 flex items-center gap-5 rounded-xl bg-white/10 px-5 py-3">
            <div className={clsx("h-7 w-7 shrink-0", icon)} />
            <span className="font-500 leading-normal">
                {Array.isArray(label) ? mapToLines(label) : label}
            </span>
        </div>
    );
}
