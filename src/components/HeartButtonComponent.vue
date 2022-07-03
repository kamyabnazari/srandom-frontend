<template>
  <button v-if="song.isFavorite===false" class="button-util button-heart shadow m-2"
          @click="setFavoriteState(true)">
    <font-awesome-icon icon="fa-solid fa-heart" size="2x"/>
  </button>
  <button v-if="song.isFavorite===true" class="button-util button-heart shadow m-2"
          @click="setFavoriteState(false)">
    <font-awesome-icon icon="fa-solid fa-heart-crack" size="2x"/>
  </button>
</template>

<script>
export default {
  name: 'HeartButtonComponent',
  props: {
    song: {
      type: Object,
      required: true
    }
  },
  methods: {
    setFavoriteState (state) {
      this.$emit('setFavoriteStateEvent', this.song.id, state)
    }
  }
}
</script>

<style scoped>

</style>
