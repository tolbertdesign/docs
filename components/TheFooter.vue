<template>
  <footer
    class="w-full h-24 bg-white border-t dark:border-gray-800 dark:bg-gray-900"
  >
    <div
      class="container flex items-center justify-between w-full h-full px-4 mx-auto lg:px-8"
    >
      <div class="flex items-end">
        <span class="mr-2 text-sm leading-none">
          © {{ new Date().getFullYear() }}
        </span>

        <a href="https://tolbert.design" target="_blank" rel="noopener">
          <IconVti class="h-4" />
        </a>
      </div>

      <div class="flex">
        <ColorSwitcher class="p-2 pr-0" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
  },
}
</script>
