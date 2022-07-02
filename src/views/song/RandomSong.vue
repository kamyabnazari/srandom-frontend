<template>
  <h1 class="page-header">Your <span style="color: var(--primary-color)">song</span>!</h1>

  <div class="container-fluid">
    <div class="row row-cols-auto gap-5 d-flex justify-content-center px-5">
      <div class="col-sm">
        <h1 class="list-header" style="color: var(--warning-color)">Favorites</h1>
        <ul class="list-group align-items-center" v-for="favorite in favorites" :key="favorite.id">
          <FavoriteListItemComponent :favorite="favorite" />
        </ul>
      </div>
      <div class="col-sm random-song">
        <div class="mb-4">
          <button class="button-util button-heart shadow m-2" @click="addFavorite(getSongId())">
            <font-awesome-icon icon="fa-solid fa-heart" size="2x"/>
          </button>
          <button class="button-util button-renew shadow m-2">
            <font-awesome-icon icon="fa-solid fa-rotate-right" size="2x"/>
          </button>
        </div>
        <div class="col-sm" v-for="song in songs" :key="song.id">
          <song-card :song="song"></song-card>
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
  name: 'RandomSong',
  components: {
    FavoriteListItemComponent,
    GuideCardComponent,
    SongCard
  },
  data () {
    return {
      song: Object,
      songs: [],
      favorites: []
    }
  },
  mounted () {
    this.fetchRandomSong()
    this.fetchFavorites()
  },
  methods: {
    getSongId () {
      this.song = this.songs[0]
      return this.song.id
    },
    // TODO Create the correct Random Song in backend
    fetchRandomSong () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/songs'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint + '/6', requestOptions)
        .then(response => response.json())
        .then(result => this.songs.push(result))
        .catch(error => console.log('error', error))
    },
    fetchFavorites () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/favorites'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(favorite => {
          this.fetchSongById(favorite.songId)
        }))
        .catch(error => console.log('error', error))

      console.log(this.favorites)
    },
    fetchSongById (songId) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/songs/' + songId
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => this.favorites.push(result))
        .catch(error => console.log('error', error))
    },
    addFavorite: function (songId) {
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      var raw = JSON.stringify({
        songId: songId
      })
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/favorites'
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))

      var addingSong = new Song(this.fetchSongById(songId))
      this.favorites.push(addingSong)
    },
    removeFavorite (songId) {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/favorites/' + songId
      const requestOptions = {
        method: 'DELETE',
        body: null,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))

      this.favorites.splice(this.favorites.indexOf(songId), 1)
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

.button-util {
  border-radius: 50%;
  border: 0;
  background-color: var(--element-color);
  padding: 10px;
}

.button-heart {
  color: var(--warning-color);
}

.button-renew {
  color: var(--important-color);
}

</style>
