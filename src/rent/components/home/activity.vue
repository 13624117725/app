<style scoped lang="scss">
	@import "../../style/theme.scss";
	$height: 2rem;
	.activity{
        background:#fff;
        .activity-box{
            margin-left:.3rem;
            margin-right:.3rem;
            .activity-top{
                width:100%;
                padding: 0rem 0 0 0;
                overflow:hidden;
                .activity-left{
                    width:2rem;
                    height:2rem;
                    float: left;
                    img{
                        width:100%;
                        height:100%;
                        border-radius: 0.1rem;
                    }
                }
                .activity-right{
                    width:70%;
                    float: right;
                    height: 2rem;
                    box-sizing: border-box;
                    padding-left: 0.26rem;

                    .title-activty{
                        font-size:0.32rem;
                        height: 0.4rem;
                        color: black;
                       	overflow:hidden;
	       				text-overflow:ellipsis;
						white-space:nowrap;
						text-align: left;
                    }
                    .tabList-p2{
                    	width: 1rem;
                    	height: 0.36rem;
                    	background: #E34B3E;
                    	text-align: center;
                    	line-height: 0.36rem;
                    	font-size: 0.22rem;
                    	color: white;
                    	padding: 0 0.08rem;
                    	margin: 0.2rem 0 0.2rem 0;
                    }
                    .title-activty-word{
                    	width: 100%;
                    	color: #666666;
                        font-size: 0.26rem;
                        margin-top:0.1rem;
                        text-align: left;
						height: .8rem;

                    }
                }
            }

        }
    }
</style>

<template>
    <div>
    	<!--精彩活动-->
        <div class="activity" v-if="!this.$store.state.showWxTitle">
            <div class="activity-box">
                <div class="activity-top" v-for="(item,index) in list" :key="index"  @click="activity2(item)">
                    <div class="activity-left">
                    	<img v-lazy="item.activity_pic_url" alt="" />
                    </div>
                    <div class="activity-right">
                        <p class="title-activty">{{item.activity_title}}</p>
                        <!-- <p class="tabList-p2">{{item.activity_tap}}</p> -->
                        <p class="title-activty-word">{{item.activity_description}}</p>
                    </div>
                </div>
                <div style="clear: both;"></div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            	list:[]
            }
        },

        created() {
			this.getActivtyList()
        },

        mounted() {

        },

        methods: {
        	getActivtyList(){
        		this.post("ExcitingActivityController/getExcitingActivityList",{
        			"sourceCode":"1",
        			"currentPageNo":"1"
        		}).then((res)=>{
        			this.list=res.content.slice(0,1);
        		})
        	},
		    activity2(item){
		    	this.$router.push({path:"framePage",query:{src:item.activity_src,title:item.activity_title}});
		    }
        },

        components: {}
    }
</script>
