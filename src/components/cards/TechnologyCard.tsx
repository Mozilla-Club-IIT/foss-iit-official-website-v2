import type { Technology } from "@/types/internal";
import clsx from "clsx";

type Props = Technology;
export default function TechnologyCard({ name, icon }: Props) {
    return (
        <div className="h-36 w-36 flex flex-col items-center justify-evenly rounded-2xl bg-white/10 lg:h-48 lg:w-48">
            <div className={clsx("h-20 w-20 lg:h-28 lg:w-28", icon)} />
            <h6 className="text-center">{name}</h6>
        </div>
    );
}
