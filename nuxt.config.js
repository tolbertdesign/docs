export default {
  components: true,
  modules: ['@nuxt/content'],
  target: 'static',
  generate: {
    routes: ['/'], // the first url to start crawling
  },
}