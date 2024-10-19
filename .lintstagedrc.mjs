export default {
  "*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}": [
    "eslint --fix",
    "prettier --write",
    "vitest related --run --passWithNoTests",
  ],
  "*.{json,md,mdx,yml,yaml}": ["prettier --write"],
};
