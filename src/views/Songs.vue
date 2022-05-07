<template>
  <h1>Songs</h1>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="song in songs" :key="song.id">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{song.titel}}</h5>
            <h6 class="card-subtitle">{{song.autor}}</h6>
            <h6 class="card-subtitle">{{song.erscheinungsdatum}}</h6>
            <p class="card-text">{{song.genre}} , {{song.songLink}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Songs',
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
    fetch(endpoint, requestOptions)
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
