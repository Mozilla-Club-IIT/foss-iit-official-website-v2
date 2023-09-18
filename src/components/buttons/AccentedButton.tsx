type Props = {
    label: string;
};

export default function AccentedButton({ label }: Props) {
    return (
        <button className="h-10 w-max rounded-xl bg-accent-dark px-8 font-medium shadow">{label}</button>
    );
}
