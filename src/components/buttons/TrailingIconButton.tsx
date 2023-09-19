import clsx from "clsx";

type Props = {
    label: string;
    icon: string;
};

export default function TrailingIconButton({ label, icon }: Props) {
    return (
        <button className="button-layout">
            {label}
            <div className={clsx(" mb-1 ml-1 h-4 w-4", icon)} />
        </button>
    );
}
