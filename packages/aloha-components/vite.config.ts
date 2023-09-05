import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    minify: false,
    lib: {
      entry: "src/index.ts", // 打包入口，需要先创建文件
      name: "AlohaUI",
    },
    watch: {
      clearScreen: true,
    },
  },
});
