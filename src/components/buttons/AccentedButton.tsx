type Props = {
    label: string;
};

export default function AccentedButton({ label }: Props) {
    return (
        <button className="h-10 rounded-xl bg-accent-dark px-6 font-medium shadow">{label}</button>
    );
}
