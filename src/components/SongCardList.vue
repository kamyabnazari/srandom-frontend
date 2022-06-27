<template>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="song in songs" :key="song.id">
      <song-card :song="song"></song-card>
    </div>
  </div>
</template>

<script>
import SongCard from '@/components/Songcard'

export default {
  name: 'Song-',
  components: {
    SongCard
  },
  props: {
    song: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      songs: []
    }
  },
  mounted () {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch('https://srandom-app-frontend.herokuapp.com/api/v1/songs', requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(song => {
        this.songs.push(song)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
