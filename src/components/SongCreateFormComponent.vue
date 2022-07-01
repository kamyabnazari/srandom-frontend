<template>
  <button class="btn sticky-button" data-bs-toggle="modal" data-bs-target="#exampleModal"
          aria-controls="#exampleModal">
    <i class="bi songs">
      <font-awesome-icon icon="fa-solid fa-plus" class="card-img" size="2x" />
    </i>
  </button>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New Song</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="titel" class="form-label">Title</label>
              <input type="text" class="form-control" id="titel" v-model="titel" required>
              <div class="invalid-feedback">
                Please provide the title.
              </div>
            </div>
            <div class="mb-3">
              <label for="autor" class="form-label">Author</label>
              <input type="text" class="form-control" id="autor" v-model="autor" required>
              <div class="invalid-feedback">
                Please provide the autor.
              </div>
            </div>
            <div class="mb-3">
              <label for="autor" class="form-label">Year of release</label>
              <input type="text" class="form-control" id="autor" v-model="erscheinungsjahr" required>
              <div class="invalid-feedback">
                Please provide the autor.
              </div>
            </div>
            <div class="mb-3">
              <label for="songLink" class="form-label">Song Link</label>
              <input type="text" class="form-control" id="songLink" v-model="songLink" required>
              <div class="invalid-feedback">
                Please provide the Song Link.
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-lg" data-bs-dismiss="modal">Close</button>
          <button class="btn btn-primary me-3 btn-lg" type="submit" @click="createSong">Create</button>
        </div>
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
      erscheinungsjahr: '',
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
        erscheinungsjahr: this.erscheinungsjahr,
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
  background-color: var(--primary-color);
  position: fixed;
  bottom: 50px;
  right: 50px;
  padding: 20px 23px;
  border-radius: 100%;
  border-width: 0;
  color: var(--element-color);
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 40%) !important;
}

</style>
