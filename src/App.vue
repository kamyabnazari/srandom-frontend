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
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 60px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
