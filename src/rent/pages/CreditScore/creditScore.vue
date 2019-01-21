<style scoped lang="scss">
    @import "../../style/theme.scss";
    .credit{
        .credit-img{
            margin-top:1.3rem;
            .heard-img{
                background: url("../../../../static/rent/personalCenter/timg.jpg") no-repeat;
                width: 100%;
                height: 4rem;
                background-size: 100%;
                font-size: $littleFontSize;
                overflow: hidden;
                .guoan-credit{
                    width: 1rem;
                    height: 1rem;
                    line-height: 1rem;
                    text-align: center;
                    border-radius:50%;
                    border:2px solid #fff;
                    margin:0.3rem auto;
                    margin-bottom: 0.2rem;
                }
                p{
                    margin-top: 1rem;
                    color:#fff;
                }
            }
        }
        .isand{
            margin-top:1.5rem;
        }
        .imgwex{
            margin-top:0px;
        }
        .credit-details{
            margin-top:0.5rem;
            p{
                // text-indent: 2em;
                padding:0 0.5rem;
                font-size: $reminderFontSize;
                text-align:left;
            }
        }
        .credit-type{
            font-size: $reminderFontSize;
            padding:0 0.8rem;
            text-align: left;
            margin-top:0.5rem;
            h4{
                color:$mineColor;
            }
            .line{
                border:1px solid #000;
                width: 0.1rem;
                height: 0.02rem;
                background: #000;
                margin-bottom: 0.1rem;
            }
            .zhima{
                margin-bottom: 0.5rem;
            }
            .macbook{
                margin-bottom: 0.5rem;
            }
            .explain{
                line-height: 0.4rem;
            }
            p{
                line-height: 0.4rem;
            }
            h4{
                line-height: 0.4rem;
            }
        .button{
            width: 1.4rem;
            height: 0.6rem;
            line-height: 0.6rem;
            background-color: #e24e59;
            color:#fff;
            font-size: 0.24rem;
            border:none;
        }
        }
        .logo{
            width: 2.4rem;
            height: 0.8rem;
            background: url("../../../../static/rent/personalCenter/title-logo.png") no-repeat;
            background-size: 100%;
            margin:0.5rem 0.3rem;
        }
        
    }
</style>
<template>
    <div class="credit">
        <div v-show="!this.$store.state.showWxTitle">
            <ga-page-header slot="header" title="有信用免押金"></ga-page-header>
        </div>
        <div class="credit-img" :class="{imgwex:isWex,isand:isAnd}">
            <div class="heard-img">
                <!-- <div class="guoan-credit">{{zmScore}}</div> -->
                <p>国安家<br/>信用分</p>
            </div>
        </div>
        <div class="credit-details">
            <p>
                有信用、免押金。国安家信用分×××以上，可免押入住，国安家信用分是结合国安家用户行为（租住国安家房屋、国安家房东、购买金融产品等）综合计算出的结果。同时引入芝麻信用积分、小白信用。芝麻信用分大于×××、小白信用大于×××既可免押入住。反之芝麻信用分、小白信用不足，但结合"国安家用户行为"，国安家信用积分也是有可能大于×××分、并可免押入住。
            </p>
        </div>
        <div class="credit-type">
            <div class="zhima">
                <div class="line"></div>
                <h4>授权芝麻信用</h4>
                <p>芝麻分×××以上即可免押入住，小于×××分就要结合国安家用户行为，也是有可能免押入住的。而且可以有机会积累信用记录，提升芝麻分。</p>
                <button class="button" @click="zhimaClick">{{zhimaScore}}</button>
            </div>
            <div class="macbook">
                <div class="line"></div>
                <h4>授权小白信用</h4>
                <p>小白分×××以上即可免押入住，小于×××分就要结合国安家用户行为，也是有可能免押入住的。</p>
                <button class="button" @click="macbookClick">立即授权</button>
            </div>
            <div class="explain">
                <div class="line"></div>
                <h4>说明</h4>
                <ol>
                    <li>1.免押金上限为2000元，超出担保额度的房源暂无法免押。</li>
                    <li>2.如发生押金纠纷且需您赔付，按照约定您需要及时在线支付赔款。</li>
                    <li>3.如出现赔付逾期，小猪会将情况反馈至信用合作渠道，可能影响到您的个人征信。</li>
                </ol>
            </div>
        </div>
        <div class="logo"></div>
    </div>
</template>
<script>
import { XButton} from 'vux'
    export default {
        components: {
            XButton,
        },
        data(){
            return{
                isWex:false,
                isAnd:false,
                zmScore:0,
                zhimaScore:"立即授权"
            }
        },
        created(){
            if(this.isECTouch()){
                 this.isWex = true;
            }
             if(this.isIosandroid()){
                this.isAnd = true;
            }else{
                this.isAnd = false;
            }
            if(this.getSession("zmScore")){
                this.zhimaScore = "已授权"
            }
            // this.getAccredit()
        },
        methods:{
            zhimaClick(){
                this.$router.push({path:"/ZhiMa"})
            },
            macbookClick(){
                
            },
            // getAccredit(){
            //     if(this.getStorage("authId")){
            //         this.post("http://60.205.227.84:8101/common-credit/user-auth/getUser",{
            //             "userId":this.getSession("authId")
            //         },{
            //             interfaceType:"zhima"
            //         }).then(res=>{
            //             this.post("http://60.205.227.84:8101/common-credit/getUserZMScore",{
            //                "transactionId":new Date().getTime(),
            //                 "productCode":"w1010100100000000001",
            //                 "authToken":res.data.accessToken,
            //                 "id":this.getSession("authId")
            //             },{
            //                 interfaceType:"zhima"
            //             }).then(res1=>{
            //                 this.zmScore = res1.data.zmScore;
            //             })
            //         })
            //     }
            // }
        },
        computed:{

        }
    }
</script>