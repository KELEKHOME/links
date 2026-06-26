// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@vueuse/motion', '@nuxt/icon', '@nuxtjs/i18n', 'nuxt-umami'],
  css: ['~/assets/css/main.css', '~/assets/css/transitions.css'],
  icon: {
    serverBundle: {
      collections: ['mdi', 'simple-icons', 'circle-flags', 'logos']
    },
    clientBundle: {
      icons: [
        'simple-icons:instagram',
        'simple-icons:tiktok',
        'logos:instagram-icon',
        'logos:tiktok-icon',
        'simple-icons:youtube',
        'simple-icons:facebook',
        'simple-icons:pinterest',
        'mdi:email-outline',
        'mdi:bookshelf',
        'mdi:cube-outline',
        'mdi:loading',
        'mdi:check-circle-outline',
        'mdi:weather-sunny',
        'mdi:weather-night',
        'mdi:magnify-plus-outline',
        'mdi:close',
        'mdi:menu',
        'mdi:home-outline',
        'mdi:account-outline',
        'mdi:hammer-wrench',
        'mdi:alert-circle-outline',
        'mdi:tag-outline',
        'mdi:hand-heart-outline',
        'mdi:tree-outline',
        'mdi:star-four-points-outline',
        'mdi:pencil-outline',
        'mdi:hammer',
        'mdi:home-heart',
        'mdi:bell-outline',
        'mdi:share-variant-outline',
        'mdi:check',
        'mdi:arrow-right',
        'circle-flags:es',
        'circle-flags:gb'
      ]
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Public+Sans:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  },
  colorMode: {
    classSuffix: ''
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'es',
    locales: [
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' }
    ],
    lazy: true,
    langDir: './locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root',
      fallbackLocale: 'es'
    }
  },
  umami: {
    enabled: true,
    host: process.env.NUXT_PUBLIC_UMAMI_HOST ?? 'https://cloud.umami.is',
    id: process.env.NUXT_PUBLIC_UMAMI_ID ?? '',
    autoTrack: true,
    ignoreLocalhost: true,
  },
  runtimeConfig: {
    instagramToken: process.env.INSTAGRAM_ACCESS_TOKEN ?? '',
    public: {
      formspreeId: process.env.NUXT_PUBLIC_FORMSPREE_ID ?? ''
    }
  }
})