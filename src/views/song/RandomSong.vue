<template>
  <h1 class="page-header">Your <span style="color: var(--primary-color)">song</span></h1>

  <div class="container align-items-center">
    <div class="row row-cols-auto gap-5 align-items-center">
      <div class="col-sm random-song">
        <h1 class="list-header" style="color: var(--warning-color)">Favorites</h1>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Cras justo odio
            <span class="badge badge-primary badge-pill">14</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
            <span class="badge badge-primary badge-pill">2</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Morbi leo risus
            <span class="badge badge-primary badge-pill">1</span>
          </li>
        </ul>
      </div>
      <div class="col-sm random-song">
        <div v-for="song in songs" :key="song.id">
          <song-card :song="song"></song-card>
        </div>
      </div>
      <div class="col-sm random-song">
        <h1 class="list-header" style="color: var(--important-color)">Recommended</h1>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Cras justo odio
            <span class="badge badge-primary badge-pill">14</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
            <span class="badge badge-primary badge-pill">2</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Morbi leo risus
            <span class="badge badge-primary badge-pill">1</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SongCard from '@/components/SongCardComponent'

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
    fetch(endpoint + '/6', requestOptions)
      .then(response => response.json())
      .then(result => this.songs.push(result))
      .catch(error => console.log('error', error))
  }

}
</script>

<style scoped>
.random-song {
  background-color: #2DCA8C;
  text-align: -webkit-center;
}
</style>
