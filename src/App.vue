<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  
  <AppCard v-for="o in 6" :key="o" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppCard from './components/AppCard'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    AppCard
  }
}
</script>

<style>
body {
  background: hsl(160, 50%, 90%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
