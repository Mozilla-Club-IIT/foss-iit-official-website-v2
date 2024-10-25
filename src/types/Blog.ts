import type { StaticImageData } from "next/image";

export interface BlogReference {
    id: string;
    title: string;
    date: string;
    cover: StaticImageData;
    author: { name: string; avatar: StaticImageData };
    tags: string[];
}

export type BlogFrontmatter = Omit<BlogReference, "id">;

export type BlogDataMod = { default: Omit<BlogReference, "id"> };
