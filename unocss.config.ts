import { Theme } from "unocss/preset-mini";
import {
    defineConfig,
    presetUno,
    presetTypography,
    presetIcons,
    Awaitable,
    transformerVariantGroup,
} from "unocss";
import type { IconifyJSON } from "@iconify/types";

const importIconCollection = (name: string): (() => Awaitable<IconifyJSON>) => {
    return async () => {
        const { default: icons } = await import(`@iconify-json/${name}/icons.json`);
        return icons;
    };
};

export default defineConfig<Theme>({
    presets: [
        presetUno(),
        presetTypography(),
        presetIcons({
            collections: {
                mdi: importIconCollection("mdi"),
                bxl: importIconCollection("bxl"),
                logos: importIconCollection("logos"),
            },
        }),
    ],
    transformers: [transformerVariantGroup()],

    theme: {
        fontFamily: {
            sans: "var(--font-sans)",
        },
        colors: {
            accent: {
                dark: "#E50013",
                light: "#FC2222",
                border: "#CA0000",
            },
            bg: {
                dark: "#161616",
                lighter: "#1B1B1B",
            },
            surface: {
                light: "#EBEBEB",
            },
            border: {
                nav: "#FFD4CF",
            },
            text: {
                primary: "#FFFFFF",
                secondary: "#D7D7D7",
                neutral: "#E6E6E6",
            },
        },
    },

    shortcuts: {
        containerify: "px-12 2xl:(container mx-auto px-0)",
    },
});
