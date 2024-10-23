# Creating a blog

1. Create a `{blog_id}/page.mdx` file in [src/app/blogs/(listing)/](./src/app/blogs/(listing)/) folder.
2. Include the boilerplate below in the file you created, and change content however you need.

> [!NOTE]
> This mdx file supports both JSX and markdown.
> For more information, consult [documentation](https://nextjs.org/docs/app/building-your-application/configuring/mdx#using-custom-styles-and-components).

```jsx
import HeroLayout from "@/components/hero/HeroLayout";

export const data = {
    title: "<TITLE_STRING>",
    description: "<DESCRIPTION_STRING>",
    author: { name: "<AUTHOR>", avatar: "<AVATAR_URL_OR_NULL>" },
};

export const metadata = {
    title: "Blog - " + data.title,
};

<div
    className="relative max-h-5xl flex items-center justify-between"
    style={{ height: "calc(100vh - 8rem)" }}
>
    <HeroLayout title={data.title} subtitle={data.subtitle} />
</div>;
```
