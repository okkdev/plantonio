<template>
  <nav class="flex items-center justify-between px-6 py-2 shadow bg-white">
    <BackButton />
    <h1>{{ title }}</h1>
  </nav>
</template>

<script>
import BackButton from '~/components/BackButton.vue'

export default {
  components: {
    BackButton
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
