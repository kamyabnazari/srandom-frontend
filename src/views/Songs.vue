<template>
  <body>
  <h1>Alle Songs</h1>
  <div class="container-fluid">
    <song-card-list :songs="this.songs"></song-card-list>
  </div>
  <song-create-form @created="addSong"></song-create-form>
  </body>
</template>

<script>
import SongCardList from '@/components/SongCardList'
import SongCreateForm from '@/components/SongCreateForm'

export default {
  name: 'Songs-',
  components: {
    SongCardList,
    SongCreateForm
  },
  data () {
    return {
      songs: []
    }
  },
  methods: {
    addSong (songLocation) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + songLocation
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(song => this.songs.push(song))
        .catch(error => console.log('error', error))
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/songs'
    const requestOption = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOption)
      .then(response => response.json())
      .then(result => result.forEach(song => {
        this.songs.push(song)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
h1 {
  background-color: #212529;
  color: #eee9e9;
}
body {background-color: #181a1a
}

</style>
