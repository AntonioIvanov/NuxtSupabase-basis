// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: '@NuxtSupabase',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' }]
    }
  },
  css: ['@/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  }
})
