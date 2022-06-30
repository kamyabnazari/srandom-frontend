<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#song-create-offcanvas"
          aria-controls="#song-create-offcanvas">
    <i class="bi songs">Song zur Playlist hinzufügen ➕</i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="song-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">Neue Songs</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="mb-3">
        <label for="titel" class="form-label">Titel</label>
        <input type="text" class="form-control" id="titel" v-model="titel" required>
        <div class="invalid-feedback">
          Please provide the title.
        </div>
      </div>
      <div class="mb-3">
        <label for="autor" class="form-label">Autor</label>
        <input type="text" class="form-control" id="autor" v-model="autor" required>
        <div class="invalid-feedback">
          Please provide the autor.
        </div>
      </div>
      <div class="mb-3">
        <label for="songLink" class="form-label">songLink</label>
        <input type="text" class="form-control" id="songLink" v-model="songLink" required>
        <div class="invalid-feedback">
          Please provide the SongLink.
        </div>
      </div>
      <div class="mt-5">
        <button class="btn btn-primary me-3" type="submit" @click="createSong">Create</button>
        <button class="btn btn-danger" type="reset">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongCreateForm',
  data () {
    return {
      titel: '',
      autor: '',
      songLink: ''
    }
  },
  methods: {
    createSong () {
      var myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      var raw = JSON.stringify({
        titel: this.titel,
        autor: this.autor,
        songLink: this.songLink
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
    }
  }
}
</script>

<style scoped>
.sticky-button {
  background-color: #212529;
  position: fixed;
  bottom: 40px;
  right: 40px;
  padding: 30px 45px;
  border-radius: 40px;
}

</style>
