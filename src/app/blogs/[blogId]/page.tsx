import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src/assets/blogs");

async function getPost(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        notFound();
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);

    return { source: content, frontMatter: data };
}

interface PostPageProps {
    params: { blogId: string };
}

export default async function PostPage({ params }: PostPageProps) {
    const { source, frontMatter } = await getPost(params.blogId);
    return (
        <div>
            <h1>{frontMatter.title}</h1>
            <MDXRemote source={source} />
        </div>
    );
}
