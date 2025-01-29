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

    experimental: {
        turbo: {
            rules: {
                "*.svg": {
                    loaders: ["@svgr/webpack"],
                    as: "*.js",
                },
            },
        },
    },
};

export default nextConfig;
