<template>
  <button class="shadow-sm list-group-item list-group-item-action mb-2"
          @click="showFavoriteSong">
    <div class="row w-100 align-items-center">
      <div class="col col-7">
        <h6 style="font-weight: bold;">{{ song.title }}</h6>
      </div>
      <div class="col col-3">
        <h6 class="text-start">{{ song.author }}</h6>
      </div>
      <div class="col col-2 text-end">
        <font-awesome-icon icon="fa-solid fa-eye" style="color: var(--primary-color)"/>
      </div>
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
