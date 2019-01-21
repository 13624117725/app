<template>
	
	<div style="width: 100%;height:100%;">
		<!--头部-->
		<div class="header" v-if="isBanShare">
	    	<div style="height: 0.2rem;"></div>
	        <span class="back-btn" :class="{'An-back-btn':onheader}"  @click="back"></span>
	
	        <div class="middle" :class="{'An-middle':onheader}">
	            <p class="title">业主委托推荐</p>
	        </div>
	
	        <div class="right-part">
	            <slot name="right-btn">
	            	<span class="back-btn sharebtn"  @click="shareClick" ></span>
	            </slot>
	        </div>
	    </div>
		<!--页面-->
		<div class="page-body">
			<div style="height: 1rem;" v-if="isBanShare"></div>
			<div class="background-box">
				<div class="input-item">
					<input type="text" v-model="recommendName" placeholder="推荐人姓名（必填）"  />
				</div>
				<div class="input-item">
					<input type='number' pattern="[0-9]*" v-model="recommendPhone" placeholder="推荐人手机号（必填）" />
				</div>
				<div class="input-item">
					<input type="text" v-model="ownerName" placeholder="被推荐人姓名（必填）"  />
				</div>
				<div class="input-item">
					<input type='number' pattern="[0-9]*" v-model="ownerPhone" placeholder="被推荐人手机号（必填）" />

				</div>
				<div class="input-item">
					<input type="text" v-model="address" placeholder="房源地址"  />
				</div>
				<div class="input-item">
					<input type="text" v-model="houseType" placeholder="户型"  />
				</div>
				<div class="input-item">
					<input type='number' pattern="[0-9]*" v-model="expectPrice" placeholder="预期价格" />
					
				</div>
				<div class="input-item">
					<input type="text" v-model="remark" placeholder="备注"  />
				</div>
				
				<div class="saveBtn" @click="saveBtn"></div>
				<div class="callPhone"><a href="tel:17310791070"></a></div>
			</div>
			
		</div>
		<!--遮罩层-->
		<div class="market" v-show="market" @click.stop="markedClick" @touchmove.prevent>
			<!-- 分享时候的底部弹出框 -->
	        <div class="shareAlert" >
	            <div style="width:100%;height:100%;positon:releative;">
	                <div class="shareIcon">
	                     <div class="weixin" @click="weixinhaoyoufenxiangClick">
	                        <span>微信</span>
	                    </div>
	                    <div class="pengyou"  @click="weixinFriendsClick">
	                        <span>朋友圈</span>
	                    </div>
	                </div>
	                <div class="exitShare" @click="exitShareClick">取消</div>
	            </div>
	        </div>
		</div>
		
		
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				shareAlert:false,		
				market:false,
				
				recommendName:"",		//推荐人
				recommendPhone:"",		
				ownerName:"",			//被推荐人
				ownerPhone:"",			
				expectPrice:"",			//期望价格
				houseType:"",			//户型
				address:"",				//地址
				remark:"",				//备注
				
				// 判断安卓和ios样式控制
                onheader:false,
                isExhibitionCenter:false,
                
				isBanShare:false,		//判断终端是否禁止分享
				
				isAllowClick:true,
				
				
				
			}
		},
		mounted(){
			this.judgeStation();
		},
		methods:{
			//判断是哪个端，返回对应值
			//判断微信、网页、app的环境。微信端、网页端返回false，app端返回true
			judgeStation(){
				
				let platform = localStorage.getItem("platform");
				
				if(this.$store.state.showWxTitle){
					//微信端--公众号、小程序
					this.isBanShare = false;
				}else if (platform == null || platform == "null" || platform == undefined){
	          		//网页端
	          		this.isBanShare = false;
	          	}else{
	          		//app端
	          		this.isBanShare = true;
	          	}
			},
			//头部返回
			back(){
                if(this.$store.state.loginShow){
                     this.$store.state.loginShow =  false;
                }else{
                    this.$router.go(-1);
                }
            },
            //点击分享
			shareClick(){
				this.market = true;
		      	this.shareAlert =  true;
			},
			
			// 遮罩层的点击事件
		    markedClick() {
		      	this.market = false;
		      	this.shareAlert =  false;
		    },
		    // 微信好友分享
		    weixinhaoyoufenxiangClick(){
				this.market = false;
				this.shareAlert = false;
		        this.wxShare();
		    },
			// 分享到微信朋友方法
		    wxShare(){
		    	var self = this;
		        Wechat.share({
		            message: {
		                title:"业主推荐委托", //标题
		                description:"推荐业主成功委托房源，推荐人可获得奖励1000元/套", //描述
		                thumb: "https://img.guoanfamily.com/static/owner/recommend.jpg", //图片
		                media: {
		                    type: Wechat.Type.WEBPAGE,
		                    webpageUrl:"https://www.guoanfamily.com/staticWeb/ownerRecommend/", //连接地址指打开分享时页面地址
		                }
		            },
		            scene: Wechat.Scene.SESSION   // share to Timeline
		        }, function () {
		            self.$vux.toast.text('已成功分享到微信');
		        }, function (reason) {
		            self.$vux.toast.text('已取消分享');
		        });
		    },
			 // 微信朋友圈分享
		    weixinFriendsClick(){
				this.market = false;
				this.shareAlert = false;
		      	this.friendShare();
		    },
			//分享到朋友圈方法
		    friendShare(){
		    	let self = this;
		        Wechat.share({
		            message: {
		                title:"业主推荐委托", //标题
		                description:"推荐业主成功委托房源，推荐人可获得奖励1000元/套", //描述
		                thumb: "https://img.guoanfamily.com/static/owner/recommend.jpg", //图片
		                media: {
		                    type: Wechat.Type.WEBPAGE,
		                    webpageUrl:"https://www.guoanfamily.com/staticWeb/ownerRecommend/", //连接地址指打开分享时页面地址
		                }
		            },
		            scene: Wechat.Scene.TIMELINE   // share to Timeline
		        }, function () {
		            self.$vux.toast.text('已成功分享到朋友圈');
		        }, function (reason) {
		            self.$vux.toast.text('已取消分享');
		        })
		    },
			// 取消分享的点击事件
	        exitShareClick(){
	            let setTime = setTimeout(()=>{
	               this.market = false;
	            },900)
	            this.shareAlert = false;
	        },
			
			
			//保存
			saveBtn(){
				if(this.recommendName == ""){
					this.$vux.toast.text("请输入推荐人姓名")
					return;
				}
				if(!/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.recommendPhone)){
					this.$vux.toast.text("请输入正确格式电话")
					return;
				}
				if(this.ownerName == ""){
					this.$vux.toast.text("请输入被推荐人姓名")
					return;
				}
				if(!/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.ownerPhone)){
					this.$vux.toast.text("请输入正确格式电话")
					return;
				}
				if(!this.isAllowClick){
					this.$vux.toast.text("点击频率过快，请稍后点击");
					return;
				}
				this.isAllowClick = false;
				
				this.post("agenthouseWeb/CEntrusController/saveActivityCEntrus",{
					"recommendName":this.recommendName,		//推荐人
					"recommendPhone":this.recommendPhone,		
					"ownerName":this.ownerName,			//被推荐人
					"ownerPhone":this.ownerPhone,			
					"expectPrice":this.expectPrice,			//期望价格
					"houseType":this.houseType,			//户型
					"address":this.address,				//地址
					"remark":this.remark,				//备注
				},{
					interfaceType:"weituo"
				}).then((res)=>{
					this.isAllowClick = true;
					this.$vux.toast.text(res.msg);
					if(res.code ==0){
						this.recommendName="";		//推荐人
						this.recommendPhone="";		
						this.ownerName="";		//被推荐人
						this.ownerPhone="";		
						this.expectPrice="";			//期望价格
						this.houseType="";			//户型
						this.address="";				//地址
						this.remark="";				//备注
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
/*头部样式*/
$height: 1.3rem;
$btnSize: 0.47rem;
.header{
    position:fixed;
    left: 0;
    top: 0;
    width: 100%;
    height:1.3rem;
    border-bottom:1px solid #ddd;
    z-index: 1000;
    background: #ffffff;
    box-sizing: border-box;
}
.androidStyle{
	position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height:1.5rem;
    /*border-bottom: $baseBorder;*/
    border-bottom:1px solid #ddd;
    z-index: 1000;
    background: #ffffff;
    box-sizing: border-box;
    border-top: 0.2rem solid white;
}
.back-btn{
    float: left;
    height: 1.2rem;
    width: $height;
    background: url("../../../../static/rent/icon-back-btn.png") no-repeat center;
    background-size: 20%;
    display: inline-block;
}
.An-back-btn{
    float: left;
    height: 1.3rem;
    width: $height;
    background: url("../../../../static/rent/icon-back-btn.png") no-repeat center;
    background-size: 20%;
    display: inline-block;
}
.sharebtn{
	background: url(https://img.guoanfamily.com/guoanjiaapp/sharebtn.png) no-repeat center;
	background-size: 31%;
	background-position:0.4rem 0.4rem ;
}
.middle{
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: $height;
    right: $height;
    background:#ffffff;
    .title{
    	height: 1.1rem;
  		font-size: 0.36rem;//$titleFontSize;
        line-height: 1.6rem;
        color: #000000;//$titleColor;
    }
    .Antitle{
        height: 1.1rem;
  		font-size: 0.36rem;//$titleFontSize;
        line-height: 1.5rem;
        color: #000000;//$titleColor;
    }
}
.An-middle{
	top: 0.06rem;
}

.right-part{
    float: right;
    height: 1.1rem;
}
.ExhibitionCenter{
    background-color: #312317;
    .middle{
        .title{
            color:#fff;
        }
        background-color: #312317;
    }
    .back-btn{
        background: url("../../../../static/rent/icon-back-btn1.png") no-repeat center;
        background-size: 20%;
    }
}
/*头部样式结束*/



.page-body{
	width: 100%;
	height: 100%;
	overflow-y:scroll ;
	position: relative;
}
.background-box{
	height: 23.5rem;
	width: 100%;
	background: url(https://img.guoanfamily.com/guoanjiaapp/ownerbg.jpg) no-repeat center;
	background-size: cover;
	box-sizing: border-box;
	padding-top: 8.35rem;
	position: relative;
	.input-item{
		width: 5.8rem;
		height: 0.86rem;
		background: url(https://img.guoanfamily.com/guoanjiaapp/bg_input.png) no-repeat center;
		background-size:cover ;
		border-radius: 0.44rem;
		margin:0 auto 0.12rem;
		font-size: 0.28rem;
		color: #999999;
		box-sizing:border-box;
		padding: 0.15rem 0.3rem;
		input{
			width: 100%;
			height: 100%;
			outline: none;
			border: 0;
			background: transparent;
			text-align: center;
		}
	}
	.callPhone{
		width: 2rem;
		height: 0.65rem;
		background: url(https://img.guoanfamily.com/guoanjiaapp/callphone.png) no-repeat center;
		background-size:100% 100% ;
		float: right;
		margin-top: 5.3rem;
		margin-right: 0.5rem;
		a{
			width: 100%;
			height: 100%;
			display:block;
		}
	}
	.saveBtn{
		width: 5.8rem;
		height: 0.86rem;
		background: url(https://img.guoanfamily.com/guoanjiaapp/button.png) no-repeat center;
		background-size:cover ;
		line-height: 0.86rem;
		margin:0.42rem auto 0;
		font-size: 0.32rem;
	}
}

.market {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.4);
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  margin: auto;
  z-index: 998;
  transition: all .5s;
}
// 微信分享样式
.shareAlert{
    width:100%;
   	height: 3rem;
    position: fixed;
    transition: .9s;
    bottom: 0;
    background:#fff;
    z-index: 999;
    border-top: 2px solid #f2f2f2;
    transition: all .5s;
   	.shareIcon{
       	width:100%;
       	height: 1.5rem;
       	margin-top:0.2rem;
       	div{
           	float: left;
           	width:1.5rem;
           	height: 1.5rem;
           	background:red;
           	margin-left: .3rem;
           	position: relative;
           	
       	}
       	div:nth-child(1){
           	background:url(../../../../static/new/img/Wx.png) no-repeat;
           	background-size: 60%;
           	background-position: 50% 26%;
           	span{
               display: block;
               width:100%;
               font-size:.3rem;
               position: absolute;
               bottom: 0;
           }
       	}
       	div:nth-child(2){
           	background:url(../../../../static/new/img/friends.png) no-repeat;
           	background-size: 60%;
           	background-position: 50% 26%;
           	span{
               display: block;
               width:100%;
               font-size:.3rem;
               position: absolute;
               bottom: 0;
           	}
       	}
   	}
   	.exitShare{
       	padding-top:5px;
       	font-size: .4rem;
        border-top:1px solid #e6e6e6;
        margin-top: .4rem;
        bottom: 0;
        text-align: center;
        width:100%;

   	}
}
.shareAlert1{
    transition: .9s;
    height: 3rem;
    border-top: 2px solid #f2f2f2;
}

</style>