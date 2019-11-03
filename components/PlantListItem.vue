<template>
  <nuxt-link
    tag="li"
    :to="'/plants/' + plant.id"
    class="flex group hover:bg-teal-400 rounded p-2 m-4 mx-2 bg-white shadow-lg items-center"
  >
    <figure class="object-fill w-20 h-20 mr-3 rounded">
      <img :src="plant.img" class="h-full w-full" />
    </figure>
    <dl class="flex-grow group-hover:text-teal-100">
      <div class="flex">
        <dt class="mr-2 font-semibold">Name:</dt>
        <dd>{{ plant.name }}</dd>
      </div>
      <div class="flex">
        <dt class="mr-2 font-semibold">Nic:</dt>
        <dd>{{ plant.nic }}</dd>
      </div>
    </dl>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    plant: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
