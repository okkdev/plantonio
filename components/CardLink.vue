<template>
  <nuxt-link
    class="rounded m-6 bg-white shadow-lg hover:bg-gray-300"
    tag="div"
    :to="link"
  >
    <h2 class="p-5 text-center text-lg uppercase tracking-wide">{{ title }}</h2>
    <div class="h-48">
      <img class="w-full h-full object-cover" :src="img" alt="" />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    }
  }
}
</script>
