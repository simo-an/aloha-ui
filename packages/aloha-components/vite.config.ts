import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "@": resolve("./src"),
      "@utils": resolve("./src/utils"),
    },
  },
  build: {
    minify: false,
    lib: {
      entry: "src/index.ts", // 打包入口，需要先创建文件
      name: "AlohaUI",
    },
    watch: {
      clearScreen: true,
    },
    rollupOptions: {
      external: ["svelte"],
    },
  },
});
