<template>
  <div>
    <CardLink title="Search Plant" img="/img/mobile-image.svg" />
    <CardLink title="My Plants" link="/myPlants" img="/img/my-plant.svg" />
    <CardLink title="My Progress" img="/img/progress.svg" />
    <Nav />
  </div>
</template>

<script>
import CardLink from '~/components/CardLink.vue'
import Nav from '~/components/Nav.vue'

export default {
  components: {
    CardLink,
    Nav
  }
}
</script>

<style></style>
