<template>
  <div>
    <div class="h-48 m-3">
      <img class="w-full h-full object-cover" :src="currentPlant.img" alt />
    </div>
    <div class="text-center p-3">
      <form class="items-center flex flex-col w-full">
        <label class="block mb-2">
          <input
            type="text"
            class="form-input w-full block"
            placeholder="Nickname"
            :value="currentPlant.nic"
          />
        </label>
        <label class="block mb-2">
          <input
            type="text"
            class="form-input w-full block bg-gray-200"
            placeholder="Name of my plant"
            :value="currentPlant.name"
            disabled
          />
        </label>
        <label class="block mb-2">
          <input
            type="text"
            class="form-input w-full block"
            placeholder="Place I put my plant"
            :value="currentPlant.position"
          />
        </label>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    currentPlant() {
      const route = this.$route.params.id
      return this.$store.getters.getPlant(route)
    }
  }
}
</script>
