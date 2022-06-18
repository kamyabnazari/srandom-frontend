<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #252633">
    <img alt="Vue logo" src="../assets/logo.png" style="width: 60px; height: 60px">
    <a class="navbar-brand" href="/"><h1>Srandom</h1></a>
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
h1 {
  font-weight: 600;
  margin-bottom: 0;
}
h5 {
  margin-bottom: 0;
}
.nav-link {
  margin-left: 10px;
  margin-right: 10px;
}
.navbar-dark .navbar-nav .nav-link {
  color: var(--element-color);
}
.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
  color: var(--primary-color);
}
</style>
