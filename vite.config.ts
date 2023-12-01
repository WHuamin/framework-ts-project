import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"; //解析.vue文件
import { resolve } from "path";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  // vite默认只会编译ts
  plugins: [
    vue(),
    VueSetupExtend(),
    AutoImport({
      imports: ["vue", "vue-router"], //生成auto-imports.d.ts文件
      eslintrc: { enabled: true } //第一次启动生成就不用生成了 生成.eslintrc-auto-import.json文件
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  }
});
