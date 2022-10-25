import path from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import styleImport from "vite-plugin-style-import"
import Layouts from "vite-plugin-vue-layouts";

// @ts-ignore
export default defineConfig((({ mode }) => {
  return {
    resolve: {
      alias: {
        "~/": `${path.resolve(__dirname, "src")}/`,
        "@components/": `${path.resolve(__dirname, "src/components")}/`,
        "@services/": `${path.resolve(__dirname, "src/services")}/`,
        "@store/": `${path.resolve(__dirname, "src/store")}/`,
        "@common/": `${path.resolve(
          __dirname,
          "src/components/common"
        )}/`,
        "@styles/": `${path.resolve(__dirname, "src/styles")}/`,
        "@assets/": `${path.resolve(__dirname, "src/assets")}/`,
      },
    },
    plugins: [
      vue(),
      Pages({
        extensions: ["vue"],
        routeBlockLang: "yaml",
      }),
      Layouts(),
    ],
    define: {
      "process.env": process.env,
    },
  }
}))
