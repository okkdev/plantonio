<template>
  <div>
    <ul>
      <li
        v-for="progress in items"
        :key="progress.name"
        class="flex rounded m-6 bg-white shadow-lg hover:bg-gray-300 p-10 items-center"
      >
        <div class="object-fill w-20 h-20 mr-3">
          <img :src="progress.img" class="h-full w-full" />
        </div>
        <div class="flex-grow text-2xl text-center">
          {{ progress.name }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'Cle',
          nic: 'sda',
          img:
            'https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60'
        }
      ]
    }
  }
}
</script>

<style></style>
