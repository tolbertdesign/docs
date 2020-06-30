export default {
  components: true,
  modules: ['@nuxt/content'],
  buildModules: ['@nuxtjs/tailwindcss'],
  target: 'static',
  generate: {
    routes: ['/'], // the first url to start crawling
  },
}