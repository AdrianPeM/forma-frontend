// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import { FlatCompat } from "@eslint/eslintrc"
import stylistic from "@stylistic/eslint-plugin"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import storybook from "eslint-plugin-storybook"
import { dirname } from "path"
import { parser as tsEslintParser } from "typescript-eslint"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
  }),
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs}", ".storybook/**/*.{ts}"],
    languageOptions: {
      parser: tsEslintParser,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@stylistic": stylistic,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      // Formatting via @stylistic
      "@stylistic/indent": ["error", 2],
      "@stylistic/semi": ["error", "never"],
      "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
      "@stylistic/no-trailing-spaces": "warn",
      "@stylistic/key-spacing": [
        "warn",
        { afterColon: true, beforeColon: false },
      ],
      "@stylistic/comma-spacing": ["warn", { before: false, after: true }],
      "@stylistic/object-curly-spacing": ["warn", "always"],
      "@stylistic/max-len": [
        "error",
        {
          code: 120,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      "@stylistic/spaced-comment": [
        "error",
        "always",
        { exceptions: ["-", "+"] },
      ],

      // General code quality
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/consistent-type-imports": "warn",

      // React
      "react/function-component-definition": [
        "warn",
        { namedComponents: "function-declaration" },
      ],
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [
            ["^react"],
            ["(.*?)"],
            ["^(@controls)(/.*|$)"],
            ["^(@control-types)(/.*|$)"],
            ["^(@components)(/.*|$)"],
            ["@api", "^(@api)(/.*|$)"],
            ["^(@hooks)(/.*|$)"],
            ["^(@helpers)(/.*|$)"],
            ["^(@enums)(/.*|$)"],
            ["^(@assets-icons)(/.*|$)"],
            ["@generictypes", "(types.d.ts)$", "^./types"],
            ["^./"],
            ["^../"],
            ["^(@styles)(/.*|$)", "[.](css|scss)$"],
          ],
        },
      ],

      // Import sorting
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",

      // File length
      "max-lines": [
        "error",
        { max: 200, skipBlankLines: false, skipComments: false },
      ],
    },
  },
  ...storybook.configs["flat/recommended"],
]

export default eslintConfig
