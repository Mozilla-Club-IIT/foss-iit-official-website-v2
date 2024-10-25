import { readdir } from "node:fs/promises";
import { extname, join } from "node:path";

import type { BlogDataMod, BlogReference } from "@/types/Blog";

const POSTS_DIR = join(process.cwd(), "src/app/blogs/_data/");

export async function getPostsData(): Promise<BlogReference[]> {
    const pageNames = (await readdir(POSTS_DIR))
        .filter((x) => extname(x) === "")
        .map(getPostData);

    return await Promise.all(pageNames);
}

export async function getPostData(id: string): Promise<BlogReference> {
    const mod: BlogDataMod = await import(`@/app/blogs/_data/${id}/data.ts`);
    return { id, ...mod.default };
}

export async function getPost(id: string) {
    return await import(`@/app/blogs/_data/${id}/page.mdx`).then((x) => x.default);
}
