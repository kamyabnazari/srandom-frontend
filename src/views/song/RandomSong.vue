<template>
  <h1 class="page-header">Your <span style="color: var(--primary-color)">song</span></h1>

  <div class="container-fluid">
    <div class="row row-cols-auto gap-5 d-flex justify-content-center px-5">
      <div class="col-sm">
        <h1 class="list-header" style="color: var(--warning-color)">Favorites</h1>
        <div class="list-group align-items-center">
          <button type="button" class="shadow-sm list-group-item list-group-item-action"> Song Name</button>
        </div>
      </div>
      <div class="col-sm random-song">
        <div v-for="song in songs" :key="song.id">
          <song-card :song="song"></song-card>
        </div>
      </div>
      <div class="col-sm">
        <div class="card mb-5 info-card p-5 shadow ">
          <h5 class="list-header mb-5 text-center" style="color: var(--important-color)">Guide</h5>
          <h5 class="card-text">
            Click on the refresh button to get another
            random song
            <br><br>
            Click on the heart button
            to save it for later
            <br><br>
            If you dont like the songs
            remove them just easily
            <br><br>
            If you have more songs you
            want to add, just go to songs and one
          </h5>
        </div>
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
.container-fluid {
  background-color: var(--background-color);
}

.random-song {
  text-align: -webkit-center;
}

.info-card {
  max-width: 600px;
  margin: 10px;
}

.list-group {
  min-width: 300px;
}
</style>
