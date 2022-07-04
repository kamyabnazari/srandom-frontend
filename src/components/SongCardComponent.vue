<template>
  <div class="card shadow">
    <div class="card-body text-center">
      <button v-if="song.isOriginal===false && this.removeButtonAvailable===true" class="button-util m-2"
              @click="removeSong">
        <font-awesome-icon icon="fa-solid fa-circle-xmark" size="3x"/>
      </button>
      <span v-if="song.isOriginal===true" class="badge badge-primary mb-0 mx-1">Original</span>
      <span v-if="song.isOriginal===false" class="badge badge-custom mb-0 mx-1">Custom</span>
      <span v-if="song.isFavorite===true" class="badge badge-secondary mb-0 mx-1">Favorite</span>
      <div class="d-flex justify-content-center align-items-center card-img-box">
        <font-awesome-icon icon="fa-solid fa-music" class="card-img" size="5x" beat-fade
                           style="--fa-animation-duration: 3s; --fa-fade-opacity: 1.0;"/>
      </div>
      <h5 class="card-title mb-3 mt-3">{{ song.title }}</h5>
      <h6 class="card-title mb-3">{{ song.author }}</h6>
      <p class="card-text mb-3">{{ song.releaseYear }}</p>
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
    },
    removeButtonAvailable: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    removeSong () {
      this.$emit('removeSongEvent', this.song.id)
    }
  }
}
</script>

<style scoped>
.card {
  width: 300px;
  height: 500px;
  max-width: 300px;
  max-height: 500px;
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
  font-size: 18px;
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

.badge-custom {
  background-color: var(--warning-color);
}

a:hover {
  color: var(--element-color);
}

.button-util {
  position: absolute;
  left: -25px;
  top: -25px;
  border-radius: 50%;
  border: 0;
  background-color: transparent;
  color: var(--warning-color);
}
</style>
