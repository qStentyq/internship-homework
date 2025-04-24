import { defineConfig, UserConfig } from "vite";
import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: [
        ...configDefaults.exclude,
        "src/App.tsx",
        "src/main.tsx",
        "tests/setup.js",
        "src/vite-env.d.ts",
      ],
    },
    setupFiles: "./src/setupTests.js",
  },
}) as UserConfig;
