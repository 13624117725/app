<style lang="less" scoped>
	@import '~vux/src/styles/1px.less';
	@import '~vux/src/styles/center.less';
	@font-face{
		font-family:font01;
		src:url("../../../fonts/BEBASNEUE.otf");
	}
	.table-view{
        background: white;
        margin-top:-0.2rem ;
        .table-view-list{
        	box-sizing: border-box;
        	padding: 0.4rem 0.3rem 0rem 0.3rem;
        	.list-top{
        		width: 100%;
        		height: 3.2rem;
        		.imgOne{
        			width: 68%;
        			height: 100%;
        			float: left;
        			position:relative;
        			img{
        				width: 100%;
        				height: 100%;
                        border-radius: 0.1rem;
        			}
        			.houseMoney{
        				position: absolute;
        				left: 0.2rem;
        				top: 10%;
        				width: 1.8rem;
        				text-align: center;
    					height: 0.6rem;
    					line-height: 0.6rem;
        				background: rgba(0,0,0,0.5);
    					line-height: 0.5rem;
    					text-align: center;
        				color:white;
        				// font-weight: 700;
        				box-sizing: border-box;
        				padding: 0.07rem 0.05rem 0.1rem 0.25rem;
        				font-size:0.28rem;		
        				.houseMoneyNum{
        					font-family: font01;
        					float: left;
        					font-size: 0.42rem;
        				}
        			}
        		}
        		.imgRight{
        			width: 28%;
        			float: right;
        			height: 100%;
        			
        			.imgTwo,.imgThree{
        				width: 100%;
        				height: 46%;
        				img{
        					width: 100%;
        					height: 100%;
                            border-radius: 0.1rem;
        				}
        			}
        			.imgThree{
        				margin-top: 13%;
        				position: relative;
        				.imgShadow{
        					width: 100%;
        					height: 100%;
        					position: absolute;
        					top: 0;
        					left: 0;
        					z-index: 100;
        					background: rgba(0,0,0,.3);
        					font-size: 0.5rem;
        					text-align: center;
        					line-height: 1.5rem;
        					color: white;
        				}
        			}
        		}
        	}
        	.list-bottom{
        		width: 100%;
        		box-sizing: border-box;
        		padding-top: 0.2rem;
        		.list-bottom-left{
        			width: 50%;
        			height: 0.45rem;
        			float: left;
        			font-size: 0.32rem;
        			color: #000;
        			overflow:hidden; 
			        text-overflow:ellipsis;
					white-space:nowrap;
					text-align: left;
					text-indent: 0.1rem;
        		}
        		.list-bottom-right{
        			width: 50%;
        			height: 0.4rem;
        			float: right;
        			font-size: 0.28rem;
        			color: #666;
        			text-align: right;
        		}
        		.bottom-label{
        			width: 100%;
                    margin-top: 0.05rem;
        			.bottom-label-list{
        				height: 0.4rem;
        				padding: 0 0.1rem;
        				display: block;
        				float: left;
        				color: #999;
        				text-align: center;
        				line-height: 0.4rem;
        				font-size: 0.26rem;
        				margin-top: 0.15rem;
        				border-radius: 0.05rem;
                        background-color: #f5f5f5;
        				margin-left: 0.1rem;
                        &:nth-child(1){
                            margin-left: 0rem;
                        }
        			}
        		}
			}
			.Division{
				width:100%;
				height:1px;
				background:#ddd;
				margin-top:.3rem;
			}
        }
        .table-view-list:last-of-type{
        	border: 0;
        }
    }
    

</style>
<template>
    <div>
    	<ul class="table-view">
            <li class="table-view-list" v-for="(item,index) in HouseLists" :key="index" @click="goHouseDetail(item.id,item.productType)">
            	<div class="list-top">
            		<div class="imgOne">
            			<img class="pull-left" :src="item.roomFirstImage">
            			<div class="houseMoney">
            				<div class="houseMoneyNum">{{item.price?item.price:"敬请关注"}}</div><div v-if="item.price">元/月</div>
            			</div>
            		</div>
            		<div class="imgRight">
            			<div class="imgTwo">
            				<img class="pull-left" :src="item.roomSecondImage">
            			</div>
            			<div class="imgThree">
            				<img class="pull-left" :src="item.roomThirdImage">
            			</div>
            		</div>
            	</div>
            	<div class="list-bottom">
            		<div class="list-bottom-left">
            			{{item.houseName}}&nbsp;{{item.roomName}}{{item.roomNumber || ""}}
            		</div>
            		<div class="list-bottom-right">
            			{{item.buildNo}}号楼&nbsp;{{item.roomName}}&nbsp;&nbsp;&nbsp;{{item.roomFloor?item.roomFloor+'层/':''}}{{item.userArea}}㎡
            		</div>
            		<div style="clear: both;"></div>
            	</div>
				<div class="Division" v-if="index!=4"></div>
            </li>
        </ul>
        
    </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'

export default {
  	
  	
  	data () {
	    return {
			HouseLists:[],
	    }
  	},
  	mounted(){
  		this.getHomePageDetail();
  	},
  	methods: {
		//获取首页数据
		getHomePageDetail(){
            this.post('common/homePage',{
	        	"size":'5'
	        }).then((res)=>{
	        	this.HouseLists = res.data.roomList.map(item=>{
	        		if(!item.roomFirstImage){
	        			item.roomFirstImage = 'https://img.guoanfamily.com/rent/static/HomePage/roomimg_03.png';
	        		}else{
	        			item.roomFirstImage = !item.roomFirstImage ||this.concatFileUrl(item.roomFirstImage,470,320);
	        		}
	        		
	        		if(!item.roomSecondImage){
	        			item.roomSecondImage = 'https://img.guoanfamily.com/rent/static/HomePage/roomimg_03.png';
	        		}else{
	        			item.roomSecondImage = !item.roomSecondImage ||this.concatFileUrl(item.roomSecondImage,180,130);
	        		}
	        		if(!item.roomThirdImage){
	        			item.roomThirdImage = 'https://img.guoanfamily.com/rent/static/HomePage/roomimg_03.png';
	        		}else{
	        			item.roomThirdImage = !item.roomThirdImage ||this.concatFileUrl(item.roomThirdImage,180,130);
	        		}
	        		return item;
				})
				
	        })
		},
		//跳到房源详情
        goHouseDetail(id,productType){
            this.$router.push({path:'/HouseList/houseDetail',query:{id:id,productType:productType}})
        },
  	}
}
</script>

