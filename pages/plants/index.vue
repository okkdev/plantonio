<template>
  <div class="my-20">
    <ul>
      <PlantListItem v-for="plant in plants" :key="plant.id" :plant="plant" />
    </ul>
  </div>
</template>

<script>
import PlantListItem from '@/components/PlantListItem'

export default {
  components: {
    PlantListItem
  },
  computed: {
    plants() {
      return this.$store.state.plants
    }
  }
}
</script>
