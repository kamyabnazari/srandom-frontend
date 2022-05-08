<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #252633">
    <a class="navbar-brand" href="/"><h1 style="font-weight: 600">Srandom</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu" aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="toggleMobileMenu">
      <ul class="navbar-nav">
        <router-link class="nav-link" to="/"><h5>Home</h5></router-link>
        <router-link class="nav-link" to="/about"><h5>About</h5></router-link>
        <router-link class="nav-link" to="/songs"><h5>Songs</h5></router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style scoped>

</style>
