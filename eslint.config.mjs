import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
        // Preserving the original rule, though it might be non-standard.
        // If this causes an error, we will remove it.
        "react-hooks/set-state-in-effect": "off",
    },
  },
  {
      ignores: [
          ".next/**",
          "out/**",
          "build/**",
          "next-env.d.ts",
      ]
  }
];

export default eslintConfig;
