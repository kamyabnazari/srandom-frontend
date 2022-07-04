<template>
  <button class="btn sticky-button" @click="showFormModal">
    <i class="bi songs">
      <font-awesome-icon icon="fa-solid fa-plus" class="card-img" size="2x"/>
    </i>
  </button>

  <div class="modal fade" id="formModal" tabindex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content px-4 py-2">
        <div class="modal-header">
          <h5 class="modal-title" id="formModalLabel">New Song</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.stop.prevent="addSong">
            <div class="mb-3">
              <label for="title" class="form-label">Title</label>
              <input type="text" minlength="1" maxlength="40" class="form-control" id="title" placeholder="song name"
                     v-model="title" required>
            </div>
            <div class="mb-3">
              <label for="author" class="form-label">Author</label>
              <input type="text" minlength="1" maxlength="40" class="form-control" id="author"
                     placeholder="authors name" v-model="author" required>
            </div>
            <div class="mb-3">
              <label for="releaseYear" class="form-label">Release year</label>
              <input type="number" min="1800" max="9999" class="form-control" id="releaseYear" placeholder="2022"
                     v-model="releaseYear" required>
            </div>
            <div class="mb-3">
              <label for="songLink" class="form-label">Song Link</label>
              <input type="text" minlength="1" maxlength="100" class="form-control" id="songLink"
                     placeholder="https://song-link.example" v-model="songLink" required>
            </div>
            <div class="modal-footer justify-content-center">
              <button type="button" class="custom-button button-grey btn-lg me-5" data-bs-dismiss="modal">Cancel</button>
              <button class="custom-button button-blue btn-lg" type="submit" value="submit">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'

export default {

  name: 'SongCreateForm',
  data () {
    return {
      title: '',
      author: '',
      releaseYear: '',
      songLink: '',
      formModal: null
    }
  },
  methods: {
    showFormModal () {
      this.formModal = new Modal(document.getElementById('formModal'), {})
      this.formModal.show()
    },
    addSong () {
      this.formModal.hide()
      this.$emit('addSongEvent', this.title, this.author, this.releaseYear, this.songLink)
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
