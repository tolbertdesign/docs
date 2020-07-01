<template>
  <div class="pt-16">
    <Navbar />

    <main class="container px-4 mx-auto lg:px-8">
      <div class="relative flex flex-wrap">
        <aside
          class="fixed top-0 bottom-0 left-0 z-30 w-full h-screen pt-16 bg-white lg:w-1/5 lg:sticky lg:-mt-16 lg:block dark:bg-gray-900 lg:bg-transparent lg:border-r dark:border-gray-800"
          :class="{block: menu, hidden: !menu}"
        >
          <div class="container h-full mx-auto overflow-auto">
            <div
              class="flex justify-center flex-1 w-full px-4 mt-8 mb-4 lg:hidden"
            >
              <SearchInput />
            </div>

            <ul class="p-4 lg:pl-0 lg:py-8 lg:pr-8">
              <li
                v-for="(docs, category) in categories"
                :key="category"
                class="mb-6 last:mb-0"
              >
                <h3 class="aside-title">
                  {{ category }}
                </h3>

                <ul>
                  <li v-for="doc of docs" :key="doc.slug">
                    <NuxtLink
                      :to="toLink(doc.slug)"
                      class="block px-2 py-1 font-medium text-gray-600 rounded dark:text-gray-500 hover:text-gray-800 dark-hover:text-gray-100"
                      exact-active-class="text-primary-600 bg-primary-100 hover:text-primary-600 dark:text-primary-200 dark:bg-primary-900 dark-hover:text-primary-200"
                    >
                      {{ doc.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>

            <h3 class="px-4 lg:hidden aside-title">
              More
            </h3>

            <div class="flex items-center px-4 mb-8 lg:hidden">
              <a
                href="https://twitter.com/design_coder"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
                name="Twitter"
                class="ml-2 mr-4 hover:text-primary-500"
              >
                <IconTwitter class="w-6 h-6" />
              </a>

              <a
                href="https://github.com/tolbertdesign/docs"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
                name="Github"
                class="mr-4 hover:text-primary-500"
              >
                <IconGithub class="w-6 h-6" />
              </a>

              <ColorSwitcher />
            </div>
          </div>
        </aside>

        <Nuxt class="w-full lg:w-4/5" />
      </div>
    </main>

    <TheFooter />
  </div>
</template>

<script>
export default {
  computed: {
    bodyClass() {
      return this.$store.state.menu.open
        ? ['h-screen lg:h-auto overflow-y-hidden lg:overflow-y-auto']
        : []
    },
    menu: {
      get() {
        return this.$store.state.menu.open
      },
      set(val) {
        this.$store.commit('menu/toggle', val)
      },
    },
    categories() {
      return this.$store.state.categories[this.$i18n.locale]
    },
  },
  methods: {
    toLink(slug) {
      if (slug === 'index') {
        return this.localePath('slug')
      }
      return this.localePath({name: 'slug', params: {slug}})
    },
  },
  head() {
    const i18nSeo = this.$nuxtI18nSeo()

    return {
      bodyAttrs: {
        class: [
          ...this.bodyClass,
          'antialiased text-gray-800 leading-normal bg-white dark:bg-gray-900 dark:text-gray-100',
        ],
      },
      ...i18nSeo,
    }
  },
}
</script>

<style lang="postcss">
.aside-title {
  @apply mb-3 text-gray-500 uppercase tracking-wide font-bold text-sm;
}
.dark-mode .aside-title {
  @apply text-gray-600;
}
@screen lg {
  .aside-title {
    @apply mb-2 text-xs;
  }
}
</style>
