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
  background-color: black;
  color: white;
}
</style>
