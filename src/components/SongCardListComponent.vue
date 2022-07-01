<template>
  <div class="row row-cols-auto gap-5 justify-content-center mb-5">
    <div class="col" v-for="song in songs" :key="song.id">
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
