/* eslint-disable import/no-anonymous-default-export */
import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import unocss from "@unocss/eslint-config/flat";

const compat = new FlatCompat();

export default [
    { ignores: ["**/dist", "**/.next"] },
    ...fixupConfigRules(compat.extends("eslint-config-next/core-web-vitals")),
    unocss,
];
