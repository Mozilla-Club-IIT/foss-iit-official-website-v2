import clsx from "clsx";

type Props = {
    name: string;
    icon: string;
};
export default function TechnologyCard({ name, icon }: Props) {
    return (
        <div className="min-h-56 min-w-56 flex flex-col items-center justify-between rounded-2xl bg-white/10 p-8">
            <div className={clsx("h-28 w-28", icon)} />
            <h6 className="text-center">{name}</h6>
        </div>
    );
}
