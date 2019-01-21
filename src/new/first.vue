<template>
  <div class="fixContent">
    <div
      class="imgAd"
      ref="advertisment"
      v-if="!this.$store.state.showWxTitle"
      :class="{imgAdimgEnd:this.$store.state.isEnd}"
      v-transfer-dom
    >
      <img :src="adImg" v-if="adImg" class="imgPic" @click="imgPicjump" alt>
      <div class="endTime" @click="jumpAD" v-if="isHideJump">跳过{{showTime}}</div>
    </div>
    <IosorAndroid></IosorAndroid>
    <div style="padding-bottom:1.6rem;padding-top: 0.2rem;position: relative;">
      <!-- 头部 -->
      <!--轮播图  -->
      <div class="topImgdiv">
        <!-- 搜索 -->
        <div class="topSearchInput">
          <div class="home-search">
            <div class="home-search-btn"></div>
            <div class="home-search-input">
              <div class="search-input-inner" @click="toHouseList">请输入您想居住的小区或区域</div>
              <!--<input type="text" class="search-input-inner" @focus="toHouseList" placeholder="请输入您想居住的小区或区域" />-->
            </div>
            <div class="home-search-map" @click="mapSearchroom"></div>
          </div>
        </div>
        <div style="width:6.9rem;height:5.8rem;border-radius:0.1rem; overflow: hidden;">
          <swipers></swipers>
        </div>
      </div>
      <!--导航栏  -->
      <div class="navigation">
        <flexbox>
          <flexbox-item @click.native="TabOneClick">
            <div class="flex-demo">
              <img src="../../static/new/reversionimg/newHouse.png">
              <span>新房</span>
            </div>
          </flexbox-item>
          <flexbox-item @click.native="TabTwoClick">
            <div class="flex-demo">
              <img src="../../static/new/reversionimg/rentHouse.png">
              <span>租房</span>
            </div>
          </flexbox-item>
          <flexbox-item @click.native="TabThreeClick">
            <div class="flex-demo">
              <img src="../../static/new/reversionimg/housePictuere.png">
              <span>房价</span>
            </div>
          </flexbox-item>
          <flexbox-item @click.native="TabFourClcik">
            <div class="flex-demo">
              <img src="../../static/new/reversionimg/Entrust.png">
              <span>业主委托</span>
            </div>
          </flexbox-item>
          <flexbox-item @click.native="TabFiveClcik">
            <div class="flex-demo">
              <img src="../../static/new/reversionimg/lookCenter.png">
              <span>展示中心</span>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <!-- 全景看房图片展示 -->
      <div class="panoramaImg" @click="PanoramicViewClick"></div>
      <!-- 精彩活动部分 -->
      <div v-if="!this.$store.state.showWxTitle" class="panorama ">
        <span style="background-size:6%;">精彩活动</span>
        <!-- <span ></span>
        <span ></span> -->
      </div>
      <div class="newMore">
        <div class="newMoreImg" @click.stop="ActiveListClick" v-if="!this.$store.state.showWxTitle"></div>
        <activity></activity>
      </div>

      <!-- 国安家公寓 -->
      <div class="panorama" style="margin-bottom:0;margin-top:.65rem;">
        <span>国安家公寓</span>
        <span>高品质服务公寓</span>
        <span @click="apartmentClick"></span>
      </div>
      <hometemplate></hometemplate>
      <!-- 分割线 -->
      <div style="margin:0.4rem 0.3rem 0;height:1px;"></div>

      <!--新房部分-->
      <!-- <div class="addCustomer" style="margin-top: 0.25rem;margin-bottom:0.1rem ;">
        <span>超低价优选房源</span>
        <span>热门楼盘</span>
        <span @click="TabOneClick"></span>
        <div style="clear: both;"></div>
      </div>-->
      <div class="panorama" style="margin-top:.65rem;margin-bottom:0;">
        <span>国安家新房</span>
        <span>超低价优选房源</span>
        <span @click="TabOneClick"></span>
      </div>
      <newhouseTemplate></newhouseTemplate>

      <!-- 预约看房 -->
      <div class="indexApponitment">
        <div class="leftdiv"></div>
        <div class="rightdiv">
          <div class="topdiv" @click="yuyuekanfang"></div>
          <div class="bottomdiv" @click="searchHouse"></div>
        </div>
      </div>

      <!-- 最新上架 -->
      <div class="panorama" style="margin-top:.6rem;">
        <span>最新上架</span>
        <span @click="apartmentClick"></span>
        <div style="clear: both;"></div>
      </div>
      <div>
        <ul class="table-view">
          <li
            class="table-view-list"
            v-for="(item,index) in HouseLists"
            :key="index"
            @click="goHouseDetail(item.id,item.productType)"
          >
            <div class="list-top">
              <div class="imgOne" style="position: relative;">
                <img class="pull-left" v-lazy="item.roomFirstImage">
                <!--品质节logo-->
                <!--<img style="width: 1.9rem;height: 0.6rem; position: absolute;bottom: 0.1rem;right: 0.1rem;z-index: 2;" src="https://img.guoanfamily.com/rent/pinzhijie/pinzhiLogo.png" alt="" />
                -->
              </div>
              <div class="imgRight">
                <div class="imgTwo">
                  <img class="pull-left" v-lazy="item.roomSecondImage">
                </div>
                <div class="imgThree">
                  <img class="pull-left" v-lazy="item.roomThirdImage">
                </div>
              </div>
            </div>
            <div class="list-bottom">
              <div
                class="list-bottom-left"
              >{{item.houseName}}&nbsp;{{item.roomName}}{{item.roomNumber || ""}}</div>
              <div class="houseMoney">
                <div class="houseMoneyNum">{{item.price?item.price:"敬请关注"}}</div>
                <div style="font-size:.34rem;" v-if="item.price">元/月</div>
              </div>
              <div
                class="list-bottom-right"
              >{{item.buildNo}}号楼&nbsp;{{item.roomName}}&nbsp;&nbsp;&nbsp;{{item.roomFloor?item.roomFloor+'层/':''}}{{item.userArea}}㎡</div>
              <div style="clear: both;"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <downLoad></downLoad>
    </div>
  </div>
</template>

<script>
import { TransferDom } from "vux";
import IosorAndroid from "./components/IosorAndroid";
import swipers from "./components/Swiper"; //引入轮播图组件
import downLoad from "../rent/components/home/downLoad";
import activity from "../rent/components/home/activity"; //精彩活动
// import hometemplate from "../rent/components/home/HomeTemplate"; //国安家公寓
import hometemplate from "../rent/components/home/revisionHomTemplate"; //国安家公寓
import newhouseTemplate from "./components/newhouseTemplate"; //新房模块
import { setTimeout } from "timers";

// import{ViewBox} from 'vux'
export default {
  directives: {
    TransferDom
  },
  components: {
    IosorAndroid,
    swipers,
    downLoad,
    activity,
    hometemplate,
    newhouseTemplate
  },
  data() {
    return {
      timer: null,
      showTime: "", //广告图时间倒计时
      isEnd: false,
      adImg: "",
      adURL: "",
      adURLtype: "",
      swiperOption: {
        loop: true,
        autoplay: {
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
      },
      defaultValue: "",
      list: [], //楼盘数据
      showSuccess: false,
      showMarket: false,
      showText: "",
      showNum: "",
      luckdraw: false,
      hideSigno: false,
      roomList: [],
      newRoomList: [],
      isHideJump: false,
      HouseLists: []
    };
  },
  methods: {
    //获取首页最新上架数据
    getHomePageDetail() {
      this.post("common/homePage", {
        size: "5"
      }).then(res => {
        this.HouseLists = res.data.roomList.map(item => {
          if (!item.roomFirstImage) {
            item.roomFirstImage =
              "https://img.guoanfamily.com/rent/static/HomePage/roomimg_03.png";
          } else {
            item.roomFirstImage =
              !item.roomFirstImage ||
              this.concatFileUrl(item.roomFirstImage, 470, 320);
          }

          if (!item.roomSecondImage) {
            item.roomSecondImage =
              "https://img.guoanfamily.com/rent/static/HomePage/roomimg_03.png";
          } else {
            item.roomSecondImage =
              !item.roomSecondImage ||
              this.concatFileUrl(item.roomSecondImage, 180, 130);
          }
          if (!item.roomThirdImage) {
            item.roomThirdImage =
              "https://img.guoanfamily.com/rent/static/HomePage/roomimg_03.png";
          } else {
            item.roomThirdImage =
              !item.roomThirdImage ||
              this.concatFileUrl(item.roomThirdImage, 180, 130);
          }
          return item;
        });
      });
    },
    //跳到房源详情
    goHouseDetail(id, productType) {
      this.$router.push({
        path: "/HouseList/houseDetail",
        query: { id: id, productType: productType }
      });
    },

    //点击广告图跳转
    imgPicjump() {
      if (this.adURLtype == "1") {
        this.$router.push({ path: this.adURL });
      } else if (this.adURLtype == "2") {
        this.$router.push({
          path: "framePage",
          query: { src: this.adURL, title: "" }
        });
      }
      this.$store.state.isEnd = true;
      clearInterval(this.timer);
    },
    //跳过广告图
    jumpAD() {
      this.$store.state.isEnd = true;
      clearInterval(this.timer);
    },
    //开屏广告图接口
    getAdImg() {
      this.get("palmsaleapp/api/v1/advert/queryAdvertLimit", {
        interfaceType: "luckdraw"
      }).then(res => {
        if (!this.notEmpty(res.data.pictureName)) {
          this.showTime = res.data.showTime;
          this.adImg = this.concatFileUrl(res.data.pictureName);
        }
        //当没有跳转路径时，屏蔽广告页面
        if (res.data.redirectURL) {
          this.adURL = res.data.redirectURL;
          this.adURLtype = res.data.typeURL;
          //当接口返回有效值时，跳过按钮再显示，默认隐藏
          this.isHideJump = true;
        } else {
          this.$store.state.isEnd = true;
        }
      });
    },

    /**
     * 新房改版部分
     *
     */
    tonewhouselist() {
      this.$router.push({ path: "/newHouseIndex" });
    },
    torentindex() {
      this.$router.push({ path: "/HomePage" });
      this.$store.state.isonLinerent = true;
      this.$store.state.buttonGroup = 3;
    },
    totuijian() {
      let platform = this.getStorage("platformnow");
      if (platform == "xiaochengxu") {
        this.msgalert("请在国安家APP中打开");
      } else {
        this.$router.push({
          path: "framePage",
          query: {
            src: "https://www.guoanfamily.com/staticWeb/guoanshequ/index.html",
            title: "一荐倾心",
            num: "1"
          }
        });
      }
    },
    //  搜索框的点击事件
    toHouseList() {
      //点击搜索框跳转到搜索页面
      this.$router.push({ path: "HouseList/HotSearch" });
    },
    // 地图找房的点击事件
    mapSearchroom() {
      this.$router.push({ path: "/MapSearch", query: { title: "地图找房" } });
    },
    // 全景看房的点击事件
    PanoramicViewClick() {
      let platform = this.getStorage("platformnow");
      if (platform == "xiaochengxu") {
        this.msgalert("请在国安家APP中打开");
      } else {
        this.$router.push({ path: "/VrLook" });
      }
    },
    // 新房的点击事件
    TabOneClick() {
      // this.$router.push('buildList');
      this.$router.push("newHouseIndex");
      this.$store.state.buttonGroup = 1;
      this.$store.state.isIndexTrue = false;
      this.$store.state.isonLineTrue = true;
      this.$store.state.isMyTrue = false;
      this.$store.state.isonLinerent = false;
    },
    // 租房的点击事件
    TabTwoClick() {
      this.$router.push("HomePage");
      this.$store.state.buttonGroup = 3;
      this.$store.state.isIndexTrue = false;
      this.$store.state.isonLineTrue = false;
      this.$store.state.isMyTrue = false;
      this.$store.state.isonLinerent = true;
    },
    // 房价的点击事件
    TabThreeClick() {
      this.$router.push("housingPrice");
    },
    // 业主委托的点击事件
    TabFourClcik() {
      this.$router.push("/Entrust");
    },
    // 展示中心的点击事件
    TabFiveClcik() {
      // let src = "ExhibitionCenter";
      let title = "展示中心";
      this.$router.push({
        path: "ExhibitionCenter"
      });
    },
    // 国安家公寓更多的点击事件
    apartmentClick() {
      this.$router.push({ path: "/HouseList", query: { name: "0019001" } });
    },
    // 更多精彩活动的点击事件
    ActiveListClick() {
      this.$router.push({ path: "/ActiveList" });
    },
    // 预约看房的点击事件
    yuyuekanfang() {
      this.$router.push("HouseList");
    },
    // 搜索房源的点击事件
    searchHouse() {
      this.$router.push({
        path: "/HouseList/HotSearch"
      });
    },

    //跳转到该房间详情
    toRoomDetail(item) {
      this.$router.push({
        path: "/HouseList/houseDetail",
        query: { id: item.id, productType: item.productType }
      });
    },

    rentHouse() {
      // window.location.href = "https://www.guoanfamily.com/rentHouse/wap/#/";
      this.$router.push("HomePage");
    },
    //  调用登录接口，传入openid
    onLogin() {
      var openid = localStorage.getItem("openid");
      if (!this.notEmpty(openid)) {
        let post_data = {
          phoneNum: "",
          authCode: "",
          headimgurl: "",
          // "openId": "o8awnwtP8efh2X1mTblRj_x5FGVs",
          openId: localStorage.getItem("openid")
        };
        this.post("userLoginController/unionlogin", post_data, {
          interfaceType: "collect"
        }).then(
          response => {
            // console.log(response);
            if (response.code == 200) {
              localStorage.setItem("headImg", response.data.headImg);
              localStorage.setItem("userPhone", response.data.phoneNum); //将用户电话存入本地
              localStorage.setItem("token", response.data.token); //将用户token存入本地
              localStorage.setItem("standbyToken", response.data.standbyToken); //将用户备用token存入本地
              localStorage.setItem("userName", response.data.realName); //如果有姓名，则存入localStorage
              localStorage.setItem(
                "userInfroMap",
                JSON.stringify(response.data.userInfo)
              ); //将客户的基本信息，收藏的楼盘放入localstorage
              // history.go(-1);
            }
          },
          response => {
            this.showalert(response.msg);
          }
        );
      }
    },

    // 列表数据加载方法
    // 页面数据加载
    onLoade() {
      this.get(
        "palmsaleapp/api/v1/build/buildLitsAppm?averagepriceList=&typeList=&areaList=&tenementtypeList=&buildtagList=&hardcoverstandardList",
        {
          interfaceType: "newHouse"
        }
      ).then(
        response => {
          if (response.status == 200) {
            // 进行图片路径的拼接
            for (let i = 0; i < response.data.length; i++) {
              // response.data[i].firstpicture = this.ImgSrc + response.data[i].firstpicture;
              response.data[i].firstpicture = this.concatFileUrl(
                response.data[i].firstpicture
              );
              this.$store.state.buildListLocation.push(
                response.data[i].address
              );
              //  console.log(this.$store.state.buildListLocation);
              if (response.data[i].averageprice !== null) {
                if (response.data[i].averageprice == "售价待定") {
                  response.data[i].averageprice = "售价待定";
                } else if (response.data[i].averageprice == "") {
                  response.data[i].averageprice = "售价待定";
                } else {
                  response.data[i].averageprice = response.data[i].averageprice;
                }
              }
            }
            this.list = response.data;
            var arr = [];
            for (let i = 0; i < this.list.length; i++) {
              if (this.list[i].buildtagnameList.length > 0) {
                var obj = {};
                if (this.list[i].buildtagnameList[0].length > 7) {
                  var a = this.list[i].buildtagnameList
                    .toString()
                    .split(",", 1);
                } else {
                  var a = this.list[i].buildtagnameList
                    .toString()
                    .split(",", 2);
                  this.list[i].buildtagnameList = a;
                }
              }
            }
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    //抽奖的点击事件
    toluckDraw() {
      if (this.$store.state.showWxTitle) {
        this.$router.push("luckdraw");
      } else {
        if (this.LoToken()) {
          this.$store.state.loginShow = true;
        } else {
          this.$router.push("luckdraw");
        }
      }
    },

    // 邀请遮罩层的点击事件
    market1Click() {
      // this.showMarket =  fals
      this.$store.state.IndexMarketShow = false;
    },
    // 产看卡券的点击事件
    chakanClick() {
      this.$router.push("cardCoupons");
      this.$store.state.IndexMarketShow = false;
    },

    showalert(msg) {
      // 显示
      this.$vux.alert.show({
        title: "提示信息",
        content: msg
      });
    },
    msgalert(msg) {
      this.$vux.toast.show({
        text: msg,
        type: "text"
      });
    }
  },
  created() {
    this.getAdImg();
    this.getHomePageDetail();
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.showTime > 1) {
        this.showTime--;
      } else {
        this.$store.state.isEnd = true;
        clearInterval(this.timer);
      }
    }, 1000);

    //	this.timer1 = setTimeout(()=>{
    //		this.$refs.advertisment.style.display="none";
    //		clearTimeout(this.timer1);
    //
    //	},3500)

    this.$store.state.buttonGroup = 0;
    if (!this.LoToken() && !this.UserPhone()) {
      this.$store.state.userName = localStorage.getItem("userName");
      this.$store.state.userPhone = localStorage.getItem("userPhone");
    }
    this.onLogin();
    this.onLoade();
    // // 控制抽奖图片显示隐藏
    let time = setInterval(() => {
      this.hideSigno = true;
      clearInterval(time);
    }, 10000);
    let time1 = 1518537600000; //开始时间

    let time3 = 1519747200000; //结束

    let time2 = new Date().getTime();
    if (time2 < time1) {
      this.luckdraw = false;
    } else if (time2 >= time1 && time2 <= time3) {
      this.luckdraw = true;
    } else if (time2 > time3) {
      this.luckdraw = false;
      // this.msgalert('活动已结束');
    }
  }
};
</script>

<style lang='less' scoped>
@font-face {
  font-family: font01;
  src: url("../fonts/BEBASNEUE.otf");
}
.imgAd {
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2000;
  background-color: white;
  background-repeat: no-repeat;
  background-position: center;
  .imgPic {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  .endTime {
    width: 1.3rem;
    height: 0.6rem;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    right: 0.5rem;
    top: 0.7rem;
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.32rem;
    color: white;
    border-radius: 0.08rem;
  }
}
.imgAdimgEnd {
  display: none;
}
.topTest {
  width: 100%;
  height: 0.8rem;
  font-size: 0.48rem;
  color: #000000;
  line-height: 40px;
  text-align: left;
  font-weight: 500;
  span {
    padding-left: 0.3rem;
  }
}
.topImgdiv {
  height: 5.5rem;
  margin-top: 0.1rem;
  width: 6.9rem;
  margin: 0 auto;
  position: relative;
}

.navigation {
  padding-top: 0.6rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  padding-bottom: 0.4rem;
  // height:2rem;
  // background:red;
}
.Division {
  width: 100%;
  height: 0.2rem;
  background: #eee;
  // margin-top:.2rem;
}
.newMore {
  position: relative;
  .newMoreImg {
    width: 0.45rem;
    height: 0.45rem;
    background: url("../../static/new/reversionimg/newMore.png") no-repeat
      center;
    background-size: cover;
    position: absolute;
    right: 0.5rem;
    bottom: 0rem;
  }
}
.panorama {
  margin-bottom: 0.2rem;
  margin-top: 0.44rem;
  width: 100%;
  height: 0.8rem;
  font-size: 0.38rem;
  color: #000000;
  line-height: 38px;
  text-align: left;
  font-weight: 500;
  text-indent: 0.1rem;
  margin-top: 0.3rem;
  box-sizing: border-box;
  padding-left: 0.2rem;
  span {
    padding-left: 0.17rem;
  }
  span:nth-child(1) {
    // border-left: 5px solid #f43333;
    float: left;
    margin-left: 0.15rem;
    background: url("../../static/new/reversionimg/borderimg.jpg") no-repeat left;
    background-size: 5%;
  }
  span:nth-child(2) {
    display: block;
    float: left;
    height: 35px;
    width: 2.5rem;
    line-height: 0.8rem;
    // margin-bottom: -0.2rem;
    color: #999;
    text-align: left;
    font-size: 12px;
  }
  span:nth-child(3) {
    display: block;
    float: right;
    height: 35px;
    width: 1rem;
    margin-right: 0.3rem;
    margin-bottom: 0.1rem;
    color: #cccccc;
    text-align: right;
    padding-right: 0.3rem;
    background: url("../../static/new/reversionimg/more1.png") no-repeat right;
    background-size: 60%;
  }
}
.panoramaImg {
  height: 2.5rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  background: url(".././../static/new/reversionimg/panoramaImg.png") no-repeat
    center;
  background-size: 100%;
}
.indexApponitment {
  margin: 0.8rem 0.3rem 0 0.3rem;
  height: 2.8rem;
  // background: red;
  display: flex;
  flex-direction: row;
  .leftdiv {
    flex: 1.1;
    // margin-right:.01rem;
    background: url("../../static/new/reversionimg/001.png") no-repeat;
    background-size: contain;
  }
  .rightdiv {
    flex: 1;
    // background: yellow;
    display: flex;
    flex-direction: column;
    .topdiv {
      flex: 1;
      margin-bottom: 0.2rem;
      background: url("../../static/new/reversionimg/002.png") no-repeat;
      background-size: cover;
    }
    .bottomdiv {
      flex: 1;
      background: url("../../static/new/reversionimg/003.png") no-repeat;
      background-size: cover;
    }
    //  margin-left:.1rem;
  }
}
// .Reservations {
//   margin: 0 0.3rem 0 0.3rem;
//   height: 1.84rem;
//   // background:red;

// }

.singnSuccess {
  width: 80%;
  height: 8rem;
  background: url("../../static/new/img/qdSuccess.png") no-repeat center;
  background-size: 100%;
  position: fixed;
  top: 10%;
  left: 10%;
  z-index: 151;
}
.qdBtn {
  display: block;
  // margin: 0 atuo;
  background-size: 50%;
  font-size: 0.4rem;
  width: 5rem;
  // border-radius: 0.5rem;
  background: url(../../static/new/img/qdlook.png) no-repeat center;
  background-size: 100%;
  color: #fe5137;
  margin-left: 25%;
  width: 50%;
  line-height: 0.9rem;
  height: 1rem;
  margin-top: 0.1rem;
  border-radius: 1.5rem;
  text-align: center;
}
@import "~vux/src/styles/1px.less";
.flex-demo {
  text-align: center;
  color: #333333;
  background-color: #fff;
  border-radius: 4px;
  background-clip: padding-box;
  img {
    width: 0.7rem;
    height: 0.7rem;
    margin: 0 auto;
  }
  span {
    font-size: 0.24rem;
    display: inherit;
    text-align: center;
    width: 100%;
    margin-top: 0.2rem;
    color: #000000;
  }
}

.addCustomer {
  width: 100%;
  background: #fff;
  height: 1rem;
  // margin-top: .3rem;
  line-height: 0.8rem;
  margin-top: 0.6rem;
  overflow: hidden;
  // border-bottom: 1px solid #e6e6e6;
}
.addCustomer span:nth-child(1) {
  display: block;
  height: 0.4rem;
  line-height: 0.4rem;
  color: #999999;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  font-size: 0.23rem;
  text-align: left;
  text-indent: 0.1rem;
}
.addCustomer span:nth-child(2) {
  display: block;
  float: left;
  // line-height: 1.3rem;
  font-size: 0.35rem;
  line-height: 0.4rem;
  margin-left: 0.3rem;
  font-weight: 500;
  color: #000000;
  text-indent: 0.1rem;
}
.addCustomer span:nth-child(3) {
  display: block;
  float: right;
  height: 0.35rem;
  width: 115px;
  margin-right: 0.3rem;
  // margin-bottom:.1rem;
  background: url("../../static/new/reversionimg/more.png") no-repeat right;
  background-size: 50%;
}
.searchDiv {
  position: absolute;
  top: 0.2rem;
  width: 100%;
  height: 1.5rem; // background:red;
}

.selectOptions {
  width: 25%;
  background: #fff;
  height: 100%;
  font-size: 0.7rem;
  margin-left: 1rem;
  float: left;
}

.bankNum {
  width: 80%;
  height: 300px;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 20%;
  z-index: 151;
  .bank {
    position: relative;
    width: 100%;
    height: 100%;
    background: url("../../static/new/img/successImg.png") no-repeat top;
    background-size: 90%;
    .close {
      width: 0.75rem;
      height: 0.75rem;
      position: absolute;
      right: 0;
      top: -0.5rem;
      background: url("../../static/new/img/close.png") no-repeat;
      background-size: 90%;
    }
    .chakan {
      position: absolute;
      width: 50%;
      height: 1rem;
      background: url(../../static/new/img/firstbtnbj.png) no-repeat;
      background-size: 100% 100%;
      left: 25%;
      bottom: 0px;
      font-size: 0.35rem;
      line-height: 1rem;
      color: #ffffff;
      text-align: center;
    }
    .chakan:active {
      transform: translateY(5px);
    }
  }
}
</style>
<style lang ='less'>
@font-face {
  font-family: font01;
  src: url("../fonts/BEBASNEUE.otf");
}
.swiper-pagination-bullet-active {
  background: #ffffff !important;
}
.vux-swiper-desc {
  display: none;
}
.topSearchInput {
  height: 0.8rem;
  border-radius: 0.08rem;
  background: #ffffff;
  width: 6rem;
  margin: auto;
  position: absolute;
  top: 0.25rem;
  left: 0rem;
  z-index: 2;
  color: #ccc;
  box-shadow: #cccccc 0px 0px 0.3rem;
  .topSearch {
    /* background: red; */
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 0;
    font-size: 0.24rem;
    color: white;
    input {
      padding-left: 10px;
      height: 0.8rem;
      color: white;
    }
  }
  .home-search {
    width: 6.9rem;
    height: 0.8rem;
    margin: auto;
    border-radius: 0.1rem;
    z-index: 1000;
    /* background:url('../../static/new/reversionimg/searchShow.png') no-repeat center; */
    .home-search-btn {
      width: 0.8rem;
      height: 0.8rem;
      float: left;
      background: url("../../static/new/reversionimg/search.png") no-repeat
        center;
      background-size: 0.5rem;
    }
    .home-search-map {
      width: 0.8rem;
      height: 0.8rem;
      float: right;
      background: url("../../static/new/reversionimg/location.png") no-repeat
        center;
      background-size: 0.5rem;
      z-index: 1000;
      /* border-left: 1px solid white; */
      /* margin-top: 0.21rem; */
      /* margin-right: 0.2rem; */
    }
    .home-search-input {
      width: 4.8rem;
      height: 100%;
      float: left;
      line-height: 0;
      .search-input-inner {
        width: 100%;
        height: 100%;
        border: 0;
        background: transparent;
        font-size: 0.28rem;
        line-height: 0.8rem;
        text-align: left;
        padding-left: 0.1rem;
      }
      ::-webkit-input-placeholder {
        color: white;
      }

      :-moz-placeholder {
        color: white;
      }

      ::-moz-placeholder {
        color: white;
      }

      :-ms-input-placeholder {
        color: white;
      }
    }
  }
}
.table-view {
  background: white;
  margin-top: -0.2rem;
  .table-view-list {
    box-sizing: border-box;
    margin: 0.2rem 0.3rem 0rem 0.3rem;
    padding: 0.12rem 0.12rem 0rem 0.12rem;
    /* border-bottom: 0.01rem solid #dddddd;
    margin-top: 0.2rem; */
    box-shadow: #cccccc 0px 0px 0.3rem;
    border-radius: 0.15rem;
    .list-top {
      width: 100%;
      height: 3.2rem;
      overflow: hidden;
      .imgOne {
        width: 70.5%;
        height: 100%;
        float: left;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          border-radius: 0.1rem;
        }
      }
      .imgRight {
        width: 28%;
        float: right;
        height: 100%;

        .imgTwo,
        .imgThree {
          width: 100%;
          height: 48%;
          img {
            width: 100%;
            height: 100%;
            border-radius: 0.1rem;
          }
        }
        .imgThree {
          margin-top: 5%;
          position: relative;
          .imgShadow {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 100;
            background: rgba(0, 0, 0, 0.3);
            font-size: 0.5rem;
            text-align: center;
            line-height: 1.5rem;
            color: white;
          }
        }
      }
    }
    .list-bottom {
      width: 100%;
      box-sizing: border-box;
      padding-top: 0.2rem;
      position: relative;
      margin-bottom: 0.2rem;
      .list-bottom-left {
        font-weight: 500;
        width: 50%;
        height: 0.45rem;
        /* float: left; */
        font-size: 0.32rem;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
        text-indent: 0.1rem;
      }
      .houseMoney {
        position: absolute;
        right: 0;
        top: 0.1rem;
        width: 2rem;
        text-align: center;
        height: 0.6rem;
        line-height: 0.6rem;
        /* background: rgba(0, 0, 0, 0.5); */
        line-height: 0.5rem;
        text-align: center;
        color: #f23333;
        box-sizing: border-box;
        padding: 0.07rem 0.05rem 0.1rem 0.25rem;
        font-weight: 500;
        .houseMoneyNum {
          float: left;
          font-size: 0.35rem;
        }
      }
      .list-bottom-right {
        width: 50%;
        text-indent: 0.1rem;
        height: 0.4rem;
        line-height: 0.6rem;
        /* float: left; */
        font-size: 0.28rem;
        color: #666;
        text-align: left;
        padding-bottom: 0.4rem;
      }
      .bottom-label {
        width: 100%;
        margin-top: 0.05rem;
        .bottom-label-list {
          height: 0.4rem;
          padding: 0 0.1rem;
          display: block;
          float: left;
          color: #999;
          text-align: center;
          line-height: 0.4rem;
          font-size: 0.26rem;
          margin-top: 0.15rem;
          border-radius: 0.05rem;
          background-color: #f5f5f5;
          margin-left: 0.1rem;
          &:nth-child(1) {
            margin-left: 0rem;
          }
        }
      }
    }
    .Division {
      width: 100%;
      height: 1px;
      background: #ddd;
      margin-top: 0.3rem;
    }
  }
  .table-view-list:last-of-type {
    border: 0;
  }
}
.weui-toast {
  width: 5.6em !important;
}
</style>
