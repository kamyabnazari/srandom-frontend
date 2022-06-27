<template>
  <body>
  <h1>Ihr nächster Song</h1>
  <div class="col" v-for="song in songs" :key="song.id">
    <div class="btn-group">
      <a class="btn  btn-default btn-lg btn-general btn-white smooth-scroll"
         :href="song.songLink" target="_blank">
        Zum Song
      </a>
      <a href="/songgenerator" class="btn btn-danger btn-lg" role="button">NEUER SONG</a>
    </div>
    <br><br>
    <song-card :song="song"></song-card>
    <br><br>
  </div>
  </body>
</template>

<script>

import SongCard from '@/components/SongCard'

export default {
  name: 'Song-Generator',
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
    const random = Math.floor(Math.random() * (15 - 11 + 1)) + 11
    fetch('https://srandom-app-frontend.herokuapp.com/api/v1/songs' + random, requestOptions)
      .then(response => response.json())
      .then(result => this.songs.push(result))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>
body { background-image: url("../assets/srandomDesign.png"); }
h1 {color: #ffffff;
  background-color: #212529;
}
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
