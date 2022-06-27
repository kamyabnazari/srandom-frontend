<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <img alt="Vue logo" src="../assets/srandomDesign.png" style="width: 100%; height: 60%; border-radius: 50px; margin-top: 5px;">
    <button class="btn">Song vorschlagen</button>
  </div>
</template>
<script>

export default {
  name: 'WelcomeComponent',
  props: {
    msg: String
  }
}
</script>
<style scoped>
h1 {
  font-weight: 700;
  font-size: 20px;
}
.container {
  position: sticky;
  width: 100%;
}

.container img {
  width: 200%;
  height: 200%;
}

/* Style the button and place it in the middle of the container/image */
.container .btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 25px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 2px;
}

.container .btn:hover {
  background-color: darkred;
}
</style>
