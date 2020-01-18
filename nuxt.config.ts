import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'なでしこかるた',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'エミリー スチュアート ファンサイト。',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'なでしこかるた',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://nadeshikokaruta.com/',
      },
      { hid: 'og:title', property: 'og:title', content: 'なでしこかるた' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'エミリー スチュアート ファンサイト。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://nadeshikokaruta.com/summary.png',
      },
      // { property: 'article:publisher', content: 'FacebookURL' },
      // { property: 'fb:app_id', content: 'FacebookAppID' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@Emily_Discord' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/stylus/ress.css', '@/assets/stylus/main.styl'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    'nuxt-fontawesome',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics',
    // 'nuxt-i18n',
    '@nuxtjs/sitemap',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
  },
  buildModules: [
    [
      '@nuxt/typescript-build',
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true,
      },
    ],
  ],
  typescript: {
    typeCheck: {
      eslint: true,
    },
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far'],
      },
    ],
  },
  styleResources: {
    stylus: ['@/assets/stylus/mixins.styl'],
  },
  googleAnalytics: {
    id: 'UA-141919453-1',
  },
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja',
    vueI18n: {
      fallbackLocale: 'ja',
      messages: {
        ja: {},
      },
    },
  },
  sitemap: {
    hostname: 'https://nadeshikokaruta.com',
    filter: ({ routes }) => {
      return routes.map(route => {
        route.url = `${route.url}/`
        return route
      })
    },
  },
}

export default config
