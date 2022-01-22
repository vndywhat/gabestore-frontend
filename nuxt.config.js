export default {
  /*
   ** Project Environment
   */
  env: {
    serverUrl: process.env.SERVER_URL || 'http://localhost:8000',
  },
  server: {
    port: process.env.PORT || 3000, // default: 3000
    host: process.env.HOST || 'localhost', // default: localhost
  },
  router: {
    trailingSlash: true,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'gabestore-frontend',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, height=device-height, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Интернет-магазин GabeStore — компьютерные игры со скидками до 95%! Всегда низкие цены, круглосуточная поддержка и моментальная доставка ключей.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/images/favicon/black/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/favicon/black/favicon-32x32.webp',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/favicon/black/favicon-16x16.webp',
      },
      {
        rel: 'manifest',
        href: '/images/favicon/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/images/favicon/black/safari-pinned-tab.svg',
      },
      {
        rel: 'shortcut icon',
        href: '/images/favicon/black/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/images/favicon/black/favicon.ico',
      },
    ],
  },

  /*
   ** Customize the progress bar color
   */
  loading: { color: '#fbbb43' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/static/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.SERVER_URL + '/api/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
