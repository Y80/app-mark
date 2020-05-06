<template>
  <el-row class="card">
    <el-row type="flex" align="middle">
      <el-col :span="3">
        <el-image :src="iconSrc" />
      </el-col>
      <el-col :span="16">
        <span>{{name}}</span>
      </el-col>
      <el-col :span="5">
        <el-button round size="mini">安装</el-button>
      </el-col>
    </el-row>

    <el-row class="info">
      <span>免费</span>
      <span>35 MB</span>
      <span>3.5 分</span>
      <span>2020年5月6日更新</span>
      <span>123123 人评分</span>
    </el-row>
  </el-row>
</template>


<script>
export default {
  name: "AppCard",
  data() {
    return {
      trackId: "414603431",
      // 名称
      trackName: "QQ音乐 - 让生活充满音乐",
      // 图标
      iconSrc:
        "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/07/9c/57/079c572f-45ec-abdd-b185-457c808b9e12/source/60x60bb.jpg",
      // 评分
      userRating: 4.6719699999999999562305674771778285503387451171875,
      // iPhone 截图
      screenshotUrls: [
        "https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/0d/60/c9/0d60c962-2b08-9dcd-f6ed-eb8f26f73ec4/pr_source.png/392x696bb.png",
        "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/7c/24/f0/7c24f0b9-408a-cc0c-b0fd-d444912537cc/pr_source.png/392x696bb.png",
        "https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/41/00/62/410062e5-d89f-7894-f31e-caf82943fe52/pr_source.png/392x696bb.png",
        "https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/85/ca/3b/85ca3b8b-d1d6-b12d-6575-d5510a209b05/pr_source.png/392x696bb.png",
        "https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/66/c6/d0/66c6d09c-d008-f4d1-fec4-f6c544121ed6/pr_source.png/392x696bb.png"
      ],
      // iPad 截图
      ipadScreenshotUrls: [],
      // 上次更新时间
      currentVersionReleaseDate: "2020-04-23T06:42:03Z",
      // 更新说明
      releaseNotes: '',
      // 文件大小
      fileSizeBytes: "285319168",
      // 价钱
      formattedPrice: "免费",
      // App 链接
      trackViewUrl: "https://apps.apple.com/cn/app/qq%E9%9F%B3%E4%B9%90-%E8%AE%A9%E7%94%9F%E6%B4%BB%E5%85%85%E6%BB%A1%E9%9F%B3%E4%B9%90/id414603431?uo=4",
      // 分类
      genres: ["音乐", "娱乐"],
      // 支持的语言
      languageCodesISO2A: [
                "EN",
                "FR",
                "DE",
                "JA",
                "ZH",
                "ES",
                "ZH"
            ],
      // 用户是否已经安装
      isInstalled: false
    };
  }
};
</script>


<style scoped>
.card {
  border: gray 1px solid;
  margin-top: 8px;
}

.info span {
  border: gray 1px solid;
  margin: 0 3px;
}
</style>