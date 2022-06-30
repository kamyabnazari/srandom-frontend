<template>
  <div class="page-header">
    <h1>Your Song</h1>
  </div>
  <div class="col" v-for="song in songs" :key="song.id">
    <song-card :song="song"></song-card>
    <br><br>
  </div>
</template>

<script>

import SongCard from '@/components/SongCardComponent'

// Function to generate random number
function randomNumber (min, max) {
  return Math.random().toFixed() * (max - min) + min
}

export default {
  name: 'RandomSong',
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
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/songs'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint + '/' + randomNumber(1, 9), requestOptions)
      .then(response => response.json())
      .then(result => this.songs.push(result))
      .catch(error => console.log('error', error))
  }

}
</script>

<style scoped>
a {
  color: #eee9e9;
  font-size: 25px;
  display: inline;
  background-color: #212529;
  border: 3px #eee9e9 solid;
}

a2{
  color: #eee9e9;
  font-size: 20px;
  display: inline;
  background-color: #212529;
  border: 3px #eee9e9 solid;
}

songs-card{
  size: 20px;
}
</style>
