// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  content: {
    markdown: {
      anchorLinks: false,
    },
  },
  eslint: {
    config: {
      stylistic: {
        indent: 'tab',
      },

    },
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxthq/studio',
    '@nuxt/eslint',
  ],
})
