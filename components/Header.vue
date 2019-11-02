<template>
  <div class="flex justify-center p-6">
    <Logo />
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
