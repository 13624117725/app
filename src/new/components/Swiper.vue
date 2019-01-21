<template>
  <!-- <div :class="[AndroidTop ? 'AndroidTop' : 'body_top']" > -->
  <div>
    <!--<swiper loop auto :list="demo06_list" :index="demo06_index" dots-position="center" height="4rem" @on-index-change="demo06_onIndexChange" @click='justep(item)' @on-click-list-item="justep"></swiper> -->
    <div v-if="$store.state.showSwiper" class="indexSwiper">
      <div class="swiper-pagination slidePage" slot="pagination"></div>
      <swiper :options="swiperOption" ref="mySwiper" v-if="urlList.length > 0">
        <swiper-slide
          :key="index"
          @click.native="swiperClick(item)"
          v-for="(item,index) in urlList"
        >
          <img
            style="width:100%; height:4rem;border-radius: .1rem;"
            :src="`https://img.guoanfamily.com/${item.multimefileName}`"
          >
        </swiper-slide>
      </swiper>
    </div>
    <div v-if="!this.$store.state.showSwiper" style="width:100%; height:4rem;">
      <swiper :options="swiperOption" ref="mySwiper" v-if="urlList.length > 0">
        <!-- <swiper-slide :key='index' v-for="(item,index) in urlList"><img style="width:100%; height:4rem;border-radius: .1rem;" :src='`${item.img}?imageView2/0/w/470/h/320`'/></swiper-slide> -->
        <swiper-slide
          :key="index"
          @click.native="swiperClick(item)"
          v-for="(item,index) in urlList"
        >
          <img
            style="width:100%; height:4rem;border-radius: .1rem;"
            :src="`https://img.guoanfamily.com/${item.multimefileName}`"
          >
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSwiper: true,
      swiperOption: {
        loop: false,
        spaceBetween: 2,
        autoplay: {
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination"
        }
      },
      AndroidTop: false,
      baseList: [],
      urlList: [],
      demo06_list: [],
      demo06_index: 0,
      buildid: ""
    };
  },
  methods: {
    demo06_onIndexChange(index) {
      // console.log(index);
      this.buildid = this.demo06_list[index].id;
    },
    // 获取swiper 数据
    headerSwiper() {
      // 新接口
      this.get("palmsaleapp/api/v1/banner/appList?projectType=4", {
        interfaceType: "newHouse"
      }).then(
        response => {
          if (response.status == 200) {
            this.baseList = response.data;
            // console.log('12342342',this.baseList);
            if (
              this.$store.state.currentRouter == "/" ||
              this.$store.state.currentRouter == "first"
            ) {
              this.urlList = this.baseList.filter(item => {
                return item.systemtypename == "APP首页";
              });
            }
            if (this.$store.state.currentRouter == "/newHouseIndex") {
              this.urlList = this.baseList.filter(item => {
                return item.systemtypename == "新房首页";
              });
            }
            if (this.$store.state.currentRouter == "/HomePage") {
              this.urlList = this.baseList.filter(item => {
                return item.systemtypename == "租房首页";
              });
            }
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 轮播的点击事件
    swiperClick(item) {
      if (item.bannerType == 1) {
        this.$router.push({
          path: "/framePage",
          query: { src: item.bannerValue, title: item.linkTitle }
        });
      }
      if (item.bannerType == 2) {
        let arr = item.bannerValue.split("*");
        if (this.$store.state.currentRouter == "/newHouseIndex") {
          this.$router.push({
            path: "/building_detial",
            query: { buildID: arr[1] }
          });
        }
      }
      if (item.bannerType == 4) {
        this.$router.push({ path: item.bannerValue });
      }
    }
  },

  mounted() {
    this.headerSwiper();
    if (!this.AndroidOrIos()) {
      // console.log(this.AndroidOrIos());
      this.AndroidTop = false;
    } else {
      this.AndroidTop = true;
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>
<style lang='less'>
.body_top {
  margin-top: 60px;
}
.indexSwiper {
  width: 100%;
  height: 4rem;
  margin-top: 1.4rem;
  .slidePage {
    width: 100%;
    height: 30px;
    // background: red;
    top: 1.25rem;
    span {
      margin-bottom: 0.65rem;
      width: 0.2rem;
      // border-radius: 0;
      margin-left: 0.1rem;
      height: 0.08rem;
      border-radius: 4px;
    }
    .swiper-pagination-bullet-active {
      background: #f43333 !important;
    }
  }
}
.copyright {
  font-size: 0.6rem;
  color: #ccc;
  text-align: center;
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0px !important;
}
.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}

.text-scroll p {
  font-size: 0.6rem;
  text-align: center;
  line-height: 30px;
}

.black {
  background-color: #000;
}

.title {
  line-height: 100px;
  text-align: center;
  color: #fff;
}
</style>
