import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    Components({
      dts: true,
      resolvers: [
        AntDesignVueResolver({
          // exclude: ["AButton"],
        }),
      ],
    }),
    AutoImport({
      /* options */
      imports: [
        "vue",
        "vue-router", // custom
        // {
        //   "@vueuse/core": [
        //     // named imports
        //     "useMouse", // import { useMouse } from '@vueuse/core',
        //     // alias
        //     ["useFetch", "useMyFetch"], // import { useFetch as useMyFetch } from '@vueuse/core',
        //   ],
        //   axios: [
        //     // default imports
        //     ["default", "axios"], // import { default as axios } from 'axios',
        //   ],
        //   "[package-name]": [
        //     "[import-names]",
        //     // alias
        //     ["[from]", "[alias]"],
        //   ],
        // },
      ],
      // dts: "./auto-imports.d.ts",
      dirs: [
        // './hooks',
        // './composables' // only root modules
        // './composables/**', // all nested modules
        // ...
      ],
    }),
  ],
  resolve: {
    // extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
