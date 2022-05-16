import { setup } from "@css-render/vue3-ssr"

export default defineNuxtPlugin((nuxtApp) => {
  const { collect } = setup(nuxtApp.app)
  const originalRender = nuxtApp.ssrContext.renderMeta
  nuxtApp.ssrContext!.renderMeta = () => {
    const result = originalRender()
    return {
      headTags: result["headTags"] + collect(), // 组合样式跟head信息
    }
  }
})
