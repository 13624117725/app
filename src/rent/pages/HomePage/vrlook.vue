<style scoped lang="scss">
	@import "../../style/theme.scss";
	@import "../../style/public.scss";
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
		height: 11rem;
		padding:6rem 0 1.5rem ;
		background: url(https://media.guoanfamily.com/rent/static/HomePage/vrbanner.png) no-repeat center;
		background-size:100% ;
		
	}
	.back-vr{
		width: 0.8rem;
		height: 0.8rem;
		position: fixed;
		top: 0.8rem;
		left: 0.5rem;
		background: url(../../../../static/rent/HomePage/vr-back.png) no-repeat center;
		background-size:100% ;
		z-index: 3;
	}
	.banner-item{
		width: 96%;
		margin: auto;
		height: 2.6rem;
		box-sizing: border-box;
		padding-top: 2rem;
		position: relative;
		
		img{
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			right: 0;
			z-index: 1;
		}
	}
	.banner-item1{
		margin-top: 0.3rem;
	}
	.banner-item2{
		margin-top: 0.3rem;
	}
	.banner-item3{
		margin-top: 0.3rem;
	}
	.banner-item-shadow{
		width: 95.5%;
		height: 0.5rem;
		margin: auto;
		background: rgba(0,0,0,.4);
		position: relative;
		z-index: 2;
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
				<div class="banner-item" @click="goToShow">
					<img v-lazy="vr1" alt="" />
					<div class="banner-item-shadow">
						<div class="banner-item-shadow-name1">
							四惠东 惠生园四居室 D房间 
						</div>
						<div class="banner-item-shadow-name2">
							2层/22㎡
						</div>
					</div>
				</div>
				<div class="banner-item banner-item1" @click="goToShow2">
					<img v-lazy="vr2" alt="" />
					<div class="banner-item-shadow">
						<div class="banner-item-shadow-name1">
							团结湖  呼家楼店 A04 
						</div>
						<div class="banner-item-shadow-name2">
							2层/22㎡
						</div>
					</div>
				</div>
				<div class="banner-item banner-item2" @click="goToShow3">
					<img v-lazy="vr3" alt="" />
					<div class="banner-item-shadow">
						<div class="banner-item-shadow-name1">
							团结湖  呼家楼店 B06 
						</div>
						<div class="banner-item-shadow-name2">
							2层/27㎡
						</div>
					</div>
				</div>
				<div class="banner-item banner-item3" @click="goToShow4">
					<img v-lazy="vr4" alt="" />
					<div class="banner-item-shadow">
						<div class="banner-item-shadow-name1">
							团结湖  呼家楼店 D02
						</div>
						<div class="banner-item-shadow-name2">
							2层/20㎡
						</div>
					</div>
				</div>
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
				vr1:"https://media.guoanfamily.com/rent/static/HomePage/vr1.png?imageView2/0/w/360/h/130",
				vr2:"https://media.guoanfamily.com/rent/static/HomePage/vr2.png?imageView2/0/w/360/h/130",
				vr3:"https://media.guoanfamily.com/rent/static/HomePage/vr3.png?imageView2/0/w/360/h/130",
				vr4:"https://media.guoanfamily.com/rent/static/HomePage/vr4.png?imageView2/0/w/360/h/130",

	  		}
	  	},
	  	created(){
	  		
	  	},
	  	methods:{
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
			//跳转到3d看房页
			goToShow(){
				this.$router.push({path:"/framePage",query:{src:"https://beyond.3dnest.cn/play/?m=zq_hsyjybj_1",title:"惠生园四居室D"}});            	
           	},
           	goToShow2(){
				this.$router.push({path:"/framePage",query:{src:"https://beyond.3dnest.cn/play/?m=zq_hjld_3",title:"呼家楼店A04"}});            	
           	},
           	goToShow3(){
				this.$router.push({path:"/framePage",query:{src:"https://beyond.3dnest.cn/play/?m=zq_hjl_6",title:"呼家楼店B06"}});            	
           	},
           	goToShow4(){
				this.$router.push({path:"/framePage",query:{src:"https://beyond.3dnest.cn/play/?m=zq_hjl_4",title:"呼家楼店D02"}});            	
           	},
           	goback(){
           		this.$router.go(-1);
           	}
	  	}
	}
</script>

