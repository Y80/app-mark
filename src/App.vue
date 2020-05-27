<template>
  <div id="app">
    <!-- 提示用户保存改动 -->
    <van-row type="flex" justify="end" align="center" class="save-panel" ref="save">
      <span style="color: #00000088">将 {{ deleteCount }} 条变动保存至 iCloud </span>
      <van-button size="small" color="linear-gradient(45deg, hsl(140, 90%, 60%), hsl(280, 90%, 60%))"
        style="margin-left: 18px; width: 88px;" @click="saveApp">📥 保存</van-button>
    </van-row>

    <img src="./assets/20-User-Interaction.png" width="90%">
    <h1 class="title">App 收藏夹</h1>
    <app-card v-for="(item, index) of appInfoList" :key="index" :app-info="item" @event-delete-app="deleteApp">
    </app-card>

    <van-row type="flex" justify="center" align="center" class="footer">
      <van-row>@ 2020 </van-row>
      <!-- <van-row>由 古十三 提供技术支持</van-row> -->
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
        appIdList: [],
        appInfoList: [],
        deleteCount: 0
      };
    },

    watch: {
      deleteCount(newVal, oldVal) {
        if (newVal === 1 && oldVal === 0) {
          this.$refs.save.style.left = '0'
        }
      }
    },

    created() {
      this.appIdList = this.appIdStr.split(",")
      this.getAppInfo()
    },
    mounted() {},

    methods: {
      async getAppInfo() {
        let url = "http://192.168.0.106:878/API/getAppInfo.php?id=" + this.appIdList;
        axios.get(url)
          .then(rsp => {
            rsp.data.data.results.forEach(item => {
              let imgUrl = item.artworkUrl512
              let img = new Image()
              img.src = imgUrl
              img.onload = () => {
                this.appInfoList.push(item)

                // 第一个卡片视图已就绪，取消加载状态
                // if (this.appInfoList.length === 1) {

                // }

                if (this.appInfoList.length === this.appIdList.length) {
                  console.log('所有 App 的图标资源已获取');
                }
              }
            })
          })
          .catch(e => {
            alert('获取信息失败' + e.message())
          })

      },
      // 从数组中删除 App
      deleteApp(id) {
        console.log('deleteApp', arguments, this.appIdList);
        this.appIdList = this.appIdList.filter(item => item != id)
        console.log(this.appIdList);
      },
      saveApp() {
        // 内容复制到剪贴板
        let input = document.createElement("input");
        input.value = this.appIdList.toString();
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy")
        console.log("复制成功：", input.value);
        document.body.removeChild(input);
        // window.close()
      }
    }
  };
</script>

<style>
  #app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #2c3e50; */
    margin-top: 60px;
  }

  .save-panel {
    width: calc(100vw - 40px);
    padding: 0 20px;
    height: 40px;
    position: fixed;
    top: 0;
    left: 100vw;
    z-index: 1;
    transition: all 300ms;
    background: rgba(255, 255, 255, .3);
    overflow: hidden;
    backdrop-filter: blur(10px);
  }


  .title {
    color: transparent;
    -webkit-background-clip: text;
    width: 180px;
    margin: 0 auto;
    background-image: linear-gradient(90deg, hsl(242, 90%, 70%), hsl(0, 88%, 70%), hsl(46, 98%, 70%));
  }

  .footer {
    margin-top: 30px;
    padding: 8px 0;
    color: #aaa;
    font-size: 14px;
    border-top: 1px solid #ddd;
  }
</style>