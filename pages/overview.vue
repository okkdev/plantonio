<template>
  <div>
    <CardLink
      title="Search Plant"
      img="https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
    />
    <CardLink
      title="My Plants"
      link="/myPlants"
      img="https://images.unsplash.com/photo-1470049454586-e5301a4b53d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    />
    <CardLink
      title="My Progress"
      img="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80"
    />
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
