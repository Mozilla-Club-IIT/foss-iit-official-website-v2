import HeroLayout from "@/components/hero/HeroLayout";
import { Blog } from "@/types/Blog";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { FC } from "react";

const postsDirectory = path.join(process.cwd(), "src/assets/blogs");

export default function Blogs() {
    return (
        <>
            {
                /* <div className="absolute right-0 hidden w-full -top-14 lg:block">
                <Image src={RedString} alt="" />
            </div> */
            }
            <Hero />
            <BlogsList />
        </>
    );
}

const Hero: FC = () => {
    return (
        <div className="max-h-5xl flex items-center" style={{ height: "calc(100vh - 8rem)" }}>
            <HeroLayout
                title="Our Blog"
                subtitle={[
                    "",
                ]}
            >
            </HeroLayout>
        </div>
    );
};

const BlogsList: FC = async () => {
    const posts = await getPosts();

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map((blog) => (
                    <li key={blog.blogId}>
                        <h2>{blog.title}</h2>
                        <p>{blog.description}</p>
                        <Link href={`/blogs/${blog.blogId}`}>Read more</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

async function getPosts(): Promise<Blog[]> {
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);

        return {
            blogId: filename.replace(/\.mdx$/, ""),
            ...data,
        } as Blog;
    });
}
