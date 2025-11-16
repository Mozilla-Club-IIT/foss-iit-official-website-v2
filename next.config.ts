import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
    images: {
        qualities: [100, 75],
    },
    turbopack: {
        rules: {
            "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.js",
            },
        },
    },
};

export default nextConfig;
