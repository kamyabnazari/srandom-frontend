<template>
  <a href="#" class="shadow-sm list-group-item list-group-item-action flex-column align-items-start mb-2">
    <div class="d-flex w-100 justify-content-between align-items-center">
      <h5 style="font-weight: bold;">{{ song.title }}</h5>
      <h6>{{ song.author }}</h6>
      <font-awesome-icon icon="fa-solid fa-eye" style="color: var(--primary-color)"/>
    </div>
  </a>
</template>

<script>
export default {
  name: 'FavoriteListItemComponent',
  props: {
    song: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
