"use client";

import clsx from "clsx";
import { useState } from "react";

type Props = {
    icon: string;
    placeholder?: string;
    name?: string;
    type?: HTMLInputElement["type"];
};

export default function DenseInput({ type, icon, name, placeholder }: Props) {
    const [value, setValue] = useState("");

    return (
        <div className="w-full flex gap-5 border border-white/21 rounded-xl bg-white/10 px-3 py-3 md:px-5">
            <div className={clsx("h-6 w-6 shrink-0", icon)} />
            <input
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                className="w-full bg-transparent text-sm leading-tight outline-none md:text-base placeholder:text-text-secondary"
            />
        </div>
    );
}
