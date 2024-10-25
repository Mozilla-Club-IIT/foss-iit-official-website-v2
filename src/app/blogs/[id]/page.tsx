import type { Metadata } from "next";

import { Credit, TagChip } from "@/components/cards/BlogCard";
import { getPost, getPostData, getPostsData } from "@/utils/blog";

import "./styles.css";

type Props = {
    params: { id: string };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
    const posts = await getPostsData();
    return posts.map((x) => ({ id: x.id }));
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
    const post = await getPostData(id);

    return {
        title: post.title,
        authors: [post.author],
    };
}

export default async function Page({ params: { id } }: Props) {
    const { title, author, tags, date } = await getPostData(id);
    const Post = await getPost(id);

    return (
        <div className="mt-16 text-sm prose lg:max-w-[75ch] lg:self-center sm:text-base">
            <div className="mb-12">
                <div className="inline-flex flex-wrap gap-2 text-xs text-text-secondary">
                    {tags.map((x) => <TagChip key={x} value={x} />)}
                </div>
                <h1>{title}</h1>
                <div className="flex items-center justify-between">
                    <Credit name={author.name} avatar={author.avatar} />
                    <span className="text-xs text-text-secondary sm:text-sm">
                        {new Date(date).toLocaleDateString(undefined, {
                            month: "long",
                            day: "2-digit",
                            year: "numeric",
                        })}
                    </span>
                </div>
            </div>

            <Post />
        </div>
    );
}
