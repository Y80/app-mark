<template>
  <div id="app">
    <AppCard v-for="(item, index) of appInfoList" :key="index" :appInfo="item" />
  </div>
</template>

<script>
import AppCard from "./components/AppCard";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      ids: "414478124,1312014438,1210562295,728293409,414603431,590338362,370139302,917670924",
      appInfoList: null,
    };
  },
  components: {
    AppCard
  },

  created() {
    let url = "https://runkit.io/codedartist/getappdetail/branches/master/" + this.ids;
    axios.get(url)
      .then(response => {
        let data = response.data
        this.appInfoList = data.results
    });
  }
};
</script>

<style>
body {
  /* background: hsl(160, 50%, 90%); */
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
