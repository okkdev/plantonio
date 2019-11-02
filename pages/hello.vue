<template>
  <div class="h-screen flex items-center justify-center">
    <button
      class="text-6xl px-6 py-4 bg-green-300 rounded shadow hover:bg-green-500"
      @click="fetchThis"
      @keydown.enter="fetchThis"
    >
      🎁
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    fetchThis() {
      fetch('.netlify/functions/hello').then((response) =>
        console.log(response.json())
      )
    }
  }
}
</script>
