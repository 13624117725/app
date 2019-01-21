<template>
<div style="width: 100%;height: 100%;overflow-y: scroll;">
	

  <div class="bj luckdraw" :class="{phoneBj:phoneTop}">
  		
  		<!--中奖号码滚动-->
  		<div class="PrizePhoneNumber">
					  	<marquee behavior="scroll" direction="left">
					  		恭喜135****7385用户抽中多肉盆栽！
								恭喜137****8054用户抽中黑色书包！
								恭喜159****9122用户抽中精致水杯！
								恭喜134****5436用户抽中多肉盆栽！
								恭喜134****4728用户抽中北海养老公寓代金券！
								恭喜132****7111用户抽中精致水杯！
								恭喜136****1599用户抽中精品毛巾！
								恭喜138****5488用户抽中北海养老公寓代金券！
								恭喜134****5352用户抽中北海养老公寓代金券！
								恭喜188****7419用户抽中多肉盆栽！
								恭喜138****8723用户抽中精品毛巾！
								恭喜133****5768用户抽中精品毛巾！
								恭喜153****2623用户抽中精品毛巾！
								恭喜135****6339用户抽中黑色书包！
								恭喜187****5927用户抽中精致水杯！
								恭喜132****8657用户抽中精品毛巾！
								恭喜134****3574用户抽中精致水杯！
								恭喜138****7697用户抽中黑色书包！
								恭喜131****6701用户抽中精致水杯！
								恭喜155****3482用户抽中精致水杯！
								恭喜132****3544用户抽中精品毛巾！
								恭喜136****7267用户抽中精品毛巾！
								恭喜156****6908用户抽中黑色书包！
								恭喜137****7348用户抽中多肉盆栽！
								恭喜134****6919用户抽中精品毛巾！
								恭喜189****3970用户抽中精品毛巾！
								恭喜133****5024用户抽中精致水杯！
								恭喜135****4050用户抽中精致水杯！
								恭喜177****4059用户抽中精品毛巾！
								恭喜132****2627用户抽中精品毛巾！
								恭喜131****8481用户抽中多肉盆栽！
								恭喜173****1071用户抽中多肉盆栽！
								恭喜135****1476用户抽中精品毛巾！
								恭喜137****8210用户抽中黑色书包！
								恭喜156****1637用户抽中北海养老公寓代金券！
								恭喜137****5687用户抽中多肉盆栽！
								恭喜189****1643用户抽中精致水杯！
								恭喜137****6486用户抽中多肉盆栽！
								恭喜173****3030用户抽中黑色书包！
								恭喜135****2415用户抽中多肉盆栽！
								恭喜131****6744用户抽中精品毛巾！
								恭喜134****5542用户抽中精品毛巾！
								恭喜153****2975用户抽中精品毛巾！
								恭喜136****8958用户抽中黑色书包！
								恭喜173****5003用户抽中精品毛巾！
								恭喜131****9318用户抽中精品毛巾！
								恭喜137****5161用户抽中精致水杯！
								恭喜177****6889用户抽中北海养老公寓代金券！
								恭喜138****1200用户抽中精品毛巾！
								恭喜131****9523用户抽中精致水杯！
					  	</marquee>		
  		</div>
      <div class="topbj">
        <div class="outerplyer">
          <img src="https://img.guoanfamily.com/rent/static/HomePage/yinying.png" class="yinying" alt="" />
          <img class = 'middle' :class="{'middle1':one,'middle2':two,'middle3':three,'middle4': four,'middle5':five,'middle6':six,'middle7':zero}"  src="https://img.guoanfamily.com/rent/static/HomePag/zhuanpan.png" alt="">
          
         
          <img class = "pointer" src="https://img.guoanfamily.com/rent/static/HomePage/zhuanpanzhizhen.png" alt="" @click="pointerClick">
        </div>
      </div>
      <div class="close"  :class="{phoneClose:phoneTop}" v-transfer-dom v-show="market" @click="closeClick"></div>
      <div class="market" v-transfer-dom  v-show="market"  @click="marketClick"></div>
      <div class="market" v-transfer-dom  v-show="market1"></div>
      
      	
      <!--中奖弹窗-->	
      <div class="result-zsf" v-transfer-dom @touchmove.prevent v-show="alertPrize">
      	<div class="close"  :class="{phoneClose:phoneTop}" @click="closeClick"></div>
      	<div class="result-zsf-tanchuang">
      		<!--奖品名称-->
      		<div class="result-one" :class="{resultWX:this.$store.state.showWxTitle}">
	      		<img v-show="one" src="https://img.guoanfamily.com/rent/static/HomePage/lvyou.png" class="jiangpin-one" alt="" />      		
	      		<img v-show="two" src="https://img.guoanfamily.com/rent/static/HomePage/gongyu.png" class="jiangpin-one" alt="" />
	      		<img v-show="three" src="https://img.guoanfamily.com/rent/static/HomePage/shuibei.png" class="jiangpin-one" alt="" />
	      		<img v-show="four" style="margin-top: 0.2rem;" src="https://img.guoanfamily.com/rent/static/HomePage/baojin.png" class="jiangpin-one" alt="" />
	      		<img v-show="five" src="https://img.guoanfamily.com/rent/static/HomePage/beibao.png" class="jiangpin-one" alt="" />
	      		<img v-show="six" src="https://img.guoanfamily.com/rent/static/HomePage/duorou.png" class="jiangpin-one" alt="" />
	      		<img v-show="zero" src="https://img.guoanfamily.com/rent/static/HomePage/canyu.png" class="jiangpin-one" alt="" />
	      	</div>
	      	<!--中奖确认领取-->
	      	<div class="onemoretime" v-if="!zero">
	      		<!--确认领取-->
	      		<div style="margin-top: 0.3rem;">
	      			<img style="width: 68%;margin:0.1rem auto 0;" @click="getPrizeFunc" src="https://img.guoanfamily.com/rent/static/HomePage/lingqu.png"/>
	      		</div>
	      	</div>
	      	<!--未中奖再来一次-->
	      	<div class="weizhongjiang" v-else @click="onceMoreClick">
	      		<img style="width: 40%;position: relative;left: 0.2rem; margin:1.8rem auto 0;" src="https://img.guoanfamily.com/rent/static/HomePage/clickagain.png" alt="" />
	      	</div>
      	</div>
      	
      	
      	
      	
      </div>
      <!--领取成功提示弹窗-->
      <!--showReceiveSu-->
      <div class="receiveSuccess" v-show="showReceiveSu" v-transfer-dom @touchmove.prevent>
      	<div class="close"  :class="{phoneClose:phoneTop}" @click="exitClick"></div>
      	<div class="receiveSuccess-inner">
      		<div style="width:100%;height:100%;position:relative">
	          
	          <div class="grant">{{grant}}</div>
	          <x-button class="grantBtn" type='primary' @click.native="exitClick">确认</x-button>
	        </div>
      	</div>
      </div>
      
      <div class="market" v-show="shareBtnC" v-transfer-dom>
        <div class="sharbj" >
          <x-button class="sharbtn" type='primary' @click.native="exitShareClick"></x-button>
        </div>
      </div>
       <!-- 领取和再来一次的按钮 -->
      <div class="buttonDiv" v-transfer-dom v-show="market">
        <div>
          
          <x-button class="onceMore" type='primary' v-if="btnstate == '6'" @click.native="onceMoreClick">再来一次</x-button>
          <div class="onceMoreMethod"> 
            分享朋友圈多获得一次抽奖机会
          </div>
          <x-button class="onceMore" type='primary' v-if="btnstate !== '6'" @click.native="confirmclaimClick" >确认领取</x-button>
          <x-button class="onceMore1" type='primary'  @click.native.stop="AskApp" >下载APP</x-button>
          <div class="erweimaInfo">
            扫码一键关注
          </div>
          <div class="erweima">
            <!--<img src="../../../assets/luck/erweima.jpg" alt="">-->
          </div>
        </div>
      </div>
      <!-- app端分享时候的底部弹出框 -->
      <div class="shareAlert" :class="{'shareAlert1':shareAlert}" v-transfer-dom>
          <div style="width:100%;height:100%;positon:releative;">
              <div class="shareIcon">
                    <div class="weixin" @click="weixinhaoyoufenxiangClick">
                      <span>微信</span>
                  </div>
                  <div class="pengyou" @click="weixinFriendsClick">
                      <span>朋友圈</span>
                  </div>
              </div>
              <div class="exitShare" @click="exitShareClick1">取消</div>
          </div>
      </div>
  </div>
</div>
</template>

<script>
import { TransferDom } from "vux";
import { clearTimeout } from 'timers';
export default {
  directives: {
    TransferDom
  },
  data() {
    return {
      drawClicked: false, //抽奖中
      historyId: "", //奖项id
      phoneTop: false, //手机端
      prizeId: "",
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      zero:false,
      // 遮罩层控制
      market: false,
      market1: false,
      // 中奖与否弹窗提示控制
      num1: false,
      num2: false,
      num3: false,
      num4: false,
      num5: false,
      num6: false,
      num7:false,
      btnstate: "",
      // 中奖名额控制
      results: "恭喜您，中奖了！",
      setTime: "",
      secondOut: "发送验证码",
      // 电话，验证码
      phoneNumber: "",
      vistionCode: "",
      disable001: false,
      VeritionCode: false,
      times: 60,
      isLogin: false,
      showReceiveSu: false,
      grant: "",
      shareBtnC: false,
      shareAlert: false,
      alertPrize:false,
      userId:""
    };
  },
  methods: {
    // 延时器
    delayTime() {
      this.setTime = setTimeout(() => {
//      this[num] = true;
//      this[market] = true;
				this.drawClicked = false;
				this.alertPrize = true;
      }, 3500);
    },
    // 抽奖的点击事件
    pointerClick() {
   		//防止多次点击
	    if (this.drawClicked) {
	      return false;
	    }
      this.drawClicked = true;
      this.get("user/integral/getPrize", { interfaceType: "luckdraw" }).then(
        response => {
          if (response.code == 200) {
          	this.drawClicked = false;
            if (response.data.lotterCount == 0 && response.data.isShare == 0) {
              this.msgalert("您今天的抽奖次数已用完");
              return false;
            } else if (
              response.data.lotterCount == 0 &&
              response.data.isShare == 1
            ) {
              this.msgalert("您今天的抽奖次数已用完，请明天再来");
              return false;
            } else {
              this.prizeId = response.data.prize.id;
              if (response.data.prize.id == 1) {
                this.historyId = response.data.historyId;
                this.btnstate = response.data.prize.id;
                
                this.one = true;
                this.two = false;
                this.three = false;
                this.four = false;
                this.five = false;
                this.six = false;
                this.zero = false;
                this.results = "恭喜您，中奖了！";
                this.delayTime();
              } else if (response.data.prize.id == 2) {
                this.historyId = response.data.historyId;
                this.btnstate = response.data.prize.id;
                this.one = false;
                this.two = true;
                this.three = false;
                this.four = false;
                this.five = false;
                this.six = false;
                this.zero = false;
                this.results = "恭喜您，中奖了！";
                this.delayTime();
              } else if (response.data.prize.id == 3) {
                this.historyId = response.data.historyId;
                this.btnstate = response.data.prize.id;
                this.one = false;
                this.two = false;
                this.three = true;
                this.four = false;
                this.five = false;
                this.six = false;
                this.zero = false;
                this.results = "恭喜您，中奖了！";
                this.delayTime();
              } else if (response.data.prize.id == 4) {
                this.historyId = response.data.historyId;
                this.btnstate = response.data.prize.id;
                this.one = false;
                this.two = false;
                this.three = false;
                this.four = true;
                this.five = false;
                this.six = false;
                this.zero = false;
                this.results = "恭喜您，中奖了！";
                this.delayTime();
              } else if (response.data.prize.id == 5) {
                this.historyId = response.data.historyId;
                this.btnstate = response.data.prize.id;
                this.one = false;
                this.two = false;
                this.three = false;
                this.four = false;
                this.five = true;
                this.six = false;
                this.zero = false;
                this.results = "恭喜您，中奖了！";
                this.delayTime();
              } else if (response.data.prize.id == 6) {
                this.historyId = response.data.historyId;
                this.btnstate = response.data.prize.id;
                this.one = false;
                this.two = false;
                this.three = false;
                this.four = false;
                this.five = false;
                this.six = true;
                this.zero = false;
                this.results = "恭喜您，中奖了！";
                this.delayTime();
              }else if (response.data.prize.id == 0) {
                this.historyId = "";
                this.btnstate = response.data.prize.id;
                this.one = false;
                this.two = false;
                this.three = false;
                this.four = false;
                this.five = false;
                this.six = false;
                this.zero = true;
                this.results = "很遗憾，您没抽中！";
                this.delayTime();
              }
            }
          }else if(response == false){
          	//封装的get方法里当未登录时重置了response的值，直接返回了false
          	this.drawClicked = false;
          	//this.msgalert("请登录");
          }else{
          	this.drawClicked = false;
            this.one = false;
            this.two = false;
            this.three = false;
            this.four = false;
            this.five = false;
            this.six = false;
            this.zero = true;
            this.results = "很遗憾，您没抽中！";
            this.delayTime();
          }
        }
      )
    },
    // 再来一次的点击事件
    onceMoreClick() {
      this.market = false;
      this.num1 = false;
      this.num2 = false;
      this.num3 = false;
      this.num4 = false;
      this.num5 = false;
      this.num6 = false;
      this.num7 = false;
      this.zero = false;
      this.three = false;
      this.one = false;
      this.two = false;
      this.four = false;
      this.five = false;
      this.six = false;
      this.btnstate = "";
      this.alertPrize= false;
    },
    // 确定领取的点击事件
    confirmclaimClick() {
      let phone = localStorage.getItem("userPhone");
      if(this.notEmpty(phone)){
        // this.$store.state.loginShow = true;
         this.isLogin = true;
         this.market1 = true;
      }
      let phones = this.EnCryption("phone", phone);
      if (this.notEmpty(phone)) {
        this.isLogin = true;
        this.market1 = true;
        this.market = false;
        this.num1 = false;
        this.num2 = false;
        this.num3 = false;
        this.num4 = false;
        this.num5 = false;
        this.num6 = false;
        this.num7 = false;
      	this.zero = false;
        this.three = false;
        this.one = false;
        this.two = false;
        this.four = false;
        this.five = false;
        this.six = false;
        this.btnstate = "";
      } else {
        this.post( "user/integral/getLottery", { historyId: this.historyId },{ interfaceType: "luckdraw" }).then(res => {
          //领取成功弹窗
          this.showReceiveSu = true;
          //确认领取弹窗
          this.alertPrize = false;
          this.market1 = true;
          this.market = false;
          this.num1 = false;
          this.num2 = false;
          this.num3 = false;
          this.num4 = false;
          this.num5 = false;
          this.num6 = false;
          this.num7 = false;
      		this.zero = false;
          this.three = false;
          this.one = false;
          this.two = false;
          this.four = false;
          this.five = false;
          this.six = false;
          this.btnstate = "";
          this.grant = "您的奖品已发放至" + phones + "的账号请注意查收";
        });
      }
    },
    //下载App
    AskApp() {
      this.one = false;
      this.four = false;
      this.five = false;
      this.two = false;
      this.three = false;
      this.six = false;
      window.location.href =
        "http://a.app.qq.com/o/simple.jsp?pkgname=com.guoanfamily.guoanjiaApp&fromcase=40002";
    },
    // 关闭按钮的点击事件
    closeClick() {
      this.isLogin = false;
      this.market1 = false;
      this.market = false;
      this.num1 = false;
      this.num2 = false;
      this.num3 = false;
      this.num4 = false;
      this.num5 = false;
      this.num6 = false;
      this.num7 = false;
      this.zero = false;
      this.three = false;
      this.one = false;
      this.two = false;
      this.four = false;
      this.five = false;
      this.six = false;
      this.btnstate = "";
      this.alertPrize= false;
      
      this.phoneNumber = "";
      this.vistionCode = "";
    },
    // 领取成功后确认按钮的点击事件
    exitClick() {
      this.num1 = false;
      this.num2 = false;
      this.num3 = false;
      this.num4 = false;
      this.num5 = false;
      this.num6 = false;
      this.three = false;
      this.num7 = false;
      this.zero = false;
      this.one = false;
      this.two = false;
      this.four = false;
      this.five = false;
      this.six = false;
      this.btnstate = "";
      this.showReceiveSu = false;
      this.market1 = false;
      this.prizeId = Number(this.prizeId);

    },
    // 遮罩层的点击事件
    marketClick() {},
    // 查看规则的点击事件
    seeruleClick() {
      this.$router.push("drawrules");
    },
    // 发送验证码的点击事件
    secondOutClick() {
      // 电话号码正则验证
      if (!/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.phoneNumber)) {
        this.msgalert("电话号码有误");
        return false;
      }
      // this.setTime();
      let post_data = { phoneNum: this.phoneNumber };
      this.post("smsAuthCodeController/unionSMSAuthCOde", post_data, {
        interfaceType: "collect"
      }).then(
        response => {
          if (response.code == 200) {
            this.msgalert("信息发送成功,请注意查收");
            this.VeritionCode = true;
            this.setTimeing();
            this.secondOut = this.secondOut;
            this.disable001 = true;
          } else {
            this.showalert(response.msg);
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 验证码计时器
    setTimeing() {
      let me = this;
      let setTimeout = setInterval(function() {
        me.times--;
        me.secondOut = "(" + me.times + ")" + "重新获取";
        if (me.times === 0) {
          me.disable001 = false;
          me.secondOut = "获取验证码";
          me.times = 60;
          clearInterval(setTimeout);
        }
      }, 1000);
    },
    // 领取礼物点击事件
    getPrizeFunc(){
    	this.post(
	      "user/integral/getLottery",
	      { "historyId": this.historyId  
	     	},{ interfaceType: "luckdraw" }
	    ).then(res => {
	      if (res.code == 200) {
	        this.isLogin = false;
	        let userPhone = this.getStorage("userPhone");
	        this.grant="奖品已发送至您的"+userPhone.toString().substring(0,3)+"****"+userPhone.toString().substring(7) +"账户，请您到现场领取奖品";
	        //领取成功弹窗
	        this.showReceiveSu = true;
	        //中奖弹窗
	        this.alertPrize = false;
	      }else{
	      	this.msgalert(res.msg);
	      }
	    })
    },
    // 分享的图片的点击事件
    shareClick() {
      if(this.$store.state.showWxTitle){
        this.shareBtnC = true;
        this.wxShare();
      }else{
        this.shareAlert = true;
      }
      
    },
    // 我知道了的点击事件
    exitShareClick() {
      this.shareBtnC = false;
    },
    // app端取消分享
    exitShareClick1(){
      this.shareAlert = false;
    },
    // 微信端分享的方法
    wxShare() {
      // 分享给朋友
      let self = this;
      this.$wechat.onMenuShareAppMessage({
        title: "幸运大转盘", //标题
        desc: "新春好彩头，国安家送大礼！", //描述
        link: "https://www.guoanfamily.com/guoanjiaApp/#/luckdraw", //连接地址指打开分享时页面地址
        imgUrl:'https://img.guoanfamily.com/newYearActivity/shares.jpg',
        trigger: function(res) {
          // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
        },
        success: function(res) {
          self.shareFn();
        },
        cancel: function(res) {
          self.msgalert("已取消");
        },
        fail: function(res) {
          self.msgalert("分享失败");
        }
      });
      // 分享到朋友圈
      this.$wechat.onMenuShareTimeline({
        title: "新春好彩头，国安家送大礼！", //标题
        desc: "新春好彩头，国安家送大礼！", //描述
        link: "https://www.guoanfamily.com/guoanjiaApp/#/luckdraw", //连接地址指打开分享时页面地址
        imgUrl:'https://img.guoanfamily.com/newYearActivity/shares.jpg',
        trigger: function(res) {
          // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
        },
        success: function(res) {
          self.shareFn();
        },
        cancel: function(res) {
          self.msgalert("已取消");
        },
        fail: function(res) {
          self.msgalert("分享失败");
        }
      });
      this.$wechat.error(function(res) {});
    },
    // APP微信好友分享
    weixinhaoyoufenxiangClick() {
      this.AppwxShare();
    },
    // APP微信朋友圈分享
    weixinFriendsClick() {
      this.friendShare();
    },
     // 朋友圈
    friendShare() {
      let self =  this;
        Wechat.share(
          {
            message: {
              title: '新春好彩头，国安家送大礼！', //标题
              description: '新春好彩头，国安家送大礼！', //描述
              thumb: 'https://img.guoanfamily.com/newYearActivity/shares.jpg', //图片
              media: {
                type: Wechat.Type.WEBPAGE,
                webpageUrl: 'https://www.guoanfamily.com/guoanjiaApp/#/luckdraw' //连接地址指打开分享时页面地址
              }
            },
            scene: Wechat.Scene.TIMELINE // share to Timeline
          },
          function() {
            self.msgalert("已成功分享到朋友圈");
            self.shareFn();
          },
          function(reason) {
            // alert("Failed: " + reason);
            // this.msgalert('已取消分享');
          }
        );
    },
    // 好友
    AppwxShare() {
      let self =  this;
        Wechat.share(
          {
            message: {
              title: '幸运大转盘', //标题
              description: '新春好彩头，国安家送大礼！', //描述
              thumb: 'https://img.guoanfamily.com/newYearActivity/shares.jpg', //图片
              media: {
                type: Wechat.Type.WEBPAGE,
                webpageUrl: 'https://www.guoanfamily.com/guoanjiaApp/#/luckdraw' //连接地址指打开分享时页面地址
              }
            },
            scene: Wechat.Scene.SESSION // share to Timeline
          },
          function() {
            self.msgalert("已成功分享给朋友");
            self.shareFn();
          },
          function(reason) {
            // alert("Failed: " + reason);
            // this.msgalert('已取消分享');
          }
        );
    },
    // 分享成功后的方法
    shareFn() {
      this.get("userShare/share",{interfaceType: "collect"}).then(
        response => {
          if (response.code == 200) {
            // alert('124');
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 弹窗提示
    showalert(msg) {
      // 显示
      this.$vux.alert.show({
        title: "提示信息",
        content: msg,
        width: "4em"
      });
    },
    msgalert(msg) {
      this.$vux.toast.show({
        text: msg,
        type: "text",
        width: "4em"
      });
    }
  },

  created() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/micromessenger/i) == "micromessenger") {
      this.phoneTop = true;
    }
  },
  mounted() {
    this.$vux.loading.hide();
    // let myData = new Date();
    // let newYear =  myData.getFullYear();//年
    // let newMonth = myData.getMonth() + 1;//月
    // let newDate = myData.getDate();//日
    // let newHouse = myData.getHours();//时
    // let newMinutes = myData.getMinutes();//分
    // let newSeconds =  myData.getSeconds(); //秒
    // // console.log(newYear,'',newMonth,'',newDate,'',newHouse,'',newMinutes,newSeconds);
    // //  + newHouse + ':' + newMinutes + ':' + newSeconds;
    // // 获取当前系统事件，转货为时间戳，判断活动是否开始
    // let SpecificDate = newYear + '-' + newMonth + '-' + newDate;
    // // 获取指定日期的时间戳儿
    // let date = new Date('2018-02-14 00:00:00');
    // let time1 = date.getTime();
    // // console.log('开始时间',time1);
    // let date2 =  new Date(SpecificDate);
    // let time2 = date2.getTime(SpecificDate);
    // // console.log('当前时间',time2);
    // let date3 = new Date('2018-02-28 00:00:00');
    // let time3 = date3.getTime()
    // // console.log('结束时间',time3);
    // if(time2 < time1){
    //   this.msgalert('活动还没有开始');
    //   this.drawClicked =  true;
    // }else if((time2 > time1) && (time2 < time3)){
    //   this.drawClicked = false;
    // }else if(time2 > time3){
    //   this.drawClicked = true;
    //   this.msgalert('活动已结束');
    // }
  }
};
</script>

<style lang="less" scoped>
// 微信分享样式
.shareAlert {
  width: 100%;
  height: 0rem;
  position: fixed;
  transition: 0.9s;
  bottom: 0;
  background: #fff;
  z-index: 300;
  .shareIcon {
    width: 100%;
    height: 1.5rem;
    //    background:yellow;
    div {
      float: left;
      width: 1.5rem;
      height: 1.5rem;
      background: red;
      margin-left: 0.3rem;
      position: relative;
    }
    div:nth-child(1) {
      background: url('https://img.guoanfamily.com/newYearActivity/Wx.png') no-repeat;
      background-size: 60%;
      background-position: 50% 26%;
      span {
        display: block;
        width: 100%;
        font-size: 0.3rem;
        position: absolute;
        bottom: 0;
      }
    }
    div:nth-child(2) {
      background: url('https://img.guoanfamily.com/newYearActivity/friends.png') no-repeat;
      background-size: 60%;
      background-position: 50% 26%;
      span {
        display: block;
        width: 100%;
        font-size: 0.3rem;
        position: absolute;
        bottom: 0;
      }
    }
  }
  .exitShare {
    padding-top: 5px;
    font-size: 0.4rem;
    border-top: 1px solid #e6e6e6;
    margin-top: 0.6rem;
    bottom: 0;
    text-align: center;
    width: 100%;
  }
}
.shareAlert1 {
  transition: 0.9s;
  height: 25%;
}
.market {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.7);
}
.bj {
  margin-top: 1.2rem;
 	height: 19.4rem;
 	background: url('https://img.guoanfamily.com/rent/static/HomePage/zhuanpanbj.png') no-repeat center;
 	background-size:100%;
 	position: relative;
  overflow: hidden;
  &.phoneBj {
    margin-top: 0;
  }
  .buttons {
    position: absolute;
    z-index: 1;
    font-size: 16px;
    right: 20px;
    top: 15px;
    width: 25%;
    height: 32px;
    line-height: 32px;
    color: #e9af45;
    font-weight: 400;
    text-shadow: 2px 2px 0.5px #222;
  }
  width: 100%;
  
  .PrizePhoneNumber{
  	width: 79%;
    height: 1rem;
    margin: 3.3rem auto 0;
    font-size: 0.28rem;
    line-height: 1rem;
    color: yellow;
    box-sizing: border-box;
    padding-left: 0.6rem;
    position: relative;
  }
  
  .topbj {
    width: 90%;
    height: 7rem;
    margin: 0.2rem auto 0;
    .outerplyer {
      width: 100%;
      height: 100%;
      background-size: 100%;
      position: relative;
      overflow:hidden;
      .big {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
      }
      .middle {
      	 width: 90%;
        z-index: 2;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        transform-origin: 50% 50%;
        transform: rotate(-25deg);
      }
      .middle1 {
        animation: rotate 3s both ease;
      }
      .middle2 {
        animation: rotate2 3s both ease;
      }
      .middle3 {
        animation: rotate3 3s both ease;
      }
      .middle4 {
        animation: rotate4 3s both ease;
      }
      .middle5 {
        animation: rotate5 3s both ease;
      }
      .middle6 {
        animation: rotate6 3s both ease;
      }
      .middle7 {
        animation: rotate7 3s both ease;
      }
      .yinying{
      	width: 100%;
      	position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
      }
      .pointer {
        position: absolute;
        width: 33%;
        z-index: 2;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        z-index: 3;
      }
    }
  }
  .share {
    position: absolute;
    z-index: 3;
    width: 60%;
    top: 9rem;
    left: 20%;
  }
  .explain {
    width: 100%;

    height: 589px;
    /*background: url("../../../assets/luck/explain1.png") no-repeat top;*/

    background-size: 90%;
    position: absolute;
    top: 12rem;
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    z-index: 4;
  }
  .close {
    width: 0.6rem;
    height: 0.6rem;
    position: fixed;
    right: 0.2rem;
    top: 0.9rem;
    background: url("https://img.guoanfamily.com/newYearActivity/close.png") no-repeat center;
    background-size: 100%;
    z-index: 16;
    &.phoneClose {
      top: 20px;
    }
  }
  .resultStyle {
    width: 80%;
    height: 40%;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 32%;
    z-index: 12;
    margin: auto;
    &.phoneresultStyle {
      bottom: 50%;
    }
    .award {
      width: 100%;
      height: 1rem;
      font-size: 30px;
      font-weight: bold;
      color: #f6bb41;
      text-align: center;
    }
  }

  
  .receive {
    width: 90%;
    height: 360px;
    background: url("https://img.guoanfamily.com/newYearActivity/receive.png") no-repeat center;
    background-size: 100% 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    z-index: 14;
    .lineClose {
      width: 0.7rem;
      height: 100px;
      background: url("https://img.guoanfamily.com/newYearActivity/close1.png") no-repeat center;
      background-size: 100%;
      position: absolute;
      right: 0;
      top: -90px;
    }
    .msg {
      width: 100%;
      height: 20px;
      color: red;
      line-height: 20px;
    }
    .prompt {
      width: 100%;
      height: 60px;
      float: left;
      line-height: 30px;
      text-align: left;
      margin-left: 7%;
      margin-top: 20px;
      margin-right: 7%;
      color: #333333;
      font-size: 14px;
      .msgTxt {
        width: 88%;
        height: 30px;
        text-align: center;
      }
    }
    .subLogin {
      width: 40%;
      border-radius: 5px;
      position: absolute;
      left: 30%;
      bottom: 40px;
      background: url("https://img.guoanfamily.com/newYearActivity/btn.png") no-repeat center;
      background-size: cover;
    }
  }
  .veritionCode {
    background: #ccc;
    border-radius: 0.25rem;
  }
 
}
.buttonDiv {
    width: 100%;
    height: 6rem;
    position: fixed;
    left: 0;
    bottom: 0%;
    z-index: 13;
    div {
      width: 100%;
      height: 100%;
      position: relative;
      .onceMoreMethod {
        position: absolute;
        top: 0.79rem;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 12px;
        color: #f3af0d;
      }
      .onceMore {
        width: 50%;
        text-align: center;
        position: absolute;
        left: 25%;
        top: 10px;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        background: url("https://img.guoanfamily.com/newYearActivity/btn.png") no-repeat 100% center;
        margin: 0 !important;
      }
      .onceMore1 {
        width: 50%;
        text-align: center;
        position: absolute;
        left: 25%;
        top: 70px;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
        background: url("https://img.guoanfamily.com/newYearActivity/btn.png") no-repeat 100% center;
        margin: 0 !important;
      }
      .erweimaInfo {
        position: absolute;
        top: 2.2rem;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 14px;
        color: #f3af0d;
      }
      .erweima {
        width: 40%;
        position: absolute;
        left: 30%;
        top: 2.8rem;
        img {
          width: 100%;
        }
      }
    }
  }
@keyframes rotate {
  from {
    transform: rotate(-25deg);
  }
  to {
    transform: rotate(2495deg);
  }
}
@keyframes rotate2 {
  from {
    transform: rotate(-25deg);
  }
  to {
    transform: rotate(2440deg);
  }
}
@keyframes rotate3 {
  from {
    transform: rotate(-25deg);
  }
  to {
    transform: rotate(2390deg);
  }
}
@keyframes rotate4 {
  from {
    transform: rotate(-25deg);
  }
  to {
    transform: rotate(2700deg);
  }
}
@keyframes rotate5 {
  from {
    transform: rotate(-25deg);
  }
  to {
    transform: rotate(2550deg);
  }
}
@keyframes rotate6 {
  from {
    transform: rotate(-25deg);
  }
  to {
    transform: rotate(2598deg);
  }
}
@keyframes rotate7 {
  from {
    transform: rotate(-25deg);
  }
  to {
    transform: rotate(2287deg);
  }
}
</style>
<style lang='less'>
.market{
   .sharbj {
    width: 100%;
    height: 100%;
    position: relative;
    background: url("https://img.guoanfamily.com/newYearActivity/sharejinatou.png") no-repeat;
    background-size: 80%;
    background-position: 80% 0%;
    .sharbtn {
      width: 40%;
      text-align: center;
      position: absolute;
      left: 25%;
      top: 20%;
      bottom: 0;
      right: 0;
      border-radius: 5px;
      color: #fff;
      font-size: 16px;
      background: url("https://img.guoanfamily.com/newYearActivity/shareBtn.png") no-repeat 100% center;
      background-size: 90%;
      margin: 0 !important;
    }
  }
}
.luckdraw {
  .receive {
    * {
      font-size: 14px;
    }
    .weui-btn_mini {
      font-size: 12px;
      padding: 0 0.8em;
    }
  }
}

.code {
  .weui-cell__hd {
    width: 1rem;
    margin-left: -12px;
  }
  input {
  	width: 1.6rem;
    margin-left: 3px;
  }
}
.weui-cell:before {
  border-top: none !important;
}
.weui-cell__ft {
  .weui-btn_primary {
    background: url("https://img.guoanfamily.com/newYearActivity/btn.png") no-repeat center !important;
    background-size: 100%;
    border-radius: 5px;
  }
}
.close {
  width: 0.7rem;
  height: 0.7rem;
  position: fixed;
  right: 20px;
  top: 90px;
  background: url("https://img.guoanfamily.com/newYearActivity/close.png") no-repeat center;
  background-size: 100%;
  z-index: 16;
  &.phoneClose {
    top: 20px;
  }
}
.buttonDiv {
  width: 100%;
  height: 6rem;
  position: fixed;
  left: 0;
  bottom: 0%;
  z-index: 13;
  div {
    width: 100%;
    height: 100%;
    position: relative;
    .onceMoreMethod {
      position: absolute;
      top: 45px;
      height: 26px;
      line-height: 26px;
      font-size: 12px;
      text-align: center;
      color: #f3af0d;
    }
    .onceMore {
      width: 50%;
      text-align: center;
      position: absolute;
      left: 25%;
      top: 10px;
      border-radius: 5px;
      color: #fff;
      font-size: 16px;
      background: url("https://img.guoanfamily.com/newYearActivity/btn.png") no-repeat 100% center;
      margin: 0 !important;
    }
    .onceMore1 {
      width: 50%;
      text-align: center;
      position: absolute;
      left: 25%;
      top: 70px;
      border-radius: 5px;
      color: #fff;
      font-size: 16px;
      background: url("https://img.guoanfamily.com/newYearActivity/btn.png") no-repeat 100% center;
      margin: 0 !important;
    }
    .erweimaInfo {
      position: absolute;
      top: 2.2rem;
      height: 0.6rem;
      line-height: 0.6rem;
      font-size: 14px;
      text-align: center;
      color: #f3af0d;
    }
    .erweima {
      width: 40%;
      position: absolute;
      left: 30%;
      top: 2.8rem;
      img {
        width: 100%;
      }
    }
  }
}
.result-zsf{
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.7);
	z-index: 10;
	position: fixed;
	top: 0;
	right: 0;
	background-size:100% ;
	.result-zsf-tanchuang{
		width:7.5rem;
		height: 7.5rem;
		position: absolute;
		top:0;
		bottom: 0;
		right: 0;
		left: 0;
		margin: auto;
		background-image: url('https://img.guoanfamily.com/rent/static/HomePage/alertBj.png');
		background-repeat:no-repeat ;
		background-position:center ;
		background-size:100% ;
		.result-one{
			width: 35%;
	    margin: 2.2rem auto 0;
	    box-sizing: border-box;
	    padding-left: 0.3rem;
		}
	}
	
	
	.resultWX{
		margin: 4.3rem auto 0;
	}
	.onemoretime{
		width: 56%;
		height: 1.3rem;
		margin:2rem auto 0;
		box-sizing: border-box;
    padding-left: 0.3rem;
    position: relative;
    left: 0.1rem;
		.button-code{
			float: right;
	    background: #E34B3E;
	    border-radius: 0.1rem;
	    width: 1.6rem;
	    height: 0.5rem;
	    color: white;
	    font-size: 0.21rem;
	    margin-right: 0.4rem;
	    margin-top: 0.2rem;
	    text-align: center;
	    line-height: 0.5rem;
		}
	}
}
.resultStyle {
  width: 80%;
  height: 40%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 32%;
  z-index: 12;
  margin: auto;
  &.phoneresultStyle {
    bottom: 50%;
  }
  .award {
    width: 100%;
    height: 1rem;
    font-size: 30px;
    font-weight: bold;
    color: #f6bb41;
    text-align: center;
  }
}
.receiveSuccess {
  width: 100%;
  height: 100%;
  background-color:rgba(0,0,0,.8) ;
  
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 15;
  .receiveSuccess-inner{
  	width: 6.5rem;
  	height: 7.5rem;
  	position: absolute;
  	top: 0;
  	bottom: 0;
  	left: 0;
  	right: 0;
  	margin: auto;
  	background-image: url("https://img.guoanfamily.com/newYearActivity/receveSu.png");
	background-repeat:no-repeat ;
	background-position:center ;
	background-size:100% ;
  }
  .grant {
    font-size: 18px;
    text-align: left;
    width: 80%;
    margin: 3.8rem auto 0;
    color: #333333;
    font-weight: 500;
    box-sizing: border-box;
    padding-left: 0.3rem;
  }
  .grantBtn {
    width: 40%;
    border-radius: 5px;
    margin-top: 0.2rem;
    background: url("https://img.guoanfamily.com/newYearActivity/btn.png") no-repeat center;
    background-size: cover;
  }
}
.receive {
  width: 90%;
  height: 360px;
  background: url("https://img.guoanfamily.com/newYearActivity/receive.png") no-repeat center;
  background-size: 100% 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 14;
  .lineClose {
    width: 0.7rem;
    height: 100px;
    background: url("https://img.guoanfamily.com/newYearActivity/close1.png") no-repeat center;
    background-size: 100%;
    position: absolute;
    right: 0;
    top: -90px;
  }
  .msg {
    width: 100%;
    height: 20px;
    color: red;
    line-height: 20px;
  }
  .prompt {
    width: 100%;
    height: 60px;
    float: left;
    line-height: 30px;
    text-align: left;
    margin-left: 7%;
    margin-top: 20px;
    margin-right: 7%;
    color: #333333;
    font-size: 14px;
    .msgTxt {
      width: 88%;
      height: 30px;
      text-align: center;
    }
  }
  .subLogin {
    width: 40%;
    border-radius: 5px;
    position: absolute;
    left: 30%;
    bottom: 40px;
    background: url("https://img.guoanfamily.com/newYearActivity/btn.png") no-repeat center;
    background-size: cover;
  }
}
.result {
  background: url("https://img.guoanfamily.com/newYearActivity/one.png") no-repeat center;
  background-size: 80%;
}
.result1 {
  background: url("https://img.guoanfamily.com/newYearActivity/two.png") no-repeat center;
  background-size: 80%;
}
.result2 {
  background: url("https://img.guoanfamily.com/newYearActivity/three.png") no-repeat center;
  background-size: 80%;
}
.result3 {
  background: url("https://img.guoanfamily.com/newYearActivity/four.png") no-repeat center;
  background-size: 80%;
}
.result4 {
  background: url("https://img.guoanfamily.com/newYearActivity/none.png") no-repeat center;
  background-size: 80%;
}
.result5 {
  background: url("https://img.guoanfamily.com/newYearActivity/six.png") no-repeat center;
  background-size: 80%;
}
.weui-toast__content{
	padding: 0.1rem !important;
}
@media only screen and (device-width: 375px) and (device-height:812px) and (-webkit-device-pixel-ratio:3) {
  
  .PrizePhoneNumber{
  	margin: 3.2rem auto 0 !important;
  }
}
</style>

