<template>
  <div>
    <div class="banner">
      <swiper :options="swiperOption" ref="mySwiper" style="width:100%;">
        <swiper-slide :key="index" v-for="(item,index) in list">
          <div style="width:100%;height:4rem;">
            <img
              @click="itemImgClick(item.id)"
              style="width:96%;height:98%;margin-left:2%;margin-top:2%;border-radius:.1rem;"
              v-lazy="`${item.firstpicture}?imageView2/0/w/240/h/240`"
              alt
            >
          </div>
          <!-- @click="memberShipClick(item)" -->
          <div class="bottomInfo">
            <div>{{item.buildname}}</div>
            <span class="address">{{item.city}}{{item.country}}{{item.province}}</span>
            <div>
              <div class="price" style="color:#f43333;">
                <span style="color:#ccc;">均价：</span>
                {{item.averageprice}}
                <span v-if="item.averageprice !== '售价待定'">元/㎡</span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 5
      }
    };
  },
  methods: {
    //获取首页数据
    getHomePageDetail() {
      this.get(
        "palmsaleapp/api/v1/build/buildLitsAppm?averagepriceList=&typeList=&areaList=&tenementtypeList=&buildtagList=&hardcoverstandardList",
        {
          interfaceType: "newHouse"
        }
      ).then(response => {
        if (response.status == 200) {
          // 进行图片路径的拼接
          for (let i = 0; i < response.data.length; i++) {
            // response.data[i].firstpicture = this.ImgSrc + response.data[i].firstpicture;
            response.data[i].firstpicture = this.concatFileUrl(
              response.data[i].firstpicture
            );
            this.$store.state.buildListLocation.push(response.data[i].address);
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
                var a = this.list[i].buildtagnameList.toString().split(",", 1);
              } else {
                var a = this.list[i].buildtagnameList.toString().split(",", 2);
                this.list[i].buildtagnameList = a;
              }
            }
          }
        }
      });
    },
    // 图片的点击事件
    itemImgClick(item) {
      this.$router.push({
        path: "building_detial",
        query: { buildID: item }
      });
    }
  },
  mounted() {
    this.getHomePageDetail();
  }
};
</script>

<style lang='less' scoped>
.banner {
  width: 100%;
  height: 5.5rem;
   margin-bottom: 1.1rem;
  .swiper-slide {
    width: 85%;
    margin-left: 0.3rem;
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
    box-shadow: #ccc 0px 0px 0.3rem;
    overflow: hidden;
    border-radius: 0.15rem;
  }
}
.bottomInfo {
  width: 100%;
  height: 1.9rem;
  background: #fff;
  overflow: hidden;
  position: relative;
  // margin-left: 0.15rem;
  .address {
    display: inline-block;
    width: 40%;
    height: 0.5rem;
    //   background: red;
    color: #999999;
    position: absolute;
    right: 0;
    top: 0.4rem;
    font-size: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 0.5rem;
  }
  div:nth-child(1) {
    width: 100%;
    height: 0.7rem;
    line-height: 1.3rem;
    color: #333;
    font-size: 0.34rem;
    text-align: left;
    font-weight: 500;
    padding-left: 0.6rem;
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: row;
    height: 0.7rem;
    .price {
      flex: 1;
      line-height: 0.5rem;
      font-size: 0.32rem;
      color: #f43333;
      height: 100%;
    }
  }
}
</style>
