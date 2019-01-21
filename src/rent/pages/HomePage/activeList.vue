<template>
	<div style="widht:100%;height:100%;">
		<!--class="fixContent"-->
		<!--导航栏-->
		<div class="top">
	        <div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>
        </div>
        <!--公众号列表-->
		<div class="list-box">
			<scroller class="scroller"
						:on-refresh="refresh"
						:on-infinite="infinite"
						noDataText="--------已经到最后了--------"
					>
				<div class="all-list">
					<div style="height: 0.2rem;" v-if="this.isIosandroid()"></div>
					<ul>
						<li class="list" @click="listClick(item)" v-for="(item,index) in list" :key="index">
							<div class="list-in">
								<div class="list-img">
									<img :src="item.activity_pic_url"/>
								</div>
								<div class="right-word">
									<p class="first-line">{{item.activity_title}}</p>
									<p class="p2">{{item.activity_tap}}</p>
									<p class="second-line">{{item.activity_description}}</p>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</scroller>
		</div>
	</div>
</template>

<script>
	import PageHeader from '../../components/public/PageHeader';//导航

	export default {
		components: {
		    PageHeader
	  	},
	  	data(){
	  		return{
				androidOrIos:true,	//默认为安卓登录
				list:[],
				currentPageNo:1,
				isUpload:true,
				totalPage:"",//总页数
	  		}
	  	},
	  	created(){
	  		this.isIosAndroid();
	  		 this.getActivtyList();
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
			getActivtyList(){
				var _this = this;
        		return this.post("ExcitingActivityController/getExcitingActivityList",{
        			"currentPageNo":this.currentPageNo
        		}).then((res)=>{
        			_this.currentPageNo = _this.currentPageNo +1;
        			_this.totalPage = res.totalPage;
					res.content.forEach(item=>{
						this.list.push(item)
					})
					return !res.flag;
				})

        	},
	  		toHouseList(){//点击搜索框跳转到搜索页面
		  		this.$router.push({path:"HouseList/HotSearch"})
		  	},
		  	listClick(item){
		  		this.$router.push({path:"framePage",query:{title:item.activity_title,src:item.activity_src}});
		  	},
			refresh(done){
                this.currentPageNo = 1;
                this.list = [];
                done(true);
//              this.getActivtyList().then((res)=>{
//                  done(res)
//              })
            },

            infinite(done){
            	if(this.currentPageNo>this.totalPage){
            		done(true)
            	}else{
            		this.getActivtyList().then((res)=>{

	                    done(res)
	                })
            	}

            },
	  	}
	}
</script>

<style scoped lang="scss">
@import "../../style/theme.scss";
	.btnandroid{
		margin-top: -0.05rem;
	}
	.btnios{
		margin-top: 0.2rem;
	}
	.emptyios{
		height: 1.3rem;
	}
	.emptyandroid{
		height: 1.1rem;
	}

	.vux-x-icon {
	  fill: white;
	}
	.list-box{
		width: 100%;
        // height: 100%;
        background-color: #fff;
		// position: absolute;
		// top:1.3rem;
		// bottom:0rem;
	}
	.all-list{
		// width:100%;
		// height: 100%;
		// overflow-y: scroll;
		margin-top:1.3rem;
		.list{
			// width: 7.5rem;
			width: 6.9rem;
			margin: auto;
			border-bottom: 1px solid #DDDDDD;
			.list-in{
				background: white;
				box-sizing: border-box;
				overflow: hidden;
				padding: 0.3rem 0;
				.list-img{
					width: 3.2rem;
					height: 2.4rem;
					float: left;
					img{
						width: 100%;
						height: 100%;
						border-radius:0.1rem ;
					}
				}
				.right-word{
					width: 3.55rem;
					height: 2.08rem;
					float: right;
					box-sizing: border-box;
					padding: 0 0 0 0.26rem;
					margin-top: -0.09rem;
					.first-line{
						font-size: 0.32rem;
						color: black;
						font-weight: 500;
						text-align: left;
						overflow:hidden;
	       				text-overflow:ellipsis;
						white-space:nowrap;
					}
					.second-line{
						font-size: 0.28rem;
						color: #666666;
						margin-top: 0.1rem;
						text-align: left;
					}
					.p2{
						width: 1rem;
					    height: 0.36rem;
					    background: #E34B3E;
					    text-align: center;
					    line-height: 0.36rem;
					    font-size: 0.22rem;
					    color: white;
					    padding: 0 0.08rem;
					    margin: 0.15rem 0 0.3rem 0;
					}
				}
			}

		}
		.list:last-of-type{
			border: 0;
		}
	}
	.box{
		position: fixed;
	}
</style>
