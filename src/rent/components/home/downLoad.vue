<template>
	<div>
		<!--跳转到应用宝下载国安家APP软件-->
		<div class="downLoad" v-show="isShow " :class="{isHide:isMiniPrograme}">
			<div class="downLoad-left">
				<img src="http://pp.myapp.com/ma_icon/0/icon_52608633_1518330452/96" alt="" />
			</div>
			<div class="downLoad-middle">
				<p>选择国安家APP</p>
				<p style="margin-top: 0.1rem;">为每个家的梦想全力以赴</p>
			</div>
			<div class="downLoadClose" @click="closeDownload">×</div>
			<div class="downLoad-right">
				<a class="downLoadBtn" id="appopen">打开</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				fromsrc : this.$route.query.from,
				isShow:false,
				isMiniPrograme:false,	//判断是否在小程序内，在小程序内为true，不在小程序内为false
			}
		},
		created(){
			this.xiaochengxu();
		},
		mounted(){
			//mlink初始化,路径中的from标识符有效时再初始化
			if(this.fromsrc&&this.fromsrc.indexOf("xiaochengxu")==-1){
				this.Mlinkconfig();
				this.isShow = true;
			}
		},
		methods:{
			closeDownload(){
				this.isShow = false;
			},
			Mlinkconfig(){
				var myhash = window.location.hash;
				var myhashfront = myhash.substr(0,myhash.indexOf("?"));
				var myhashback = myhash.substr(myhash.indexOf("?")+1);
				var myhashbackNew = myhashback.substr(0,myhashback.indexOf("from")-1);
				new Mlink({
					mlink:'https://aucfjj.mlinks.cc/AbU9/' + myhashfront + "~" + myhashbackNew,
					button:document.querySelector('a#appopen')
				})
			},
			xiaochengxu(){
				//引入微信jssdk后使用微信的api
				let self  = this
				if(this.$wechat.miniProgram){
					this.$wechat.miniProgram.getEnv(function(res) {
						//console.log(res.miniprogram) // true
						if(res.miniprogram){
							//在微信小程序环境下
							self.isShow = false
							self.isMiniPrograme = true;
							self.setStorage('platformnow', 'xiaochengxu');
						}
					})
				}else{
					if(this.fromsrc&&this.fromsrc.indexOf("xiaochengxu")==-1){
						 this.isShow = true
					}
				}

			}
		}
	}
</script>

<style scoped lang="scss">
.downLoad{
	width: 100%;
	height: 1.5rem;
	background: rgba(0,0,0,.7);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 9999;
	.downLoad-left{
		float: left;width:1rem;height: 1rem;margin:0.25rem 0 0 0.25rem;
		img{
			width: 100;height: 100%;
		}
	}
	.downLoad-middle{
		float: left;height: 100%;width: 3.5rem;box-sizing: border-box;padding-left: 0.3rem;
		p{
			text-align: left;
			font-size: 0.28rem;color: white;margin-top: 0.33rem;
		}
	}
	.downLoad-right{
		width: 1.6rem;height: 100%;float: right;margin-right: 0.3rem;
		.downLoadBtn{
			height: 0.7rem;
			background: #e24e5a;
			display: block;
			color: white;
			font-size: 0.3rem;
			text-align: center;
			line-height: 0.7rem;
			margin-top: 0.37rem;
			border-radius: 0.1rem;
		}
	}
	.downLoadClose{
		width: 0.5rem;
		height: 0.5rem;
		float: right;
		margin: 0.1rem 0 0 0;
		font-size: 0.45rem;
		color: white;
		font-weight: 700;
	}
}
/*小程序内隐藏*/
.isHide{
	display: none !important;
}
</style>