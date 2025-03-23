<template>
  <v-app>
    <v-main class="main-contents">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-contents {
  position: relative;
  height: 100vh;
  background-color: #000;
  color: #fff;

  /* 이 부분에 전반적인 배경을 지정할 예정
  background-image: url('./img/nightsky.jpg');
  background-size: cover;
  color: white;*/
}
</style>
