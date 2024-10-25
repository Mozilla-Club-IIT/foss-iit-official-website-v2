import type { BlogReference } from "@/types/Blog";

import NewBlogCover from "@/assets/blogs/new-blog/cover.jpg";
import RachalaPortrait from "@/assets/portraits/rachala.jpg";

const data: Omit<BlogReference, "id"> = {
    title: "Understanding TypeScript in Next.js",
    description:
        "An introduction to using TypeScript in Next.js, covering types, props, and the benefits of static typing in your applications.",
    date: "2024-10-23",
    author: { name: "Rachala Ovin", avatar: RachalaPortrait },
    cover: NewBlogCover,
    tags: ["Testing", "Lorem Ipsum"],
};

export default data;
