<template>
  <navbar-component/>
  <notifications class="custom-notification" position="bottom center" width="400px"/>
  <router-view/>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent'

export default {
  name: 'App',
  components: { NavbarComponent }
}
</script>

<style>
#app {
  font-family: sans-serif;
  color: var(--secondary-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
