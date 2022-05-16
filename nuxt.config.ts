import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["./modules/antdv", "nuxt-windicss"],
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
})
