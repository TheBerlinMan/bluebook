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
      // Disable the rule that flags unused variables
      "@typescript-eslint/no-unused-vars": "off",
      // Disable the rule that flags unescaped entities in JSX
      "react/no-unescaped-entities": "off",
      // Disable the rule that flags the use of 'any'
      "@typescript-eslint/no-explicit-any": "off"
    }

  }
];

export default eslintConfig;
