<template>
  <h1 class="page-header">All of <span style="color: var(--primary-color)">your</span> songs</h1>
  <div class="container-fluid">
    <div class="row row-cols-auto gap-5 justify-content-center mb-5">
      <div class="col" v-for="song in songs" :key="song.id">
        <song-card :song="song" :remove-button-available="true" @removeSongEvent="removeSong"/>
      </div>
    </div>
    <song-create-form @addSongEvent="addSong"/>
  </div>
</template>

<script>
import SongCreateForm from '@/components/SongCreateFormComponent'
import SongCard from '@/components/SongCardComponent'

export default {
  name: 'AllSongs',
  emits: ['removeSongEvent', 'addSongEvent'],
  components: {
    SongCreateForm,
    SongCard
  },
  data () {
    return {
      songs: [],
      required: true
    }
  },
  mounted () {
    this.fetchSongs()
  },
  methods: {
    async fetchSongs () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/songs'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      await fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(song => {
          this.songs.push(song)
        }))
        .catch(error => console.log('error', error))
    },
    async addSong (title, author, releaseYear, songLink) {
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        title: title,
        author: author,
        releaseYear: releaseYear,
        songLink: songLink,
        isOriginal: false,
        isFavorite: false
      })
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/songs'
      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      if (this.songs.some((song) => song.title === title && song.author === author && song.releaseYear === releaseYear)) {
        this.$notify({
          type: 'error',
          title: 'Notification',
          text: 'You already have this song in your library!'
        })
      } else {
        await fetch(endpoint, requestOptions)
          .catch(error => console.log('error', error))

        this.songs.push({
          title: title,
          author: author,
          releaseYear: releaseYear,
          songLink: songLink,
          isOriginal: false,
          isFavorite: false
        })
        this.$notify({
          type: 'success',
          title: 'Notification',
          text: 'You have added a new song to your library!'
        })
      }
    },
    async removeSong (songId) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/songs/' + songId
      const requestOptions = {
        method: 'DELETE',
        body: null,
        redirect: 'follow'
      }

      await fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))

      if (this.songs.some(song => song.id === songId)) {
        this.songs.splice(this.songs.findIndex((song) => song.id === songId), 1)
        this.$notify({
          type: 'error',
          title: 'Notification',
          text: 'You have removed the song from your library!'
        })
      }
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
