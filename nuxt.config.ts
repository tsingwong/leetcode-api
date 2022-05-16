import { defineNuxtConfig } from "nuxt"
import Components from "unplugin-vue-components/vite"
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["nuxt-windicss"],

  components: {
    dirs: [
      "~/components",
      {
        path: "~/other-components",
        extensions: ["vue"],
        prefix: "nuxt",
      },
    ],
  },
  vite: {
    plugins: [
      // AutoImport({
      //     resolvers: [NaiveUiResolver()],
      // }),
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
    // @ts-expect-error: Missing ssr key
    ssr: {
      noExternal: ["moment", "compute-scroll-into-view", "ant-design-vue"],
    },
  },
})
