import { readdir, readFile } from "node:fs/promises";
import path, { extname, join } from "node:path";

import matter from "gray-matter";
import Link from "next/link";
import type { FC } from "react";

import type { Blog } from "@/types/Blog";

import HeroLayout from "@/components/hero/HeroLayout";

const postsDirectory = path.join(process.cwd(), "src/assets/blogs");

async function getPosts(): Promise<Blog[]> {
    const filenames = await readdir(postsDirectory);
    const files = await Promise.all(
        filenames
            .filter((x) => extname(x) === ".mdx")
            .map(async (x) => [
                x.replace(".mdx", ""),
                await readFile(join(postsDirectory, x), "utf-8"),
            ]),
    );

    return files.map(([id, content]) => {
        const { data } = matter(content);

        return {
            blogId: id,
            ...data as Omit<Blog, "blogId">,
        };
    });
}

export default async function Blogs() {
    return (
        <>
            <Hero />
            <BlogsList />
        </>
    );
}

const Hero: FC = () => {
    return (
        <div className="max-h-xl flex items-center" style={{ height: "calc(100vh - 8rem)" }}>
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
                <li key={blog.blogId} className="min-h-56 flex flex-col rounded-md text-pretty">
                    <h2 className="mb-1 text-xl font-medium">{blog.title}</h2>
                    <p className="text-pretty text-sm text-text-secondary">{blog.description}</p>
                    <Link href={`/blogs/${blog.blogId}`} className="mt-4">Read more</Link>
                </li>
            ))}
        </ul>
    );
};
