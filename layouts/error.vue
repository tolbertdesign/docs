<template>
  <div class="flex flex-wrap-reverse">
    <div class="w-full p-4 lg:w-3/4 lg:p-8 dark:border-gray-800">
      <h1 class="mb-4 text-4xl font-black leading-none">
        {{ error.message }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  head() {
    return {
      title: this.error.message,
    }
  },
}
</script>
