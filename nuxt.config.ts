// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use '~/assets/styles/global.scss' as *;`
        }
      }
    }
  },
  modules: ['@nuxtjs/tailwindcss']
})
