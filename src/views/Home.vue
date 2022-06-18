<template>
  <div class="home">
    <WelcomeComponent msg="Click to get your random song!"/>
  </div>
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
