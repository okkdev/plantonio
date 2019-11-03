<template>
  <div class="h-screen">
    <Header class="fixed bg-teal-200 top-0 inset-x-0 z-30" />
    <nuxt class="mt-16" />
    <Nav class="fixed inset-x-0 bottom-0 bg-teal-200 shadow z-30" />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Nav from '~/components/Nav'
export default {
  components: {
    Header,
    Nav
  }
}
</script>

<style>
html {
  @apply text-blue-900;
  @apply bg-indigo-100;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  /*
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box; */
}
</style>
