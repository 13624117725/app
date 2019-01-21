<template>
	<div class = "myCleaning" >
		<scroller 
			class="scroller"
            :on-refresh="refresh"
            :on-infinite="infinite"
           	v-show = "scrollerShow"
        >
        <div class="content" :class="[this.$store.state.showWxTitle? 'isWx' : 'isAoI']">
				<div class = "myCleaningContent" v-for = "item in myCleaningContent">
					<div>
						<p>保洁单号</p>
						<p>{{item.orderId}}</p>
					</div>
					<div>
						<p>上门时间</p>
						<p>{{item.appointStartAEndDDate}}</p>
					</div>
					<div>
						<p>服务地址</p>
						<p :title = "item.address">{{item.address}}</p>
					</div>
					<div>
						<p>订单状态</p>
						<p>{{item.orderStatusContent}}</p>
					</div>
				</div>
			 </div>
		</scroller>
		<div class="noData" v-show = "imgShow">
			<!--<img src="../../../../static/new/img/noData.png"/>-->
		</div>
	</div>
</template>

<script>
	import IosorAndroid from "../../components/IosorAndroid"; //引入导航栏
	export default{
		 components: {
		    IosorAndroid
		  },
		data(){
			return{
				myCleaningContent:[],
				imgShow:false,
				currentPageNo:"1",
				totalPageNo:"",//总页数
				yesno:false,//第一次加载时禁止上拉
				scrollerShow:true
			}
		},
		mounted(){
			this.getMyCleaningContent();
		},
		methods:{
			getMyCleaningContent(){
				return this.post("CleanupOrderController/getCleanupOrderList",{
					"currentPageNo":this.currentPageNo,
					"pageCount":"",
				}).then((res)=>{
					if(res.code === 0){
						this.totalPageNo = res.data.totalPageNo;
						if(res.data.content.length===0){
							this.imgShow = true;
							this.scrollerShow = false;
						}else{
							this.imgShow = false;
							this.scrollerShow = true;
							res.data.content.map((item,index)=>{
								this.yesno = true;
								this.myCleaningContent.push(item)
							})
						}
					}else if(res.code===10068){
						this.imgShow = true;
						this.scrollerShow = false;
					}
					
					
		
					
                })
			},
			refresh(done){
				this.yesno=false;
				this.myCleaningContent = [];
				this.currentPageNo = "1";
				this.getMyCleaningContent().then((res)=>{
                    done(res)
				})
            },
            infinite(done){
            	let that = this;
				if(this.yesno == true){
					done(true);
					if(this.currentPageNo<this.totalPageNo){
						this.currentPageNo++;
						that.getMyCleaningContent().then((res)=>{
							done(res)
						})
					}
					if(this.currentPageNo===this.totalPageNo){
						this.scrollerShow = true;
		           		 this.imgShow = false;
					}
				}else{
					done(true);
					return;
				}				
            },
		}
	}
</script>

<style scoped lang = "scss">
.myCleaning{
	width: 100%;
	height: 100%;
	.myCleaningContent{	
		width: 6.9rem;
		margin: 0.35rem auto;
	    background: #ffffff;
	    box-sizing: border-box;
	    border: 1px solid #ddd;
	    box-shadow: 0px 0px 0.3rem 0.005rem #ddd;
	    
	    &:nth-child(1){

	    }
	    &>div{
	    	height: 0.8rem;
	    	width: 100%;
	    	border-bottom: 1px solid #CCCCCC;
	    	&>p:nth-child(1){
	    		float: left;
	    		font-size: 0.28rem;
	    		line-height:0.8rem;
	    		margin-left: 0.2rem;
	    		font-family:"SourceHanSansSC-Regular";
	    	}
	    	&>p:nth-child(2){
	    		float: right;
	    		font-size: 0.28rem;
	    		line-height: 0.8rem;
	    		margin-right: 0.2rem;
	    		color: #999999;
	    		font-family:"SourceHanSansSC-Regular";
	    	}
	    	&:nth-child(1){
	    		background: #f9f9f9;
	    		
	    	}
	    	&:nth-child(3){
	    		&>p:nth-child(2){
		    		font-size: 0.28rem;
		    		line-height: 0.8rem;
		    		margin-right: 0.2rem;
		    		width:5rem;
		    		overflow: hidden;
		    		text-overflow: ellipsis;
		    		white-space: nowrap;
		    		text-align: right;
		    	}
	    	}
	    	&:nth-child(4){
	    		border: none;
	    	}
	    }
	}
	.noData{
		width: 100%;
	    height: 80%;
	    background: url(../../../../static/new/img/noData.png) no-repeat 50% 20%;
	    background-size: 70%;
	    opacity: 0.8;
	    position: fixed;
	    left: 0;
	    bottom: 0;
	    top: 17%;
	    right: 0;
	    margin: auto;
	    z-index: 11;
	}
	.isWx{
  		margin-top: 0.2rem;
	 }
 	.isAoI{
    	margin-top: 1.5rem;

  	}
}
</style>