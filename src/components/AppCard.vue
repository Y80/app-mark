<template>
  <van-swipe-cell
    :name="appInfo.trackId"
    :style="{
      background: 'linear-gradient(135deg, hsl(' + hue[0] + ', 90%, 90%), hsl(' + hue[1] + ', 90%, 80%)',
      boxShadow: '8px 8px 18px hsl(' + hue[1] + ', 90%, 90%)'
    }"
  >
    <van-row class="content">
      <!-- 图标、名称、按钮 -->
      <van-row type="flex" align="center" gutter="12">
        <van-col span="4">
          <van-image :src="appInfo.artworkUrl512" class="icon" />
        </van-col>
        <van-col span="13" align="left" class="app-name">{{ editedName }}</van-col>
        <van-col span="7" align="right">
          <van-button
            text="查看"
            :color="`hsl(${hue[1]}, 100%, 40%)`"
            round
            size="small"
            type="primary"
            :url="appInfo.trackViewUrl"
          />
        </van-col>
      </van-row>
      <!-- 标签组 -->
      <van-row type="flex" justify="start" style="flex-wrap:wrap; padding: 12px 0 0">
        <van-tag
          round
          color="white"
          v-for="(tagInfo, index) in tagInfoList"
          :key="index"
        >{{ tagInfo.text }}</van-tag>
      </van-row>
    </van-row>
    <!-- 取消收藏 -->
    <template #right>
      <van-button square type="danger" text="取消收藏" class="btn-delete" @click="deleteApp" />
    </template>
  </van-swipe-cell>
</template>


<script>
export default {
  name: "AppCard",
  props: ["appInfo"],
  data() {
    return {
      hue: this.getRandomHue()
    };
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

  mounted() {
    setTimeout(() => {
      this.$el.style.transform = "translateY(0)";
      this.$el.style.opacity = 1;
      this.$el.style.height = this.$el.offsetHeight + "px";
    }, 100);
  },

  methods: {
    deleteApp() {
      this.$dialog
        .confirm({
          title: "提示",
          message: "取消收藏" + this.editedName + "?"
        })
        .then(() => {
          setTimeout(() => {
            this.$el.style.transform = "scale(0)";
            this.$el.style.height = 0;
            this.$el.style.marginTop = 0;
            this.$emit("event-delete-app", this.appInfo.trackId);
          }, 500);
          setTimeout(() => {
            this.$el.style.display = 'none';
          }, 1000);
        })
        .catch();
    },
    // @reutrn Array [a, b]
    getRandomHue() {
      let hue1 = parseInt(Math.random() * 360);
      let hue2 = (hue1 + 30) % 360;
      return [hue1, hue2];
    }
  }
};
</script>


<style scoped>
.van-swipe-cell {
  background: linear-gradient(135deg, hsl(210, 90%, 50%), hsl(210, 90%, 80%));
  box-shadow: 3px 3px 18px hsl(210, 90%, 90%);
  width: 100%;
  border-radius: 10px;
  margin-top: 60px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(50px);
  transition: all 500ms;
}

.content {
  padding: 18px 28px;
}

.btn-delete {
  height: 100%;
}

.van-tag {
  margin: 2px;
  color: #111;
  font-weight: 100;
}

.icon {
  height: 48px;
  width: 48px;
  border-radius: 14px;
  overflow: hidden;
}
.app-name {
  font-size: 18px;
  font-weight: bolder;
  margin-left: 15px;
  color: #555;
}

@media screen and (min-width: 768px) {
  .van-swipe-cell {
    /* width: 300px; */

    /* margin: 20px; */
  }
  .van-swipe-cell >>> .van-swipe-cell__wrapper {
    height: 100%;
  }
}
</style>