<template>
  <nuxt-link
    class="rounded m-6 bg-white shadow-lg group hover:bg-teal-400"
    tag="div"
    :to="link"
  >
    <h2
      class="p-5 text-center text-lg uppercase tracking-wide group-hover:text-teal-100"
    >
      {{ title }}
    </h2>
    <div class="h-40 pb-2">
      <img class="w-full h-full object-fit" :src="img" alt />
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
