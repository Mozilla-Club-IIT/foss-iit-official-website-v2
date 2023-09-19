type Props = {
    label: string;
};

export default function AccentedButton({ label }: Props) {
    return (
        <div className="w-full sm:w-auto">
            <button className="button-accented">{label}</button>
        </div>
    );
}
