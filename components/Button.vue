<template>
  <nuxt-link
    class="w-1/3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    tag="button"
    :to="link"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ''
    }
  }
}
</script>
