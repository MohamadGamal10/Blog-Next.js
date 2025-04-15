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
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Disable TypeScript any warnings
      "@typescript-eslint/no-explicit-any": "off",
      
      // Disable image-related rules
      "jsx-a11y/alt-text": "off",
      
      // Disable unsafe assignment warnings
      "@typescript-eslint/no-unsafe-assignment": "off",
      
      // Add other rules you need to disable
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-argument": "off"
    }
  },
  {
    // Apply specific rules to a particular file
    files: ["**/richtext-components.tsx"],
    rules: {
      // File-specific overrides
    }
  }
];

export default eslintConfig;
