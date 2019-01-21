<style scoped lang="scss">
	@import "../../style/theme.scss";
	@import "../../style/public.scss";
	@font-face{
		font-family:font01;
		src:url("../../../fonts/BEBASNEUE.otf");
	}
	.emptyios{
		height: 1.1rem;
	}
	.emptyandroid{
		height: 1.1rem;
	}
	.background-banner{
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		/*position: fixed;
		top: 0;
		left: 0;*/
	}
	.background-banner-hosue{
		width: 100%;
		height: 30rem;
		box-sizing: border-box;
		padding:4.8rem 0 1.5rem ;
		background: url(https://img.guoanfamily.com/jizhongshi.jpg) no-repeat center;
		background-size:100% ;
		.serve-box{
			width: 6.9rem;
			height: 2rem;
			margin: auto;
			.serve-item{
				width: 25%;
				text-align: center;
				float: left;
				overflow: hidden;
				img{
					margin: auto;
					width: 0.55rem;
					height: 0.55rem;
				}
				p{
					color: black;
					font-size: 0.28rem;
					margin-top: 0.1rem;
				}
			}
		}
		.right-home1{
			width: 4.7rem;
			height: 3.6rem;
			float: right;
			margin-top: 1.5rem;
			background: white;
			padding: 0.08rem;
			margin-right: 0.2rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.lookMore1{
			color: #deccaf;
			font-size: 0.32rem;
			margin-top: 8rem;
		}
		.lookMore2{
			text-align: right;
			box-sizing: border-box;
			padding-right: 0.4rem;
			margin-top: 10.5rem;
		}
		.right-home2{
			width: 4.7rem;
			height: 3.6rem;
			float: left;
			margin-top: 2.5rem;
			background: white;
			padding: 0.08rem;
			margin-left: 0.2rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.bottom-home{
			width: 100%;
			height: 2rem;
			float: left;
			margin-top:1rem ;
		}
	
	}
	.back-vr{
		width: 0.8rem;
		height: 0.8rem;
		position: fixed;
		top: 0.8rem;
		left: 0.5rem;
		background: url(../../../../static/rent/HomePage/goback.png) no-repeat center;
		background-size:100% ;
		}
	.banner-item{
		width: 96%;
		margin: auto;
		height: 2.6rem;
		background: url(https://media.guoanfamily.com/rent/static/HomePage/vr1.png);
		background-size:100% ;
		box-sizing: border-box;
		padding-top: 2rem;
	}
	.banner-item1{
		margin-top: 0.3rem;
		background: url(https://media.guoanfamily.com/rent/static/HomePage/vr2.png);
		background-size:100% ;
	}
	.banner-item2{
		margin-top: 0.3rem;
		background: url(https://media.guoanfamily.com/rent/static/HomePage/vr3.png);
		background-size:100% ;
	}
	.banner-item3{
		margin-top: 0.3rem;
		background: url(https://media.guoanfamily.com/rent/static/HomePage/vr4.png);
		background-size:100% ;
	}
	.banner-item-shadow{
		width: 95.5%;
		height: 0.5rem;
		margin: auto;
		background: rgba(0,0,0,.4);
		.banner-item-shadow-name1{
			width: 55%;
			height: 100%;
			float: left;
			font-size: 0.28rem;
			color: white;
			line-height: 0.5rem;
			text-align: left;
			text-indent: 1em;
		}
		.banner-item-shadow-name2{
			width: 40%;
			height: 0.4rem;
			margin-top: 0.05rem;
			margin-left: 0.1rem;
			line-height: 0.4rem;
			color: white;
			font-size: 0.2rem;
			float: left;
			text-align: left;
		}
	}
	
</style>
<template>
	<div style="width: 100%;height: 100%;">
		<div class="background-banner">
			<div class="background-banner-hosue">
				<div class="serve-box">
					<div class="serve-item">
						<img src="../../../../static/rent/HomePage/anquan.png" alt="" />
						<p>安全舒适</p>
					</div>
					<div class="serve-item">
						<img src="../../../../static/rent/HomePage/diduan.png" alt="" />
						<p>热门地段</p>
					</div>
					<div class="serve-item">
						<img src="../../../../static/rent/HomePage/shequ.png" alt="" />
						<p>青年社区</p>
					</div>
					<div class="serve-item">
						<img src="../../../../static/rent/HomePage/guanjia.png" alt="" />
						<p>专属管家</p>
					</div>
				</div>
				<div class="right-home1" @click="tohouselistHjl">
					<img v-lazy="home1" alt="" />
				</div>
				<div class="right-home1" style="margin-top: 0.2rem;" @click="tohouselistHjl">
					<img v-lazy="home2" alt="" />
				</div>
				<p class="lookMore1" @click="tohouselistHjl">查看更多>>
					
				</p>
				<div class="right-home2" @click="tohouselist" >
					<img v-lazy="home3" alt="" />
				</div>
				<div class="right-home2" style="margin-top: 0.2rem;" @click="tohouselist">
					<img v-lazy="home4" alt="" />
				</div>
				<p class="lookMore1 lookMore2" @click="tohouselist">查看更多>>
					
				</p>
				<div class="bottom-home" @click="houselist"></div>
			
			</div>
		</div>
		<div class="back-vr" @click="goback"></div>
	</div>
</template>

<script>
	import IosorAndroid from '../../../new/components/IosorAndroid'
	export default {
		components: {
		    IosorAndroid
	  	},
	  	data(){
	  		return{
				androidOrIos:true,	//默认为安卓登录
				home1:"https://img.guoanfamily.com/home1.jpg",
				home2:"https://img.guoanfamily.com/home2.jpg",
				home3:"https://img.guoanfamily.com/home3.jpg",
				home4:"https://img.guoanfamily.com/home4.jpg",
	  		}
	  	},
	  	created(){
	  		
	  	},
	  	methods:{
	  		houselist(){
	  			this.$router.push({path:"/HomePage"});
	  		},
	  		tohouselistHjl(){
	  			this.$router.push({path:"/HouseList",query:{housecode:"呼家楼"}});
	  		},
	  		tohouselist(){
	  			this.$router.push({path:"/HouseList",query:{housecode:"东大桥"}});
	  		},
	  		isIosAndroid(){
				//判断是安卓还是ios登录，定义到变量中
				if(this.AndroidOrIos()){
					//安卓
					this.androidOrIos = true; 
				}else{
					//ios
					this.androidOrIos = false; 
				}
				
			},
           	goback(){
           		this.$router.go(-1);
           	}
	  	}
	}
</script>

