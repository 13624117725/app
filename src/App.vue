<template>
    <div id="app" v-wechat-title="title">
        <view-box ref="viewBox" class="viewBox1">
            <div v-show="!this.$store.state.showWxTitle">
                <ga-page-header slot="header" :title="title" :needBack="showBack" v-if="watchTitle"></ga-page-header>
            </div>
            <transition>
              <keep-alive>
                  <router-view v-if="$route.meta.keepAlive" style="overflow-y:scroll;" class="ipxClass"></router-view>
              </keep-alive>
            </transition>

            <transition>
              <router-view v-if="!$route.meta.keepAlive" style="overflow-y:scroll;" class="ipxClass"></router-view>
            </transition>

            <!-- <transition :name="'slide-fade-in'" mode="out-in">
              <router-view v-if="!$route.meta.keepAlive && isOne" style="overflow-y:scroll;"></router-view>
            </transition> -->

            <login style="z-index:1100;" v-transfer-dom></login>
            <Screenshot v-show="!this.$store.state.showWxTitle" class="aaa" style="z-index:1100;"  v-transfer-dom></Screenshot>
            <ga-loading-tip></ga-loading-tip>
            <buttonGroup slot='bottom' v-if="this.$store.state.isShowBottom"></buttonGroup>
        </view-box>
    </div>
</template>

<script>
import login from "./new/views/login1";
import "./script/wxjump";
import { ViewBox } from "vux";
import buttonGroup from "./new/components/buttonGroup"; //底部导航栏

import Screenshot from "./rent/components/home/Screenshot";
import { TransferDom } from "vux";
export default {
  directives: {
    TransferDom
  },
  data() {
    return {
      fadeIn: true,
      historyStack: [],
      direction: "forward",
      tostack: [],
      isWex: false,
      androidios: false,
      isOne: true,
      IsMiniprogram:false,
      // transitionName:"slide-fade-in",
    };
  },

  created() {

    this.$store.state.miniShare = true;

    // this.$wechat.ready(()=>{
    //   console.log("测试版本:",22,window.__wxjs_environment=="miniprogram")
    // })
  },
  mounted() {
    // //去除链接上的用户信息
    // if (this.isECTouch() && !this.getStorage(this.KEYS.OPENID)) {
    //   this.getOpenId();
    // }
    this.isECTouch();
    if(this.$wechat.miniProgram){
      let Mself = this
      this.$wechat.miniProgram.getEnv((res)=> {
        if(res.miniprogram){
          this.IsMiniprogram = true
          let locationHref = window.location.hash;
          if(locationHref.indexOf("?")!=-1&&locationHref.indexOf("from")==-1){
            locationHref = locationHref+"&from=xiaochengxu"
          }else if(locationHref.indexOf("?")==-1){
            locationHref = locationHref+"?from=xiaochengxu"

          }
          this.$wechat.miniProgram.postMessage({data:{
            shearData:{
              title:"国安家",
              imgurl:"https://img.guoanfamily.com/311324861370865436.jpg",
              path:encodeURIComponent(locationHref),
              tyle:true
            }
          }})
        }else{
          this.IsMiniprogram = false
        }
      })
    }
    if (this.$store.state.showWxTitle) {
      window.$wxjump.getUserInfo();
    }
    this.$router.beforeEach((to, from, next) => {
      if (this.isECTouch()) {
        window.addEventListener(
          "popstate",
          e => {
            this.isWex = true;
          },
          false
        );
      }

      // let isBack = this.$router.isBack
      // if (isBack) {
      //   this.transitionName = 'slide-fade-out'
      // } else {
      //   this.transitionName = 'slide-fade-in'
      // }
      // this.$router.isBack = false
      //初始化时放入当前地址,多数为'/'
      // if(this.isWex){
      //   this.tostack.pop();
      //   this.direction = "backward";
      // }else{
      //   if (this.tostack.length == 0) {
      //     // this.isOne = true;
      //     this.tostack.push(from.path);
      //   }else{
      //     // this.isOne = false;
      //   }
      //   if (
      //     this.tostack.length > 1 &&
      //     this.tostack[this.tostack.length - 2] == to.path
      //   ) {
      //     this.tostack.pop();
      //     this.direction = "backward";
      //   } else {
      //     this.tostack.push(to.path);
      //     this.direction = "forward";
      //   }
      // }

      next();
    });
    this.isIos();
  },

  methods: {
    isIos() {
      //判断是安卓还是ios登录，定义到变量中
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
      let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if (isAndroid === true && isiOS === false) {
        //安卓且微信
        if (this.$store.state.showWxTitle) {
          this.androidios = false;
        } else {
          //仅仅是安卓app的情况下，添加paddingtop
          this.androidios = true;
        }
        return true;
      }
      if (isAndroid === false && isiOS === true) {
        this.androidios = false;
        return false;
      }
    }
  },

  watch: {
    $route: function() {
      this.$store.state.currentRouter = this.$route.path;
      // 控制轮播图的样式展示；
      if(this.$route.path == '/newHouseIndex' || this.$route.path == '/HomePage'){
        this.$store.state.showSwiper = false;
      }else{
        this.$store.state.showSwiper = true;
      }
      if(this.IsMiniprogram){
        let Path = window.location.href.split("#")[0]+"#/";
        let Hashs =  window.location.hash;

        if(Hashs.indexOf("?")!=-1&&Hashs.indexOf("from")==-1){
            Hashs = Hashs+"&from=xiaochengxu"
          }else if(Hashs.indexOf("?")==-1){
            Hashs = Hashs+"?from=xiaochengxu"

          }
        this.$wechat.miniProgram.postMessage({data:{
            shearData:{
              title:"国安家",
              imgurl:"https://img.guoanfamily.com/311324861370865436.jpg",
              path:encodeURIComponent(Hashs),
              tyle:true
            }
          }})
      }

    }
  },
  computed: {
    // 控制页面标题文字
    title() {
      if (!this.$route.meta.title) {
        return this.$route.query.title;
      } else {
        return this.$route.meta.title;
      }
    },
    // 控制回退按钮显示隐藏
    showBack() {
      return (
        this.$route.path !== "/" &&
        this.$route.path !== "/newHouseIndex" &&
        this.$route.path !== "/personalCenter" &&
        this.$route.query.title !== "在线租房"
      );
    },
    // 控制头部显示隐藏
    watchTitle() {
      //别再直接删了，注释一下
      if (
        // this.$route.path == "/newhousehome" ||
        this.$route.path == "/search" ||
        this.$route.path == "/newbuildList" ||
        this.$route.path == "/newhousebuilddetail" ||
        this.$route.path == "/housetypedetail" ||
        this.$route.path == "/" ||
        this.$route.path == "/newHouseIndex" ||
        this.$route.path == "/personalCenter" ||
        this.$route.path == "/HouseList" ||
        this.$route.path == "/HomePage" ||
        this.$route.path == "/HouseList/HotSearch" ||
        this.$route.path == "/threeDLookHouse" ||
        this.$route.path == "/Delegation" ||
        this.$route.path == "/HouseList/houseDetail" ||
        this.$route.path == "/modifyInfo" ||
        this.$route.path == "/VrLook" ||
        this.$route.path == "/arealist" ||
        this.$route.path == "/Apartment" ||
        this.$route.path == "/ownerRecommend"

      ) {
        return false;
      } else {
        return true;
      }
      // return this.$route.path == '/HomePage' ;
    },

  },

  components: {
    buttonGroup,
    login,
    ViewBox,
    Screenshot
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
</style>

<style lang="scss">
@import "rent/style/theme.scss";
#app {
  width: 100%;
  height: 100%;
  background: white;
}
.viewBox1{
  overflow: hidden;
}
.androidStyle {
  width: 100%;
  height: 100%;
  background: white;
  /*padding-top: 0.2rem;*/
  box-sizing: border-box;
}
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .ipxClass {
    padding-top: 0.2rem;
    /*padding-bottom: 0.2rem;*/
    // box-sizing: border-box;
  }
}
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  transform: translate3d(0, 0, 0);
  display: flex;
  $S: 0.5s;
  .headerHome {
    width: 100%;
    height: 1.3rem;
    background: #e24e59;
  }
  .headerHomeAndro {
    width: 100%;
    height: 1.1rem;
    background: #e24e59;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }
  .HomeContent {
    overflow-y: scroll;
    position: absolute;
    top: 1.3rem;
    bottom: 0;
    width: 100%;
  }
  .HomeContentndroid {
    overflow-y: scroll;
    position: absolute;
    top: 1.1rem;
    bottom: 0;
    width: 100%;
  }
  .slide-block {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .slide-fade-in-enter-active {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    animation: fade-in-in $S;
  }
  .slide-fade-in-leave-active {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    animation: fade-in-out 0.1;
  }

  @keyframes fade-in-in {
    0% {
      transform: translateX(100%);
    }

    100% {
      transform: translateX(0);
    }
  }
  @keyframes fade-in-out {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-100%);
    }
  }

  .slide-fade-out-enter-active {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    animation: fade-out-in $S;
  }

  .slide-fade-out-leave-active {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    animation: fade-out-out 0.1;
  }

  @keyframes fade-out-in {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0);
    }
  }
  @keyframes fade-out-out {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(100%);
    }
  }
}
body .wx_content {
  top: 0;
}
</style>
<style>
.weui-tab__panel {
  padding-bottom: 0 !important;
}
</style>
