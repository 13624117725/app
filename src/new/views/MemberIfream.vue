<template>
	<div>
		<!-- <ga-page-header :title="title">
        </ga-page-header> -->
    	 <div v-show="!this.$store.state.showWxTitle" style="height: 1.3rem; background: $baseColor;"></div>
			<!-- <div class="fixContent" style="height:16rem; -webkit-overflow-scrolling: touch;"> -->

				<iframe
				:src="framesrc"
				frameborder="0"
				width="100%"
				:height="frameHeight"
				></iframe>

				<!-- <div style="height:1.5rem;"></div> -->

		<div class="sub" @click="subClick">
			<div></div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				framesrc:this.$route.query.src,
				frameHeight:667,
				title:this.$route.query.title
			}
		},
		created(){
			this.getHeight();
			this.$route.meta.title = this.$route.query.title;
		},
		methods :{
			goBack(){  //跳转个人中心
	            this.$router.back(-1);
	       },
	       getHeight(){
				this.frameHeight = window.innerHeight ;
				//console.log(this.frameHeight);
		   },
		   subClick(){
			   if (!this.LoToken()) {
				let buildid = this.$route.query.buildid;
				let platformnow = localStorage.getItem("platformnow")
				if(platformnow=="xiaochengxu"){
					this.$vux.toast.show({
						text: "支付请在App环境下完成",
						type: "text"
					});
					// let userPhone = localStorage.getItem("userPhone")
					// let token = localStorage.getItem("token")
					// this.$wechat.miniProgram.navigateTo({url:`/pages/membership/membership?buildid${buildid}&userPhone=${userPhone}&src=${this.framesrc}&token=${token}`})
				}else{
					this.$router.push({ path: '/membership', query: { buildid:buildid} })
				}
			   }else{
				   this.$store.state.loginShow = true;
			   }
		   },
		}
	}
</script>

<style lang='less' scoped>
	.change-top{
		height: 1.3rem;
		width: 100%;
		background: #e24e59;
	}
	.sub{
		width:100%;
		background:#fff;
		position: absolute;
		width:100%;
		height: 1.2rem;
		left: 0;
		bottom: 0;
		/* position: fixed; */
		/* left: 0;
		bottom: 0; */
		z-index: 10;
		div{
			width:100%;height:100%;
			background:url('../../../static/new/img/sub.png') no-repeat center;
			background-size: 35%;
		}
	}
</style>