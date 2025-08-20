import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Bridge legacy Next.js configs
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Ignore build and dependency folders
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "dist/**",
      "out/**",
    ],
  },

  // Add TypeScript & project-specific rules
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    rules: {
      "@typescript-eslint/consistent-type-imports": "warn", // auto prefers `import type {}`
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
];

export default eslintConfig;
