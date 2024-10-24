import type { StaticImageData } from "next/image";

export interface BlogFrontMatter {
    title: string;
    date: string;
    description: string;
}

export interface BlogReference {
    id: string;
    title: string;
    description: string;
    date: string;
    author: { name: string; avatar?: StaticImageData };
}
