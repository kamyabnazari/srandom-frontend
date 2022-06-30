<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-6 g-5">
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
