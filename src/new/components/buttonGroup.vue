<template>
    <div class="button-group"   :class="{'button-group-show': buttonGroupShow}">
        <tabbar>
            <tabbar-item @click.native="index">
                <img slot="icon" style="margin: auto;display: in-inline;width: 0.45rem;height: 0.45rem;" :src="getHomeImg">
                <span slot="label" class="tablename" :class="{bottomColor:this.$store.state.isIndexTrue}">首页</span>
            </tabbar-item>
            <tabbar-item @click.native="xuanfang">
                <img slot="icon" :src="getOnLineImg" style="margin: auto;display: in-inline;width: 0.45rem;height: 0.45rem;">
                <span slot="label" class="tablename" :class="{bottomColor:this.$store.state.isonLineTrue}">新房</span>
            </tabbar-item>
            <tabbar-item @click.native="zufang">
                <img slot="icon" :src="getOnLinerentImg" style="margin: auto;display: in-inline;width: 0.45rem;height: 0.45rem;">
                <span slot="label" class="tablename" :class="{bottomColor:this.$store.state.isonLinerent}">租房</span>
            </tabbar-item>
            <tabbar-item @click.native="personalCenter">
                <img slot="icon" :src="getPersonImg" style="margin: auto;display: in-inline;width: 0.45rem;height: 0.45rem;">
                <span slot="label" class="tablename" :class="{bottomColor:this.$store.state.isMyTrue}">我的</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import renting from "../../../static/new/img/onlineSroom.png";
import renting1 from "../../../static/new/img/onlineSroom1.png";
import index1 from "../../../static/new/img/index1.png";
import index from "../../../static/new/img/index.png";
import onlineSroom from "../../../static/new/img/onlinerent.png";
import onlineSroom1 from "../../../static/new/img/onlinerent1.png";
import personCenter1 from "../../../static/new/img/personCenter1.png";
import personCenter from "../../../static/new/img/personCenter.png";
import { setTimeout } from 'timers';
export default {
  name: "app",
  data() {
    return {
      activeTab: 0,
      buttonGroupShow: true,
      isminiprogram:false,
    };
  },
  methods: {
    // 路由到首页
    index() {
      if(this.isminiprogram){
        this.$wechat.miniProgram.navigateBack({
           delta: 1
      })
      }else{
        this.$router.push("/");
        // this.activeTab = 0;
        this.$store.state.buttonGroup = 0;
        this.flag = null;
        this.$store.state.isIndexTrue = true;
        this.$store.state.isonLineTrue = false;
        this.$store.state.isMyTrue = false;
        this.$store.state.isonLinerent = false;
        this.setSession("homeHeight","0")
      }
    },
    // 路由到个人中心
    personalCenter() {
      // let userPhone = localStorage.getItem("userPhone");
      // if (!this.notEmpty(userPhone)) {
      this.$router.push("personalCenter");
      this.$store.state.buttonGroup = 2;
      this.$store.state.isIndexTrue = false;
      this.$store.state.isonLineTrue = false;
      this.$store.state.isMyTrue = true;
      this.$store.state.isonLinerent = false;
      this.setSession("homeHeight","0")
    },
    // 路由到新房
    xuanfang() {
      this.$router.push("newHouseIndex");
      this.$store.state.buttonGroup = 1;
      this.$store.state.isIndexTrue = false;
      this.$store.state.isonLineTrue = true;
      this.$store.state.isMyTrue = false;
      this.$store.state.isonLinerent = false;
      this.setSession("homeHeight","0")
    },
    // 路由到租房
    zufang() {
      this.$router.push("HomePage");
      this.$store.state.buttonGroup = 3;
      this.$store.state.isIndexTrue = false;
      this.$store.state.isonLineTrue = false;
      this.$store.state.isMyTrue = false;
      this.$store.state.isonLinerent = true;
      this.setSession("homeHeight","0")
    },
    //路由加载判断方法
    onLoade() {
      let href = window.location.href;
      if (href.indexOf("personalCenter") !== -1) {
        this.$store.state.buttonGroup = 2;
        this.$store.state.isIndexTrue = false;
        this.$store.state.isonLineTrue = false;
        this.$store.state.isMyTrue = true;
        this.$store.state.isonLinerent = false;
      } else if (href.indexOf("newHouseIndex") !== -1) {
        this.$store.state.buttonGroup = 1;
        this.$store.state.isIndexTrue = false;
        this.$store.state.isonLineTrue = true;
        this.$store.state.isMyTrue = false;
        this.$store.state.isonLinerent = false;
      } else if (href.charAt(href.length - 1) == "/") {
        this.$store.state.buttonGroup = 0;
        this.$store.state.isIndexTrue = true;
        this.$store.state.isonLineTrue = false;
        this.$store.state.isMyTrue = false;
         this.$store.state.isonLinerent = false;
      } else if (href.indexOf("HomePage") !== -1) {
        this.$store.state.buttonGroup = 3;
        this.$store.state.isIndexTrue = false;
        this.$store.state.isonLineTrue = false;
        this.$store.state.isMyTrue = false;
        this.$store.state.isonLinerent = true;
      }
    }
  },
  created() {
    let href = window.location.href;
    if (href.indexOf("personalCenter") !== -1) {
      this.$store.state.buttonGroup = 2;
      this.$store.state.isIndexTrue = false;
      this.$store.state.isonLineTrue = false;
      this.$store.state.isMyTrue = true;
      this.$store.state.isonLinerent = false;
    } else if (href.indexOf("newHouseIndex") !== -1) {
      this.$store.state.buttonGroup = 1;
      this.$store.state.isIndexTrue = false;
      this.$store.state.isonLineTrue = true;
      this.$store.state.isMyTrue = false;
      this.$store.state.isonLinerent = false;
    } else if (href.charAt(href.length - 1) == "/") {
      this.$store.state.buttonGroup = 0;
      this.$store.state.isIndexTrue = true;
      this.$store.state.isonLineTrue = false;
      this.$store.state.isMyTrue = false;
      this.$store.state.isonLinerent = false;
    } else if (href.indexOf("HouseList") !== -1) {
      this.$store.state.buttonGroup = 3;
      this.$store.state.isIndexTrue = false;
      this.$store.state.isonLineTrue = false;
      this.$store.state.isMyTrue = false;
      this.$store.state.isonLinerent = true;
    }
  },
  mounted() {
    setTimeout(()=>{
      this.$wechat.miniProgram.getEnv(res => {
        if (res.miniprogram) {
          this.isminiprogram = true
        }
      })
    },500);
    if(window.location.href.indexOf("xiaochengxu")!=-1){
      this.isminiprogram = true
    }
  },
  computed: {
    // 首页的点击事件
    getHomeImg() {
      return this.$store.state.buttonGroup === 0 ? index1 : index;
    },
    //在线选房的点击事件
    getOnLineImg() {
      return this.$store.state.buttonGroup === 1 ? onlineSroom1 : onlineSroom;
    },
    // 个人中心的点击事件
    getPersonImg() {
      return this.$store.state.buttonGroup === 2 ? personCenter1 : personCenter;
    },
    // 在线租房的点击事件
    getOnLinerentImg() {
      return this.$store.state.buttonGroup === 3 ? renting1 : renting;
    }
  },
  watch: {
    $route: function() {
      this.onLoade();
      // console.log(this.$route.meta);
      this.buttonGroupShow = !!this.$route.meta.isShow;
    }
  }
};
</script>

<style lang='less' scoped>
@import "~vux/src/styles/reset.less";

.bottomColor {
  color: black;
}
.button-group {
  position: fixed;
  bottom: -0.2rem;
  left: 0;
  width: 100%;
  opacity: 0;
  height: 0;
  transition: 0.9s;
  z-index: 10;
  padding: 0.1rem 0;
  .weui-tabbar {
    position: static;
  }
}

.button-group-show {
  height: 1rem;
  opacity: 1;
  background:#F7F7FA;
  bottom: 0rem;
}

.tablename {
  font-size:.20rem;
  text-align: center;
}
// mxx代码
.weui-tabbar__icon {
  width: 25px !important;
  height: 23px !important;
  margin-top: 6px !important;
}
@media only screen and (device-width: 375px) and (device-height:812px) and (-webkit-device-pixel-ratio:3) {
  .button-group {
      padding-bottom: 0.4rem;
      bottom: -0.5rem;
  }
  .button-group-show{
  	bottom: 0rem;
  }
}
</style>
<style>
.weui-tabbar__item.weui-bar__item_on .weui-tabbar__label {
  color: #999999;
}
/* .button-group .weui-tabbar__item{
  padding:0px;
} */
</style>
