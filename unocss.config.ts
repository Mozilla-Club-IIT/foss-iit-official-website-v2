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
    extendTheme: (theme) => ({
        ...theme,
        breakpoints: {
            xs: "375px",
            ...theme.breakpoints,
        },
    }),
    theme: {
        duration: {
            emphasized: "500ms",
            standard: "300ms",
        },
        easing: {
            emphasized: "cubic-bezier(0.4, 0.0, 0.2, 1.0)",
            standard: "cubic-bezier(0.2, 0.0, 0, 1.0)",
        },
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
                separator: "#A8A8A8",
            },
            text: {
                primary: "#FFFFFF",
                secondary: "#D7D7D7",
                neutral: "#E6E6E6",
            },
        },
    },

    shortcuts: {
        containerify: "px-12 2xl:(container! mx-auto px-0)",
        "use-transition-standard": "ease-standard duration-standard",
        "use-transition-emphasized": "ease-emphasized duration-emphasized",
        "container-content-block": "mt-24 flex flex-col md:px-16",
        "container-content-prose": "container-content-block max-w-3xl text-text-secondary prose",

        "text-style-heading":
            "text-3xl font-medium leading-tight uppercase text-text-primary md:text-5xl",

        "button-accented": "h-10 w-max rounded-xl bg-accent-dark px-8 font-medium shadow inline-flex items-center",
    },
});
