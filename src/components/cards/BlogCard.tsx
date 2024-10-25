"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import type { BlogReference } from "@/types/Blog";

export default function BlogCard(
    { data: { id, title, date, author: { name, avatar }, cover, tags } }: { data: BlogReference },
) {
    return (
        <Link
            href={`/blogs/${id}`}
            className="flex flex-col border border-border-separator/50 rounded-lg bg-[#9B9B9B]/22 p-3"
        >
            <Image src={cover} alt="" className="aspect-video w-full rounded-md" />

            <div className="mt-4 inline-flex flex-wrap gap-2 text-xs text-text-secondary">
                {tags.map((x) => <TagChip key={x} value={x} />)}
            </div>

            <span className="my-4 text-pretty text-lg text-text-primary font-semibold leading-tight">
                {title}
            </span>

            <div className="h-6 flex items-center justify-between">
                <Credit name={name} avatar={avatar} />

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

export function TagChip({ value }: { value: string }) {
    return (
        <span className="border border-[#D7D7D7]/30 rounded-md bg-[#F2F2F7]/22 px-2 py-1">
            {value}
        </span>
    );
}

export function Credit({ name, avatar }: { name: string; avatar: StaticImageData }) {
    return (
        <div className="inline-flex items-center gap-2">
            {avatar && <Image src={avatar} alt="" className="size-5 rounded-full" />}
            <span className="text-xs sm:text-sm">{name}</span>
        </div>
    );
}
