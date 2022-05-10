<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="width: 15%; height: 15%">
    <WelcomeComponent msg="Welcome to Srandom"/>
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
