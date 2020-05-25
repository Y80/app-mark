<template>
  <div id="app">
    <h2>App 收藏夹</h2>
    <app-card v-for="(item, index) of appInfoList" :key="index" :app-info="item" @event-delete-app="deleteApp">
    </app-card>

    <van-row type="flex" justify="center" class="footer">
      <p>@2020 </p>
      <p>由 古十三 提供技术支持</p>
    </van-row>
  </div>
</template>

<script>
  import AppCard from "./components/AppCard";
  import axios from "axios";

  export default {
    name: "App",
    components: {
      "app-card": AppCard
    },
    data() {
      return {
        appIdStr: "414478124,1312014438,1210562295,728293409,414603431,590338362,370139302,917670924",
        appInfoList: [],
      };
    },

    computed: {
      appIdList() {
        return this.appIdStr.split(",");
      },
    },

    created() {
      this.getAppInfo()
    },
    methods: {
      async getAppInfo() {
        let url = "http://localhost:878/API/getAppInfo.php?id=" + this.appIdList;
        let rsp = await axios.get(url)
        // console.log(rsp);
        // return;
        this.appInfoList.splice(0, this.appInfoList.length ? this.appInfoList.length : 0, ...rsp.data.data.results);
        // console.log(this.appInfoList);

      },
      // 从数组中删除 App ==> 复制内容至剪贴板
      deleteApp(done, id) {
        console.log(arguments);
        console.log('delete:', id);
        this.appIdStr = this.appIdList.filter(item => item != id).join(',');

        let input = document.createElement("input");
        input.value = this.appIdStr;
        document.body.appendChild(input);
        input.select();
        if (document.execCommand("copy")) {
          console.log("复制成功：", input.value);
        } else {
          alert("复制内容至剪贴板发生错误");
        }
        document.body.removeChild(input);

        done()
      }
    }
  };
</script>

<style>
  body {
    /* background: hsl(120, 90%, 50%); */
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .footer {
    margin-top: 30px;
    padding: 8px 0;
    color: #aaa;
    font-size: 14px;
    border-top: 1px solid #ddd;
  }
</style>