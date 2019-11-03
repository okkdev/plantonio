<template>
  <div class="my-20">
    <ul>
      <nuxt-link
        v-for="plant in plants"
        :key="plant.id"
        tag="li"
        :to="'/plants/' + plant.id"
        class="flex group hover:bg-teal-400 rounded p-2 m-4 mx-2 bg-white shadow-lg items-center"
      >
        <div class="object-fill w-20 h-20 mr-3 rounded">
          <img :src="plant.img" class="h-full w-full" />
        </div>
        <div class="flex-grow text-2xl text-center group-hover:text-teal-100">
          {{ plant.name }}
        </div>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    plants() {
      return this.$store.state.plants
    }
  }
}
</script>

<style></style>
