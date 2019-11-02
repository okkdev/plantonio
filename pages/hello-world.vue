<template>
  <div class="h-screen flex items-center justify-center">
    <div>
      <button class="p-4 bg-green-900" @click="hello">🔥🔥</button>
      <span>{{ response }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      response: ''
    }
  },

  methods: {
    async hello() {
      try {
        const response = await fetch('/.netlify/functions/hello-world')
        const json = await response.json()
        this.response = json.data
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
