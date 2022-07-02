<template>
  <h1 class="page-header">Your <span style="color: var(--primary-color)">song</span>!</h1>

  <div class="container-fluid">
    <div class="row row-cols-auto gap-5 d-flex justify-content-center px-5">
      <div class="col-sm">
        <h1 class="list-header" style="color: var(--warning-color)">Favorites</h1>
        <ul class="list-group align-items-center" v-for="song in favoriteSongs" :key="song.id">
          <FavoriteListItemComponent :song="song"/>
        </ul>
      </div>
      <div class="col-sm random-song">
        <div class="mb-4">
          <button class="button-util button-heart shadow m-2" @click="setFavoriteState(songs[0].id, true)">
            <font-awesome-icon icon="fa-solid fa-heart" size="2x"/>
          </button>
          <button class="button-util button-heart shadow m-2" @click="setFavoriteState(songs[0].id, false)">
            <font-awesome-icon icon="fa-solid fa-heart-crack" size="2x"/>
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

export default {
  name: 'RandomSong',
  components: {
    FavoriteListItemComponent,
    GuideCardComponent,
    SongCard
  },
  data () {
    return {
      songs: [],
      favoriteSongs: []
    }
  },
  mounted () {
    this.fetchRandomSong()
    this.fetchFavoriteSongs()
  },
  methods: {
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
    fetchFavoriteSongs () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/songs/favorites'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(song => {
          this.favoriteSongs.push(song)
        }))
        .catch(error => console.log('error', error))
    },
    setFavoriteState: function (songId, state) {
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      var raw = JSON.stringify({
        isFavorite: state
      })
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/songs/favorites/' + songId
      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
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
      } else if (!state && this.favoriteSongs.some(song => song.id === songId)) {
        this.favoriteSongs.splice(this.favoriteSongs.indexOf(songId), 1)
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
