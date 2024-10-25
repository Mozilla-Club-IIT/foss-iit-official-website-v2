import type { StaticImageData } from "next/image";

export interface BlogReference {
    id: string;
    title: string;
    description: string;
    date: string;
    cover: StaticImageData;
    author: { name: string; avatar?: StaticImageData };
}
