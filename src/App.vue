<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

body, #app {
    background-color: white;
}

@font-face {
  font-family: 'Open_Sans';
  src: url(fonts/Open-Sans/OpenSans-Regular.ttf);
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Open_Sans';
  src: url(fonts/Open-Sans/OpenSans-Bold.ttf);
  font-weight: bold;
  font-style: normal;
}

#app {
  --text-size__large: 50px;
  --text-size__regular: 18px;
  --text-size__light: 16px;
  --line-height__paragraph: 200%;
  --light-grey: #F5F5F5;
  font-family: Open_Sans;
  font-size: var(--text-size__light);
  line-height: 150%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

p {
  line-height: var(--line-height__paragraph);
}

button {
    font-family: Open_Sans;
    font-size: var(--text-size__light);
}

input {
    font-family: Open_Sans;
    font-size: var(--text-size__light);
}

textarea{
    font-family: Open_Sans;
}

</style>

<style scoped>

</style>
