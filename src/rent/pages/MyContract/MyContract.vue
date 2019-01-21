<style scoped lang="scss">
@import "../../style/theme.scss";
$height: 0.8rem;
    .MyContract-box{
        background:$titleColor;
        width:100%;
        height:100%;
        .MyContract-top{
            width:100%;
        }
        .MyContract-center{
            width:100%;
            height: 90%;
            overflow: scroll;
            .MyContract-center-div1{
                width:100%;
                height: 2.9rem;
                background:url('../../../assets/home/MyContract.png');
                background-size: 100% 100%;
                overflow: hidden;
                .MyContract-center-div1-box{
                    width:60%;
                    height: 2.18rem;
                    float: right;
                    margin-top:0.2rem;
                    position: relative;
                    .MyContract-center-div1-box-one{
                        width:100%;
                        height:100%;
                        background:#fff;
                        position: absolute;
                        opacity: 0.7;
                    }
                    .MyContract-center-div1-box-img{
                        width:80%;
                        height: 50%;
                        margin-left:10%;
                        position: absolute;
                        img{
                            width:100%;
                            height:90%;
                            margin-top:5%;
                        }
                    }
                    .MyContract-center-div1-box-tel{
                        width:100%;
                        height: 40%;
                        position: absolute;
                        width:80%;
                        margin-left:10%;
                        bottom:0;
                        .tel-p1{
                            font-size:12px;
                            float:right;
                            line-height: 1.09rem;
                        }
                        .tel-p2{
                            font-size:14px;
                            float:right;
                            line-height: 1.09rem;
                            font-weight: 600;
                        }
                    }
                }
            }
            .MyContract-center-div2{
                width:100%;
                height: 100%;
                overflow: hidden;
                .MyContract-center-div2-img1{
                    width:80%;
                    height: 60%;
                    margin:10% 0 0 10%;
                    display:none;
                }
                .MyContract-center-div2-list{
                    width:100%;
                    height: 100%;
                    // margin:0 0 0 3%;
                    position: relative;
                    .vux-tab{
                        background:#fff !important;
                        height:0.8rem;
                        display: -webkit-flex;
                        display: flex;
                        -webkit-align-items: center;
                        align-items: center;
                        -webkit-justify-content: center;
                        justify-content: center;
                        // border-top:1px solid #cacaca;
                        // border-bottom:1px solid #ddd;
                    }
                    .vux-tab-item{
                        font-size: $mostFontSize;
                    }
                    .vux-center-tab{
                        background-color: #eee;
                    }
                    .iostab{
                        line-height: 0.85rem !important;
                    }
                    .tabBackground{
                        background-color: #fff;
                    }
                    .vux-slider{
                        height:90%;
                    }
                    .tab-swiper{
                        height:100%;
                        overflow: scroll;
                        margin-top: 0.18rem;
                        padding:0 .3rem;
                        .tabList-box{
                            background-color: #ffffff;
                            width: 100%;
                            height: 3.6rem;
                            margin-bottom: 0.4rem;
                            
                           .tabList-box-left{
                               width:100%;
                               height:100%;
                               float:left;
                               border-radius: 5px;
                               .tabList-box-left-bottom{
                                    width: 6.6rem;
                                    height: 100%;
                                    margin-top: 0.16rem;
                                    position: relative;
                                    border: 1px solid #dddddd;
                                    padding-left: 0.3rem;
                                    box-shadow: 0px 0px 0.3rem 0.005rem #ddd;
                                   .tabList-box-left-bottom-left{
                                       width:2.8rem;
                                       height: 2.1rem;
                                       float:left;
                                    //    margin-left: 0.05rem;
                                       img{
                                           width:100%;
                                           height: 100%;
                                           border-radius: 0.1rem;
                                       }
                                   }
                                   .tabList-box-left-bottom-right{
                                       width:3.5rem;
                                       height: 100%;
                                       float:left;
                                       margin-left:0.2rem;
                                       p{
                                            font-size:0.28rem;
                                            height: 0.4rem;
                                            width:100%;
                                            line-height:0.4rem;
                                            overflow: hidden;
                                            text-overflow:ellipsis;
                                            white-space: nowrap;
                                            text-align: left;
                                            color:#666;
                                            &:nth-child(1){
                                                font-size: 0.24rem;
                                            }
                                       };
                                       .tabList-box-left-bottom-right-p1{
                                            font-size:0.26rem;
                                            margin-top:.3rem;
                                            color:#666;
                                       };
                                       .tabList-box-left-bottom-right-p2{
                                           font-size:0.24rem;
                                           color: #000;
                                           span{
                                               font-size:0.28rem;
                                           }
                                           
                                       }
                                       .tabList-box-left-bottom-right-p3{
                                           color:#666;
                                            font-size:0.24rem;
                                       }
                                    }
                                   .tabList-box-right{
                                        /*width: 0.9rem;*/
                                        height: 0.4rem;
                                        color: #76b48f;
                                        font-size: 0.28rem;
                                        line-height: 0.4rem;
                                        text-align: center;
                                        position: absolute;
                                        bottom: 0.2rem;
                                        left: 3.25rem;
                                        border-radius: 0.05rem;
                                    }
                                    .tabList-box-right1{
                                        padding:0.05rem 0.1rem;
                                        height: 0.4rem;
                                        color: #fff;
                                        font-size: 0.28rem;
                                        line-height: 0.4rem;
                                        background-color: #999;
                                        text-align: center;
                                        position: absolute;
                                        bottom: 0.2rem;
                                        right: 0.5rem;
                                        border-radius: 0.05rem;
                                    }
                               }
                           }
                           
                        }
                    }
                    .BackgroundColor{
                        background:url("../../../../static/rent/img/noData.jpg") no-repeat center center;
                        background-size:100%;
                    }
                }
            }
        }
    }
    .emptyandroid{
        height: 1.3rem;
    }
    .emptyios{
		height: 1.1rem;
	}
	.androidheard{
		height: 1.5rem;
	}
    .table-id{
        font-size: 0.32rem;
        width: 6.3rem;
        display: block;
        margin-bottom: .3rem;
        height: .88rem;
        border-bottom: 1px solid #ddd;
        line-height: .88rem;
        text-align: left;
        color:#000;
    }
    .bottom{
        color: rgb(170, 170, 170);
        font-size: 0.28rem;
        height: 1rem;
        line-height: 1rem;
        display: block;
    }
</style>

<template>
    <div class="MyContract-box fixContent">
        <!-- <div class="MyContract-top">
            <PageHeader :title="parentMsg"></PageHeader>
        </div> -->
        <div class="emptyandroid" :class="{'androidheard':androidOrIos,'emptyios':this.$store.state.showWxTitle}" v-if="!this.$store.state.showWxTitle"></div>
        <div class="MyContract-center">
            <!-- <div class="MyContract-center-div1">
                <div class="MyContract-center-div1-box">
                    <div class="MyContract-center-div1-box-one"></div>
                    <div class="MyContract-center-div1-box-img">
                        <img src="../../../assets/home/MyContract-size.png" alt="">
                    </div>
                    <div class="MyContract-center-div1-box-tel">
                        <p class="tel-p2"><a href="tel:400-900-2225">400-900-2225</a></p>
                        <p class="tel-p1">客服热线：</p>
                    </div>
                </div>
            </div> -->

            <div class="MyContract-center-div2">
                <img class="MyContract-center-div2-img1" src="../../../../static/rent/img/noData.jpg" alt="">
                <div class="MyContract-center-div2-list">
                    <tab :line-width=0  active-color = "#e34b3e" v-model="index">
                        <tab-item class="vux-center-tab" :class="{tabBackground:istab==index,iostab:isiOs}" v-for="(item, index) in list2" @click="demo2 = item" :key="index" @on-item-click="tabClick(item)">{{item}}
                        </tab-item>
                    </tab>
                    <swiper v-model="index" height="100%" width="100%" :show-dots="false">
                        <swiper-item v-for="(item, index) in list2" :key="index">
                            <div class="tab-swiper vux-center">
                                <div  :class="{BackgroundColor:isBack}" style="width:4.8rem;height:4.8rem;margin:2rem auto;" v-if="isBack"  @click="bgNewHome"></div>
                                <p style="text-align:center;" v-if="loadings">
                                    <span style="vertical-align:middle;display:inline-block;font-size:14px;">{{loading}}&nbsp;&nbsp;</span><inline-loading></inline-loading>
                                </p>
                                <div class="tabList-box" v-for="(item,index) in tabList" v-show="listbox" @click="skipClick(item)" :key='index'>
                                    <div class="tabList-box-left">
                                        
                                        <div class="tabList-box-left-bottom">
                                            <p class="table-id">{{tabListName}}{{item.id}}</p>
                                            <div class="tabList-box-left-bottom-left">
                                                <img :src="item.picImage" alt="">
                                            </div>
                                            <div class="tabList-box-left-bottom-right">
                                                <!-- <div class="tabList-box-left-top">
                                                   
                                                </div> -->
                                                    <!-- <span></span> -->
                                                
                                                <p class="tabList-box-left-bottom-right-p2"><span v-if="item.houseName">{{item.houseName}}</span>&nbsp;<span v-if="item.roomName">{{item.roomName}}房间</span></p>
                                                <p class="tabList-box-left-bottom-right-p1"><span v-if="item.signDateTime">{{item.signDateTime}}</span><span v-if="item.endDateTime">{{"—"+item.endDateTime}}</span></p>
                                                <p class="tabList-box-left-bottom-right-p3" v-if="item.rentPrice"><span>租金:{{item.rentPrice}}元月 |</span>&nbsp;<span v-if="item.amount">定金:{{item.amount}}元</span></p>
                                                <!-- <p class="tabList-box-left-bottom-right-p4" v-if="item.amount"></p> -->
                                            </div>
                                            <div class="tabList-box-right">
                                                <p>{{item.statusName}}</p>
                                            </div>
                                            <div class="tabList-box-right1" @click.stop="toSurrender(item.id)" v-if="!item.unRentId && istab !==0">
                                                <p>办理退租</p>
                                            </div>
                                             <div class="tabList-box-right1" @click.stop="toSurrender(item.unRentId,'detail')" v-if="item.unRentId && istab !==0">
                                                <p>退租详情</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- <div class="bottom">－　已经到最后了　－</div> -->
                            </div>
                        </swiper-item>
                    </swiper>
                </div>
            </div>
        </div>
        <ga-page-bottom></ga-page-bottom>
    </div>
</template>

<script>
   import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem ,InlineLoading} from 'vux'
   import PageHeader from '../../components/public/PageHeader';//导航

   const list = () => ['定金合同', '承租合同']
    export default {
        data() {
            return {
            	   noDataimg : 'https://img.guoanfamily.com/rent/static/HomePage/noDetailImg.png',

                parentMsg:"我的合同",
                //earnestShow: true
                list2: list(),
                loading:"加载中",//显示的标题
                loadings:true,//控制咯ading显示
                demo2: '美食',
                list3: ['收到的消息', '发出的消息'],
                demo3: '收到的消息',
                list4: ['正在放映', '即将上映'],
                demo4: '即将上映',
                demoDisabled: 'A',
                index: 0,
                tabListName:"合同编号:",//显示的定金合同和承租合同的名字
                isBack:true,//空置有无数据的背景图显示
                listbox:true,//没有数据不显示list列表
                tabList:[],//存储接口数据
                userId:'',
                androidOrIos:true,	//默认为安卓登录
                getBarWidth: function (index) {x
                    return (index + 1) * 22 + 'px'
                },
                istab:0,
                isiOs:false,
            }
        },
        components: {
            PageHeader,
            Tab,
            TabItem,
            Sticky,
            Divider,
            XButton,
            Swiper,
            SwiperItem,
            InlineLoading
        },
        created() {
           //this.userId = this.getStorage(this.KEYS.USER_INFO).id;
           //this.userId = '20f1565a-8a6f-486a-8730-84be8747aef9';
           this.Load();
           this.isIosAndroid();
           let u = navigator.userAgent;
           let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
            if(isiOS){
                this.isiOs = true;
            }
            if(this.$route.query.tab){
               
                this.istab =  parseInt(this.$route.query.tab);
                this.index =  parseInt(this.$route.query.tab);
            }
        },
        activated(){

        },
        deactivated(){

        },
        mounted() {

        },
        watch:{
            index:function(){
                this.loadings = true;//loading 图标
                this.isBack=false;//背景图片
                this.listbox = false;//列表数据
                // console.log(this.index)
                this.Load();
            }
        },
        methods: {
            //当没有约看的时候，点击背景图跳转到租房首页
			bgNewHome(){
				this.$router.push("/HomePage");
			},
            isIosAndroid(){
                
				//判断是安卓还是ios登录，定义到变量中
				if(this.isIosandroid()){
					//安卓
					this.androidOrIos = true; 
				}else{
					//ios
					this.androidOrIos = false; 
				}
				// console.log(this.AndroidOrIos());
			},
            skipClick(item){//跳转合同详情页面a
                // console.log(this.index)
                if(this.index == 1){
                    this.$router.push({path: '/DepositContract/Lessee', query:{id:item.id}})
                }else if(this.index == 0){
                    this.$router.push({path: '/MyContract/DepositContract', query:{id:item.id}})
                }

            },
            earnestClick(){//tab切换if用
                this.earnestShow = !this.earnestShow;
            },
            Homepage(){//跳转到首页

                this.$router.push('/Homepage')
            },
            ykList(){//跳转约看清单
                this.$router.push('/ykList')
            },
            tabClick(data){
                this.loadings = true;//loading 图标
                this.isBack=false;//背景图片
                this.listbox = false;//列表数据
                if(data=="定金合同"){
                    this.istab = 0;
                }else{
                    this.istab = 1;
                }
                this.Load();
            },
            //跳转退租解约
            toSurrender(id,type){
                if(type==='detail'){
                    this.$router.push({path:"/surrenderDetail",query:{id:id}})
                }else{
                    this.$router.push({path:"/applySurrender",query:{id:id}})
                }   
                
            },
            Load(){
                this.post('RentContractController/getContractList',{
                    'contractType':this.index+1
                }).then((res) =>{
                    this.isBack=false;//隐藏背景图片
                    var that = this;
                    // res = {"msg":"成功","pageCount":0,"code":0,"flag":false,"data":{"contractType":"2","rentContractList":[{"roomId":"BJGAJZF1510108986036","id":"BJGAJCF1532663405444","endDateTime":"2019.07.31","roomName":"B","signDateTime":"2018.08.01","houseId":"BJGAJFY1510108709351","houseName":"八家嘉园三居","statusName":"履行中","rentPrice":2710.0,"picImage":"20180413105426_62077713051644178.jpg"}],"userId":"82f9025d6ec741bc9bb4b223e92104f0"},"currentPageNo":0}
                    if(res.code === 0){
                        that.loadings = false;//loading 图标
                       // this.isBack=false;
                       // this.listbox = true;
                        if(res.data.contractType == 1){
                           this.listbox = true;//列表数据
                           res.data.depositList.forEach(item =>{
                                item.picImage = item.picImage ?this.concatFileUrl(item.picImage,200,200): 'https://img.guoanfamily.com/rent/static/HomePage/noDetailImg.png';
                           })
                            this.tabList=res.data.depositList;
                            this.tabListName = "合同编号:";
                        }else{
                            this.listbox = true;//列表数据
                            res.data.rentContractList.forEach(item =>{
                                item.picImage = item.picImage ?this.concatFileUrl(item.picImage,200,200): 'https://img.guoanfamily.com/rent/static/HomePage/noDetailImg.png';
                           })
                            this.tabList=res.data.rentContractList;
                            this.tabListName = "合同编号:";
                        }
                    }
                    if(res.code != 0){
                        this.loadings = false;//loading图标
                        this.isBack=true;//背景图片
                        this.listbox = false;//列表数据
                    }
                })
            }
        }
    }
</script>
