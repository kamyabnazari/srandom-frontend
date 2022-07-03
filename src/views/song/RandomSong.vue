<template>
  <h1 class="page-header">Your <span style="color: var(--primary-color)">song</span>!</h1>

  <div class="container-fluid">
    <div class="row row-cols-auto gap-5 d-flex justify-content-center px-5">
      <div class="col-sm">
        <h1 class="list-header" style="color: var(--warning-color)">Favorites</h1>
        <ul class="list-group align-items-center" v-for="song in favoriteSongs" :key="song.id">
          <FavoriteListItemComponent :song="song" @showFavoriteSongEvent="showFavoriteSong"/>
        </ul>
      </div>
      <div class="col-sm random-song">
        <div class="mb-4">
          <heart-button-component v-for="song in songs" :key="song.id" :song="song"
                                  @setFavoriteStateEvent="setFavoriteState"/>
          <button class="button-util button-renew shadow m-2" @click="retryRandomSong">
            <font-awesome-icon icon="fa-solid fa-rotate-right" size="2x"/>
          </button>
        </div>
        <div class="col-sm" v-for="song in songs" :key="song.id">
          <song-card :song="song" :remove-button-available="false"></song-card>
        </div>
      </div>
      <div class="col-sm">
        <guide-card-component/>
      </div>
    </div>
  </div>
</template>

<script>
import SongCard from '@/components/SongCardComponent'
import GuideCardComponent from '@/components/GuideCardComponent'
import FavoriteListItemComponent from '@/components/FavoriteListItemComponent'
import HeartButtonComponent from '@/components/HeartButtonComponent'

export default {
  name: 'RandomSong',
  emits: ['showFavoriteSongEvent', 'setFavoriteStateEvent'],
  components: {
    HeartButtonComponent,
    FavoriteListItemComponent,
    GuideCardComponent,
    SongCard
  },
  data () {
    return {
      songs: [],
      favoriteSongs: [],
      required: true
    }
  },
  mounted () {
    this.fetchRandomSong()
    this.fetchFavoriteSongs()
  },
  methods: {
    retryRandomSong () {
      this.songs.pop()
      this.fetchRandomSong()
    },
    async fetchRandomSong () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/songs/random'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      await fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => this.songs.push(result))
        .catch(error => console.log('error', error))
    },
    async fetchFavoriteSongs () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/songs/favorites'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      await fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(song => {
          this.favoriteSongs.push(song)
        }))
        .catch(error => console.log('error', error))
    },
    showFavoriteSong (songId) {
      console.log('I have been called!' + songId)
    },
    async setFavoriteState (songId, state) {
      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        isFavorite: state
      })
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/songs/favorites/' + songId
      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      await fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))

      if (state && !this.favoriteSongs.some(song => song.id === songId)) {
        this.favoriteSongs.push({
          id: songId,
          title: this.songs[0].title,
          author: this.songs[0].author,
          releaseYear: this.songs[0].releaseYear,
          songLink: this.songs[0].songLink,
          isOriginal: this.songs[0].isOriginal,
          isFavorite: true
        })
        this.songs[0].isFavorite = true
        this.$notify({
          type: 'success',
          title: 'Notification',
          text: 'You have removed the song from your favorites!'
        })
      } else if (!state && this.favoriteSongs.some(song => song.id === songId)) {
        this.favoriteSongs.splice(this.favoriteSongs.indexOf(songId), 1)
        this.songs[0].isFavorite = false
        this.$notify({
          type: 'error',
          title: 'Notification',
          text: 'You have removed the song from your favorites!'
        })
      }
    }
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

.list-group {
  min-width: 300px;
}

</style>
