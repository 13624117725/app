<style scoped lang="scss">
@import "../../style/theme.scss";
@import "../../style/public.scss";
@font-face {
  font-family: font01;
  src: url("../../../fonts/BEBASNEUE.otf");
}
.vux-x-icon {
  fill: white;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #8b8b8b;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #8b8b8b;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #8b8b8b;
}
:-ms-input-placeholder {
  /* Internet Explorer 10+ */
  color: #8b8b8b;
}
.input-search {
  display: block;
  margin-top: 0.16rem;
}
img {
  width: 100%;
  height: 100%;
}
.content {
  font-size: $titleFontSize;
  background: #eeeeee;
  box-sizing: border-box;

  .content-room {
    background: white;
    box-sizing: border-box;
    padding: 0.48rem 0.42rem 0.2rem 0.23rem;
    position: relative;
    .content-img {
      width: 2.8rem;
      height: 2.1rem;
      float: left;
      margin-right: 0.34rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.1rem;
      }
    }
    .content-room-title1 {
      font-size: 0.32rem;
      color: black;
      text-align: left;
    }
    .content-room-title2 {
      font-size: 0.26rem;
      color: #666666;
      margin-top: 0.2rem;
      text-align: left;
    }
    .content-room-title3 {
      font-size: 0.28rem;
      color: black;
      margin-top: 0.1rem;
      text-align: left;
    }
    .content-tabs {
      overflow: hidden;
      padding-top: 0.1rem;
      .content-tabs-item {
        padding: 0.1rem 0.2rem;
        float: left;
        margin-right: 0.2rem;
        font-size: 0.24rem;
        color: #999999;
        background: #f5f5f5;
      }
    }
  }

  .status {
    float: right;
    width: 1.06rem;
    height: 0.43rem;
    border-radius: 0.05rem;
    text-align: center;
    line-height: 0.43rem;
    font-size: $mostFontSize;
    background: #e55054;
    color: #fff6ef;
    padding-top: 0.07rem;
    padding-right: 0.05rem;
  }
  .content-person {
    /*background: white;
			box-sizing: border-box;
			padding: 0.55rem 0 0 0.35rem;
			margin-top: 0.17rem;*/
    background: white;
    box-sizing: border-box;
    margin-top: 0.2rem;

    .delegation-center-name {
      height: 1.2rem;
      background: #fff;
      overflow: hidden;
      border-bottom: 1px solid #dddddd;
      width: 6.9rem;
      margin: auto;
      box-sizing: border-box;
      padding-top: 0.05rem;
      .delegation-center-name-top {
        width: 100%;
        height: 0.7rem;
        margin-top: 0.2rem;
        p {
          width: 13%;
          height: 100%;
          line-height: 0.7rem;
          font-size: 0.3rem;
          float: left;
          text-align: left;
          text-indent: 0.1rem;
          color: black;
          font-size: 0.32rem;
        }
        div {
          float: left;
          width: 65%;
          height: 80%;
          border: 0;
          background-size: 100% 100%;
          input {
            display: block;
            width: 70%;
            margin-top: 2%;
            height: 100%;
            float: left;
            margin-left: 4%;
            outline: none;
            background: transparent;
            border: none;
            outline: medium;
            font-size: 0.28rem;
            *:focus {
              outline: none;
              background-color: transparent;
            }
            ::selection {
              background: transparent;
            }
            ::-moz-selection {
              background: transparent;
            }
          }
          p {
            width: 25%;
            float: left;
            color: $partColor;
          }
        }
        .sexSelect {
          .gonggongde {
            width: 1.5rem;
            height: 0.5rem;
            float: left;
            line-height: 0.64rem;
            margin-top: 0.05rem;
          }
          .nande {
            background: url(../../../../static/rent/yk/selected.png) no-repeat
              center;
            background-size: 23%;
            background-position: 0.13rem 0.12rem;
            text-indent: 0.55rem;
          }
          .nvde {
            background: url(../../../../static/rent/yk/noselect.png) no-repeat
              center;
            background-size: 23%;
            background-position: 0.13rem 0.12rem;
            text-indent: 0.55rem;
          }
        }
      }
      .delegation-center-name-bottom {
        width: 100%;
        height: 0.7rem;
        margin-top: 0.2rem;
        span {
          display: block;
          height: 100%;
          width: 10%;
          line-height: 0.75rem;
          color: $partColor;
          text-align: center;
          font-size: 0.3rem;
          float: left;
        }
        p {
          width: 20%;
          height: 100%;
          line-height: 0.7rem;
          font-size: 0.3rem;
          float: left;
        }
        div {
          float: left;
          width: 65%;
          height: 80%;
          border: 0;
          background-image: url("../../../assets/home/Delegation-bage.png");
          background-size: 100% 100%;
          input {
            display: block;
            width: 70%;
            margin-top: 2%;
            height: 100%;
            float: left;
            margin-left: 4%;
            font-size: $fewFontSize;
            outline: none;
            background: transparent;
            border: none;
            outline: medium;
            *:focus {
              outline: none;
              background-color: transparent;
            }
            ::selection {
              background: transparent;
            }
            ::-moz-selection {
              background: transparent;
            }
          }
          p {
            width: 25%;
            float: left;
            color: $partColor;
          }
        }
      }
    }
  }
  .content-date {
    background: white;
    box-sizing: border-box;
    padding: 0.35rem 0.35rem;
  }
  .content-message {
    background: white;
    margin-top: 0.2rem;
    box-sizing: border-box;
    padding: 0.35rem 0.3rem;
    text-align: left;
    p {
      text-indent: 0.1rem;
    }
  }
  .content-message > textarea {
    outline: none;
    border: 0;
    width: 100%;
    height: 1.9rem;
    background: #f5f5f5;
    margin-top: 0.3rem;
    border-radius: 0.03rem;
    font-size: $mostFontSize;
    box-sizing: border-box;
    padding-top: 0.15rem;
    resize: none;
    text-indent: 0.1rem;
  }
}
.payBottom {
  background: white;
  box-sizing: border-box;
  padding: 0.25rem 0.4rem 0;
  /*margin-top: 0.17rem;*/
  span {
    display: block;
    float: left;
  }
  .rentMoney {
    width: 100%;
    height: 1.5rem;
    background-color: #fff;
    margin: 0.3rem auto 0;
    .top {
      width: 100%;
      height: 1.5rem;
      line-height: 1.5rem;
      .zujin {
        font-size: 0.35rem;
        float: left;
        margin-left: 10%;
      }
      .yuan {
        margin-left: 2%;
        font-size: 0.25rem;
        float: left;
        color: #a6a6a6;
      }
    }
    .bottom {
      width: 100%;
      height: 1.5rem;
      .left {
        width: 0.4rem;
        height: 0.4rem;
        float: left;
        box-sizing: border-box;
        margin-left: 1rem;
      }
      .middle {
        width: 40%;
        margin: 0 auto;
        text-align: center;
        box-sizing: border-box;
        font-size: 0.6rem;
        color: #e24f57;
        display: block;
        border: 3px solid #fff;
      }
      .right {
        width: 0.4rem;
        height: 0.4rem;
        float: right;
        box-sizing: border-box;
        margin-right: 1rem;
      }
      .left,
      .right {
        margin-top: 0.25rem;
      }
    }
  }
}
.payBottom > span:nth-of-type(1) {
  font-size: $titleFontSize;
  color: #2e2e2e;
}
.payBottom > span:nth-of-type(2) {
  font-size: $mostFontSize;
  color: #a0a0a0;
  margin-top: 0.05rem;
}
.addMinus {
  width: 100%;
  box-sizing: border-box;
  padding: 0.35rem 0 0.4rem 15%;
  font-size: 0.45rem;
}
.money-minus,
.money-num {
  float: left;
}
.money-minus {
  height: 0.45rem;
  width: 0.45rem;
  line-height: 0.45rem;
  text-align: center;
  border-radius: 0.07rem;
  color: #52afd8;
  margin-top: 0.17rem;
}
.money-num {
  color: #e74f5e;
  font-size: 0.6rem;
  width: 3.5rem;
  height: 0.8rem;
  text-align: center;
}
.payBtn-box {
  background: white;
  height: 1rem;
  .payBtn {
    width: 100%;
    height: 1rem;
    background: #e34b3e;
    color: white;
    font-size: 0.32rem;
    line-height: 1rem;
    text-align: center;
    border: 0;
    outline: none;
    margin: auto;
  }
  .isActive {
    background: #a3a3a3;
  }
}

.payMode {
  padding: 0.2rem 0 0;
  background: #eeeeee;
  p {
    height: 1rem;
    background: white;
    /*margin-bottom: 0.01rem;*/
    box-sizing: border-box;
    line-height: 1rem;
    font-size: $titleFontSize;
    border-bottom: 1px solid #dddddd;
  }
}
.weui-dialog__hd {
  padding: 0.3em 1.6em 0.5em;
}

/*支付方式*/
.wechat-gaj {
  background: white;
  padding: 0 0.3rem;
  box-sizing: border-box;
}
.pay-line {
  background: #f2f2f2;
  height: 0.02rem;
}
.wechat-pay {
  height: 1.1rem;
  line-height: 1.1rem;
  background-color: #fff;

  overflow: hidden;
  .pay-img {
    width: 0.5rem;
    height: 0.5rem;
    float: left;
    margin-top: 0.3rem;
    margin-left: 0.05rem;
  }
  .left {
    float: left;
    font-size: 0.35rem;
    margin-left: 0.3rem;
  }
  //         input[type=radio] {
  //     background-image: url($UI/agenthouseApp/image/radiobtn2.png);
  //     -webkit-appearance: none;
  //     width: 13px;
  //     height: 13px;
  // }

  // input[type=radio]:checked {
  // 	background-image: url($UI/agenthouseApp/image/radiobtn1.png);
  // }
  input[type="radio"] {
    -webkit-appearance: none;
    width: 0.5rem;
    height: 0.5rem;
    margin-top: 0.3rem;
    float: right;
    margin-right: 0.2rem;
    border: none;
    background-image: url("../../../../static/rent/img/collection/weixuanzhong.png");
    background-size: 100%;
  }
  input[type="radio"]:checked {
    width: 0.5rem;
    height: 0.5rem;
    margin-top: 0.3rem;
    float: right;
    margin-right: 0.2rem;
    border: none;
    background: url("../../../../static/rent/img/collection/xuanzhong.png");
    background-size: 100%;
  }
}
.own-pay {
  height: 1.1rem;
  line-height: 1.1rem;
  background-color: #fff;

  overflow: hidden;
  .pay-img {
    width: 0.5rem;
    height: 0.5rem;
    float: left;
    margin-top: 0.3rem;
    margin-left: 0.05rem;
  }

  .left {
    float: left;
    font-size: 0.35rem;
    margin-left: 0.3rem;
  }
  input[type="radio"] {
    -webkit-appearance: none;
    width: 0.5rem;
    height: 0.5rem;
    margin-top: 0.3rem;
    float: right;
    margin-right: 0.2rem;
    border: none;
    background-image: url("../../../../static/rent/img/collection/weixuanzhong.png");
    background-size: 100%;
  }
  input[type="radio"]:checked {
    width: 0.5rem;
    height: 0.5rem;
    margin-top: 0.3rem;
    float: right;
    margin-right: 0.2rem;
    border: none;
    background: url("../../../../static/rent/img/collection/xuanzhong.png");
    background-size: 100%;
  }
}

.pay-input {
  outline: none;
  border: 0;
  height: 0.8rem;
  font-size: 0.6rem;
  width: 1.4rem;
  color: #e74f5e;
}
.switchBox {
  width: 1.1rem;
  height: 0.45rem;
  border: 0.02rem solid #e94a5e;
  border-radius: 0.225rem;
  box-sizing: border-box;
  background: #e94a5e;
  padding: 0.02rem;
  position: relative;
  float: left;
  margin-left: 0.3rem;
  .switchText {
    font-size: $reminderFontSize;
    color: white;
    position: absolute;
    top: 0.04rem;
  }
  .switchMan {
    right: 0.1rem;
  }
  .switchWomen {
    left: 0.1rem;
  }
  .switchSlide {
    display: block;
    width: 0.37rem;
    height: 0.37rem;
    border-radius: 50%;
    background: white;
    position: absolute;
    top: 0.02rem;
    box-shadow: 0 0 0.1rem #888;
    transition: all 1s;
  }
}
.emptyios {
  height: 1.3rem;
}
.emptyandroid {
  height: 1.2rem;
}
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  .payBtn-box {
    height: 1.7rem;
  }
}
</style>
<template>
<div class="fixContent" >
	<!--头部-->
	<!--<ga-page-header title="定金预订">
	</ga-page-header>-->
	<div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>
	<!--内容-->
	<div class="content">
		<div class="content-room">
			<div class="content-img" style="position: relative;">
				<img :src="depositImg" alt="" />
				<!--品质节logo-->
		    <!--<img style="width: 1.3rem;height: 0.5rem; position: absolute;bottom: 0.1rem;right: 0.1rem;z-index: 2;" src="https://img.guoanfamily.com/rent/pinzhijie/pinzhiLogo.png" alt="" />-->

			</div>
			<p class="content-room-title1">{{shareName}}</span></p>
			<p class="content-room-title2">{{buildNo}}号楼 {{buildUnitNo}}单元&nbsp;&nbsp;{{houseBuildNo}}层/{{houseArea}}㎡</p>
			<p class="content-room-title3"><span style="font-family: font01;">{{rent}}</span>元/月</p>
			<div class="content-tabs">
				<div class="content-tabs-item" v-for="item in advantageTags">{{item}}</div>
			</div>
			<div style="clear: both;"></div>
		</div>
		<div class="content-person">
			<div class="delegation-center-name">
                <div class="delegation-center-name-top">
                    <p class="p1">手机</p>
                    <div class="delegation-center-name-top-bage">
                        <input type="text" placeholder="请输入您的手机号" v-model="renterPhone" maxlength="11">
                    </div>
                </div>
            </div>
            <div class="delegation-center-name">
                <div class="delegation-center-name-top">
                    <p class="p1">姓名</p>
                    <div class="delegation-center-name-top-bage">
                        <input type="text" placeholder="请输入您的姓名" v-model="renterName" maxlength="11">
                    </div>
                </div>
            </div>
            <div class="delegation-center-name">
                <div class="delegation-center-name-top">
                    <p class="p1">称呼</p>
                    <div class="sexSelect">
                    	<div class="gonggongde" :class="[isMan?'nande':'nvde']" @click="switchman">先生</div>
                    	<div class="gonggongde" :class="[!isMan?'nande':'nvde']"  @click="switchwoman" >女士</div>
                    </div>
                </div>
            </div>
		</div>
		<!--入住时间-->
		<div class="content-date">
			<!--<div style="width: 0.3rem;height: 1rem; float: left;"></div>-->
		    <datetime v-model="signDate"  format="YYYY-MM-DD" :placeholder="selectTime" @on-change="changeDate" :title="hope"></datetime>
		</div>
		<!--留言-->
		<div class="content-message">
			<p>留言</p>
			<textarea v-model="remark" cols="30" rows="10" placeholder="备注信息"></textarea>
		</div>
	</div>
	<div style="height: 0.2rem; background: #EEEEEE;"></div>
	<div class="payBottom">
		<span>支付定金</span><span>（元）</span>
		<div style="clear: both;"></div>

		<div class="rentMoney">
            <div class="bottom">
              <div class="left"  @click="left">
              	<img src="../../../../static/rent/fyxq/icon/jianjian.png" alt="" />
              </div>
              <div class="right" @click="right">
              	<img src="../../../../static/rent/fyxq/icon/jiajia.png" alt="" />
              </div>
              <!-- <div class="middle">{{rentMoney}}</div> -->
              <input class="middle" @click.stop type="number" maxlength="7" v-model="amount">
            </div>
        </div>
	</div>
	<!--APP支付方式-->
	<div v-if="PagewechatMstationApp() === 3">
		<div class="payMode">
			<p>支付方式</p>
		    <div class="wechat-gaj" >
		    	<label>
		        	<div class="own-pay">
			        	<div class="pay-img">
					   		<img src="../../../../static/rent/fyxq/zhifubao.png"  />
					   	</div>
				        <div class="left">支付宝支付</div>
				        <input ref="ali" type="radio" name="pay" checked>
		        	</div>
		        </label>
		    </div>
		</div>
		<div class="payBtn-box">
			<button v-bind:class="[isBan ? 'isActive' : '', 'payBtn']" @click="wxSummitAPP" :disabled="isBan" >确认支付</button>
		</div>
	</div>

	<!--微信支付方式-->
	<div v-if="PagewechatMstationApp() === 1">
		<div class="payMode">
			<p>支付方式</p>
		    <div class="wechat-gaj" >
		    	<label>
			   		<div class="wechat-pay">
					   	<div class="pay-img">
						   	<img src="../../../../static/rent/fyxq/wx.png"  />
						</div>
					   	<div class="left">微信支付</div>
					    <input ref="wx" type="radio" checked name="pay">
			   		</div>
			   	</label>
		    </div>
		</div>
		<div class="payBtn-box">
			<button class="payBtn" @click="wxSummitWechat">确认支付</button>
		</div>
	</div>
	<!--m站支付方式-->
	<div v-if="PagewechatMstationApp() === 2">
		<div class="payMode">
			<p>支付方式</p>
		    <div class="wechat-gaj" >
		    	<label>
		        	<div class="own-pay">
			        	<div class="pay-img">
					   		<img src="../../../../static/rent/fyxq/zhifubao.png"  />
					   	</div>
				        <div class="left">支付宝支付</div>
				        <input ref="ali" type="radio" name="pay" checked>
		        	</div>
		        </label>
		        <div class="pay-line"></div>
			   	<!--<label v-if="false">
			   		<div class="wechat-pay">
					   	<div class="pay-img">
						   	<img src="../../../../static/rent/fyxq/wx.png"  />
						</div>
					    <div class="left">微信支付</div>
					    <input ref="wx" type="radio" name="pay">
			   		</div>
			   	</label>-->
		    </div>
		</div>
		<div class="payBtn-box">
			<button class="payBtn" @click="wxSummitMstation">确认支付</button>
		</div>
	</div>

</div>
</template>
<script>
import gaSwitch from "../../components/switch/switch.vue";

export default {
  data() {
    return {
      isMan: true,
      ownerSex: "",
      switchLeft: {
        left: "0.02rem"
      },
      switchRight: {
        right: "0.02rem"
      },
      renterPhone: "",
      renterName: "",
      renterSex: "", //男女的值
      roomId: "",
      houseId: "",
      userId: "",
      buildFloor: "",
      houseArea: "",
      houseName: "",
      roomName: "",
      rent: "",
      houseStatus: "",
      versionId: "",
      productId: "",
      payWay: "",
      signDate: "",
      hope: "&nbsp;时间",
      selectTime: "选择入住时间",
      remark: "", //留言
      amount: 500, //租金
      showPositionValue: false,
      successTitle: "预定成功",
      show4: false,
      show5: false,
      depositName: "", //传入定金支付的房间名
      name: "", //传入房源列表的code
      isWechat: true,
      receiptWayCode: "", //收款渠道,APP
      sourceCode: "", //客户来源,APP
      urlId: 8884,
      ischeck: true,
      tradeNo: "", //订单号
      androidOrIos: true, //默认为安卓登录
      isBan: false,
      roomNumber: this.$route.query.roomNumber,
      shareName: this.$route.query.shareName,
      buildNo: "",
      buildUnitNo: "",
      advantageTags: "",
      houseBuildNo: "" //房间楼层
    };
  },
  created() {
    //this.userId = this.getStorage(this.KEYS.USER_INFO).id
    this.roomId = this.$route.query.roomId;
    this.houseId = this.$route.query.houseId;
    this.depositImg = this.$route.query.depositImg;
    this.getAppointDetail();
    this.isWechat = this.isECTouch(); //判断是否是微信浏览器
    this.isIosAndroid();
    //console.log(this.PagewechatMstationApp());
  },
  methods: {
    switchman() {
      this.isMan = true;
      this.renterSex = 1;
    },
    switchwoman() {
      this.isMan = false;
      this.renterSex = 0;
    },
    PagewechatMstationApp() {
      var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        //在微信中打开
        return 1;
        console.log("微信端");
      } else if (
        !window.location.host.indexOf("m.zufang.guoanfamily.com") === -1
      ) {
        //在m站中打开
        return 2;
        console.log("m站");
      } else {
        //在APP中打开
        return 3;
      }
    },
    isIosAndroid() {
      //判断用户的来源和收款渠道
      var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        //微信
        this.receiptWayCode = "0058005";
        this.sourceCode = "0020004";
        //console.log("微信");
      } else if (
        !window.location.host.indexOf("m.zufang.guoanfamily.com") === -1
      ) {
        //在m站中打开
        this.receiptWayCode = "0058004";
        this.sourceCode = "0020008";
        //console.log("m站");
      } else if (this.CheckAndroiIos()) {
        //安卓APP
        this.receiptWayCode = "0058007";
        this.sourceCode = "0020015";
        //console.log("安卓APP");
      } else {
        //IOS APP
        this.receiptWayCode = "0058008";
        this.sourceCode = "0020016";
        //console.log("ios APP");
      }
    },
    CheckAndroiIos() {
      //安卓返回true,ios返回false
      let u = navigator.userAgent;
      let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
      let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if (isAndroid === true && isiOS === false) {
        return true;
      }
      if (isAndroid === false && isiOS === true) {
        return false;
      }
    },
    getAppointDetail() {
      //获取下定详情
      this.post("RentContractController/makeDepositInfo", {
        houseId: this.houseId,
        roomId: this.roomId
      }).then(res => {
        //console.log(res.data);
        this.houseName = res.data.houseName;
        this.versionId = res.data.versionId;
        this.houseStatus = res.data.houseStatus;
        this.productId = res.data.productId;
        this.houseArea = res.data.houseArea;
        this.rent = res.data.rent;
        this.buildFloor = res.data.buildFloor;
        this.roomName = res.data.roomName;
        //this.amount=res.data.amount;
        this.remark = res.dataremark;
        this.signDate = res.data.signDate;
        this.renterPhone = res.data.renterPhone;
        this.renterName = res.data.renterName;
        this.renterSex = res.data.renterSex;
        this.buildNo = res.data.buildNo;
        this.buildUnitNo = res.data.buildUnitNo;
        this.houseBuildNo = res.data.buildFloor; //房间楼层
        this.advantageTags = res.data.advantageTags.split(",", 2);
        if (this.renterSex == 0) {
          this.isMan = false;
        } else if (this.renterSex == 1) {
          this.isMan = true;
        }
        this.isRoomOrHouse(); //判断是整租还是合租

        this.ischeck = this.isECTouch();
      });
    },
    isRoomOrHouse() {
      //判断是合租还是整租
      if (this.$route.query.productType == "0019001") {
        this.depositName = this.houseName + this.roomName;
        this.name = "0019001";
      } else if (this.$route.query.productType == "0019002") {
        this.depositName = this.houseName;
        this.name = "0019002";
      } else if (this.$route.query.productType == "0019003") {
        if (this.houseName == "东大桥店") {
          this.depositName = this.shareName;
        } else {
          this.depositName = this.houseName + this.roomName + this.roomNumber;
        }
        this.name = "0019003";
      }
    },
    switchToggle() {
      //switch转换事件
      this.isMan = !this.isMan;
      if (this.isMan == true) {
        this.renterSex = 1;
      } else {
        this.renterSex = 0;
      }
    },
    //APP确认支付按钮
    wxSummitAPP() {
      if (this.amount < 500) {
        this.$vux.confirm.show({
          content: "不能低于500哦~",
          onCancel() {
            //取消执行
          },
          onConfirm() {
            //确定执行
          }
        });
        return false;
      } else {
        if (this.$refs.ali.checked) {
          //选中支付宝

          this.depositPayOrderAli(); //支付宝支付接口
        }
      }
    },
    //下定生成订单号，调用APP cordova支付宝支付
    depositPayOrderAli() {
      this.post("PayController/depositPayOrder", {
        houseId: this.houseId,
        roomId: this.roomId,
        //"userId":this.userId,
        amount: this.amount,
        signDate: this.signDate,
        remark: this.remark,
        productId: this.productId,
        versionId: this.versionId,
        renterSex: this.renterSex,
        renterName: this.renterName,
        receiptSubjectCode: "0057001", //收款主体
        receiptWayCode: this.receiptWayCode, //收款渠道-安卓aPP、iosAPP
        sourceCode: this.sourceCode, //客户来源-APP
        payWay: "0053004" //支付方式-支付宝
      }).then(res => {
        var that = this;
        //按钮禁止点击
        this.isBan = true;
        //console.log("按钮禁止点击");
        if (res.code == 10039) {
          //按钮回复点击
          this.isBan = false;
          this.$vux.confirm.show({
            content: "该房源已被预订",
            onCancel() {
              //取消执行
            },
            onConfirm() {
              //确定执行
              that.$router.push({
                path: "/HouseList",
                query: { name: that.productType }
              });
            }
          });
          return false;
        } else if (res.code == 0) {
          this.tradeNo = res.data.depositId;
          this.amount = res.data.amount;
          this.userId = res.data.userId;
          var self = this;
          //核对订单号与金额接口

          this.post("PayController/checkOrder", {
            orderType: "0",
            urlId: "8900",
            userId: res.data.userId,
            outTradeNo: res.data.depositId,
            subject: self.depositName,
            totalAmount: res.data.amount
          }).then(response => {
            if (response.code === 0) {
              //按钮可以点击
              self.isBan = false;
              //订单号校验成功,执行cordova支付宝支付接口
              let payInfo = response.data.data;
              let platform = localStorage.getItem("platform");

              if (
                platform == null ||
                platform == "null" ||
                platform == undefined
              ) {
                this.wxSummitMstation();
              } else {
                let cordovapay;
                if (cordova.plugins.alipay) {
                  cordovapay = cordova.plugins.alipay.payment;
                } else {
                  cordovapay = window.Alipay.pay;
                }
                cordovapay(
                  payInfo,
                  function success(e) {
                    //按钮可以点击
                    if (e.resultStatus == "9000") {
                      //按钮可以点击
                      self.msgalert("支付成功");
                      self.isBan = false;
                      self.$router.push({
                        path: "/MyContract/DepositContract",
                        query: { id: self.tradeNo }
                      });
                    } else if (e.resultStatus == "8000") {
                      //按钮可以点击
                      self.isBan = false;
                      self.msgalert("处理中");
                    } else if (e.resultStatus == "4000") {
                      //按钮可以点击
                      self.isBan = false;
                      self.msgalert("订单支付失败");
                    } else if (e.resultStatus == "6001") {
                      //按钮可以点击
                      self.isBan = false;
                      self.msgalert("用户中途取消");
                    } else if (e.resultStatus == "6002") {
                      //按钮可以点击
                      self.isBan = false;
                      self.msgalert("网络连接出错");
                    }
                  },
                  function error(e) {
                    //按钮可以点击
                    self.isBan = false;
                    self.msgalert("失败");
                  }
                );
              }
            }
          });
        }
      });
    },
    msgalert(msg) {
      this.$vux.toast.show({
        text: msg,
        type: "text"
      });
    },
    //微信端确认支付按钮
    wxSummitWechat() {
      if (this.amount < 500) {
        this.$vux.confirm.show({
          content: "不能低于500哦~",
          onCancel() {
            //取消执行
          },
          onConfirm() {
            //确定执行
          }
        });
        return false;
      } else {
        if (this.$refs.wx.checked) {
          //选中微信端的微信支付方式
          this.depositPayOrderWechat();
        }
      }
    },
    //下定生成订单号，调用微信端 微信支付
    depositPayOrderWechat() {
      var selfwx = this;
      this.post("PayController/depositPayOrder", {
        houseId: this.houseId,
        roomId: this.roomId,
        //"userId":this.userId,
        amount: this.amount,
        signDate: this.signDate,
        remark: this.remark,
        productId: this.productId,
        versionId: this.versionId,
        renterSex: this.renterSex,
        renterName: this.renterName,
        receiptSubjectCode: "0057001", //收款主体
        receiptWayCode: this.receiptWayCode, //收款渠道
        sourceCode: this.sourceCode, //客户来源-APP
        payWay: "0053003" //支付方式-微信
      }).then(res => {
        if (res.code == 10039) {
          this.$vux.confirm.show({
            content: "该房源已被预订",
            onCancel() {
              //取消执行
            },
            onConfirm() {
              //确定执行
              that.$router.push({
                path: "/HouseList",
                query: { name: this.productType }
              });
            }
          });
          return false;
        } else if (res.code == 0) {
          let openId = this.getStorage(this.KEYS.OPENID);
          //正式
          window.location.href =
            "https://www.guoanfamily.com/commonPlatform/pay/wxpay.html?tradeNo=" +
            res.data.depositId +
            "&payMoney=" +
            res.data.amount +
            "&userID=" +
            res.data.userId +
            "&nameGoods=" +
            selfwx.depositName +
            "&urlId=8884&openid=" +
            openId;
        }
      });
    },
    //m站确认支付点击方法
    wxSummitMstation() {
      if (this.amount < 500) {
        this.$vux.confirm.show({
          content: "不能低于500哦~",
          onCancel() {
            //取消执行
          },
          onConfirm() {
            //确定执行
          }
        });
        return false;
      } else {
        if (this.$refs.ali.checked) {
          //选中m站支付宝支付
          this.depositPayOrderAliMstation();
        }
      }
    },
    //下定生成订单号,调用m站支付宝支付
    depositPayOrderAliMstation() {
      var self = this;
      this.post("PayController/depositPayOrder", {
        houseId: this.houseId,
        roomId: this.roomId,
        //"userId":this.userId,
        amount: this.amount,
        signDate: this.signDate,
        remark: this.remark,
        productId: this.productId,
        versionId: this.versionId,
        renterSex: this.renterSex,
        renterName: this.renterName,
        receiptSubjectCode: "0057001", //收款主体
        receiptWayCode: this.receiptWayCode, //收款渠道
        sourceCode: this.sourceCode, //客户来源-APP
        payWay: "0053004" //支付方式-支付宝
      }).then(res => {
        if (res.code == 10039) {
          this.$vux.confirm.show({
            content: "该房源已被预订",
            onCancel() {
              //取消执行
            },
            onConfirm() {
              //确定执行
              that.$router.push({
                path: "/HouseList",
                query: { name: this.productType }
              });
            }
          });
          return false;
        } else if (res.code == 0) {
          window.location.href =
            "http://act.guoanfamily.com/common/AlipayController/toPay/8900?tradeNo=" +
            res.data.depositId +
            "&payMoney=" +
            res.data.amount +
            "&nameGoods=" +
            self.depositName +
            "&userId=" +
            res.data.userId;
        }
      });
    },
    //下定生成订单号，调用m站 微信支付
    depositPayOrderWechatMstation() {
      var selfwx = this;
      this.post("PayController/depositPayOrder", {
        houseId: this.houseId,
        roomId: this.roomId,
        //"userId":this.userId,
        amount: this.amount,
        signDate: this.signDate,
        remark: this.remark,
        productId: this.productId,
        versionId: this.versionId,
        renterSex: this.renterSex,
        renterName: this.renterName,
        receiptSubjectCode: "0057001", //收款主体
        receiptWayCode: this.receiptWayCode, //收款渠道
        sourceCode: this.sourceCode, //客户来源-APP
        payWay: "0053003" //支付方式-微信
      }).then(res => {
        if (res.code == 10039) {
          this.$vux.confirm.show({
            content: "该房源已被预订",
            onCancel() {
              //取消执行
            },
            onConfirm() {
              //确定执行
              that.$router.push({
                path: "/HouseList",
                query: { name: this.productType }
              });
            }
          });
          return false;
        } else if (res.code == 0) {
          var ip = returnCitySN["cip"]; //获取ip地址，勿动
          var url =
            "https://www.guoanfamily.com/commonPlatform/pay/mwxpay.html"; //支付路径，固定
          var urlId = 8900; //urlId为以后通知的id 定金 8884 租金8885
          var notifyURL =
            "https://www.guoanfamily.com/common/wxPay/wxOrderNotify/" + urlId; //通知地址，勿动
          var nameGoods = selfwx.depositName; //商品名称
          var tradeNo = res.data.depositId; //订单号
          var userId = res.data.userId; //用户id
          var payMoney = res.data.amount; //支付金额
          var redirectUrl = encodeURIComponent(
            "https://www.guoanfamily.com/commonPlatform/pay/returnWap.html?id=" +
              tradeNo +
              "&urlId=" +
              urlId
          );
          window.location.href =
            url +
            "?userId=" +
            userId +
            "&body=" +
            encodeURIComponent(nameGoods) +
            "&notifyURL=" +
            encodeURIComponent(notifyURL) +
            "&outTradeNo=" +
            tradeNo +
            "&totalFee=" +
            payMoney * 100 +
            "&spbillCreateIp=" +
            ip +
            "&tradeType=MWEB&sceneInfo=" +
            encodeURIComponent(
              JSON.stringify({
                h5_info: {
                  type: "Wap",
                  wap_url: "https://www.guoanfamily.com",
                  wap_name: "国安家租房"
                }
              })
            ) +
            "&redirectUrl=" +
            redirectUrl;
        }
      });
    },
    left() {
      if (this.amount <= 500) {
        this.amount = 500;
      } else {
        this.amount = this.amount - 100;
      }
    },
    right() {
      this.amount = Number(this.amount) + 100;
    },
    changeDate(value) {
      //console.log('change', value)
    }
  },
  components: {
    gaSwitch
  }
};
</script>
