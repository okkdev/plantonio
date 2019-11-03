<template>
  <div class="h-screen flex items-center justify-center flex-col">
    <button
      class="text-6xl px-6 py-4 bg-green-300 rounded shadow hover:bg-green-500"
      @click="fetchThis"
    >
      🌿
    </button>
    <ul>
      <li v-for="s in suggestions" :key="s.id">
        <button class="bg-red-300" @click="fetchTrefleDetails(s.plant.name)">
          Trefle
        </button>
        Name: {{ s.plant.name }}, confidence: {{ s.confidence }}, probability:
        {{ s.probability }}, id: {{ s.id }}
      </li>
    </ul>
    <pre>{{ trefleDetails }}</pre>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      suggestions: [],
      image: '',
      trefleDetails: {}
    }
  },
  methods: {
    fetchThis() {
      axios.get('.netlify/functions/identifyPlant').then((response) => {
        this.suggestions = response.data.suggestions.filter(
          (s) => s.probability > 0.1 // ignore not probable results
        )
      })
    },
    fetchTrefleDetails(name) {
      axios
        .get('.netlify/functions/getTrefleDetails/?name=' + name)
        .then((response) => {
          console.log(response)
          this.trefleDetails = response.data
        })
    }
  }
}
</script>
