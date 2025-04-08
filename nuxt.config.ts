// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    '@': '.'
  },
  css: ['~/assets/css/main.css'
  ],
  experimental: {
    viewTransition: true
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Russian', file: 'ru.json' },
      { code: 'fr', name: 'Fracne', file: 'fr.json' }
    ]
  },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n']
})