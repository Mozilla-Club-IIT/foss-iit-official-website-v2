import { asImageSrc, type FilledLinkToWebField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { type JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { codeToHtml } from "shiki";

import { createClient } from "@/prismicio";
import type { BlogDocument } from "@/prismicio-types";

import { BlogCredits } from "@/components/BlogCredits";
import { TagChip } from "@/components/cards/BlogCard";

type Props = {
    params: Promise<{ id: string }>;
};

export async function generateStaticParams(): Promise<
    Awaited<Props["params"]>[]
> {
    const client = createClient();
    const posts = await client.getAllByType("blog", {
        graphQuery: `{
            blog {
                uid
            }
        }`,
    });

    return posts.map((x) => ({ id: x.uid }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;

    const { id } = params;

    const client = createClient();
    const page = (await client
        .getByUID("blog", id)
        .catch(() => notFound())) as BlogDocument;

    return {
        title: page.data.title + " | Mozilla Campus Club of IIT",
        description: page.data.description,
        authors: page.data.authors.map((x) => ({ name: x.name?.toString() })),
        openGraph: {
            title: page.data.title ?? undefined,
            images: [
                {
                    url: page.data.cover_image.url ?? "",
                    height: page.data.cover_image.dimensions?.height,
                    width: page.data.cover_image.dimensions?.width,
                },
            ],
        },
    };
}

const components: JSXMapSerializer = {
    heading1: (data) => <h1 className="text-text-primary">{data.text}</h1>,
    heading2: (data) => <h2 className="text-text-primary">{data.text}</h2>,
    heading3: (data) => <h3 className="text-text-primary">{data.text}</h3>,
    heading4: (data) => <h4 className="text-text-primary">{data.text}</h4>,
    image: (data) => {
        const src = asImageSrc(data.node);
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={src}
                alt={data.node.alt ?? ""}
                width={data.node.dimensions?.width}
                height={data.node.dimensions?.height}
                className="mx-auto my-8 w-fit rounded-xl lg:max-w-xl sm:max-w-lg"
            />
        );
    },
    span: (data) => <span className="text-text-secondary">{data.text}</span>,
    hyperlink: (data) => {
        const { target, url } = data.node.data as FilledLinkToWebField;

        return (
            <a href={url} target={target} className="break-words text-text-neutral  underline">
                {data.text}
            </a>
        );
    },
    preformatted: async (data) => {
        const text = data.text as unknown as string;
        const brkIndex = text.indexOf("\n");
        const lang = text.startsWith("#lang=")
            ? text.slice(6, brkIndex)
            : "plaintext";

        const html = await codeToHtml(
            lang !== "plaintext" ? text.slice(brkIndex + 1) : text,
            { lang: lang, theme: "plastic" },
        );

        return <div dangerouslySetInnerHTML={{ __html: html }} />;
    },
};

export default async function Page(props: Props) {
    const { id } = await props.params;

    const client = createClient();
    const page = (await client
        .getByUID("blog", id)
        .catch(() => notFound())) as BlogDocument;

    const { title, tags, authors, publication_date, cover_image } = page.data;

    return (
        <div className="mt-16 pb-8 text-sm prose md:max-w-[75ch] lg:self-center sm:text-base">
            <section className="mb-4">
                <div className="inline-flex flex-wrap gap-2 text-xs text-text-secondary mb-2">
                    {tags.map((x) => <TagChip key={x.label} value={x.label} />)}
                </div>
                <h1 className="text-text-primary">{title}</h1>
                <div className="flex items-center justify-between">
                    <BlogCredits authors={authors} />
                    <span className="self-end text-xs text-text-secondary sm:self-center sm:text-sm">
                        {new Date(publication_date ?? "").toLocaleDateString(undefined, {
                            month: "long",
                            day: "2-digit",
                            year: "numeric",
                        })}
                    </span>
                </div>
            </section>

            <section>
                <PrismicNextImage field={cover_image} className="w-full rounded-xl" />
            </section>

            <article>
                <PrismicRichText field={page.data.content} components={components} />
            </article>
        </div>
    );
}
