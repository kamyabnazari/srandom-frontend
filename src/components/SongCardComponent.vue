<template>
  <div class="card shadow">
    <div class="card-body text-center">
      <div class="d-flex justify-content-center align-items-center card-img-box">
        <font-awesome-icon icon="fa-solid fa-music" class="card-img" size="5x" beat-fade style="--fa-animation-duration: 3s; --fa-fade-opacity: 1.0;" />
      </div>
      <h5 class="card-title mb-3 mt-3">{{ song.titel }}</h5>
      <h6 class="card-title mb-3">{{ song.autor }}</h6>
      <p class="card-text mb-3">{{ song.erscheinungsdatum }}</p>
      <a v-bind:href="song.songLink" class="custom-button button-yellow btn-lg w-50 mb-3">Listen</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongCard',
  props: {
    song: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  width: 300px;
  height: 500px;
  border-radius: 10px;
}

.card-body {
  border-radius: 10px;
}

.card-img-box {
  background-color: var(--background-color);
  height: 200px;
  border-radius: 20px;
  margin: 30px 30px 30px 30px;
}

.card-img {
  color: var(--warning-color);
}

.card-title {
  color: var(--secondary-color);
  font-weight: bold;
}

.card-text {
  color: var(--secondary-color);
}
</style>
