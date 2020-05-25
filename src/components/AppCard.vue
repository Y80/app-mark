<template>
  <van-swipe-cell :name="appInfo.trackId">
    <van-row class="content">
      <!-- 图标、名称、按钮 -->
      <van-row type="flex" align="center" gutter="12">
        <van-col span="4">
          <van-image :src="appInfo.artworkUrl512" class="icon" />
        </van-col>
        <van-col span="13" align="left">{{ editedName }}</van-col>
        <van-col span="7" align="right">
          <van-button round size="middle" type="primary" text="查看" />
        </van-col>
      </van-row>
      <!-- 标签组 -->
      <van-row type="flex" justify="start" style="flex-wrap:wrap; padding: 12px 0 0">
        <van-tag round plain v-for="(tagInfo, index) in tagInfoList" :key="index">{{ tagInfo.text }}</van-tag>
      </van-row>
    </van-row>
    <!-- 取消收藏 -->
    <template #right>
      <van-button square type="danger" text="取消收藏" class="cancel" :url="appInfo.trackViewUrl" @click="deleteApp" />
    </template>
  </van-swipe-cell>
</template>


<script>
export default {
  name: "AppCard",
  props: ["appInfo"],
  data() {
    return {};
  },
  computed: {
    tagInfoList() {
      let infos = [];
      let appInfo = this.appInfo;
      // 评分
      if (appInfo.averageUserRating < 4) {
        infos.push({
          text: appInfo.averageUserRating.toString().substring(0, 3) + "分",
          type: "danger"
        });
      } else {
        infos.push({
          text: appInfo.averageUserRating.toString().substring(0, 3) + "分",
          type: "success"
        });
      }
      // 分类
      appInfo.genres.forEach(genre =>
        infos.push({
          text: genre,
          type: ""
        })
      );
      // 评分人数
      if (appInfo.userRatingCount >= 10000) {
        infos.push({
          text:
            parseInt(appInfo.userRatingCount / 10000).toString() + "w 人评分",
          type: "info"
        });
      } else {
        infos.push({
          text: appInfo.userRatingCount.toString() + " 人评分",
          type: "info"
        });
      }
      // 是否支持中文
      if (appInfo.languageCodesISO2A.includes("ZH")) {
        infos.push({
          text: "支持中文",
          type: "success"
        });
      } else {
        infos.push({
          text: "不支持中文",
          type: "danger"
        });
      }
      // 文件大小
      let mb = parseInt(parseInt(appInfo.fileSizeBytes) / (1024 * 1024));
      infos.push({
        text: mb.toString() + " MB",
        type: "info"
      });
      // 上次更新
      infos.push({
        text: appInfo.currentVersionReleaseDate.split("T")[0] + " 更新",
        type: "info"
      });
      // 价钱
      if (appInfo.formattedPrice == "免费") {
        infos.push({
          text: appInfo.formattedPrice,
          type: "success"
        });
      } else {
        infos.push({
          text: appInfo.formattedPrice,
          type: "danger"
        });
      }

      infos.push({
        text: "最低支持 IOS" + appInfo.minimumOsVersion,
        type: ""
      });

      infos.push({
        text: appInfo.contentAdvisoryRating,
        type: ""
      });
      return infos;
    },
    editedName() {
      let name = this.appInfo.trackName.split("-")[0];
      if (name.length > 12) {
        name = name.split("&")[0];
      }
      if (name.length > 12) {
        name = name.split(" ")[0];
      }
      if (name.length > 12) {
        name = name.substring(0, 12);
      }
      return name;
    }
  },

  created() {},
  mounted() {
    setTimeout(() => {
      this.$el.style.transform = "translateY(0)";
      this.$el.style.opacity = 1;
      this.$el.style.height = this.$el.offsetHeight + "px";
    }, 100);
  },

  methods: {
    deleteApp() {
      let _ = this;
      this.$dialog.confirm({
        title: "提示",
        message: "取消收藏" + this.editedName + "?",
        beforeClose(action, done) {
          if (action !== "confirm") {
            done();
            return;
          }
          _.$el.style.transform = "scale(0)";
          _.$el.style.height = 0;
          _.$el.style.margin = 0;
          done();
          // _.$emit("event-delete-app", done, _.trackId);
        }
      });
    }
  }
};
</script>


<style scoped>
.van-swipe-cell {
  /* background: linear-gradient(135deg, hsl(80, 80%, 50%), hsl(180, 80%, 50%)); */
  box-shadow: 0 0 18px rgb(230, 230, 230);
  margin: 30px 0 0;
  overflow: hidden;
  /* height: 0; */
  opacity: 0;
  transform: translateY(30px);
  transition: all 500ms;
}

.content {
  padding: 12px;
}

.cancel {
  height: 100%;
}

.van-tag {
  margin: 2px;
}

.card {
  border-radius: 3px;
}
.icon {
  height: 48px;
  width: 48px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 1px 1px 8px #bbbbbbaa;
}
.app-name {
  font-size: 16px;
  font-weight: bolder;
  margin-left: 15px;
  float: left;
  color: #555;
}
</style>