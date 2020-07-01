<template>
  <nav
    class="fixed top-0 z-40 w-full bg-white border-b dark:border-gray-800 dark:bg-gray-900"
    @click="scrollToTop"
  >
    <div class="container flex-1 px-4 mx-auto lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="w-1/6" @click.stop="noop">
          <NuxtLink
            :to="localePath('slug')"
            class="flex items-center flex-shrink-0 text-xl font-bold tracking-tight"
            style="width: 104px;"
            aria-label="Nuxt Content Logo"
          >
            <IconLogo v-if="$colorMode.value === 'light'" class="w-auto h-8" />

            <IconLogoDark v-else class="w-auto h-8" />
          </NuxtLink>
        </div>

        <div
          class="justify-center flex-1 hidden w-4/6 ml-4 mr-2 lg:flex lg:mx-8"
        >
          <SearchInput />
        </div>

        <div class="flex items-center justify-end w-1/6">
          <a
            href="https://github.com/tolbertdesign/docs"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
            name="Github"
            class="hidden mr-4 lg:block hover:text-primary-500"
          >
            <IconGithub class="w-6 h-6" />
          </a>

          <button
            class="p-2 -mr-2 rounded-md lg:hidden hover:text-primary-500 focus:outline-none"
            aria-label="Hamburger Menu"
            @click.stop="menu = !menu"
          >
            <IconX v-if="menu" class="w-6 h-6" />

            <IconMenu v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    menu: {
      get() {
        return this.$store.state.menu.open
      },
      set(val) {
        this.$store.commit('menu/toggle', val)
      },
    },
  },
  methods: {
    scrollToTop() {
      if (window.innerWidth >= 1280) {
        return
      }
      window.scrollTo(0, 0)
    },
    noop() {},
  },
}
</script>
