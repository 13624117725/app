<template>
    <div  class="fixContent" >
        <div :class="{'topSwiper':IosTop,'topSwiper1':AndroidTop,'topSwiper2':WxTop}">
            <div style="" v-show="topTab">
                <tab :line-width=2 active-color='#e34b3e' default-color="#999" v-model="index">
                    <tab-item @on-item-click='tabClick(item)' class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}<div v-if="item != '退款'" class="shu"></div></tab-item>
                </tab>
            </div>
        </div>
        <div class="market1" v-show="marked"></div>
        <div :class="{'order':orderListss}" v-show="newHouse">
            <ul>
                <li class="listHouseoLi" :key="index" v-for="(item,index) in orderList">
                    <div class="orderps">
                      <p>{{item.laber01}}</p>
                      <div class="clocker" v-if='item.orderstate==10||item.orderstate==11'>
                        倒计时：{{item.countDown}}内完成支付单
                        <!-- 倒计时：<clocker @on-finish="clockFinish" :time="time1"></clocker>内完成支付单  -->
                      </div>
                      <div class="clocker" v-if='item.orderstate==2 || item.orderstate==3'>
                        待后台提交购房资格审核，请耐心等待
                      </div>
                    </div>
                    <div class="orderDiv">
                        <div class="orderDivLeft">
                            <img :src="item.buildpic" alt="">
                        </div>
                        <div class="orderDivRight">
                            <!-- <div class="rightTopState" :class="{rightTopState1:item.orderstate ==10 || item.orderstate ==11}">{{item.orderContent}}</div> -->
                            <!-- <div class=""></div>
                                    <div class="yifu">已付定金:(元){{item.subtotalprice}}元</div> -->
                            <!-- <div class="buildname">{{item.buildname}}</div> -->
                            <!-- <div class="house">{{item.houseinfo}}</div> -->
                            <!-- <div class="houses">{{item.houseinfo}}</div> -->
                            <div class="houseType housezoom">{{item.houseinfo}}</div>
                            <div class="housezoom">{{item.housetype}}</div>
                            <div class="housezoom">优惠信息：{{item.discountscheme}}</div>
                        </div>
                        <div class="bottomTimes">
                          <div class="btmimeleft">
                            <div class="subMoney totleprice">总价:{{item.submoney}}元</div>
                            <div class="subMoney" v-if="item.orderstate==11">需支付登岛费:<span class="prices" style="color:red;">{{item.signtotalmoney}}元</span></div>
                            <div class="subMoney" v-if="item.orderstate==2">已支付的入会金额:<span class="prices" style="color:red;">{{item.signtotalmoney}}元</span></div>
                            <div class="subMoney" v-if="item.orderstate==10">需支付定金:<span class="prices" style="color:red;">{{item.signtotalmoney}}元</span></div>
                            <div class="subMoney" v-if="item.orderstate==3">已支付定金:<span class="prices" style="color:red;">{{item.signtotalmoney}}元</span></div>
                            <!-- <div class="setTimes" v-if='item.orderstate==10||item.orderstate==11'>倒计时:{{item.countDown}}</div> -->
                            <!-- <div class="zishen" v-if='item.orderstate==3||item.orderstate==4'>已提交后台进行购房资格审核</div> -->
                          </div>

                            <div class="buttons">
                              <button v-if="item.orderstate == 10 || item.orderstate ==11 ||item.orderstate ==11" @click="payMoneyClick(item)" style="color:#fff;float:left;background: #e34b3e">付款</button>
                              <button v-if="item.orderstate == 3 || item.orderstate ==4 || item.orderstate ==5" style="color:#666;">查看订单</button>

                              <button v-if="item.orderstate == 10 || item.orderstate ==11" style="color:#999;background: #eee">取消订单</button>
                              <button v-if="item.orderstate == 3 || item.orderstate ==4 || item.orderstate ==5" style="color:#999;background: #eee;float:left">申请退款</button>
                            </div>
                        </div>

                    </div>
                </li>
            </ul>
        </div>
        <div class="bottom" v-if="orderList.lenght!=0">－　已经到最后了　－</div>
    </div>
</template>

<script>
import { Tab, TabItem, Sticky, Clocker, } from "vux";
const list = () => ["全部", "意向", "认购", "成交", "退款"];
export default {
  name: "orderList",
  components: {
    Tab,
    TabItem,
    Sticky,
    Clocker,
  },
  data() {
    return {
      AndroidTop: false,
      WxTop: false,
      IosTop: false,
      orderListss:true,
      list2: list(),
      index: 0,
      demo01: 0,
      demo2: "全部",
      post_data: {
        startCount: "0",
        type: "1"
      },
      phone: "",
      orderState: "",
      orderList: [],
      type: [],
      topTab: true,
      newHouse: true,
      marked: false,
      orderid:'',
      totalFees:'',
      time1: '2018-08-13 22:54:00',
    };
  },
  methods: {
    tabClick(item) {
      // console.log(item);
      if (item == "全部") {
        this.type = [];
        this.orderListonLoad(this.type);
      } else if (item == "意向") {
        this.type = [2, 11];
        this.orderListonLoad(this.type);
      } else if (item == "认购") {
        this.type = [3, 10];
        this.orderListonLoad(this.type);
      } else if (item == "成交") {
        this.type = [7];
        this.orderListonLoad(this.type);
      } else {
        this.type = [-6, -11];
        this.orderListonLoad(this.type);
      }
    },
    // 订单列表数据加载
    orderListonLoad(type) {
      this.get(
        "palmsaleapp/api/v1/custom/initiation/queryCustOrders?phone=" +
          this.phone +
          "&orderstate=" +
          type,
        { interfaceType: "newHouse" }
      ).then(
        response => {
          // console.log(response);
          if (response.status == 200) {
            this.orderList = response.data;
            if (this.orderList.length > 0) {
              this.marked = false;
              for (let i = 0; i < this.orderList.length; i++) {
                // this.orderList[i].buildpic = this.ImgSrc + this.orderList[i].buildpic;
                this.orderList[i].buildpic = this.concatFileUrl(
                  this.orderList[i].buildpic
                );
                if (this.orderList[i].orderstate == "2") {
                  this.orderList[i].orderContent = "已入会，付款成功";
                  this.orderList[i].laber01 = "已入会，付款成功";
                } else if (this.orderList[i].orderstate == "3") {
                  this.orderList[i].orderContent = "已认购,付款成功";
                  this.orderList[i].laber01 = "已认购，支付成功";
                } else if (this.orderList[i].orderstate == "4") {
                  this.orderList[i].orderContent = "资格审核中";
                } else if (this.orderList[i].orderstate == "5") {
                  this.orderList[i].orderContent = "资格审核通过,代付款";
                } else if (this.orderList[i].orderstate == "6") {
                  this.orderList[i].orderContent = "已缴齐首付";
                } else if (this.orderList[i].orderstate == "7") {
                  this.orderList[i].orderContent = "签约完成";
                } else if (this.orderList[i].orderstate == "-5") {
                  this.orderList[i].orderContent = "资格审核未通过";
                } else if (this.orderList[i].orderstate == "-6") {
                  this.orderList[i].orderContent = "退款中";
                } else if (this.orderList[i].orderstate == "-7") {
                  this.orderList[i].orderContent = "退房退款";
                } else if (this.orderList[i].orderstate == "-8") {
                  this.orderList[i].orderContent = "关闭交易";
                } else if (this.orderList[i].orderstate == "-9") {
                  this.orderList[i].orderContent = "待处理退款申请";
                } else if (this.orderList[i].orderstate == "-10") {
                  this.orderList[i].orderContent = "取消退款";
                } else if (this.orderList[i].orderstate == "-11") {
                  this.orderList[i].orderContent = "退款完成";
                } else if (this.orderList[i].orderstate == "10") {
                  this.orderList[i].orderContent = "下订待支付";
                  this.orderList[i].laber01 = "已认购，待推荐";
                } else if (this.orderList[i].orderstate == "11") {
                  this.orderList[i].orderContent = "入会待支付";
                  this.orderList[i].laber01 = "已认购，待推荐";
                }
              }
            } else {
              this.marked = true;
            }
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 付款按钮的点击事件
    payMoneyClick(item) {
      // console.log(item);
      let body = "下定金额";
      this.orderid = item.id; //订单id
      //    console.log(item.id);
      let id = localStorage.getItem("openid");
      let notifyUrl = item.returnUrl; //微信回调url
      // console.log(notifyUrl);
      let totalFee = parseFloat(item.submoney) * 100;
      this.totalFees = parseFloat(item.submoney);
      let callBackUrl = window.location.href;
      // console.log(callBackUrl);
      if(this.isECTouch()){
           window.location.href =
            "https://www.guoanfamily.com/commonPlatform/pay/membershipPayment.html?time=" +
            new Date().getTime() +
            "&id=" +
            id +
            "&notifyUrl=" +
            notifyUrl +
            "&totalFee=" +
            totalFee +
            "&orderid=" +
            orderid +
            "&body=" +
            encodeURIComponent(body) +
            "&callBackUrl=" +
            encodeURIComponent(callBackUrl);
      }else{
        this.AliPayFn();
      }

    },
    // APP环境调用支付宝
     // 支付宝调用接口
    AliPayFn() {
      console.log(this.totalFees * 100,'nimbs')
      let post_data = {
        urlId: "8903", //回调接口id
        outTradeNo: this.orderid, //订单id
        totalAmount: this.totalFees * 100, //总金额
        subject: "下定金额" //订单名称
      };
      this.get(
        "palmsaleapp/api/InitPay/alipay?urlId=" +
          "8903" +
          "&outTradeNo=" +
          this.orderid +
          "&totalAmount=" +
          this.totalFees*100 +
          "&subject=" +
          "下定金额支付",
        { interfaceType: "newHouse" }
      ).then(
        response => {
          var self = this;
          if (response.status == 200) {
            let payInfo = JSON.parse(response.data).data;
            try {
              let cordovapay;
              if (cordova.plugins.alipay) {
                cordovapay = cordova.plugins.alipay.payment;
              } else {
                cordovapay = window.Alipay.pay;
              }
              cordovapay(
                payInfo,
                function success(e) {
                  if (e.resultStatus == "9000") {
                    self.msgalert("支付成功");
                  } else if (e.resultStatus == "8000") {
                    self.msgalert("处理中");
                  } else if (e.resultStatus == "4000") {
                    self.msgalert("订单支付失败");
                  } else if (e.resultStatus == "6001") {
                    self.msgalert("用户中途取消");
                  } else if (e.resultStatus == "6002") {
                    self.msgalert("网络连接出错");
                  }
                },
                function error(e) {
                  self.msgalert("失败");
                }
              );
            } catch (err) {
              window.location.href="http://act.guoanfamily.com/common/AlipayController/toPay/8903?tradeNo="+this.orderid+"&payMoney="+this.totalFee+"&nameGoods=登岛金额支付&userId="+"001";
            }
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },

    // 控制显示收藏的楼盘和收藏的户型
    consoleIndex() {
      this.topTab = true;
      this.newHouse = true;
      this.marked = false;
    },
    // 租房订单
    consoleIndex1() {
      // this.showalert('暂无该功能')
      this.topTab = false;
      this.newHouse = false;
      this.marked = true;
    },
    //弹窗方法
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
    },
    // 倒计时完成时
    clockFinish() {
      console.log('倒计时完成')
    }
  },
  mounted() {
    this.phone = localStorage.getItem("userPhone");
    this.orderListonLoad(this.type);
    // 判断类型
    if (!this.$store.state.showWxTitle) {
      if (!this.AndroidOrIos()) {
        this.AndroidTop = false;
        this.IosTop = true;
        this.wxTop = false;
        this.orderListss = true;
      } else {
        this.AndroidTop = true;
        this.IosTop = false;
        this.wxTop = false;
        this.orderListss = false;
      }
    } else {
      this.wxTop = true;
      this.AndroidTop = false;
      this.IosTop = false;
      this.orderListss = false;
    }
    // this.orderonLoad(this.post_data);
    // if(!this.AndroidOrIos()){
    // console.log(this.AndroidOrIos());
    // this.AndroidTop =  false;
    // }else{
    //     this.AndroidTop =  true;
    // }
  }
};
</script>

<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/center.less";
.topSwiper {
  margin-top: 1.4rem;
  width: 100%;
  height: 1.1rem;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.topSwiper1 {
  margin-top: 1.4rem;
  width: 100%;
  height: 1.1rem;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.topSwiper2 {
  margin-top: 0px;
  width: 100%;
  height: 1.1rem;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}
.order{
    margin-top: 2.6rem;
}
.collentTop {
  width: 96%;
  margin-left: 2%; // margin-top: 0.5rem;
  padding-top: 10px;
}

.houseResourceList {
  width: 100%;
  margin-top: 0.25rem;
}

.listHouseoLi {
  padding: 0.25rem;
  width: 6.3rem;
  margin: 0 auto;
  /* margin-left: 5%; */
  height: 4.8rem;
  margin-top: 0.3rem;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0px 0px 0.3rem 0.005rem #ddd;
  position: relative;
}
.orderps{
  height: 1rem;
  text-align: left;
  border-bottom: 1px solid #ddd;
  /* background: #eee; */
  margin-bottom: .3rem;
  p{
    padding: 0 0 .06rem 0;
    font-size: .32rem;
    color: #e34b3e;
  }
}
.clocker{
  padding-top:0rem;
  font-size: .24rem;
  color: #999;
}

.orderDiv {
  .orderDivLeft {
    width: 35%;
    height: 2rem;
    float: left;
    margin-bottom: 0.2rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.125rem;
    }
  }
  .orderDivRight {
    width: 60%;
    float: right;
    height: 1.5rem;
    background: #fff;
    position: relative;
    .rightTopState {
      position: absolute;
      right: 0;
      top: 0;
      padding: 0.15rem; // width: 30%;
      height: 0.25rem;
      line-height: 10px;
      background: #76bd45;
      border-radius: 0 10px 0 10px;
      color: #fff;
      font-size: 0.25rem;
    }
    .rightTopState1 {
      position: absolute;
      right: 0;
      top: 0;
      padding: 0.15rem; // width: 30%;
      height: 0.25rem;
      line-height: 13px;
      background: #dfa748;
      border-radius: 0 10px 0 10px;
      color: #fff;
      font-size: 0.25rem;
    }
    .buildname {
      font-size: 0.32rem;
      text-align: left;
      color: #000;
      padding-bottom: .1rem;
    }
    .houses {
      font-size: 0.25rem;
      color: red;
      text-align: left; //  font-size:
    }
    .houseType {
      text-align: left;
      font-size: 0.25rem;
      color: #ccc;
    }
    .housezoom{
      text-align: left;
      font-size: 0.24rem;
      color: #999;
      line-height: .4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .subMoney {
    text-align: left;
    font-size: 0.25rem;
    color: #000;
  }
  .totleprice{
    padding-top: .3rem;
    margin-bottom: .2rem;
  }
  .bottomTimes {
    width: 100%; // height: 1.5rem;
    background: #fff;
    float: left;
    border-top: 1px solid #ddd;
    margin-top: 0.125rem;
    position: relative;
    .setTimes {
      width: 50%; // height: 100%;
      line-height: 0.75rem;
      background: #fff;
      font-size: 0.3rem;
      text-align: left;
      color: #dfa748;
      line-height: 1rem;
    }
    .zishen {
      position: absolute;
      left: 0;
      top: 0;
      width: 75%; // height: 100%;
      // line-height: 1.5rem;
      background: #ffffff;
      font-size: 0.3rem;
      text-align: left;
      color: #dfa748;
      line-height: 1rem;
    }
  }
  .buttons {
    width: 3.3rem;
    height: 0.5rem;
    position: absolute;
    right: -.1rem;
    bottom: 0; // float: right;
    // background: red;
    button {
      border-radius: 0.1rem;
      width: 1.5rem;
      text-align: center;
      padding: 5px 0;
      background: #fff;
      border: 1px solid #cdcdcd;
      float: right;
      font-size: .24rem;
      margin-right: .1rem;
    }
  }
}

.market1 {
  width: 100%;
  height: 70%;
  background: url("../../../static/new/img/noData.png") no-repeat 50% 20%;
  background-size: 70%;
  opacity: 0.8;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 15%;
  right: 0;
  margin: auto;
  z-index: 11;
}

.box {
  padding: 15px;
}

.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}

.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}

.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}

.tab-swiper {
  background-color: #fff;
  height: 100px;
}
.shu{
  position: absolute;
  top: 0;
  right: 0;
  height: 0.4rem;
  background: #ddd;
  width: 1px;
  top: 50%;
  margin-top: -0.2rem;

}
.vux-tab .shu:nth-last-child(1){

}
.vux-tab .vux-tab-item{
  position:relative;
}
.bottom{
    color: rgb(170, 170, 170);
    font-size: 0.28rem;
    height: 1rem;
    line-height: 1rem;
    display: block;
}
</style>
<style lang="less">
  .topSwiper{
    .vux-tab-wrap{
      padding:0;position: static;
      // display: none !important;
    }
    .vux-tab-ink-bar {
      display: none !important;
    }
  }
</style>

