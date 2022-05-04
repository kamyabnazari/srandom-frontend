<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Srandom msg="Welcome to Srandom"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Srandom from '@/components/Srandom.vue'

export default {
  name: 'HomeView',
  components: {
    Srandom
  }
}
</script>
