<template>
  <div class="welcome">
    <h1>{{ msg }}</h1>
    <img alt="Vue logo" src="../assets/srandomDesign.png" style="width: 30%; height: 30%; border-radius: 50px; margin-top: 50px;">
  </div>
</template>

<script>

export default {
  name: 'WelcomeComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1 {
  font-weight: 600;
  font-size: 50px;
}
.welcome {
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
