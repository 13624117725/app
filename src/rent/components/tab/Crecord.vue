<style scoped lang="scss">
     @import "../../style/theme.scss";
     .contentWx{
     	width: 100%;
        margin: 0 auto;
        top: 1.1rem;
        position: absolute;
        width: 100%;
        margin-top: -0.35rem;
        height: 11.3rem;
        z-index: 10;
     }
     .content{
            width: 100%;
            margin: 0 auto;
            top: 1.1rem;
            position: absolute;
            width: 100%;
            margin-top: -0.35rem;
            height: 11.3rem;
            z-index: 10;
         .complaint-log{
            width: 92%;
            height: auto;
            padding:0rem 0.3rem;
            .complaint-left{
                .complaint-number{
	                width: 100%;
	                height: 0.82rem;
	                box-sizing: border-box;
	                font-size:0.24rem;
	                line-height: 0.82rem;
	                border-bottom:1px solid #DDDDDD;
                    span{
                        color: #999999;
	                    float: left;
	                    font-size:0.24rem;
                    }
                    .result{
		                height: 100%;
		                line-height:0.82rem;
		                float: right;
		                font-size:0.24rem;
		                color:#999999;
		                margin-left: 0.5rem;
		            }
                }
                .complaint-img{
                	padding: 0.25rem 0 0.13rem;
                    font-size: $reminderFontSize;
                    position:relative;
                    .current-index{
                        width: 1rem;
                        height: 0.6rem;
                        background-color:#FF943C;
                        float:left;
                        position: relative;

                        .index{
                            width:0.4rem;
                            height: 0.4rem;
                            text-align:center;
                            line-height: 0.4rem;
                            font-size:0.25rem;
                            border:1px solid #fff;
                            color:#fff;
                            position:absolute;
                            top:50%;
                            left: 50%;
                            margin-left:-0.2rem;
                            margin-top:-0.2rem;
                            border-radius:50%;
                        }
                    }
                    .relt{
                        border: 1px solid #F6A9A9;
                        width: 1rem;
                        height: 0.5rem;
                        text-align:center;
                        line-height:0.5rem;
                        background-color:#F18787;
                        border-radius:3px;
                        color:#fff;
                    }
                    img{
                        float: left;
                        width: 1.4rem;
                        height: 1.4rem;
                    }
                    .complaint-content{
                        width: 100%;
                        font-size: 0.28rem;
                        text-align: left;
                        .created-time {
                        	text-align: left;
                            display: block;
                            margin-top: 0.05rem;
                            font-size: 0.24rem;
                            overflow:hidden;
                            .created-time-left{
                            	color: #999999;
                            	float: left;
                            	line-height: 0.55rem;
                            }
                            .created-time-right{
                            	float: right;
                            	background: #E34B3E;
                            	color: white;
                            	vertical-align: middle;
                            	padding: 0.08rem 0.1rem;
                            	border-radius:0.05rem ;
                            	img{
                            		width: 0.1rem;
                            		height: 0.06rem;
                            		float: right;
                            		vertical-align: middle;
                            		margin-top: 0.13rem;
                            		margin-left: 0.1rem;
                            	}
                            }
                        }
                        .openRresaultWord{
                        	transition: all .5s;
                        	display: block;
                        }
                        .closeRresaultWord{
                        	transition: all .5s;
                        	display: none;
                        }
                    }
                }
            }
            
         }
     }
    .resultColor {
        color:#ffbb29 !important;
    }
    
    @media only screen and (device-width: 375px) and (device-height:812px) and (-webkit-device-pixel-ratio:3) {
	    .ipxHeight {
	        height: 13.5rem;
	    }
	}
</style>

<template>
    <div :class="[!this.$store.state.showWxTitle?'content':'contentWx']" class="ipxHeight">
        <scroller class="scroller"
            :on-refresh="refresh"
            :on-infinite="infinite"
            ref="myList"
        >
                <ul class="complaint-log">
                    <li :style="note" v-for="(list,index) in content" :key="index">
                        <div class="complaint-left">
                            <div class="complaint-number">
	                            <span>投诉单号：{{list.id}}</span>
	                            <div class="result" :class="{'resultColor':!list.bool}">
		                            {{list.orderName}}
		                        </div>
                            </div>
                            <div class="complaint-img">
                                <div>
                                    <!--<div class="current-index">
                                        <div class="index">{{list.index}}</div>
                                    </div>-->
                                    <div class="complaint-content">
                                        <div class="time">{{list.questionDescription}}</div>
                                        <div style="height: 1px;background:#DDDDDD;margin: 0.25rem 0;"></div>
                                        <div class="created-time">
                                        	<div class="created-time-left">
                                        		投诉时间：{{list.createTime}}
                                        	</div>
                                        	<div class="created-time-right" v-if="list.bool" @click="clickresoult">
                                        		查看结果
                                        	</div>
                                        </div>
                                    </div>
                                    <div style="clear:both;"></div>
                                </div>
                                
                                <div style="margin-top:0.12rem">
                                    <div class="complaint-content">
                                        <div :class="openResoult?'openRresaultWord':'closeRresaultWord'">{{list.dealResult}}</div>
                                    </div>
                                    <div style="clear:both;"></div>
                                </div>

                            </div>
                        </div>
                        
                    </li>
                </ul>
        </scroller>
    </div>
</template>

<script>
import tousu from "../../../../static/rent/tousu.png"
import tousu1 from "../../../../static/rent/tousu1.png"
// import logoSrc from './../../assets/avatar.png'
    export default {
        data() {
          return {
              tousu1:tousu1,
              note:{	
                  backgroundColor:'#fff',
                  height:'auto',
                  backgroundSize: '100%',
                  marginTop:'0.4rem',
                  padding:'0 0.2rem 0.05rem',
                  borderRadius: '0.05rem',
                  position:'relative',
                  boxShadow:'0px 0px 5px #999'
              },
              //userId:this.getStorage(this.KEYS.USER_INFO).id,
              currentPageNo:"1",//当前第几页
              pageCount:"5",//每页显示几条
              flag:"",//是否有下页
              content:[],
              openResoult:false 
          }
        },
        created() {
            this.creatData();
        },
        components: {

        },
        computed: {
        },
        methods: {
        	clickresoult(){
        		this.openResoult = !this.openResoult;
        	},
            refresh(done){
                setTimeout(()=>{
                    //let first = this.list[0];
                    // this.list.unshift(first-1)
                    //后台返回是否还有数据，还有数据设置为false
                    //后台没有数据了设置为true
                    done(true)
                }, 1000)
            },

            infinite(done){
                if(this.preventLoad){
                    done(true);
                    return;
                }

                setTimeout(()=>{
                    //let last = this.list[this.list.length - 1] || 0;
                    // this.list.push(last+1)
                    //后台返回是否还有数据，还有数据设置为false
                    //后台没有数据了设置为true
                    done(true)
                }, 1000)

                //done(true);
            },
            creatData(){
                this.post("CComplaintController/getComplaint",{
                    //userId:this.userId,
                    currentPageNo:this.currentPageNo,//当前第几页
                    sourceCode:"0056001"
                }).then(res =>{
                    this.currentPageNo = res.currentPageNo;//第几页
                    this.pageCount = res.pageCount;//每页显示几条
                    this.flag = res.pageCount;//是否有下页
                    this.content = res.content; //内容页
                    this.content.forEach((item,index)=>{
                        if(item.orderName =="已结束"){
                            this.$set(this.content[index],"bool",true);
                        }
                    })
                })
            }
        }
    }
</script>
