<template>
  <a :href="link" target="_blank" rel="noopener">
    {{ $t('article.github') }}
  </a>
</template>

<script>
export default {
  props: {
    document: {
      type: Object,
      required: true,
    },
  },
  computed: {
    link() {
      return `https://github.com/tolbertdesign/docs/edit/develop/content${this.document.path}${this.document.extension}`
    },
  },
}
</script>
