<template>
  <div>
    <div class="banner">
      <swiper :options="swiperOption" ref="mySwiper" style="width:100%;">
        <swiper-slide :key="index" v-for="(item,index) in roomList">
          <div style="width:100%;height:4rem;">
            <img
              @click="itemImgClick(item)"
              style="width:96%;height:98%;margin-left:2%;margin-top:2%;border-radius:.1rem;"
              v-lazy="item.image"
              alt
            >
          </div>
          <!-- @click="memberShipClick(item)" -->
          <div class="bottomInfo" style>
            <div>{{item.houseName}}{{item.roomName}}{{item.roomNumber}}</div>
            <div>
              <div class="price">{{item.price}}元/月</div>
              <div class="tags">
                <span :key="index1" v-for="(items,index1) in item.tagsArr">{{items}}</span>
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
      roomList: [],
      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 5
      }
    };
  },
  methods: {
    //获取首页数据
    getHomePageDetail() {
      this.post("common/homePage", {
        size: "10"
      }).then(res => {
        this.roomList = res.data.roomList.map((item, index) => {
          if (!item.image) {
            item.image =
              "https://img.guoanfamily.com/rent/static/HomePage/roomimg_03.png";
          } else {
            item.image =
              !item.image || this.concatFileUrl(item.image, 240, 240);
          }
          item.tagsArr = item.tags.split(",", 2);
          return item;
        });
        this.roomList = this.roomList.slice(0, 5);
      });
    },
    // 图片的点击事件
    itemImgClick(item) {
      this.$router.push({
        path: "/HouseList/houseDetail",
        query: { id: item.id, productType: item.productType }
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
  margin-bottom: 0.8rem;
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
  // margin-left: 0.15rem;
  div:nth-child(1) {
    width: 100%;
    height: 1rem;
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
      line-height: 0.7rem;
      font-size: 0.32rem;
      color: #f43333;
      height: 100%;
    }
    .tags {
      flex: 2;
      font-size: 0.32rem;
      color: #000;
      line-height: 0.7rem;
      span {
        display: inline-block;
        background: #f4f8fb;
        margin-left: 0.2rem;
        font-size: 0.24rem;
        padding: 0 0.1rem 0 0.1rem;
        border-radius: 0.1rem;
      }
    }
  }
}
</style>
