<template>
  <div>
    <div class="flex justify-center w-full">
      <form class="flex flex-col w-2/3">
        <label class="block mb-2"
          ><span class=" font-semibold uppercase block">Email</span
          ><input
            required
            class="form-input w-full block"
            type="email"
            placeholder="E-Mail"
        /></label>
        <label class="block mb-2"
          ><span class=" font-semibold uppercase block">First Name</span
          ><input
            required
            class="form-input w-full block"
            type="text"
            placeholder="Name"
        /></label>
        <label class="block mb-2"
          ><span class=" font-semibold uppercase block">Password</span
          ><input
            required
            class="form-input w-full block"
            type="password"
            placeholder="Password"
        /></label>
        <label class="block mb-2">
          <span class=" font-semibold uppercase block">Confirm Password</span>
          <input
            required
            class="form-input w-full"
            type="password"
            placeholder="Confirm Password"
          />
        </label>
        <div class="flex flex-col items-center justify-center mt-3">
          <Button link="/overview">Create Account</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  components: {
    Button
  }
}
</script>

<style></style>
