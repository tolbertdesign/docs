export default {
  target: 'static',
  head: {
    titleTemplate: chunk => {
      if (chunk) {
        return `${chunk} - Docs`
      }

      return 'Docs'
    },
    title: 'Docs',
    bodyAttrs: {
      'data-spy': 'scroll',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css'},
    ],
  },
  plugins: [
    '@/plugins/categories',
    '@/plugins/i18n.client',
    '@/plugins/vue-scrollactive',
    '@/plugins/menu.client',
  ],
  components: true,
  modules: [
    // Doc: https://github.com/nuxt/content#readme
    '@nuxt/content',
    // Doc: https://github.com/nuxt-community/pwa-module#readme
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/nuxt-i18n#readme
    'nuxt-i18n',
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    // Doc: https://github.com/nuxt-community/eslint-module#readme
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module#readme
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/tailwindcss-module#readme
    '@nuxtjs/tailwindcss',
  ],
  colorMode: {
    preference: 'light',
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },
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
    fallback: '404.html', // for Netlify
    routes: ['/'], // the first url to start crawling
  },
}
