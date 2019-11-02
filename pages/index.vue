<template>
  <div>
    <div class="flex justify-center m-16">
      <Logo class="w-2/3 h-full" />
    </div>
    <div>
      <h1 class="p-7 text-center uppercase tracking-wide text-5xl">
        Our Idea
      </h1>
      <h2 class="p-5 text-center text-lg uppercase tracking-wide">
        we help you to keep your greens alive
      </h2>
      <div class="flex flex-col items-center justify-center">
        <Button title="Sign in" link="/signIn" />
        <p class="flex justify-center">or</p>
        <Button title="Sign Up" link="/signUp" />
      </div>
    </div>
    <Nav />
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
import Logo from '~/components/Logo.vue'
import Button from '~/components/Button.vue'

export default {
  layout: 'indexlayout',
  components: {
    Nav,
    Logo,
    Button
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
