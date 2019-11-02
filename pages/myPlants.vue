<template>
  <div>
    <ul>
      <li
        v-for="plant in items"
        :key="plant.name"
        class="flex rounded m-6 bg-white shadow-lg hover:bg-gray-300 p-10 items-center"
      >
        <div class="object-fill w-20 h-20 mr-3">
          <img :src="plant.img" class="h-full w-full" />
        </div>
        <div class="flex-grow text-2xl text-center">
          {{ plant.name }}
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
        },
        {
          name: 'Cle1',
          nic: 'sda1',
          img:
            'https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
        },
        {
          name: 'Cle2',
          nic: 'sda2',
          img:
            'https://images.unsplash.com/photo-1494516192674-b82b5f1e61dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1233&q=80'
        },
        {
          name: 'Cle3',
          nic: 'sda3',
          img:
            'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1275&q=80'
        },
        {
          name: 'Cle4',
          nic: 'sda4',
          img:
            'https://images.unsplash.com/photo-1459664018906-085c36f472af?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
        },
        {
          name: 'Cle5',
          nic: 'sd5a',
          img:
            'https://images.unsplash.com/photo-1517042256700-ce7bb683950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1224&q=80'
        }
      ]
    }
  }
}
</script>

<style></style>
