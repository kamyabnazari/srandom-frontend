<template>
  <div class="card100">
    <div class="card-body">
      <h5 class="card-title">{{ song.titel }}</h5>
      <h6 class="card-title">{{ song.autor }}</h6>
      <p class="card-text">
        Genre: {{ song.genre }}
      </p>
      <p class="card-text">
        Erscheinungsdatum: {{ song.erscheinungsdatum }}
      </p>
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
.card-body {
  background: #212529;
}

.card-img-top {
  height: 600px;
  width: auto;
  border: 5px #eee9e9 solid;
  padding: 0;
}

.card-title {
  color: #eee9e9;
}

.card-text {
  color: #eee9e9;
}
</style>
