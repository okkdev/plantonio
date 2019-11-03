<template>
  <div class="bg-white p-1 m-1 rounded-sm shadow">
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
        <button
          class="py-2 px-4 w-1/3 bg-teal-500 hover:bg-teal-400 text-teal-100 font-semibold rounded-sm shadow-md"
        >
          Save
        </button>
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
