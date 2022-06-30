<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="song in songs" :key="song.id">
      <h1>{{ song.title }}</h1>
      <song-card :song="song"></song-card>
    </div>
  </div>
</template>

<script>
import SongCard from '@/components/SongCardComponent'

export default {
  name: 'Song-',
  components: {
    SongCard
  },
  props: {
    songs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
