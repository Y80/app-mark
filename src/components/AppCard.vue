<template>
  <el-row class="card">
    <el-row type="flex" align="middle" style="margin-bottom: 8px">
      <el-col :span="4">
        <el-image class="app-icon" :src="artworkUrl60" />
      </el-col>
      <el-col :span="20">
        <span class="app-name">{{editedName}}</span>
      </el-col>
    </el-row>

    <el-row class="info" type="flex">
      <el-tag
        size="small"
        effect="dark"
        type="info"
        v-for="item of genres"
        :key="item"
        v-text="item"
      />
      <el-tag
        size="small"
        v-for="(item,index) of infoList"
        :key="index"
        :type="item.type"
        effect="dark"
      >{{item.text}}</el-tag>
    </el-row>
    <!-- 操作按钮 -->
    <el-row type="flex" justify="space-between">
      <el-button class="btn" plain round size="mini" type="danger">取消收藏</el-button>
      <el-button class="btn" plain round size="mini" type="primary">查看详情</el-button>
      <el-button class="btn" plain round size="mini" type="primary">打开应用</el-button>
    </el-row>

    <el-divider />
  </el-row>
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
        name = name.substring(0, 12)
      }
      return name;
    }
  },

  created() {}
};
</script>


<style scoped>
.card {
  padding: 0 8px;
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