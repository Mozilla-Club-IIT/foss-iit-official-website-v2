"use client";

import { BlogReference } from "@/types/Blog";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard(
    { data: { id, title, date, author: { name, avatar } } }: { data: BlogReference },
) {
    return (
        <Link
            href={`/blogs/${id}`}
            className="flex flex-col border border-border-separator/50 rounded-lg bg-[#9B9B9B]/22 p-3"
        >
            <div className="aspect-video w-full rounded-md bg-black"></div>
            <span className="my-4 text-pretty text-text-primary font-semibold leading-tight">
                {title}
            </span>

            <div className="h-6 flex items-center justify-between">
                <div className="inline-flex items-center gap-2">
                    {avatar && <Image src={avatar} alt="" className="size-5 rounded-full" />}
                    <span className="text-sm">{name}</span>
                </div>

                <span className="text-xs text-text-secondary">
                    {new Date(date).toLocaleDateString(undefined, {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                    })}
                </span>
            </div>
        </Link>
    );
}
