<template>
  <div>
    <CardLink title="Search Plant" img="/img/mobile-image.svg" />
    <CardLink title="My Plants" link="/plants" img="/img/my-plant.svg" />
    <CardLink title="My Progress" img="/img/progress.svg" />
  </div>
</template>

<script>
import CardLink from '~/components/CardLink.vue'

export default {
  components: {
    CardLink
  },
  mounted() {
    this.$OneSignal.push(() => {
      this.$OneSignal.init()
      this.$OneSignal.showNativePrompt()
    })

    // Inside page components
    this.$OneSignal.push(() => {
      this.$OneSignal.isPushNotificationsEnabled((isEnabled) => {
        if (isEnabled) {
          console.log('Push notifications are enabled!')
        } else {
          console.log('Push notifications are not enabled yet.')
        }
      })
    })

    // Using window and array form
    window.$OneSignal.push([
      'addListenerForNotificationOpened',
      (data) => {
        console.log('Received NotificationOpened:', data)
      }
    ])
  }
}
</script>
