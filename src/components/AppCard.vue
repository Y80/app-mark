<template>
  <el-row class="card">
    <el-row type="flex" align="middle">
      <el-col :span="3">
        <el-image class="app-icon" :src="artworkUrl60" />
      </el-col>
      <el-col :span="16">
        <span class="app-name">{{trackName}}</span>
      </el-col>
      <el-col :span="5">
        <el-button round size="mini">安装</el-button>
      </el-col>
    </el-row>

    <el-row class="info">
      <el-tag
        size="mini"
        v-for="(item,index) of infoList"
        :key="index"
        :type="item.type"
      >{{item.text}}</el-tag>
    </el-row>
  </el-row>
</template>


<script>
import axios from 'axios'

export default {
  name: "AppCard",
  props: ['appid'],
  data() {
    return {
    //   artistViewUrl:
    //     "https://apps.apple.com/cn/developer/fancheng-pang/id1314212519?uo=4",
    //   artworkUrl60:
    //     "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/fd/fd/8c/fdfd8c44-ca66-981e-bebd-1128fe535b6e/source/60x60bb.jpg",
    //   screenshotUrls: [
    //     "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/ad/12/e3/ad12e351-822b-4d04-3821-62be6919ae20/mzl.lyueumfp.png/392x696bb.png",
    //     "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/5c/35/ed/5c35edd8-ae47-29a1-4218-7613f091eb5c/pr_source.png/392x696bb.png",
    //   ],
    //   ipadScreenshotUrls: [
    //     "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/e3/81/a7/e381a782-db8c-002b-bb83-cd7085391bb4/mzl.jpzosjaz.png/576x768bb.png",
    //     "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/61/1e/bb/611ebb1b-0e93-08df-f2e3-bbe655aea3ba/pr_source.png/576x768bb.png",
    //   ],
    //   appletvScreenshotUrls: [],
    //   artworkUrl512:
    //     "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/fd/fd/8c/fdfd8c44-ca66-981e-bebd-1128fe535b6e/source/512x512bb.jpg",
    //   supportedDevices: [
    //     "iPhone6-iPhone6",
    //     "iPhoneXSMax-iPhoneXSMax",
    //   ],
    //   advisories: [],
    //   isGameCenterEnabled: false,
    //   kind: "software",
    //   features: ["iosUniversal"],
    //   trackCensoredName: "PPHub For GitHub - 开发者必备",
    //   trackViewUrl:
    //     "https://apps.apple.com/cn/app/pphub-for-github-%E5%BC%80%E5%8F%91%E8%80%85%E5%BF%85%E5%A4%87/id1314212521?uo=4",
    //   contentAdvisoryRating: "4+",
    //   averageUserRating: 4.86929000000000034020786188193596899509429931640625,
    //   languageCodesISO2A: ["EN", "ZH", "ZH"],
    //   fileSizeBytes: "20934656",
    //   sellerUrl: "https://pphubapp.github.io/PPHub-Feedback",
    //   averageUserRatingForCurrentVersion: 4.86929000000000034020786188193596899509429931640625,
    //   userRatingCountForCurrentVersion: 2234,
    //   trackContentRating: "4+",
    //   trackId: 1314212521,
    //   trackName: "PPHub For GitHub - 开发者必备",
    //   releaseDate: "2017-11-20T19:47:31Z",
    //   genreIds: ["6026", "6002"],
    //   formattedPrice: "¥12.00",
    //   primaryGenreName: "Developer Tools",
    //   isVppDeviceBasedLicensingEnabled: true,
    //   minimumOsVersion: "11.0",
    //   sellerName: "Fancheng Pang",
    //   currentVersionReleaseDate: "2020-04-30T16:12:02Z",
    //   releaseNotes:
    //     "- 修复：仓库详情页issues、pull request数量为0的问题；\n- 修复：偶现的崩溃问题以及细节优化；\n- 说明：最近经常有用户反馈出现“请求数据错误”、“无法连接服务器”的问题。PPHub使用的是100% GitHub官方开放Api。众所周知，GitHub在国内受到一直受到DNS污染，导致访问速度很慢。不知道为啥，这段时间“好像”被污染得更严重了，所以才会出现这样的问题。。。以下为解决方案：\n1、使用联通、移动手机网络，不要使用宽带或电信网络（不完美解决）；\n2、有条件的童鞋可以使用科学上网（完美解决）。\n求遇到此类问题的童鞋看到这个后手下留情，呜呜呜~ (*T_T*)",
    //   primaryGenreId: 6026,
    //   currency: "CNY",
    //   version: "2.3.2",
    //   wrapperType: "software",
    //   artistId: 1314212519,
    //   artistName: "Fancheng Pang",
    //   genres: ["软件开发工具", "工具"],
    //   price: 12.0,
    //   description:
    //     "*【Price Tag】官方推荐\n*【最美应用 】官方推荐\nPPHub是一个GitHub移动客户端, 支持iPhone, iPad。使用PPHub, 您可以随时随地：\n-  浏览GitHub上每日/周/月各种语言的开源趋势排行榜, 助你发现优秀开源库与开发者;\n-  查看开源库源文件/代码；\n-  便捷的与开发者讨论Issue、Pull request；\n-  快速Star、Watch、Fork开源库、Follow开发者；\n-  跟踪查看自己关注的开源库,开发者的活动信息；\n-  搜索你想要找的开源仓库与开发者；\n-  查看自己拥有/收藏/关注的开源库、开发者；\n-  快速分享开源库和开发者给你的朋友；\n-  修改大部分的个人资料；\n-  支持Handoff接力，让您快速和Mac联动；\n-  检测剪切板GitHub链接, 快速打开源库、开发者；\n-  集成浏览器插件快速查看开源库、开发者；\n-  更多......\n-------------------------\n如果您有任何建议或Bug, 可以通过APP的反馈功能告知我, 也可以直接进入 https://github.com/jkpang/PPHub-Feedback 这个仓库给我提issue。\n如果您觉得PPHub还不错, 还希望您给个好评以资鼓励。\n[]~(￣▽￣)~*\n------------------------\n隐私说明：PPHub不会从您的GitHub帐户收集任何信息，毕竟我连自己的服务器都没有。。。",
    //   bundleId: "com.jkpang.PPHub",
    //   userRatingCount: 2234
    };
  },
  computed: {
    infoList() {
      let infos = [];
      // 分类
      infos.push({
        text: this.genres[0],
        type: "info"
      });
      // 评分
      infos.push({
        text: "评分：" + this.averageUserRating.toString().substring(0, 3),
        type: "warning"
      });
      // 评分人数
      infos.push({
        text: this.userRatingCount.toString() + " 人评分",
        type: "info"
      });
      // 是否支持中文
      if (this.languageCodesISO2A.includes("ZH")) {
        infos.push({
          text: "支持中文",
          type: "success"
        });
      } else {
        infos.push({
          text: "不支持中文",
          type: "info"
        });
      }
      // 文件大小
      let mb = parseInt(parseInt(this.fileSizeBytes) / (1024 * 1024));
      infos.push({
        text: "安装包：" + mb.toString() + " Mb",
        type: "info"
      });
      // 上次更新
      infos.push({
        text: "最近更新：" + this.currentVersionReleaseDate.split("T")[0],
        type: "info"
      });
      // 价钱
      infos.push({
        text: this.formattedPrice,
        type: "warning"
      });

      return infos;
    }
  },
  created() {
    console.log(this.$data)
    axios.get('https://itunes.apple.com/cn/lookup?id=' + this.appid + '&callback=cb')
      .then(res => {
        console.log(res)
      })
  }
};
</script>


<style scoped>
.card {
  border: gray 1px solid;
  margin-top: 8px;
  padding: 8px;
  border-radius: 3px;
}
.app-icon {
  border-radius: 15px;
}
.app-name {
  font-size: 15px;
  font-weight: bolder;
}

.info span {
  border: gray 1px solid;
  margin: 3px;
}
</style>