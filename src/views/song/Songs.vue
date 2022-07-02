<template>
  <h1 class="page-header">All of <span style="color: var(--primary-color)">your</span> songs</h1>
  <div class="container-fluid">
    <div class="row row-cols-auto gap-5 justify-content-center mb-5">
      <div class="col" v-for="song in songs" :key="song.id">
        <song-card :song="song" @removeSongEvent="removeSong" />
      </div>
    </div>
    <song-create-form @addSongEvent="addSong" />
  </div>
</template>

<script>
import SongCreateForm from '@/components/SongCreateFormComponent'
import SongCard from '@/components/SongCardComponent'

class Song {
  title
  author
  releaseYear
  songLink
  isOriginal

  constructor (title, author, releaseYear, songLink, isOriginal) {
    this.title = title
    this.author = author
    this.releaseYear = releaseYear
    this.songLink = songLink
    this.isOriginal = isOriginal
  }
}

export default {
  name: 'AllSongs',
  components: {
    SongCreateForm,
    SongCard
  },
  data () {
    return {
      songs: [],
      song: new Song()
    }
  },
  mounted () {
    this.fetchSongs()
  },
  methods: {
    fetchSongs: function () {
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
    },
    addSong: function (title, author, releaseYear, songLink) {
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      var raw = JSON.stringify({
        title: title,
        author: author,
        releaseYear: releaseYear,
        songLink: songLink,
        isOriginal: false
      })
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/songs'
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))

      var addingSong = new Song(title, author, releaseYear, songLink, false)
      this.songs.push(addingSong)
    },
    removeSong (id) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/songs/' + id
      const requestOptions = {
        method: 'DELETE',
        body: null,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))

      this.songs.splice(this.songs.indexOf(id), 1)
    }
  }
}
</script>

<style scoped>
.container-fluid {
  background-color: var(--background-color);
  padding-bottom: 20px;
}
</style>
