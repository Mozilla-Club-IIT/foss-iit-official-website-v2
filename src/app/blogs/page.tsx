import { readdir } from "node:fs/promises";
import { extname, join as joinPath } from "node:path";

import Link from "next/link";
import type { FC } from "react";

import type { BlogReference } from "@/types/Blog";

import HeroLayout from "@/components/hero/HeroLayout";

const POSTS_DIR = joinPath(process.cwd(), "src/app/blogs/(listing)/");

type BlogMod = { default: unknown; data: Omit<BlogReference, "id"> };

async function getPosts(): Promise<BlogReference[]> {
    const pageNames = (await readdir(POSTS_DIR))
        .filter((x) => extname(x) === "")
        .map(async (x) => {
            const mod: BlogMod = await import(`@/app/blogs/(listing)/${x}/page.mdx`);
            return { id: x, ...mod.data };
        });

    return await Promise.all(pageNames);
}

export default function Blogs() {
    return (
        <>
            <Hero />
            <BlogsList />
        </>
    );
}

const Hero: FC = () => {
    return (
        <div
            className="relative max-h-5xl flex items-center justify-between"
            style={{ height: "calc(100vh - 8rem)" }}
        >
            <HeroLayout
                title="OUR BLOGS"
                subtitle="Yapping"
            />
        </div>
    );
};

const BlogsList: FC = async () => {
    const posts = await getPosts();

    return (
        <ul className="grid grid-cols-4">
            {posts.map((blog) => (
                <li key={blog.id} className="min-h-56 flex flex-col rounded-md text-pretty">
                    <h2 className="mb-1 text-xl font-medium">{blog.title}</h2>
                    <p className="text-pretty text-sm text-text-secondary">{blog.description}</p>
                    <Link href={`/blogs/${blog.id}`} className="mt-4">Read more</Link>
                </li>
            ))}
        </ul>
    );
};
