<template>
  <navbar-component></navbar-component>
  <router-view></router-view>
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--secondary-color);
}

</style>
