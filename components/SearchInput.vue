<template>
  <div class="relative flex flex-col justify-between w-full">
    <div
      class="relative w-full"
      @keydown.down="increment"
      @keydown.up="decrement"
      @keydown.enter="go"
    >
      <label for="search" class="sr-only">Search</label>
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <IconSearch class="w-5 h-5 text-gray-500" />
        </div>
        <input
          id="search"
          ref="search"
          v-model="q"
          class="block w-full py-2 pl-10 pr-3 leading-5 text-gray-700 placeholder-gray-500 truncate bg-gray-200 border border-transparent rounded-md dark:text-white dark-focus:text-white focus:border-gray-300 dark-focus:border-gray-700 focus:outline-none focus:bg-white dark-focus:bg-gray-900 dark:bg-gray-800"
          :class="{'rounded-b-none': focus && results.length}"
          :placeholder="$t('search.placeholder')"
          type="search"
          autocomplete="off"
          @focus="onFocus"
          @blur="onBlur"
        />
      </div>
    </div>
    <ul
      v-show="focus && (searching || results.length)"
      class="absolute top-0 z-10 flex-1 w-full overflow-hidden bg-white border border-gray-300 rounded-md dark:bg-gray-900 dark:border-gray-700"
      :class="{'rounded-t-none': focus && results.length}"
      style="margin-top: 37px;"
    >
      <li v-if="searching && !results.length" class="px-4 py-2">
        Searching...
      </li>
      <li
        v-for="(result, index) of results"
        :key="result.slug"
        @mouseenter="focusIndex = index"
        @mousedown="go"
      >
        <NuxtLink
          :to="
            localePath({
              name: 'index-slug',
              params: {slug: result.slug !== 'index' ? result.slug : undefined},
            })
          "
          class="flex items-center px-4 py-2 leading-5 transition duration-150 ease-in-out"
          :class="{
            'text-primary-500 bg-gray-200 dark:bg-gray-800':
              focusIndex === index,
          }"
          @click="focus = false"
        >
          <span class="hidden font-bold sm:block">{{ result.category }}</span>
          <IconChevronRight class="hidden w-3 h-3 mx-1 sm:block" />
          {{ result.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      q: '',
      focus: false,
      focusIndex: -1,
      open: false,
      searching: false,
      results: [],
    }
  },
  watch: {
    async q(q) {
      this.focusIndex = -1
      if (!q) {
        this.searching = false
        this.results = []
        return
      }
      this.searching = true
      this.results = await this.$content(this.$i18n.locale)
        .sortBy('position', 'asc')
        .limit(12)
        .search(q)
        .fetch()
      this.searching = false
    },
  },
  mounted() {
    window.addEventListener('keyup', this.keyup)
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.keyup)
  },
  methods: {
    onFocus() {
      this.focus = true
      this.$emit('focus', true)
    },
    onBlur() {
      this.focus = false
      this.$emit('focus', false)
    },
    keyup(e) {
      if (e.key === '/') {
        this.$refs.search.focus()
      }
    },
    increment() {
      if (this.focusIndex < this.results.length - 1) {
        this.focusIndex++
      }
    },
    decrement() {
      if (this.focusIndex >= 0) {
        this.focusIndex--
      }
    },
    go() {
      if (this.results.length === 0) {
        return
      }
      const result =
        this.focusIndex === -1 ? this.results[0] : this.results[this.focusIndex]
      const path = `/${result.slug !== 'index' ? result.slug : ''}`
      this.$router.push(path)
      // Unfocus the input and reset the query.
      this.$refs.search.blur()
      this.q = ''
    },
  },
}
</script>
