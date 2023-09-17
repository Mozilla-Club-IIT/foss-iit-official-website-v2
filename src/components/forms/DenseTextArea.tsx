"use client";

import clsx from "clsx";
import { useState } from "react";

type Props = {
    icon: string;
    name?: string;
    placeholder?: string;
};

export default function DenseTextArea({ icon, name, placeholder }: Props) {
    const [value, setValue] = useState("");

    return (
        <div className="w-full flex gap-5 border border-white/21 rounded-xl bg-white/10 px-3 py-3 md:px-5">
            <div className={clsx("h-6 w-6 shrink-0", icon)} />
            <textarea
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                className="h-25 w-full resize-none bg-transparent text-sm leading-tight outline-none md:text-base placeholder:text-text-secondary"
            />
        </div>
    );
}
