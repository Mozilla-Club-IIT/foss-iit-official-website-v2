import { readdir } from "node:fs/promises";
import { extname, join as joinPath } from "node:path";

import type { FC } from "react";

import type { BlogReference } from "@/types/Blog";

import BlogCard from "@/components/cards/BlogCard";
import HeroLayout from "@/components/hero/HeroLayout";

const POSTS_DIR = joinPath(process.cwd(), "src/app/blogs/(listing)/");

type BlogMod = { default: Omit<BlogReference, "id"> };

async function getPosts(): Promise<BlogReference[]> {
    const pageNames = (await readdir(POSTS_DIR))
        .filter((x) => extname(x) === "")
        .map(async (x) => {
            const mod: BlogMod = await import(`@/app/blogs/(listing)/${x}/data.ts`);
            return { id: x, ...mod.default };
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
        <div className="relative h-screen max-h-5xl flex items-center justify-between">
            <HeroLayout
                title="OUR BLOGS"
                subtitle={["EXPLORE THE LATEST INSIGHTS AND TRENDS IN", "UI/UX DESIGN"]}
            />
        </div>
    );
};

const BlogsList: FC = async () => {
    const posts = await getPosts();

    return (
        <ul className="grid grid-cols-1 gap-6 pb-6 sm:grid-cols-[repeat(auto-fill,24rem)]">
            {posts.map((blog) => (
                <li key={blog.id}>
                    <BlogCard data={blog} />
                </li>
            ))}
        </ul>
    );
};
