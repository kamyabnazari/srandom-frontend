<template>
  <div class="card shadow">
    <div class="card-body text-center">
      <span class="badge badge-secondary mb-0">Original</span> <span class="badge badge-primary mb-0">Song</span>
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
  background-color: var(--secondary-color);
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 55%) !important;
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
  color: var(--element-color);
  font-weight: bold;
}

.card-text {
  color: var(--element-color);
}

.badge-primary {
  background-color: var(--primary-color);
}

.badge-secondary {
  background-color: var(--important-color);
}
</style>
