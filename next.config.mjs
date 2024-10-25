import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
    theme: "vitesse-dark",
};

const withMDX = createMDX({
    options: {
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    },
});

export default withMDX(nextConfig);
