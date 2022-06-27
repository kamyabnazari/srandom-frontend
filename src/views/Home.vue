<template>
  <WelcomeComponent msg="click the button for a random song"/>
</template>
<script>
// @ is an alias to /src
import WelcomeComponent from '@/components/WelcomeComponent'

export default {
  name: 'HomeView',
  components: {
    WelcomeComponent
  }
}
</script>
