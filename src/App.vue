<template>
  <div id="app">
    <app-card v-for="(item, index) of appInfoList" :key="index" :appInfo="item"></app-card>
  </div>
</template>

<script>
import AppCard from "./components/AppCard";
// import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      appIdList: "414478124,1312014438,1210562295,728293409,414603431,590338362,370139302,917670924",
      // appInfoList: null,
      appInfoList: [
            {
                "artworkUrl60": "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/63/57/51/63575111-29d6-6dd5-5e11-2e3c10d11f58/source/60x60bb.jpg",
                "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/63/57/51/63575111-29d6-6dd5-5e11-2e3c10d11f58/source/100x100bb.jpg",
                "artistViewUrl": "https://apps.apple.com/cn/developer/tencent-technology-shenzhen-company-limited/id292374531?uo=4",
                "screenshotUrls": [
                    "https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/0d/60/c9/0d60c962-2b08-9dcd-f6ed-eb8f26f73ec4/pr_source.png/392x696bb.png",
                    "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/7c/24/f0/7c24f0b9-408a-cc0c-b0fd-d444912537cc/pr_source.png/392x696bb.png",
                    "https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/41/00/62/410062e5-d89f-7894-f31e-caf82943fe52/pr_source.png/392x696bb.png",
                    "https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/85/ca/3b/85ca3b8b-d1d6-b12d-6575-d5510a209b05/pr_source.png/392x696bb.png",
                    "https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/66/c6/d0/66c6d09c-d008-f4d1-fec4-f6c544121ed6/pr_source.png/392x696bb.png"
                ],
                "ipadScreenshotUrls": [],
                "artworkUrl512": "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/63/57/51/63575111-29d6-6dd5-5e11-2e3c10d11f58/source/512x512bb.jpg",
                "appletvScreenshotUrls": [],
                "supportedDevices": [
                    "iPadAir3Cellular-iPadAir3Cellular",
                    "iPhone7Plus-iPhone7Plus",
                    "iPadPro97Cellular-iPadPro97Cellular",
                    "iPadThirdGen4G-iPadThirdGen4G",
                    "iPad75-iPad75",
                    "iPad834-iPad834",
                    "iPadThirdGen-iPadThirdGen",
                    "iPad72-iPad72",
                    "iPhone8Plus-iPhone8Plus",
                    "iPhone7-iPhone7",
                    "iPhoneX-iPhoneX",
                    "iPodTouchSeventhGen-iPodTouchSeventhGen",
                    "iPad612-iPad612",
                    "iPadFourthGen-iPadFourthGen",
                    "iPadProSecondGen-iPadProSecondGen",
                    "iPadAir2-iPadAir2",
                    "iPadMini5-iPadMini5",
                    "iPadMini5Cellular-iPadMini5Cellular",
                    "iPhone11Pro-iPhone11Pro",
                    "iPad76-iPad76",
                    "iPhone4S-iPhone4S",
                    "iPadFourthGen4G-iPadFourthGen4G",
                    "iPadPro-iPadPro",
                    "iPhone6s-iPhone6s",
                    "iPad71-iPad71",
                    "iPadMini4Cellular-iPadMini4Cellular",
                    "iPadAir-iPadAir",
                    "iPad2Wifi-iPad2Wifi",
                    "iPodTouchFifthGen-iPodTouchFifthGen",
                    "iPad812-iPad812",
                    "iPadMiniRetinaCellular-iPadMiniRetinaCellular",
                    "iPadMini3Cellular-iPadMini3Cellular",
                    "iPad73-iPad73",
                    "iPadMiniRetina-iPadMiniRetina",
                    "iPhone6sPlus-iPhone6sPlus",
                    "iPad23G-iPad23G",
                    "iPhone5s-iPhone5s",
                    "iPad856-iPad856",
                    "iPadSeventhGen-iPadSeventhGen",
                    "iPadProFourthGen-iPadProFourthGen",
                    "iPadAirCellular-iPadAirCellular",
                    "iPhoneSE-iPhoneSE",
                    "iPodTouchSixthGen-iPodTouchSixthGen",
                    "iPad878-iPad878",
                    "iPadMini-iPadMini",
                    "Watch5-Watch5",
                    "iPhone8-iPhone8",
                    "iPadSeventhGenCellular-iPadSeventhGenCellular",
                    "iPhone6-iPhone6",
                    "iPhone11-iPhone11",
                    "iPhone11ProMax-iPhone11ProMax",
                    "iPadProSecondGenCellular-iPadProSecondGenCellular",
                    "iPhone5-iPhone5",
                    "Watch4-Watch4",
                    "iPadPro97-iPadPro97",
                    "iPhoneXR-iPhoneXR",
                    "iPhone5c-iPhone5c",
                    "iPhoneSESecondGen-iPhoneSESecondGen",
                    "iPadAir2Cellular-iPadAir2Cellular",
                    "iPad611-iPad611",
                    "iPadMini4G-iPadMini4G",
                    "iPadMini3-iPadMini3",
                    "iPhone6Plus-iPhone6Plus",
                    "iPadMini4-iPadMini4",
                    "iPadProFourthGenCellular-iPadProFourthGenCellular",
                    "iPad74-iPad74",
                    "iPhoneXS-iPhoneXS",
                    "iPadProCellular-iPadProCellular",
                    "iPhoneXSMax-iPhoneXSMax",
                    "iPadAir3-iPadAir3"
                ],
                "advisories": [],
                "isGameCenterEnabled": false,
                "kind": "software",
                "features": [],
                "trackViewUrl": "https://apps.apple.com/cn/app/qq%E9%9F%B3%E4%B9%90-%E8%AE%A9%E7%94%9F%E6%B4%BB%E5%85%85%E6%BB%A1%E9%9F%B3%E4%B9%90/id414603431?uo=4",
                "contentAdvisoryRating": "4+",
                "trackCensoredName": "QQ音乐 - 让生活充满音乐",
                "languageCodesISO2A": [
                    "EN",
                    "FR",
                    "DE",
                    "JA",
                    "ZH",
                    "ES",
                    "ZH"
                ],
                "fileSizeBytes": "298383360",
                "averageUserRatingForCurrentVersion": 4.66892,
                "userRatingCountForCurrentVersion": 928197,
                "trackContentRating": "4+",
                "averageUserRating": 4.66892,
                "trackId": 414603431,
                "trackName": "QQ音乐 - 让生活充满音乐",
                "primaryGenreName": "Music",
                "releaseDate": "2011-03-11T00:22:15Z",
                "isVppDeviceBasedLicensingEnabled": true,
                "genreIds": [
                    "6011",
                    "6016"
                ],
                "formattedPrice": "免费",
                "minimumOsVersion": "9.0",
                "currentVersionReleaseDate": "2020-05-21T02:39:49Z",
                "releaseNotes": "「听书」音乐馆新增「听书」页，碎片时间听点有趣的；开通听书会员，畅听独家有声小说\n「倍速播放」更丰富的档位选择，给你加倍的乐趣\n\n==往期更新==\n「听书」QQ音乐可以听书啦，盗墓笔记（周建龙版）、摸金天师、斗罗大陆等精彩内容应有尽有\n「音效」新增「5.1环绕」音效，给你私人音乐厅的环绕体验\n「播放页」支持倍速播放\n『如果您在使用过程中遇到问题，请加入官方QQ群55209235，或在App Store评论下留下QQ号』",
                "primaryGenreId": 6011,
                "sellerName": "Tencent Technology (Shenzhen) Company Limited",
                "currency": "CNY",
                "version": "9.15.0",
                "wrapperType": "software",
                "artistId": 292374531,
                "artistName": "Tencent Technology (Shenzhen) Company Limited",
                "genres": [
                    "音乐",
                    "娱乐"
                ],
                "price": 0,
                "description": "• 千万正版音乐，热歌新歌每日首发，你想听的都在这里\n• 海量的无损音乐曲库，优质而上乘的听觉享受\n• 听歌识曲、哼唱识别，精准识别此刻播放或哼唱的歌曲\n• 翻译歌词，支持数十万首热门英日韩泰歌曲的汉译音译\n• 个性化推荐，全站依你的口味定制专属音乐内容\n• 车载互联，支持宝马、福特等车型的车载应用\n• 强大的搜索，歌手、专辑、歌单、MV、类型、歌词、拼音、语音多种搜索方式均支持\n\n-------------------------------------------------------------------------------\n\n主要功能：\n【海量音乐】千万正版无损品质曲库，你想听的都在这里\n【全新发现】精选推荐音乐杂志和专栏，寻回最初遇见音乐的喜悦\n【视频】多品质MV播放/下载，精彩短视频，音乐不仅是听见\n【个性电台】量身推荐符合你口味的歌曲\n【评论】一纸乐评，解读音乐灵魂。一席热评，交换音乐故事\n【扫一扫】扫二维码、扫图识专辑，除了音乐扫出更多精彩\n【专业音效】SuperSound专业的特色音效，智能识别场景音效，适配百款耳机\n【歌词海报】当歌词遇上图片，放肆分享你的心情吧\n【那年今日】记录听歌回忆，重温那时的音乐心情\n【跑步电台】歌曲匹配步频，好友PK助跑，让跑步不再孤单\n【明星直播】观看偶像、音乐人新鲜的直播内容\n【百变播放器】玩转播放页，一大波复古拟物播放页美翻你\n【歌手写真】高清大图轮播离爱豆更近，开放投稿安利你的爱豆\n【翻译歌词】数十万首热门英日韩泰歌曲支持中文翻译\n【听歌识曲】精准识别、歌词同步显示、立即下载\n【车载互联】支持宝马、福特等车型的车载应用\n【免流量服务】2/3/4G下音乐任性畅听下载\n\n--------------------------------------------------------------------\n----------\n\n【绿钻豪华版自动订阅说明】\n1. 服务名称：绿钻豪华版自动订阅\n2. 订阅周期：1个月\n3. 价格：12元/月\n4. 购买连续包月会员的帐号，会在每个月到期前24小时，自动在iTunes账户扣费并延长1个月会员有效期。\n5. 如需取消订阅，请手动打开iOS的“设置” -->进入“iTunes Store 与 App Store”-->点击“Apple ID”，选择\"查看Apple ID\"，进入\"账户设置\"页面，点击“订阅”，选择QQ音乐绿钻豪华版 取消订阅即可。如未在订阅期结束的至少24小时前关闭订阅，此订阅将会自动续订。\n6. 服务协议（含绿钻豪华版自动订阅服务规则）：https://y.qq.com/i/serv_terms_new.html#auto-renew\n7. 隐私协议：https://y.qq.com/m/client/intro/privacy.html\n\n【付费音乐包自动订阅订说明】\n1. 服务名称：付费音乐包自动订阅\n2. 订阅周期：1个月\n3. 价格：8元/月\n4. 购买连续包月会员的帐号，会在每个月到期前24小时，自动在iTunes账户扣费并延长1个月会员有效期。\n5. 如需取消订阅，请手动打开iOS的“设置” -->进入“iTunes Store 与 App Store”-->点击“Apple ID”，选择\"查看Apple ID\"，进入\"账户设置\"页面，点击“订阅”，选择QQ音乐付费音乐包取消订阅即可。如未在订阅期结束的至少24小时前关闭订阅，此订阅将会自动续订。\n6. 服务协议（含付费音乐包自动订阅服务规则）：https://y.qq.com/i/serv_terms_new.html?serv=ffb#auto-renew\n7. 隐私协议：https://y.qq.com/m/client/intro/privacy.html\n\n【其他应用内购买业务说明】\n提供应用内购买绿钻豪华版服务，可通过以下方式订购：\n18元/1个月，到期后不自动续订；\n45元/3个月，到期后不自动续订；\n88元/6个月，到期后不自动续订；\n118元/12个月，到期后不自动续订。\n\n提供应用内购买付费音乐包服务，可通过以下方式订购：\n8元/1个月，到期后不自动续订；\n45元/6个月，到期后不自动续订；\n88元/12个月，到期后不自动续订。\n\n提供应用内购买豪华付费音乐包服务，可通过以下方式订购：\n12元/1个月，到期后不自动续订；\n68元/6个月，到期后不自动续订；\n128元/12个月，到期后不自动续订。\n\n· 订购QQ音乐绿钻服务可以通过iTunes账户直接付费\n· 订购生效后，无法退款\n· 服务协议：https://y.qq.com/i/serv_terms_new.html\n· 隐私协议：https://y.qq.com/m/client/intro/privacy.html\n\n-------------------------------------------------------------------------------\n有任何问题，请通过以下方式联系我们，让我们解决！\n\n官方微博：https://weibo.com/tencentqqmusic\nQQMusic 官方Q群：55209235\n-------------------------------------------------------------------------------\n注：由于版权限制。仅在中国大陆地区提供在线音乐服务",
                "bundleId": "com.tencent.QQMusic",
                "userRatingCount": 928342
            },
            {
                "artworkUrl60": "https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/b0/3d/37/b03d37f8-4257-c650-0cb2-bbfc3c0b86f3/source/60x60bb.jpg",
                "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/b0/3d/37/b03d37f8-4257-c650-0cb2-bbfc3c0b86f3/source/100x100bb.jpg",
                "artistViewUrl": "https://apps.apple.com/cn/developer/wechat/id614694882?uo=4",
                "screenshotUrls": [
                    "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/89/7d/9a/897d9a6e-7101-7b5c-3cf2-30313ae5d8be/pr_source.png/392x696bb.png",
                    "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/80/33/05/803305db-9ef9-5ed1-7569-1f7f5e2b20d1/pr_source.png/392x696bb.png",
                    "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/87/ff/c9/87ffc940-b292-4b49-fa6e-3014c72afcbb/pr_source.png/392x696bb.png",
                    "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/38/13/2d/38132de7-6a8f-7800-cd20-5844c21a0af7/pr_source.png/392x696bb.png",
                    "https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/d8/df/22/d8df2239-7b08-35ed-57fb-3cb593eedf99/pr_source.png/392x696bb.png",
                    "https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/df/0f/9c/df0f9c2e-19aa-1f6c-2cd4-3c94d54759a0/pr_source.png/392x696bb.png"
                ],
                "ipadScreenshotUrls": [
                    "https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/c5/a3/cb/c5a3cb60-e045-a634-fda6-94765352af54/mzl.imkvrcco.jpg/576x768bb.jpg",
                    "https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/a3/02/6f/a3026f41-0c69-19c0-6ac2-1fefeba31934/mzl.bwmfmxug.jpg/576x768bb.jpg",
                    "https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/09/7c/50/097c5048-2f16-22b0-fae3-a19128422f06/mzl.gxopfyrb.jpg/576x768bb.jpg"
                ],
                "artworkUrl512": "https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/b0/3d/37/b03d37f8-4257-c650-0cb2-bbfc3c0b86f3/source/512x512bb.jpg",
                "appletvScreenshotUrls": [],
                "supportedDevices": [
                    "iPadAir3Cellular-iPadAir3Cellular",
                    "iPhone7Plus-iPhone7Plus",
                    "iPadPro97Cellular-iPadPro97Cellular",
                    "iPad75-iPad75",
                    "iPad834-iPad834",
                    "iPad72-iPad72",
                    "iPhone8Plus-iPhone8Plus",
                    "iPhone7-iPhone7",
                    "iPhoneX-iPhoneX",
                    "iPodTouchSeventhGen-iPodTouchSeventhGen",
                    "iPad612-iPad612",
                    "iPadProSecondGen-iPadProSecondGen",
                    "iPadAir2-iPadAir2",
                    "iPadMini5-iPadMini5",
                    "iPadMini5Cellular-iPadMini5Cellular",
                    "iPhone11Pro-iPhone11Pro",
                    "iPad76-iPad76",
                    "iPadPro-iPadPro",
                    "iPhone6s-iPhone6s",
                    "iPad71-iPad71",
                    "iPadMini4Cellular-iPadMini4Cellular",
                    "iPadAir-iPadAir",
                    "iPad812-iPad812",
                    "iPadMiniRetinaCellular-iPadMiniRetinaCellular",
                    "iPadMini3Cellular-iPadMini3Cellular",
                    "iPad73-iPad73",
                    "iPadMiniRetina-iPadMiniRetina",
                    "iPhone6sPlus-iPhone6sPlus",
                    "iPhone5s-iPhone5s",
                    "iPad856-iPad856",
                    "iPadSeventhGen-iPadSeventhGen",
                    "iPadProFourthGen-iPadProFourthGen",
                    "iPadAirCellular-iPadAirCellular",
                    "iPhoneSE-iPhoneSE",
                    "iPodTouchSixthGen-iPodTouchSixthGen",
                    "iPad878-iPad878",
                    "iPhone8-iPhone8",
                    "iPadSeventhGenCellular-iPadSeventhGenCellular",
                    "iPhone6-iPhone6",
                    "iPhone11-iPhone11",
                    "iPhone11ProMax-iPhone11ProMax",
                    "iPadProSecondGenCellular-iPadProSecondGenCellular",
                    "Watch4-Watch4",
                    "iPadPro97-iPadPro97",
                    "iPhoneXR-iPhoneXR",
                    "iPhoneSESecondGen-iPhoneSESecondGen",
                    "iPadAir2Cellular-iPadAir2Cellular",
                    "iPad611-iPad611",
                    "iPadMini3-iPadMini3",
                    "iPhone6Plus-iPhone6Plus",
                    "iPadMini4-iPadMini4",
                    "iPadProFourthGenCellular-iPadProFourthGenCellular",
                    "iPad74-iPad74",
                    "iPhoneXS-iPhoneXS",
                    "iPadProCellular-iPadProCellular",
                    "iPhoneXSMax-iPhoneXSMax",
                    "iPadAir3-iPadAir3"
                ],
                "advisories": [
                    "频繁/强烈的成人/性暗示题材"
                ],
                "isGameCenterEnabled": false,
                "kind": "software",
                "features": [
                    "iosUniversal"
                ],
                "trackViewUrl": "https://apps.apple.com/cn/app/%E5%BE%AE%E4%BF%A1/id414478124?uo=4",
                "contentAdvisoryRating": "17+",
                "trackCensoredName": "微信",
                "languageCodesISO2A": [
                    "AR",
                    "ZH",
                    "EN",
                    "FR",
                    "DE",
                    "ID",
                    "IT",
                    "JA",
                    "KO",
                    "MS",
                    "PT",
                    "RU",
                    "ZH",
                    "ES",
                    "TH",
                    "ZH",
                    "TR",
                    "VI"
                ],
                "fileSizeBytes": "315253760",
                "sellerUrl": "http://weixin.qq.com",
                "averageUserRatingForCurrentVersion": 4.45805,
                "userRatingCountForCurrentVersion": 4804675,
                "trackContentRating": "17+",
                "averageUserRating": 4.45805,
                "trackId": 414478124,
                "trackName": "微信",
                "primaryGenreName": "Social Networking",
                "releaseDate": "2011-01-21T01:32:15Z",
                "isVppDeviceBasedLicensingEnabled": true,
                "genreIds": [
                    "6005",
                    "6007"
                ],
                "formattedPrice": "免费",
                "minimumOsVersion": "10.0",
                "currentVersionReleaseDate": "2020-03-22T02:07:59Z",
                "releaseNotes": "本次更新：\n- 可跟随系统的设置，切换为深色模式。\n- 优化了语音消息的发送体验，上滑转文字更方便了。\n\n最近更新：\n- 发消息时，可以引用之前的内容。\n- 可以把收藏笔记、文件预览等页面设为浮窗。",
                "primaryGenreId": 6005,
                "sellerName": "Tencent Technology (Shenzhen) Company Limited",
                "currency": "CNY",
                "version": "7.0.12",
                "wrapperType": "software",
                "artistId": 614694882,
                "artistName": "WeChat",
                "genres": [
                    "社交",
                    "效率"
                ],
                "price": 0,
                "description": "微信是一款全方位的手机通讯应用，帮助你轻松连接全球好友。微信可以群聊、进行视频聊天、与好友一起玩游戏，以及分享自己的生活到朋友圈，让你感受耳目一新的移动生活方式。\n\n  为什么要使用微信：\n  • 多媒体消息：支持发送视频、图片、文本和语音消息。\n  • 群聊和通话：组建高达500人的群聊和高达9人的实时视频聊天。\n  • 语音和视频聊天：提供全球的高质量通话。\n  • 表情商店：海量动态表情，包括热门卡通人物和电影，让聊天变得更生动有趣。\n  • 朋友圈：与好友分享每个精彩瞬间，记录自己的生活点滴。\n  • 隐私保护：严格保护用户的隐私安全，是唯一一款通过TRUSTe认证的实时通讯应用。\n  • 认识新朋友：通过“雷达加朋友”、“附近的人”和“摇一摇”认识新朋友。\n  • 实时位置共享：与好友分享地理位置，无需通过语言告诉对方。\n  • 多语言：支持超过20种语言界面，并支持多国语言的消息翻译。\n  • 微信运动：支持接入Apple Watch及健康app数据，可在步数排行榜上和朋友一较高下。若需使用，可在“设置-通用-辅助功能”内启用。 \n  • 更多功能: 支持跨平台、聊天室墙纸自定义、消息提醒自定义和公众号服务等。",
                "bundleId": "com.tencent.xin",
                "userRatingCount": 4804287
            }]
    };
  },
  components: {
    'app-card': AppCard
  },

  created() {
    // let url = "https://runkit.io/codedartist/getappdetail/branches/master/" + this.ids;
    // let url = "http://localhost:999/?id=" + this.appIdList;
    // axios.get(url)
    //   .then(rsp => {
    //     return;
    //     console.log(rsp);
        
    //     let data = rsp.data
    //     this.appInfoList = data.results
    // });
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
