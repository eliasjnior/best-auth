import pluginJs from "@eslint/js";
import importHelpers from "eslint-plugin-import-helpers";
import noRelativeImportPaths from "eslint-plugin-no-relative-import-paths";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

/**
 * @type {import("eslint").Linter.Config}
 */
export default [
  {
    ignores: ["node_modules", "dist", "coverage"],
  },
  {
    files: ["**/*.{ts,tsx,mts}"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      "no-relative-import-paths": noRelativeImportPaths,
      "import-helpers": importHelpers,
    },
    rules: {
      // TODO: break this rule for tests folder.
      "no-relative-import-paths/no-relative-import-paths": [
        "error",
        {
          allowSameFolder: true,
          rootDir: "src",
          prefix: "@",
        },
      ],
      "import-helpers/order-imports": [
        "error",
        {
          newlinesBetween: "always",
          groups: [
            "module",
            "/^@//",
            "/^@tests//",
            ["parent", "sibling", "index"],
          ],
          alphabetize: { order: "asc", ignoreCase: true },
        },
      ],
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];
