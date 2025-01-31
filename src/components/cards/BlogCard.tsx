"use client";

import type { KeyTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

import { ShortenedBlogCredits } from "@/components/ShortenedBlogCredits";
import type { BlogDocumentData } from "@/prismicio-types";

type BlogCardProps = Omit<BlogDocumentData, "slices" | "content"> & { id: string };
export default function BlogCard(
    { id, title, cover_image, publication_date, authors, tags }: BlogCardProps,
) {
    return (
        <Link
            href={`/blogs/${id}`}
            className="flex flex-col border border-border-separator/50 rounded-lg bg-[#9B9B9B]/22 p-3"
        >
            <PrismicNextImage field={cover_image} className="aspect-video w-full rounded-md" />

            <div className="mt-4 inline-flex flex-wrap gap-2 text-xs text-text-secondary">
                {tags.map((x) => <TagChip key={x.label} value={x.label} />)}
            </div>

            <span className="my-4 text-pretty text-lg text-text-primary font-semibold leading-tight">
                {title}
            </span>

            <div className="h-6 flex items-center justify-between">
                <ShortenedBlogCredits authors={authors} />

                <span className="text-xs text-text-secondary">
                    {new Date(publication_date ?? "").toLocaleDateString(undefined, {
                        month: "long",
                        day: "2-digit",
                        year: "numeric",
                    })}
                </span>
            </div>
        </Link>
    );
}

export function TagChip({ value }: { value: KeyTextField }) {
    return (
        <span className="border border-[#D7D7D7]/30 rounded-md bg-[#F2F2F7]/22 px-2 py-1">
            {value}
        </span>
    );
}
