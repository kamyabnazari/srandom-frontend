<template>
  <h1 class="page-header">All <span style="color: var(--primary-color)">our</span> songs</h1>
  <div class="container-fluid">
    <song-card-list :songs="this.songs"></song-card-list>
  </div>
</template>

<script>
import SongCardList from '@/components/SongCardListComponent'

export default {
  name: 'AllSongs',
  components: {
    SongCardList
  },
  data () {
    return {
      songs: []
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

</style>
