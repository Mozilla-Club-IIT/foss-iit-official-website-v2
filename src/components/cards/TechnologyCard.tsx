import clsx from "clsx";
import type { Technology } from "@/types/internal";

type Props = Technology;
export default function TechnologyCard({ name, icon }: Props) {
    return (
        <div className="h-36 w-36 flex flex-col items-center justify-evenly rounded-2xl bg-white/10 md:(h-48 w-48)">
            <div className={clsx("h-24 w-24 md:(h-28 w-28)", icon)} />
            <h6 className="text-center">{name}</h6>
        </div>
    );
}
