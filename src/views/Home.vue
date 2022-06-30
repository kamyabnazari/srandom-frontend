<template>
  <h1>Click to get <span style="color: var(--primary-color)">your</span> random song</h1>
  <div class="d-flex justify-content-center align-items-center">
    <img class="banner-image" alt="Vue logo" src="../assets/srandomDesign.png">
    <div class="random-button">
      <font-awesome-icon icon="fa-solid fa-circle-play" class="play-icon" beat size="10x"
                         style="--fa-animation-duration: 2.5s; --fa-beat-scale: 1.2;"
                         @click="$router.push({path: '/random-song'})"/>
    </div>
  </div>

</template>
<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
h1 {
  text-align: center;
  font-weight: 700;
  font-size: 55px;
  padding: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.banner-image {
  max-width: 70%;
  min-height: 200px;
  max-height: 700px;
  border-radius: 20px;
}

.random-button {
  position: absolute;
  margin: 0 auto;
  text-align: center
}

.play-icon {
  color: var(--primary-color);
}

.play-icon:hover {
  color: var(--warning-color);
}
</style>
