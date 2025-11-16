import { PrismicNextImage } from "@prismicio/next";

import type { BlogDocumentData } from "@/prismicio-types";

export function BlogCredits({ authors }: { authors: BlogDocumentData["authors"] }) {
    return (
        <ul className="flex flex-col gap-2 pl-0 sm:flex-row sm:items-center sm:gap-4">
            {authors.map(({ name, image }) => (
                <li key={name} className="inline-flex items-center gap-2 text-text-secondary">
                    <PrismicNextImage
                        field={image}
                        sizes="256px"
                        className="size-6 rounded-full"
                    />

                    <span className="text-xs sm:text-sm">{name}</span>
                </li>
            ))}
        </ul>
    );
}
