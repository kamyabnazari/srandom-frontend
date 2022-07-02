<template>
  <h1 class="page-header">All of <span style="color: var(--primary-color)">your</span> songs</h1>
  <div class="container-fluid">
    <song-card-list :songs="this.songs"></song-card-list>
    <song-create-form @created="addSong"></song-create-form>
  </div>
</template>

<script>
import SongCardList from '@/components/SongCardListComponent'
import SongCreateForm from '@/components/SongCreateFormComponent'

export default {
  name: 'AllSongs',
  components: {
    SongCreateForm,
    SongCardList
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
.container-fluid {
  background-color: var(--background-color);
  padding-bottom: 20px;
}
</style>
