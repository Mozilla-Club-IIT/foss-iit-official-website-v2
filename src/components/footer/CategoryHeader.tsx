type Props = {
    label: string;
};

export default function CategoryHeader({ label }: Props) {
    return (
        <>
            <span className="w-38 text-xl font-medium">{label}</span>
            <div className="h-2 w-18 b-b-3 b-b-accent-border" />
        </>
    );
}
