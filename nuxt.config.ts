// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  nitro: { preset: process.env.VERCEL ? 'vercel' : 'node-server' },
  devServer: { port: 3000, host: '0.0.0.0' },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/motion',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    'nuxt-umami',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-og-image',
    '@nuxt/image',
    '@vercel/speed-insights',
    '@vercel/analytics'
  ],
  css: ['~/assets/css/main.css', '~/assets/css/transitions.css'],
  icon: {
    serverBundle: {
      collections: ['mdi', 'simple-icons', 'circle-flags', 'logos']
    },
    clientBundle: {
      scan: true
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { name: 'theme-color', content: '#F4EDE2', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#262624', media: '(prefers-color-scheme: dark)' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
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
  // Configuración global del sitio (usada por @nuxtjs/seo y nuxt-og-image)
  site: {
    url: 'https://kelek.vercel.app',
    name: 'Kelek Home',
    description: 'Muebles artesanales hechos a mano por Jesús. Piezas únicas en madera sostenible para tu hogar.',
    defaultLocale: 'es',
  },

  // @nuxt/image — optimización automática de imágenes
  image: {
    // Dominios externos permitidos para optimización
    domains: ['images.unsplash.com', 'graph.instagram.com', 'cdn.instagram.com', 'scontent.cdninstagram.com'],
    provider: process.env.VERCEL ? 'vercel' : 'ipx',
    quality: 80,
    format: ['webp', 'jpg'],
  },

  // nuxt-og-image — Open Graph automático
  ogImage: {
    fonts: ['Lato:400', 'Lato:700', 'Lato:900'],
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
