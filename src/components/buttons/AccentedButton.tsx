type Props = {
    label: string;
};

export default function AccentedButton({ label }: Props) {
    return <button className="button-accented">{label}</button>;
}
