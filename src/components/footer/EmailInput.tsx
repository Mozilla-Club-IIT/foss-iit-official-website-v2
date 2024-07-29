"use client";

export default function EmailInput() {
    return (
        <div className="mt-6 h-8 flex items-center">
            <input
                placeholder="Email"
                type="email"
                className="h-8 w-full rounded-l bg-surface-light pl-2 text-bg-dark active:(border-none outline-none ring-none) placeholder:(text-black/40 uppercase)"
            />
            <button className="h-8 w-10 inline-flex items-center justify-center rounded-r bg-accent-dark">
                <div className="i-mdi-send text-white" />
            </button>
        </div>
    );
}
