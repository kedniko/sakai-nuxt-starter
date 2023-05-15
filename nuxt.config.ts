import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

export default defineNuxtConfig({

  ssr: false,

  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@vite-pwa/nuxt',
    '@nuxtjs/google-fonts',
  ],

  app: {
    head: {
      title: 'Sakai Vue',
      viewport: 'width=device-width,initial-scale=1',
      meta: [
        { 'http-equiv': 'x-ua-compatible', 'content': 'IE=edge' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        {
          id: 'theme-css',
          rel: 'stylesheet',
          type: 'text/css',
          href: '/themes/lara-light-blue/theme.css',
        },
      ],
      // script: [
      //   {
      //     strategy: 'lazyOnload',
      //     src: 'https://www.googletagmanager.com/gtag/js?id=UA-12345678-1',
      //   },
      //   {
      //     id: 'ga-analytics',
      //     strategy: 'lazyOnload',
      //     children: `
      //         window.dataLayer = window.dataLayer || [];
      //         function gtag(){dataLayer.push(arguments);}
      //         gtag('js', new Date());
      //         gtag('config', 'UA-12345678-1');
      //     `,
      //   },
      // ],
    },
  },

  build: {
    transpile: [
      // 'chart.js',
      'primevue',
    ],
  },

  components: {
    dirs: [
      {
        extensions: ['vue'],
        global: true,
        path: '~/components/',
        pathPrefix: false,
      },
    ],
  },

  css: [
    'primeicons/primeicons.css',
    'primeflex/primeflex.scss',
    'primevue/resources/primevue.min.css',
    '@/assets/styles.scss',
  ],

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
  },

  googleFonts: {
    families: {
      Inter: true,
    },
  },

  imports: {
    autoImport: true,
    addons: {
      vueTemplate: true,
    },
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  vite: {
    build: {
      sourcemap: false,
    },
    clearScreen: true,
    logLevel: 'info',
  },

  pwa,

  devtools: {
    enabled: false,
  },

  sourcemap: {
    client: false,
    server: true,
  },

})
