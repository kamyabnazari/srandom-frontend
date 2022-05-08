<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button-component></button-component>
  </div>
</template>

<script>

import ButtonComponent from '@/components/ButtonComponent'

export default {
  name: 'WelcomeComponent',
  components: { ButtonComponent },
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
