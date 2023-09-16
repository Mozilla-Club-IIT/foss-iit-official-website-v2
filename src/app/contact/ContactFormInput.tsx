"use client";

import cn from "@/utils/cn";
import { useState } from "react";

type ContactFormInputProps = {
    icon: string;
    textarea?: boolean;
    [rest: string]: any;
};

export default function ContactFormInput({ textarea, icon, ...rest }: ContactFormInputProps) {
    const [value, setValue] = useState("");

    return (
        <div className="w-full flex gap-5 border border-white/21 rounded-xl bg-white/10 px-5 py-3">
            <div className={cn("h-6 w-6 shrink-0", icon)}></div>
            {textarea ? (
                <textarea
                    className="h-25 w-full resize-none bg-transparent leading-tight outline-none placeholder:text-text-secondary"
                    {...rest}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            ) : (
                <input
                    type="text"
                    className="w-full bg-transparent leading-tight outline-none placeholder:text-text-secondary"
                    {...rest}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            )}
        </div>
    );
}
