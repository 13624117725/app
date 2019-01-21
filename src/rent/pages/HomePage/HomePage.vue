<template>
    <div class="box" ref="changeHeight">

        <!--跳转至应用宝下载；国安家APP-->
		<div><downLoad></downLoad></div>
		<div style="background: white;">
    		<IosorAndroid></IosorAndroid>
    	</div>
	    <div style="padding-top: 0.2rem;">
	        <div class="banner">
	        	<!--搜索框-->
		        <div>
			        <div class="home-search">
			        	<div class="home-search-btn"></div>
			        	<div class="home-search-input">
			        		<div class="search-input-inner" @click="toHouseList">请输入您想居住的小区或区域</div>
			        	</div>
			        	<div class="home-search-map" @click="toMapSearch"></div>
			        </div>
		        </div>
		        <!--轮播图-->
	            <!--<swiper :options="swiperOption" style="height: 4rem;border-radius: 0.1rem;" v-if="newBaseList.length > 0">
			        <swiper-slide v-for="(item,index) in newBaseList" :key="index">
			        	<div style="width: 100%;height: 100%;overflow: hidden;">
			        		 <img  :src= "item.multimefileName" alt="" @click="newTransformOut(item,index)" style="height:100%;width:100%;"/>
			        	</div>
			        </swiper-slide>
			        <div class="swiper-pagination" slot="pagination"></div>
			    </swiper>-->
			    <diySwiper></diySwiper>
	        </div>

	        <!--快捷搜索-->
	        <div class="quick-search">
	        	<ul class="quick-search-ul">
	        		<li class="quick-search-li" @click="tosubway">
	        			<img  src="https://img.guoanfamily.com/guoanjiaapp/subway3x.png" alt="" />
	        			<p>地铁找房</p>
	        		</li>
	        		<li class="quick-search-li" @click="toMapSearch">
	        			<img src="https://img.guoanfamily.com/guoanjiaapp/mapHome.png" alt="" />
	        			<p>地图找房</p>

	        		</li>
	        		<li class="quick-search-li" @click="togongyu">
	        			<img src="https://img.guoanfamily.com/guoanjiaapp/gongyu.png" alt="" />
	        			<p>集中式公寓</p>

	        		</li>
	        		<li class="quick-search-li" @click="toVrlook">
	        			<img src="https://img.guoanfamily.com/guoanjiaapp/VR3x.png" alt="" />
	        			<p>VR看房</p>
	        		</li>
	        		<li class="quick-search-li" @click="ownerEntrust">
	        			<img src="https://img.guoanfamily.com/guoanjiaapp/weituo.png" alt="" />
	        			<p>业主委托</p>
	        		</li>
	        	</ul>


	        	<!--<ul class="pinzhi-ul">
	        		<li class="pinzhi-li" @click="tosubway">
	        			<img src="https://img.guoanfamily.com/rent/pinzhijie/pin.png" alt="" />
	        			<p>地铁找房</p>
	        		</li>
	        		<li class="pinzhi-li" @click="toMapSearch">
	        			<img src="https://img.guoanfamily.com/rent/pinzhijie/zhi.png" alt="" />
	        			<p>地图找房</p>
	        		</li>
	        		<li class="pinzhi-li"  @click="togongyu">
	        			<img src="https://img.guoanfamily.com/rent/pinzhijie/zu.png" alt="" />
	        			<p>集中式公寓</p>
	        		</li>
	        		<li class="pinzhi-li" @click="toVrlook">
	        			<img src="https://img.guoanfamily.com/rent/pinzhijie/fang.png" alt="" />
	        			<p>VR看房</p>
	        		</li>

	        		<li class="pinzhi-li" @click="ownerEntrust">
	        			<img src="https://img.guoanfamily.com/rent/pinzhijie/jie.png" alt="" />
	        			<p>业主委托</p>
	        		</li>


	        	</ul>-->


	        </div>
	        <div style="height: 0.2rem;background: #F5F5F5;"></div>
	        <div class="houseNum">
	        	<div class="houseNum-item" @click="houselist1">
	        		<div class="houseNum-number">{{quyuNumber1.count}}+</div>
	        		<div class="houseNum-name">{{quyuNumber1.name+'区'}}</div>
	        	</div>
	        	<div class="houseNum-item" @click="houselist2">
	        		<div class="houseNum-number">{{quyuNumber2.count}}+</div>
	        		<div class="houseNum-name">{{quyuNumber2.name+'区'}}</div>
	        	</div>
	        	<div class="houseNum-item" style="margin-right: 0;" @click="houselist3">
	        		<div class="houseNum-number">{{quyuNumber3.count}}+</div>
	        		<div class="houseNum-name">{{quyuNumber3.name+'区'}}</div>
	        	</div>
	        </div>


	        <!--国安好房-->
			<div style="background: white;padding-top: 0.25rem;" v-if="roomListLength !== 0">
	            <div class='panorama' >
		            <span>国安家公寓</span>
		            <span @click="goodRoom"></span>
		        </div>
		        <HomeTemplate></HomeTemplate>
			</div>
			<div style="height: 1px;width: 6.9rem; margin:0.3rem auto 0; background: white;"></div>

			<div class="shiming"></div>

			<!--国安整租-->
			<div style="background: white;padding: 0.3rem 0 0;" v-if="houseListLength !== 0">
				<div class='panorama' >
		            <span>最新上架</span>
		            <span @click="goodRoom"></span>
		        </div>
		        <HomeTemplate :verse="true"></HomeTemplate>
			</div>

			<div style="height: 1px; width: 6.9rem;background: #dddddd;margin: 0.3rem auto 0.3rem;"></div>

			<div>
				<!--业主委托广告图-->
		       	<div class='panorama' style="padding-bottom: 0.1rem;">
		            <span>业主委托</span>
		        </div>
		       	<div class="entrestAD" @click="ownerEntrust"></div>
		       	<div class="entrestAD-list">

		       		<div class="entrestAD-list-item">
		       			<img src="../../../../static/rent/HomePage/weituo3.png"/>
						<p>省时省心</p>
		       		</div>
		       		<div class="entrestAD-list-item">
		       			<img src="../../../../static/rent/HomePage/weituo1.png"/>
		       			<p>丰厚收益</p>
		       		</div>
		       		<div class="entrestAD-list-item">
		       			<img src="../../../../static/rent/HomePage/weituo2.png"/>
		       			<p>装修0投入</p>
		       		</div>
		       		<div class="entrestAD-list-item">
		       			<img src="../../../../static/rent/HomePage/weituo4.png"/>
		       			<p>房产保值</p>
		       		</div>
		       	</div>
			</div>
			<div style="height: 1px; width: 6.9rem;background: #dddddd;margin: 0.4rem auto 0;" v-if="!this.$store.state.showWxTitle"></div>
	        <!--精彩活动-->
	        <div class="activity" style="padding-top: 0.2rem;" v-if="!this.$store.state.showWxTitle">
	            <div class='panorama' >
		            <span>精彩活动</span>
		            <span @click="ActiveList"></span>
		        </div>
		        <div class="activity-ul-box">
		        	<ul class="activity-ul">
		            	<li class="activity-li" @click="li6(item)" v-for="(item,index) in list" :key="index">
		            		<img v-lazy="item.activity_pic_url" alt="" />
		            		<p>{{item.activity_title}}</p>
		            	</li>

		            </ul>
		        </div>
	        </div>


	       	<div style="height:1.2rem;"></div>
	    </div>
    </div>
</template>
<script>
import downLoad from '../../components/home/downLoad'
import HomeTemplate from '../../components/home/HomeTemplate'
import IosorAndroid from '../../../new/components/IosorAndroid'

import diySwiper from '../../../new/components/Swiper'

export default {
  	components: {
        downLoad,
        HomeTemplate,
        IosorAndroid,
        diySwiper
  	},
  	data () {
		var self = this;
	    return {
	    	baseList : [
	    	{
			  url: '',
			  img: 'https://img.guoanfamily.com/rent/static/HomePage/jiayan.jpg',

			},
	    	{
			  url: '',
			  img: 'https://img.guoanfamily.com/rent/static/HomePage/fuli.jpg',

			},
			{
			  url: 'https://www.guoanfamily.com/staticWeb/guoanshequ/index.html',
			  img: 'https://img.guoanfamily.com/rent/static/HomePage/dt.png',

			},
			{
			  url: '',
			  img: 'https://img.guoanfamily.com/rent/static/HomePage/redPerson.png',

			},
			{
			  url: 'https://www.wjx.top/jq/21015457.aspx',
			  img: 'https://img.guoanfamily.com/rent/static/HomePage/banner1020.jpg',

			},{
			  url: '/HouseLis',
			  img: 'https://img.guoanfamily.com/rent/static/HomePage/banner05.png',

			}, {
			  url: '/Delegation',
			  img: 'https://img.guoanfamily.com/rent/static/HomePage/banner03.png',
			}],
			newBaseList:"",//轮播图接口返回数据
	    	swiperOption: {
		        autoplay: true,
		        pagination: {
		          el: ".swiper-pagination"
		        }
		    },
		    swiperOptionRoom:{

		    },
		   	//demo06_list: baseList,
		    demo06_index: 0,
		    BspotP1Class:true,
		    BspotP2Class:false,
		    BspotP3Class:false,
		    BspotP4Class:false,
		    BspotP5Class:false,
		    roomList:[],
		    newHouseList:[],//整租列表采用倒序的合租数据
		    roomListLength:'',
		    roomArr:[],
			houseList:[],
			houseListLength:'',
			houseArr:[],
            chuxinChange:true,
            isPersonal:false,
            androidOrIos:true,	//默认为安卓登录
            isWechat:!this.$store.state.showWxTitle,
            quyuNumber1:{
            	count:"",
            	name:""
            },
            quyuNumber2:{
            	count:"",
            	name:""
            },
            quyuNumber3:{
            	count:"",
            	name:""
            },
            list:[]
		}
  	},
  	created() {
		this.getHomePageDetail()
		this.collectUrl = window.location.href;
        this.isIosAndroid();
        if(this.isECTouch()){//判断是否是微信浏览器
			this.wxconfig();
		}

        //轮播图初始化数据
        this.bannerMessage();
        this.getquyuHouseNumber();
		this.getActivtyList();

	},
	mounted(){
		// console.log(this.getStorage("homeHeight"))
		if(this.getSession("homeHeight")){
			this.$refs.changeHeight.scrollTop = this.getSession("homeHeight");
			// document.getElementsByClassName("box")[0].scrollTop = this.getStorage("homeHeight");
			// console.log(document.getElementsByClassName("box")[0].scrollHeight)
		}
		var dom = document.getElementsByClassName("box")[0];
		var _this = this;
		dom.addEventListener('scroll', function () {
			_this.setSession("homeHeight",this.scrollTop)
		}, false)
	},
	methods : {
		//获取精彩活动
		getActivtyList(){
    		this.post("ExcitingActivityController/getExcitingActivityList",{
    			"sourceCode":"2",
        		"currentPageNo":"1"
    		}).then((res)=>{
    			this.list=res.content.slice(0,5);
    		})
    	},
		//获取区域的房间数
		getquyuHouseNumber(){
			this.post("common/getHouseCountByNoSale").then((res)=>{

				this.quyuNumber1=res.data[0];
				this.quyuNumber2=res.data[1];
				this.quyuNumber3=res.data[2];
			})
		},
	  	li6(item){
	  		this.$router.push({path:"framePage",query:{src:item.activity_src,title:item.activity_title}});
	  	},
		isIosAndroid(){
			if(this.isECTouch()){
				//weixin
				this.androidOrIos = false;
				return false;
			}else{
				//判断是安卓还是ios登录，定义到变量中
				let u = navigator.userAgent;
	            let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	            let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	            if (isAndroid === true && isiOS === false) {
	                this.androidOrIos = true;
	                return true;
	            }
	            if (isAndroid === false && isiOS === true) {
	                this.androidOrIos = false;
	                return false;
	            }
			}
		},
		//旧的轮播图跳转方法
		transformOut(index){
			let locationHref = window.location.href;
			let locationvalue = locationHref.substr(0,locationHref.indexOf("#")+1);
			switch(index){
				case 0:
				this.$router.push({path:"framePage",query:{src:'https://v7.rabbitpre.com/m2/aUe1ZichNh',title:'家宴'}});
				break;
				case 1:
				this.$router.push({path:"framePage",query:{src:'https://v7.rabbitpre.com/m2/aUe1ZicTjS',title:'福利季'}});
				break;

				case 2:
				this.$router.push({path:"framePage",query:{src:'https://www.guoanfamily.com/staticWeb/guoanshequ/index.html',title:'一荐倾心',num:'1'}});
				break;
				case 3:
				this.$router.push({path:"/HouseList"});
				break;
				case 4:
				this.$router.push({path:"framePage",query:{src:'https://www.wjx.top/jq/21015457.aspx',title:'签约登记'}});
				break;
				case 5:
				this.$router.push({path:"/HouseList"});
				break;
				case 6:
				this.$router.push({path:"/Delegation"});
				break;
				default:
				this.$router.push({path:"/Delegation"});
				break;
			}
		},

		//新的轮播图跳转方法
		newTransformOut(item,index){
			//判断是外链还是路由跳转

			if(item.bannerType === 1){
				//外链跳转
				let platform = this.getStorage('platformnow');
				if(platform == 'xiaochengxu'){
					this.msgalert("请在国安家APP中打开");
				}else{
					this.$router.push({path:"framePage",query:{src:item.bannerValue,title:item.name,num:item.bannerValueId}});
				}
			}else if(item.bannerType === 2){
				//路由跳转
				if(item.bannerValue.indexOf("/HouseList") != -1){
					//console.log("应该跳转到列表");
					this.$router.push({path:"/HouseList"});
				}else if(item.bannerValue.indexOf("/Entrust") != -1){
					//console.log("应该跳转到业主委托");
					this.$router.push({path:"/Entrust"});
				}
			}
		},

		//轮播图接口
		bannerMessage(){
	      	this.get("palmsaleapp/api/v1/banner/rentHouse/appList", {
	        	interfaceType: "newHouse"
	     	}).then((res) => {
		          if (res.status == 200) {
		          	this.newBaseList = res.data;
		          }
		        }
		    )
		},
        goBack(){  //跳转个人中心
            this.$router.back(-1);
        },
        tosubway(){
        	this.$router.push({path:"/MapSearch",query:{isSubway:true,title:"地铁找房"}});
        },
        toMapSearch(){//跳转到地图找房
        	//地图找房新页面还没提交
			//console.log("等页面提交了才有链接跳转");
        	this.$router.push({path:"/MapSearch",query:{title:"地图找房"}});
        },
		  toHouseList(){//点击搜索框跳转到搜索页面
	  		this.$router.push({path:"HouseList/HotSearch"})
	  	},
	  	msgalert(msg) {
			this.$vux.toast.show({
				text: msg,
				type: "text"
			});
		},
	  	//跳转到vr看房
	  	toVrlook(){
	  		let platform = this.getStorage('platformnow');
	  		if(platform == 'xiaochengxu'){
	  			this.msgalert("请在国安家APP中打开");
	  		}else{
	  			this.$router.push({path:"/VrLook"})
	  		}
	  	},
	  	togongyu(){
	  		this.$router.push({path:"/Apartment"})
	  	},
	  	houselist1(){
	  		this.$router.push({path:"/HouseList",query:{search:this.quyuNumber1.name}})
	  	},
	  	houselist2(){
	  		this.$router.push({path:"/HouseList",query:{search:this.quyuNumber2.name}})
	  	},
	  	houselist3(){
	  		this.$router.push({path:"/HouseList",query:{search:this.quyuNumber3.name}})
	  	},
		goodRoom(){//跳转到合租房源列表
			// console.log(document.getElementsByClassName("box")[0].scrollHeight)
	  		this.$router.push({path:"/HouseList",query:{name:"0019001"}})
	  	},
	    goodHouse(type){  //跳转整租房源列表
	        this.$router.push({path:"/HouseList",query:{name:"0019001"}})
	    },
	    listTurn(){
	    	this.$router.push({path:"/HouseList",query:{name:"0019003"}})
	    },
		ownerEntrust(){//跳转到业主委托
//		 	this.broadcast(this.EVENTS.PAGE_LOADING_START, "HomePage", {}, ()=>{});
	        this.$router.push({path:"/Entrust"})
	    },
		toRoomDetail(item){//跳转到该房间详情
	        this.$router.push({path:"/HouseList/houseDetail",query:{id:item.id,productType:item.productType}})
	    },
	    toHouseDetail(item){//跳转到该房源详情
	        this.$router.push({path:"/HouseList/houseDetail",query:{id:item.id,productType:item.productType}})
	    },
		ActiveList(){//跳转到精彩活动列表页
			// console.log(this.getStorage("homeHeight"))
	    	this.$router.push({path:"/ActiveList"})
	    },
	    activity1(){
	    	this.$router.push({path:"framePage",query:{src:'https://mp.weixin.qq.com/s?__biz=MzI1NzM4MDA4MQ==&mid=2247484447&idx=1&sn=5742f69dbacf8664df9cab90c712c043&chksm=ea191f81dd6e969713ea45ba70a9837cef94ed37f2dd6f93837ce509ac7704fd3ce9c2140afe#rd',title:'百万房租免费送'}});
	    },
	    activity2(){
	    	this.$router.push({path:"framePage",query:{src:'https://mp.weixin.qq.com/s?__biz=MzI1NzM4MDA4MQ==&mid=2247484478&idx=1&sn=dd7412962e6c1fa477d9c821e8d04205&chksm=ea191fa0dd6e96b674e15a0edd3b8fa6f7ffc9d117519bbaea8592a65454ab75ec99f0199fb6#rd',title:'点亮北京'}});
	    },
	    getHomePageDetail(){//获取首页数据
	        this.post('common/homePage',{
	        	"size":'6'
	        })
	        .then((res) =>{
	                this.roomList = res.data.roomList.map((item,index) => {
	                	if(!item.image){
	                		item.image = 'https://img.guoanfamily.com/rent/static/HomePage/roomimg_03.png';
	                	}else{
	                		item.image = !item.image ||this.concatFileUrl(item.image,331,259);
	                	}
	                    return item;
	                })

	                let roomlength=this.roomList.length/2;
	                for(let i=0; i<roomlength;i++){//将合租数据转换为二维数组
	                 	this.roomArr.push(this.roomList.splice(0,2))
	                }
	                //console.log(this.roomArr)
	                //整租数据
//	                this.houseList = res.data.houseList.map((item,index) => {
//	                	if(!item.image){
//	                		item.image = 'https://img.guoanfamily.com/rent/static/HomePage/roomimg_03.png';
//	                	}else{
//	                		item.image = !item.image ||this.concatFileUrl(item.image,331,259);
//	                	}
//	                    return item;
//	                })
//	                let houselength=this.houseList.length/2;
//	                for(let i=0; i<houselength;i++){//将整租数据转换为二维数组
//	                 	this.houseArr.push(this.houseList.splice(0,2))
//	                }
					//假的整租数据
					this.newHouseList = res.data.roomList;
					this.newHouseList.reverse();//将合租的数组倒序
					//console.log(this.newHouseList.length)
	                let houselength=this.newHouseList.length/2;
	                for(let i=0; i<houselength;i++){//将整租数据转换为二维数组
	                 	this.houseArr.push(this.newHouseList.splice(0,2))
	                }
	                //console.log(this.houseArr)

	            })
	   	},
	   	//调用微信接口
    	wxconfig() {
            this.post("jsapi/getJsapiSignature?local_url=" + encodeURIComponent(location.href.split('#')[0]),
                {},{
                    interfaceType: "weichat"
                }).then(response => {
                // alert('初始化微信,配置config');
                this.$wechat.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: response.appid, // 必填，公众号的唯一标识
                    timestamp: parseInt(response.timestamp), // 必填，生成签名的时间戳
                    nonceStr: response.noncestr, // 必填，生成签名的随机串
                    signature: response.signature, // 必填，签名，见附录1
                    jsApiList: [
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage',
                            'onMenuShareQQ',
                            'onMenuShareWeibo',
                            'onMenuShareQZone']// 必填，需要使用的JS接口列表
                });
                this.$wechat.ready(() =>{
                    this.wxShare();
                })
            });
        },
        wxShare() {
            // 分享给朋友
            let self = this;
            this.$wechat.onMenuShareAppMessage({
                title: "国安家-高品质公寓运营商", //标题
                desc: "拎包入住，智能门锁，品牌家电、家居，专业保洁、维修、专属管家为您贴心服务!", //描述
                link:"https://www.guoanfamily.com/guoanjiaApp/#/HomePage?from=true", //连接地址指打开分享时页面地址
                imgUrl: "https://img.guoanfamily.com/rent/static/HomePage/chuxin01.png", //图片
                trigger: (res) => {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
            },
            success: (res) =>{
                this.market = false;
                // this.shareImg = false;
            },
            cancel: (res) =>{
                this.$vux.confirm.show({
                     content:"已取消",
                    onCancel () {//取消执行
                  },
                   onConfirm () {//确定执行
                   }
                 })
                this.market = false;
                // this.shareImg = false;
            },
            fail: (res) => {
                 this.$vux.confirm.show({
                     content:"分享失败",
                    onCancel () {//取消执行
                  },
                   onConfirm () {//确定执行
                   }
                 })
                }
            });
            // 分享到朋友圈
            this.$wechat.onMenuShareTimeline({
                title: "国安家-高品质公寓运营商", //标题
                desc: "拎包入住，智能门锁，品牌家电、家居，专业保洁、维修、专属管家为您贴心服务!", //描述
                link: "https://www.guoanfamily.com/guoanjiaApp/#/HomePage?from=true", //连接地址指打开分享时页面地址
                imgUrl: "https://img.guoanfamily.com/rent/static/HomePage/chuxin01.png", //图片
                trigger: (res) => {
                // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
            },
                success: (res) => {
                    this.market = false;
                    // this.shareImg = false;
            },
            cancel: (res) => {
                this.$vux.confirm.show({
                     content:"已取消",
                    onCancel () {//取消执行
                  },
                   onConfirm () {//确定执行
                   }
                 })
                this.market = false;
                // this.shareImg = false;
            },
            fail: (res) => {
               this.$vux.confirm.show({
                     content:"分享失败",
                     onCancel () {//取消执行
               },
                    onConfirm () {//确定执行
                   }
              })
            }
            });
            this.$wechat.error(function(res) {
            });
        },
	    demo06_onIndexChange (index) {
		    if(index == 0){
		        this.BspotP1Class = true;
		        this.BspotP2Class = false;
		        this.BspotP3Class = false;
		        this.BspotP4Class = false;
		    }
		    if(index == 1){
		        this.BspotP1Class = false;
		        this.BspotP2Class = true;
		        this.BspotP3Class = false;
		        this.BspotP4Class = false;
		    }
		    if(index == 2){
		        this.BspotP1Class = false;
		        this.BspotP2Class = false;
		        this.BspotP3Class = true;
		        this.BspotP4Class = false;
		    }
		    if(index == 3){
		        this.BspotP1Class = false;
		        this.BspotP2Class = false;
		        this.BspotP3Class = false;
		        this.BspotP4Class = true;
		    }
	    },

	},
}
</script>

<style scoped lang="scss">
@import "../../style/theme.scss";
.swiper-pagination-bullet-active{
  background:#ffffff !important;
}
.box{
	transform: translate3d(0,0,0);
    height: 100%;
	.input-inner{
		width: 100%;
		height: 0.5rem;
		outline: none;
		border: 1px solid white;
		background: transparent;
		border-radius: 0.05rem;
		margin-top: 0.31rem;
		color: white;
		text-indent: 0.6rem;
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

    .banner{
        position: relative;
        padding: 0 0.3rem 0 0.3rem;
        background: white;
        overflow: hidden;
        .home-search{
	    	width: 6.5rem;
	    	height:.8rem;
	    	margin: auto;
			border-radius:.1rem;
			position:absolute;
			top:0.25rem;
			left:0.5rem;
			z-index:1000;
			background:rgba(255,255,255,.5);
			.home-search-btn{
				width: 0.8rem;
				height:.8rem;
				float: left;
				background: url(../../../../static/new/reversionimg/search.png) no-repeat center;
				background-size:0.30rem ;

			}
			.home-search-map{
				width: 0.76rem;
				height:.64rem;
				float: right;
				background: url(../../../../static/new/reversionimg/location.png) no-repeat center/120%;
				background-size:0.24rem 0.28rem;
				border-left: 1px solid white;
				margin-top: 0.12rem;
			}
			.home-search-input{
				width: 4.8rem;
				height: 100%;
				float: left;
				line-height: 0 ;
				.search-input-inner{
					width: 100%;
					height: 100%;
					border: 0;
					background:transparent;
					font-size: 0.28rem;
					line-height: 0.8rem;
					text-align: left;
					color: white;
				}
			}

	    }


    }

    .quick-search{
    	width: 100%;
    	background: white;
    	.quick-search-ul{
    		width: 100%;
    		padding: 0.5rem 0.2rem 0.5rem;
    		box-sizing: border-box;
    		overflow:hidden;
    		.quick-search-li{
    			width: 20%;
    			height: 1.4rem;
    			float: left;
    			text-align: center;
    			img{
    				width: 0.92rem;
    				height: 0.92rem;
    				margin: auto;
    			}
    			p{
    				font-size: 0.24rem;
    				margin-top: 0.15rem;
    				color: black;
    			}
    		}
    	}
    	.pinzhi-ul{
    		width: 100%;
    		padding: 0.4rem 0.2rem 0.5rem;
    		box-sizing: border-box;
    		overflow:hidden;
    		.pinzhi-li{
			    width: 20%;
			    float: left;
			    text-align: center;
    			p{
    				font-size: 0.24rem;
    				margin-top: 0.15rem;
    				color: black;
    			}
    		}
    	}
    }
    .houseNum{
    	border-bottom:1px solid #DDDDDD;
    	padding: 0.5rem 0.3rem;
    	background: white;
    	overflow: hidden;
    	.houseNum-item{
    		width: 2.1rem;
    		height: 1.3rem;
    		float: 0.3rem;
    		background: #f5f5f5;
    		border-radius: 0.1rem;
    		margin-right: 0.3rem;
    		float: left;
    		box-sizing: border-box;
    		padding: 0.1rem;
    		.houseNum-number{
    			height: 0.6rem;
    			font-size: 0.42rem;
    			border-bottom :1px solid #eeeeee;
    			text-align: center;
    			font-weight: 600;
    			line-height: 0.7rem;
    			font-family: font01;
    		}
    		.houseNum-name{
    			text-align: center;
    			font-size: 0.24rem;
    			color: #333333;
    			height: 0.55rem;
    			line-height: 0.55rem;
    		}
    	}
    }
    .activity{
        background:#fff;
        padding-top: 0.5rem;
        .activity-ul-box{
        	width: 100%;
        	overflow-x:scroll ;
        	box-sizing: border-box;
        	padding:0 0.3rem 0.4rem 0.3rem;
        }
        .activity-ul{
        	width: 17.5rem;
        	background: white;
        	overflow: hidden;
        	.activity-li {
        		width: 3.2rem;
        		height: 3rem;
        		float: left;
        		margin-right:0.3rem;
        		img{
        			width: 3.2rem;
        			height: 2.4rem;
        			border-radius: 0.1rem;
        		}
        		p{
        			font-size: 0.32rem;
				    color: black;
				    height: 0.35rem;
				    line-height: 0.35rem;
				    text-align: left;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    text-indent: 0.1rem;
				    margin-top: 0.2rem;
        		}
        	}
        }
    }
    .entrestAD{
    	width: 6.9rem;
    	height: 1.5rem;
    	margin: auto;
    	background: url(https://media.guoanfamily.com/rent/static/HomePage/newEntrust.png) no-repeat center;
    	background-size:100% 100% ;
    	margin-bottom: 0.3rem;
    	border-radius: 0.1rem;
    }
    .entrestAD-list{
    	width: 100%;
    	height: 1rem;
    	margin-top: 0.1rem;
    	overflow: hidden;
    	.entrestAD-list-item{
    		width: 25%;
    		height: 2rem;
    		text-align: center;
    		float:left;
    		img{
    			width: 0.5rem;
    			height: 0.5rem;
    			margin: auto;
    		}
    		p{
    			font-size: 0.28rem;
    			margin-top: 0.1rem;
    		}
    	}
    }
    .shiming{
    	width: 6.9rem;
    	margin: auto;
    	height: 1.5rem;
    	border-radius: 0.1rem;
    	background: url(https://media.guoanfamily.com/rent/static/HomePage/yaoxian.png) no-repeat center;
    	background-size:100% 100% ;
    }
}

.panorama{
  width:100%;
  height:.8rem;
  font-size:0.38rem;
  color:#000000;
  line-height:38px;
  text-align:left;
  font-weight:500;
  margin-bottom: 0.05rem;
  text-indent: 0.1rem;
  span{
     padding-left:.3rem;
  }
  span:nth-child(2){
    display: block;
    float: right;
    height:35px;
    width:115px;
    margin-right:.3rem;
    /*margin-bottom:.1rem;*/
    background:url('../../../../static/new/reversionimg/more.png') no-repeat right;
    background-size:50%;
  }
}
::-webkit-scrollbar {
	width: 0px;
}
</style>
