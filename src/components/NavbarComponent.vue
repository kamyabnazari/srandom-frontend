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
        <router-link class="nav-link" to="/"><h5>Home</h5></router-link>
        <router-link class="nav-link" to="/songs"><h5>Songs</h5></router-link>
        <router-link class="nav-link" to="/about-us"><h5>About Us</h5></router-link>
      </ul>
      <div class="btn-group ms-auto" role="group">
        <button type="button" class="btn-lg custom-button button-white "
                @click="$router.push({path: '/account-register'})">Register
        </button>
        <button type="button" class="btn-lg custom-button button-yellow "
                @click="$router.push({path: '/account-login'})">Login
        </button>
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

.navbar-dark .navbar-nav .show > .nav-link, .navbar-dark .navbar-nav .nav-link.active {
  color: var(--primary-color);
}

h1 {
  font-weight: 600;
  margin-bottom: 0;
  color: var(--element-color);
}

h5 {
  font-weight: bold;
  margin-bottom: 0;
}

</style>
