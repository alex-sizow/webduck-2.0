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
    lazy: true,
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'en'
    },
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Russian', file: 'ru.json' },
      { code: 'fr', name: 'French', file: 'fr.json' }
    ],
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  modules: ['@pinia/nuxt', '@nuxtjs/i18n']
})