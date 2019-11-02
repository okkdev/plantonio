<template>
  <div>
    <ul>
      <nuxt-link
        v-for="plant in plants"
        :key="plant.id"
        tag="li"
        :to="'/plants/' + plant.id"
        class="flex rounded m-6 bg-white shadow-lg hover:bg-gray-300 p-10 items-center"
      >
        <div class="object-fill w-20 h-20 mr-3">
          <img :src="plant.img" class="h-full w-full" />
        </div>
        <div class="flex-grow text-2xl text-center">{{ plant.name }}</div>
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
