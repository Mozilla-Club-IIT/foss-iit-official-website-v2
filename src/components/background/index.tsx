export default function Background() {
    return (
        <div className="fixed inset-0 w-full overflow-hidden">
            <div className="absolute inset-0 bg-[#1C4762]" />

            <div className="absolute right-96 h-256 w-36 rotate-48 bg-[#4C3033] blur-3xl -top-56" />
            <div className="absolute right-96 h-256 w-36 rotate-48 bg-[#4C3033] blur-3xl -top-56" />

            <div className="absolute h-[120vh] w-64 rotate-4 bg-[#632D1C] blur-3xl -left-12 -top-12" />
            <div className="absolute h-128 w-128 rounded-full bg-[#571E20] blur-3xl -right-12 -top-12" />
            <div className="absolute right-24 h-128 w-128 rounded-full bg-[#571E20] blur-3xl -bottom-64" />

            <div className="absolute inset-0 bg-black/75" />
        </div>
    );
}
