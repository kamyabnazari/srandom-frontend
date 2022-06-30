<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <img alt="Vue logo" src="../assets/logo.png" style="width: 60px; height: 60px">
    <a class="navbar-brand" href="/"><h1>Srandom</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggleMobileMenu"
            aria-controls="toggleMobileMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="toggleMobileMenu">
      <ul class="navbar-nav mr-auto">
        <router-link class="nav-link" to="/"><h6>Home</h6></router-link>
        <router-link class="nav-link" to="/songs"><h6>Songs</h6></router-link>
        <router-link class="nav-link" to="/about-us"><h6>About Us</h6></router-link>
      </ul>
      <div class="btn-group ms-auto" role="group">
        <button type="button" class="custom-button button-white btn-lg" @click="$router.push({path: '/account-register'})"><h6>Register</h6></button>
        <button type="button" class="custom-button button-yellow btn-lg" @click="$router.push({path: '/account-login'})"><h6>Login</h6></button>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'NavbarComponent',
  data: () => {
    return {
      buttonNavAvailable: true
    }
  }
}
</script>

<style scoped>
nav {
  padding-left: 30px;
  padding-right: 30px;
}

.nav-link {
  margin: 5px 10px;
}

.navbar {
  background-color: var(--secondary-color);
}

.navbar-brand {
  margin-right: 10px;
  margin-left: 10px;
}

.navbar-dark .navbar-nav .nav-link {
  color: var(--element-color);
}

.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
  color: var(--primary-color);
}

h1 {
  font-weight: 600;
  margin-bottom: 0;
  color: var(--element-color);
}

h6 {
  font-weight: bold;
  margin-bottom: 0;
}

</style>
