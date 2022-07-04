<template>
  <div class="card mb-5 info-card p-5 shadow ">
    <h5 class="list-header mb-5 text-center" style="color: var(--important-color)">Guide</h5>
    <h5 class="card-text">
      Click on
      <font-awesome-icon icon="fa-solid fa-rotate-right" size="1x" style="color:var(--important-color)"/>
      to get another <span style="color: var(--important-color)">random song</span>!
      <br><br>
      Click on
      <font-awesome-icon icon="fa-solid fa-heart" size="1x" style="color:var(--warning-color)"/>
      to save it as your <span style="color: var(--warning-color)">favorites</span>.
      <br><br>
      Click on a song from the favorite list to open it.
      <br><br>
      Click on the listen button to go to the song link, so you can listen to the song.
      <br><br>
      If you want to <span style="color: var(--warning-color)">remove</span> the song from your favorites, have
      have to choose the song
      and click on
      <font-awesome-icon icon="fa-solid fa-heart-crack" size="1x" style="color:var(--warning-color)"/>
      .
      <br><br>
      If you like to <span style="color: var(--primary-color)">add</span> your own song to the library go to Songs
      and click on
      <font-awesome-icon icon="fa-solid fa-plus" size="1x" style="color:var(--primary-color)"/>
      in the bottom right side of the screen.
      <br><br>
      If you dont like to have the song in your library <span style="color: var(--warning-color)">remove</span> it
      by going to Songs
      and click on
      <font-awesome-icon icon="fa-solid fa-circle-xmark" size="1x" style="color:var(--warning-color)"/>
      on the top right side of the song.
    </h5>
  </div>
</template>

<script>
export default {
  name: 'GuideCardComponent'
}
</script>

<style scoped>
.info-card {
  max-width: 600px;
  margin: 10px;
}
</style>
