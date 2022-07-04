<template>
  <div class="d-flex justify-content-center align-items-center message">
    <div class="d-flex flex-column mb-3 text-center">
      <div class="p-2"><h1>404</h1></div>
      <div class="p-2"><h2>Ups... Let us get back on track 😆</h2></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style scoped>
.message {
  height: 80%;
}

h1 {
  font-size: 100px;
  color: var(--warning-color);
}

h2 {
  font-size: 80px;
  color: var(--warning-color);
}
</style>
