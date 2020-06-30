export default {
  components: true,
  modules: ['@nuxt/content'],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/tailwindcss-module
    '@nuxtjs/tailwindcss',
  ],
  target: 'static',
  generate: {
    routes: ['/'], // the first url to start crawling
  },
}
