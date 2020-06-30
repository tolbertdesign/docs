export default {
  target: 'static',
  components: true,
  modules: [
    // Doc: https://github.com/nuxt/content#readme
    '@nuxt/content',
    // Doc: https://github.com/nuxt-community/nuxt-i18n#readme
    'nuxt-i18n',
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module#readme
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module#readme
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/tailwindcss-module#readme
    '@nuxtjs/tailwindcss',
  ],
  i18n: {
    locales: [
      {
        code: 'es',
        file: 'es-ES.js',
        iso: 'en-ES',
        name: 'Español',
      },
      {
        code: 'en',
        file: 'en-US.js',
        iso: 'en-US',
        name: 'English',
      },
    ],
    defaultLocale: 'en',
    parsePages: false,
    lazy: true,
    seo: false,
    langDir: 'i18n/',
  },
  generate: {
    routes: ['/'], // the first url to start crawling
  },
}
