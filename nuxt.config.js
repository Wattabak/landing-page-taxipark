// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/landing-page-taxipark/'
        }
      }
    : {}

export default {
  ...routerBase,
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'yandex-verification',
        content: 'a9dc6e636a61117b'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/Vuelidate' },
    { src: '~/plugins/directives' },
    { src: '~/plugins/Vmodal' },
    { src: '~/plugins/lazysizes' }
  ],
  // serverMiddleware: [
  //   {
  //     path: '/api',
  //     handler: '~/api/index.js'
  //   }
  // ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  // modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  // axios: {
  //   credentials: false,
  //   proxy: true
  // },
  // proxy: {
  //   '/api/form-submission': {
  //     target:
  //       'https://europe-west2-model-fastness-260110.cloudfunctions.net/form-submitco-1'
  //   }
  // },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
