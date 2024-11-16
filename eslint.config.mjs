import globals from "globals";
import stylisticJs from "@stylistic/eslint-plugin-js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ...stylisticJs.configs.recommended, // Use recommended config from @stylistic/eslint-plugin-js
    ignores: ["dist/**", "build/**"], // Ignore built files
    files: ["**/*.js"], // Apply to all .js files
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node, // Include Node.js globals
      },
      ecmaVersion: "latest", // Use the latest ECMAScript version
    },
    plugins: {
      "@stylistic/js": stylisticJs, // Register the plugin
    },
    rules: {
      "@stylistic/js/indent": ["error", 2], // Enforce 2 spaces for indentation
      "@stylistic/js/linebreak-style": ["error", "unix"], // Enforce Unix line endings
      "@stylistic/js/quotes": ["error", "single"], // Enforce single quotes
      "@stylistic/js/semi": ["error", "never"], // Disallow semicolons
      eqeqeq: "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "no-console": "off",
    },
  },
];
