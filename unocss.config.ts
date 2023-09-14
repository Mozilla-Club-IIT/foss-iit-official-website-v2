import { Theme } from "unocss/preset-mini";
import { defineConfig, presetUno, presetTypography, presetIcons, Awaitable } from "unocss";
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
            },
        }),
    ],

    theme: {
        fontFamily: {
            sans: "var(--font-sans)",
        },
        colors: {
            accent: "#E50013",
            bg: {
                dark: "#161616",
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
});
