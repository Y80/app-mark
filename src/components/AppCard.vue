<template>
  <van-swipe-cell>
    <van-row class="content">
      <van-row></van-row>
      <van-row>
        <van-tag>发发分分</van-tag>
        <van-tag>发发分分</van-tag>
        <van-tag>发发分分</van-tag>
        <van-tag>发发分分</van-tag>
        <van-tag>发发分分</van-tag>
        <van-tag>发发分分</van-tag>
        <van-tag>发发分分</van-tag>
        <van-tag>发发分分</van-tag>
      </van-row>
    </van-row>

    <template #right>
      <van-button square type="danger" text="取消收藏" class="cancel"></van-button>
    </template>
  </van-swipe-cell>

  <!-- <div>
    <van-tag>标签</van-tag>
    <van-tag type="primary">标签</van-tag>
    <van-tag type="success">标签</van-tag>
    <van-tag type="danger">标签</van-tag>
    <van-tag type="warning">标签</van-tag>
  </div>-->
  <!-- <vant-row class="card">
    <vant-row type="flex" align="middle" style="margin-bottom: 8px">
      <vant-col :span="4">
        <vant-image class="app-icon" :src="artworkUrl60" />
      </vant-col>
      <vant-col :span="20">
        <span class="app-name">{{editedName}}</span>
      </vant-col>
    </vant-row>

    <vant-row class="info" type="flex">
      <vant-tag
        size="small"
        effect="dark"
        type="info"
        v-for="item of genres"
        :key="item"
        v-text="item"
      />
      <vant-tag
        size="small"
        v-for="(item,index) of infoList"
        :key="index"
        :type="item.type"
        effect="dark"
      >{{item.text}}</vant-tag>
    </vant-row>
    <vant-row type="flex" justify="space-between">
      <vant-button class="btn" plain round size="mini" type="danger">取消收藏</vant-button>
      <vant-button class="btn" plain round size="mini" type="primary">查看详情</vant-button>
      <vant-button class="btn" plain round size="mini" type="primary">打开应用</vant-button>
    </vant-row>

    <vant-divider />
  </vant-row>-->
</template>


<script>
export default {
  name: "AppCard",
  props: ["appInfo"],
  data() {
    return this.appInfo;
  },
  computed: {
    infoList() {
      let infos = [];
      // 评分
      if (this.averageUserRating < 4) {
        infos.push({
          text: this.averageUserRating.toString().substring(0, 3) + "分",
          type: "danger"
        });
      } else {
        infos.push({
          text: this.averageUserRating.toString().substring(0, 3) + "分",
          type: "success"
        });
      }
      // 评分人数
      if (this.userRatingCount >= 10000) {
        infos.push({
          text: parseInt(this.userRatingCount / 10000).toString() + "w 人评分",
          type: "info"
        });
      } else {
        infos.push({
          text: this.userRatingCount.toString() + " 人评分",
          type: "info"
        });
      }

      // 是否支持中文
      if (this.languageCodesISO2A.includes("ZH")) {
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
      let mb = parseInt(parseInt(this.fileSizeBytes) / (1024 * 1024));
      infos.push({
        text: mb.toString() + " MB",
        type: "info"
      });
      // 上次更新
      infos.push({
        text: this.currentVersionReleaseDate.split("T")[0] + " 更新",
        type: "info"
      });
      // 价钱
      if (this.formattedPrice == "免费") {
        infos.push({
          text: this.formattedPrice,
          type: "success"
        });
      } else {
        infos.push({
          text: this.formattedPrice,
          type: "danger"
        });
      }

      return infos;
    },
    editedName() {
      let name = this.trackName.split("-")[0];
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

  created() {}
};
</script>


<style scoped>
.van-swipe-cell {
  background: white;
  margin-top: 22px;
}

.content {
  padding: 8px 0;
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
.app-icon {
  border-radius: 14px;
}
.app-name {
  font-size: 16px;
  font-weight: bolder;
  margin-left: 15px;
  float: left;
  color: #555;
}
.info {
  margin-left: -3px;
  flex-wrap: wrap;
}
.info span {
  margin: 3px;
}

.btn {
  /* box-shadow: 0 0 4px #666; */
  margin-top: 8px;
}
</style>