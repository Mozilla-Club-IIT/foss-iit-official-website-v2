import type { FC } from "react";

import { getPostsData } from "@/utils/blog";

import BlogCard from "@/components/cards/BlogCard";
import HeroLayout from "@/components/hero/HeroLayout";

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
                subtitle={["EXPLORE THE LATEST INSIGHTS AND TRENDS", "IN UI/UX DESIGN"]}
            />
        </div>
    );
};

const BlogsList: FC = async () => {
    const posts = await getPostsData();

    return (
        <ul className="grid grid-cols-1 mb-24 gap-6 sm:grid-cols-[repeat(auto-fill,24rem)]">
            {posts.map((blog) => (
                <li key={blog.id}>
                    <BlogCard data={blog} />
                </li>
            ))}
        </ul>
    );
};
