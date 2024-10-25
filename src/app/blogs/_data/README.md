# Creating a blog

1. Create a the files listed below in [src/app/blogs/_data/](.) followed by a sub-folder with the blog id as its name.
2. Include the boilerplate below in the folder you created, and change content however you need.

> [!NOTE]
> This mdx file supports both JSX and markdown.
> For more information, consult [documentation](https://nextjs.org/docs/app/building-your-application/configuring/mdx#using-custom-styles-and-components).

1. In `data.ts`:
   ```tsx
   import type { BlogReference } from "@/types/Blog";

   const data: Omit<BlogReference, "id"> = {
       title: "<TITLE_STRING>",
       description: "<DESCRIPTION_STRING>",
       author: { name: "<AUTHOR>", avatar: "<AVATAR_URL_OR_NULL>" },
       cover: "<StaticCoverImport>",
   };

   export default data;
   ```
