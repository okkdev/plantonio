<template>
  <button @click="back()">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="h-10 w-10"
    >
      <path
        class="fill-current"
        d="M13.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L10.42 12l3.3 3.3z"
      ></path>
    </svg>
  </button>
</template>

<script>
export default {
  methods: {
    back() {
      window.history.back()
    }
  }
}
</script>
