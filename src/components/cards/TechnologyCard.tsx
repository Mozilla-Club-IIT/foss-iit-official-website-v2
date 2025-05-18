import type { Technology } from "@/types/internal";
import clsx from "clsx";

type Props = Technology;
export default function TechnologyCard({ name, icon }: Props) {
    return (
        <div className="aspect-square flex flex-col items-center justify-evenly rounded-2xl bg-white/10 lg:size-48">
            <div className={clsx("size-16 lg:h-24 lg:w-24", icon)} />
            <h6 className="text-center text-lg">{name}</h6>
        </div>
    );
}
