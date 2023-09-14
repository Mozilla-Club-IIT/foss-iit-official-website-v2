import { defineConfig, presetUno } from "unocss";
import { Theme } from "unocss/preset-mini";

export default defineConfig<Theme>({
    presets: [presetUno()],
    theme: {
        fontFamily: {
            sans: "var(--font-sans)",
        },
        colors: {
            bg: {
                dark: "#161616",
            },
            border: {
                nav: "#FFD4CF",
            },
            text: {
                primary: "#FFFFFF",
                secondary: "#D7D7D7",
                muted: "#E6E6E6",
            },
        },
    },
});
