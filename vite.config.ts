import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"; //解析.vue文件
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // vite默认只会编译ts
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  }
});
