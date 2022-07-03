<template>
  <button class="shadow-sm list-group-item list-group-item-action flex-column align-items-start mb-2"
          @click="showFavoriteSong">
    <div class="d-flex w-100 justify-content-between align-items-center">
      <h5 style="font-weight: bold;">{{ song.title }}</h5>
      <h6>{{ song.author }}</h6>
      <font-awesome-icon icon="fa-solid fa-eye" style="color: var(--primary-color)"/>
    </div>
  </button>
</template>

<script>
export default {
  name: 'FavoriteListItemComponent',
  props: {
    song: {
      type: Object,
      required: true
    }
  },
  methods: {
    showFavoriteSong () {
      this.$emit('showFavoriteSongEvent', this.song.id)
    }
  }
}
</script>

<style scoped>

</style>
