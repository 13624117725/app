<style scoped lang="scss">
     @import "../../style/theme.scss";
     $height: 0.7rem;
    .logo {
       
    }
    .top{
         height:0.8rem;
    }
    .house-list{
    	width: 100%;
    	height: 100%;
    }
    .houseContent {
        width:100%;
        
        background-color: #fff;
        position: relative;
        box-sizing: border-box;
        padding: 0 0.4rem 0.2rem;
        .houseId {
            height: 0.6rem;
            line-height: 0.6rem;
            margin: 0 auto;
            padding-top: 0.2rem;
            font-size:0.28rem;
          	color:black;
            .left {
                float:left;
                width: 1.8rem;
                text-align: left;
            }
            .right{
            	
                float:left;
                color: #999999;
            }
        }
        .chd {
            height: 0.6rem;
            line-height: 0.6rem;
            margin: 0 auto;
            font-size:0.28rem;
          	color:black;
            .left {
                float:left;
                width: 1.8rem;
                text-align: left;
            }
            .right{
            	width:4.5rem;
                height: 0.6rem;
                float:left;
                color: #999999;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                text-align:left;
                
            }
        }
        .chd .paycolor {
          color:#E45044;
          font-weight:bold;
        }
    }
    .stage {
        width:100%;
        height:1.1rem;
        line-height:1.1rem;
        box-sizing: border-box;
        padding: 0 0.4rem;
        background-color:#fff;
        .left {
        	width: 1.8rem;
            float:left;
            color: black;
            font-size: 0.28rem;
            font-size:0.28rem;
            text-align: left;
        }
        .right{
            float:left;
            font-size:0.28rem;
            color: #E45044;
            font-weight: bold;
        }
    }
    .number{
        width:100%;
        height:auto;
        line-height:1.3rem;
        background-color:#fff;
        padding:0.3rem 0;
        .content {
          
          .ulname {
            height:0.8rem;
            line-height:0.8rem;
            li {
              float:left;
              width:25%;
              box-sizing:border-box;
              height:0.75rem;
              line-height: 0.75rem;
              background-color:#E34B3E;
              text-align:center;
              color:#fff;
              font-size:0.28rem;
            }
            li:last-child {
              border:none;
            }
          }
          .ullist {
            height:0.8rem;
            line-height:0.8rem;
            li {
              float:left;
              width:25%;
              box-sizing:border-box;
              height:0.8rem;
              text-align:center;
              color:#999999;
              font-size:0.28rem;
            }
            li:last-child {
              border:none;
            }
          }
        }
    }
    .clear{
      clear:both;
    }
    .emptyios{
		height: 1.3rem;
	}
	.emptyandroid{
		height: 1.1rem;
	}
    .fixContent{
        background: #e8e8e8;
    }
</style>

<template>
    <div class="house-list fixContent" style="background: white;">
        <div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div>

        <!-- 支付详情 -->
        <div class="houseContent">
            <div class="houseId">
                <div class="left">合同编号：</div>
                <div class="right">{{saleContractId}}</div>
            </div>
            <div class="address chd">
                <div class="left">物业地址：</div> 
                <div class="right"><marquee style="height: 0.5rem;">{{houseAddress}}</marquee></div>
            </div>
            <div class="term chd">
                <div class="left">租金期数：</div>
                <div class="right">第{{number}}期</div>
            </div>
            <div class="rent chd">
                <div class="left">已交次数：</div>
                <div class="right">{{count}}次</div>
            </div>
            <div class="payMent chd">
                <div class="left">应缴金额：</div>
                <div class="right paycolor">￥{{planRent}}</div>
            </div>
            <div class="rent chd">
                <div class="left">已&nbsp;&nbsp;抵&nbsp;&nbsp;扣：</div>
                <div class="right paycolor">￥{{discount||0}}</div>
            </div>
            <div class="payMent chd">
                <div class="left">已使用红包：</div>
                <div class="right paycolor">￥{{couponsDiscount||0}}</div>
            </div>
        </div>
        <div style="height: 0.2rem;background: #EEEEEE;"></div>
        <!-- 已交金额 -->
        <div class="stage">
            <div class="left">已交金额:</div>
            <div class="right">{{realRent}}元</div>
            <div class="clear"></div>
        </div>
        <!-- 支付次数金额详情 -->
        <div class="number">
            <div class="content">
              <ul class="ulname">
                <li>支付次数</li>
                <li>支付金额</li>
                <li>支付日期</li>
                <li>支付状态</li>
              </ul>
              <ul class="ullist" v-for="(list,index) in receiptList" :key="index">
                <li>第{{list.receiptNo}}次</li>
                <li>￥{{list.realReceipt}}</li>
                <li>{{list.realReceiptDate != null ? list.realReceiptDate.replace(/-/g,'.') : ""}}</li>
                <li>{{list.receiptStatusName}}</li>
              </ul>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                receiptPlanId:this.$route.query.receiptPlanId,
                saleContractId:this.$route.query.saleContractId,//合同编号
                number:"",  //期数
                houseAddress:"",//物业地址
                planRent:"",//应缴金额
                realRent:"",//已交金额
                count:"",   //次数
                receiptList:[],//list
                androidOrIos:true,	//默认为安卓登录
                discount:"",//已抵扣
                couponsDiscount:"",//已使用红包
            }
        },
        components: {

        },
        created(){
            this.loadData();
            this.isIosAndroid();
        },
        mounted(){

        },
        methods: {
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
            loadData(){
                this.post("RentContractController/getPayReceiptList",{
                    receiptPlanId:this.receiptPlanId,
                    saleContractId:this.saleContractId,//当前第几页
                }).then(res =>{
                    this.number = res.data.receiptPlan.number;                    //第几期
                    this.houseAddress = res.data.contractInfo.houseAddress;       //物业地址
                    this.planRent = res.data.receiptPlan.planRent;                //应缴金额
                    this.realRent = res.data.receiptPlan.realRent;                //已缴金额
                    this.count = res.data.count;                                  //几次
                    this.receiptList = res.data.receiptList;                      //list
                    this.discount = res.data.receiptPlan.discount;//已抵扣
                    this.couponsDiscount = res.data.receiptPlan.couponsDiscount;//已使用红包
                    //this.saleContractId = res.data.contractInfo.saleContractId; //合同编号
                })
            }
        }
    }
</script>
