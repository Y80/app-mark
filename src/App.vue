<template>
  <div id="app">
    <!-- 全屏加载动画 -->
    <div class="spinner-container" ref="spinner">
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </div>

    <!-- 提示用户保存改动 -->
    <van-row type="flex" justify="start" align="center" class="save-panel" ref="save">
      <span style="color: #00000088; font-size: 13px">已删除 {{ deleteCount }} 个 App，点击左上角 [完成] 退出页面并保存数据</span>
    </van-row>

    <img src="./assets/20-User-Interaction.png" style="max-width: 350px;" />
    <h1 class="title">App 收藏夹</h1>

    <div class="app-container">
      <app-card v-for="(item, index) of appInfoList" :key="index" :app-info="item" @event-delete-app="deleteApp">
      </app-card>
    </div>

    <van-divider style="margin: 50px 0 30px">已加载全部</van-divider>

    <!-- <van-row type="flex" justify="center" align="center" class="footer"> -->
    <!-- <van-row>@ 2020</van-row> -->
    <!-- <van-row>由 古十三 提供技术支持</van-row> -->
    <!-- </van-row> -->
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
        appIdStr:
          "414478124,1312014438,1210562295,728293409,414603431,590338362,370139302,917670924",
        appIdList: [],
        appInfoList: [],
        deleteCount: 0
      };
    },

    watch: {
      deleteCount(newVal, oldVal) {
        if (newVal === 1 && oldVal === 0) {
          this.$refs.save.$el.style.left = 0;
        }
      }
    },

    created() {
      if (window.location.hash !== "") {
        this.appIdStr = window.location.hash.substr(1)
      }
      this.appIdList = this.appIdStr.split(",");
      this.getAppInfo();
    },
    mounted() { },

    methods: {
      async getAppInfo() {
        // let startTime = Date.now()
        let that = this;
        let timeout = 10000;

        let url = "https://gu13.cn/API/getAppInfo.php?id=" + this.appIdList;
        axios
          .get(url, { timeout })
          .then(rsp => {
            rsp.data.data.results.forEach(item => {
              let imgUrl = item.artworkUrl512;
              let img = new Image();
              img.src = imgUrl;
              img.onload = () => {
                that.appInfoList.push(item);
                // 第一个卡片视图已就绪，取消加载状态
                if (that.appInfoList.length === 1) {
                  that.$nextTick(() => {
                    that.$refs.spinner.style.opacity = 0;
                    setTimeout(() => {
                      that.$refs.spinner.style.display = "none";
                    }, 300);
                  });
                }

                if (that.appInfoList.length === that.appIdList.length) {
                  console.log("所有 App 的图标资源已获取");
                }
              };
            });
          })
          .catch(e => {
            if (e.message.includes("timeout")) {
              alert("请求超时，请稍后重试！");
              window.close();
            }
          });
      },
      // 从数组中删除 App
      deleteApp(id) {
        console.log("deleteApp", arguments, this.appIdList);
        this.appIdList = this.appIdList.filter(item => item != id);
        this.deleteCount++;
        console.log(this.appIdList);
        // 内容复制到剪贴板
        let input = document.createElement("input");
        input.value = "@@" + this.appIdList;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        console.log("复制成功：", input.value);
        document.body.removeChild(input);
        // window.close();
      }
    }
  };
</script>

<style>
  * {
    user-select: none;
    -webkit-touch-callout: none;
  }

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
    background: rgba(0, 0, 0, 0.123);
    overflow: hidden;
    backdrop-filter: blur(10px);
  }

  .app-container {
    display: flex;
    flex-direction: column;
    padding: 0 5vw;
    width: 90vw;
  }


  .title {
    color: transparent;
    -webkit-background-clip: text;
    width: 180px;
    margin: 0 auto;
    background-image: linear-gradient(90deg,
        hsl(242, 90%, 70%),
        hsl(0, 88%, 70%),
        hsl(46, 98%, 70%));
  }

  .footer {
    margin-top: 30px;
    padding: 8px 0;
    color: #aaa;
    font-size: 14px;
    border-top: 1px solid #ddd;
  }

  .spinner-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    z-index: 100;
    opacity: 1;
    transition: all 300ms;
  }

  .spinner {
    width: 80px;
    height: 80px;
    position: relative;
    margin: 40vh auto;
  }

  .double-bounce1,
  .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: hsl(150, 100%, 60%);
    box-shadow: 0 0 23px hsl(150, 100%, 70%);
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: sk-bounce 2s infinite ease-in-out;
    animation: sk-bounce 2s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
    background-color: hsl(190, 100%, 60%);
    box-shadow: 0 0 23px hsl(190, 100%, 70%);
  }

  @-webkit-keyframes sk-bounce {

    0%,
    100% {
      -webkit-transform: scale(0);
    }

    50% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes sk-bounce {

    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }

    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }

  @media screen and (min-width: 768px) {
    .app-container {
      width: auto;
      flex-direction: row;
      /* align-items: center; */
      flex-wrap: wrap;
      justify-content: flex-start;
      /* margin: -20px; */
    }

    .app-container > * {
      max-width: 320px;
      flex: 1 1 280px;
      margin-left: 30px;
      margin-right: 30px;
    }

  }

  @media screen and (min-width: 1024px) {
    .app-container {
      width: auto;
      flex-direction: row;
      /* align-items: center; */
      flex-wrap: wrap;
      justify-content: flex-start;
      /* margin: -20px; */
    }

    .app-container > * {
      max-width: 300px;
      flex: 1 1 33.3%;
      margin-left: 30px;
      margin-right: 30px;
    }

  }
</style>