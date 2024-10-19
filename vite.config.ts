import { resolve } from "node:path";
import { UserConfig } from "vite";
import { InlineConfig } from "vitest/node";

type ViteWithVitestConfig = UserConfig & { test: InlineConfig };

export default {
  resolve: {
    alias: {
      "@/src": resolve(__dirname, "src"),
      "@/tests": resolve(__dirname, "tests"),
    },
  },
  plugins: [],
  test: {
    globals: true,
    include: ["src/**/*.{spec,test}.ts"],
    setupFiles: ["tests/setup-tests.ts"],
    coverage: {
      enabled: true,
      reportsDirectory: "./coverage",
      include: ["src/**/*.{js,jsx,ts,tsx}"],
      exclude: [],
    },
  },
} satisfies ViteWithVitestConfig;
