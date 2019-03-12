const pkg = require('./package')

module.exports = {
  mode: 'universal',

  router: {
    base: '/portfolio-2018/'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Portfolio | Marcelo Maia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },

  /*
  ** Global CSS
  */
  css: ['@/assets/scss/style.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~plugins/vee-validate.js', ssr: true }],

  /*
  ** Nuxt.js modules
  */
  // modules: [['@nuxtjs/google-tag-manager', { id: 'GTM-TJ2DMP7' }]],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
