import { PrismicNextImage } from "@prismicio/next";

import type { BlogDocumentData } from "@/prismicio-types";

import styles from "./ShortenedBlogCredits.module.css";

export function ShortenedBlogCredits({ authors }: { authors: BlogDocumentData["authors"] }) {
    let textCredit = authors.at(0)?.name ?? "";

    if (authors.length === 2) {
        const { name } = authors.at(1)!;
        textCredit += `, ${name}`;
    }

    if (authors.length > 2) {
        textCredit += " and others";
    }

    return (
        <div className="flex items-center gap-2">
            <ul className="inline-flex">
                {authors.map(({ name, image }) => (
                    <li key={name} className={styles.avatar}>
                        <PrismicNextImage
                            field={image}
                            sizes="256px"
                            className="size-5 rounded-full"
                        />
                    </li>
                ))}
            </ul>

            <span className="text-xs">{textCredit}</span>
        </div>
    );
}
