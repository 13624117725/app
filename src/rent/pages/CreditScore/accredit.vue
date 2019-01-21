<style scoped lang="scss">
@import "../../style/theme.scss";
    .accredit{
        margin-top:1.3rem;
        .guoan-accredit{
            width:  100%;
            height: 5rem;
            background-color: #3ac2a6;
            overflow: hidden;
            .zhima-img{
                width: 60%;
                margin-left:20%;
                margin-top:0.3rem;
            }
        }
        .login_box {
            margin-bottom: .15rem;
            position: relative;
            .login_input {
                width: 90%;
                font: normal  "Microsoft YaHei";
                color: #fff;
                background: #35b198;
                padding: 0.25rem 0rem 0.25rem 0.14rem;
                border-radius: 0.1rem;
                border: none;
                font-size: 0.24rem;
                // line-height: 0.8rem;
            }
        }
        ::-webkit-input-placeholder {
            color: #ffffff;
        }

        :-moz-placeholder {
            color: #ffffff;
        }

        ::-moz-placeholder {
            color: #ffffff;
        }

        :-ms-input-placeholder {
            color: #ffffff;
        }
        .submit{
            position: absolute;
            bottom: 0rem;
            left: 0rem;
            font-size: 0.28rem;
            border:none;
            background-color: #e24e59;
            height: 1rem;
            line-height: 1rem;
            // margin-top:0.3rem;
            width: 100%;
            color:#fff;
            // border-radius: 0.1rem;
        }
    }
    .imgwex{
        margin-top: 0rem;
    }
</style>

<template>
    <div class="accredit" :class="{imgwex:isWex}">
        <div v-show="!this.$store.state.showWxTitle">
            <ga-page-header slot="header" title="有信用免押金"></ga-page-header>
        </div>
        <div class="guoan-accredit">
            <img src="../../../../static/rent/personalCenter/zhima_img11.png" class="zhima-img" alt="">
            <div class="login_box">
                <ul>
                    <li>
                        <input class="login_input" v-model="userName" placeholder="真实姓名" value="" type="text">
                    </li>
                    <li>
                        <input class="login_input" v-model="IdCard" placeholder="身份证号" value="" type="number">
                    </li>
                </ul>
            </div>
        </div> 
       <button class="submit"  @click="macbookClick">确定</button>
       <!-- <p>{{res2}}</p> -->
    </div>
</template>
<script>
import { Confirm } from 'vux'
    export default {
        data(){
            return{
                IdCard:"",
                userName:"",
                isWex:false,
                id:"",
                authToken:"",
                zhimahref:"",
                authId:"",
                res2:"",
            }
        },
        components: {
            Confirm,
        },
        created(){
            if(this.isECTouch()){
                 this.isWex = true;
            }
        },
        methods:{
            macbookClick(){
                if(this.IC(this.IdCard)){
                    console.log(123)
                    this.post("http://60.205.227.84:8101/common-credit/user-auth/add",{
                        "realName":this.userName,"idCard":this.IdCard
                    },{
                        interfaceType:"zhima"
                    }).then(res=>{
                        if(res.code==200){
                            this.authId = res.data.id;
                            this.getauth();
                        }else{
                            this.$vux.toast.show({
                                text: res.msg,
                                type: "text"
                            });
                        }
                        
                    })
                }else{
                    this.$vux.toast.show({
                        text: "身份证格式错误！",
                        type: "text"
                    });
                }
                
            },
            getauth(){
                this.post("http://60.205.227.84:8101/common-credit/user-auth/getUserAuthInfo",{
                   
                },{
                    interfaceType:"zhima"
                }).then(res=>{
                    if(res.code==200){
                        const authstring = res.data; // 后台生成的字符串
                        window.Alipay.auth(authstring, res1 => {  //cordova插件调起支付宝授权登录
                            
                            var theRequest = {};
                            var strs = res1.result.split("&");  
                            for(var i = 0; i < strs.length; i ++) {  
                                theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];  
                            }  
                            // this.res2 = res1;
                            if(res1.resultStatus==9000){
                                // this.setSession("authId",this.authId)
                                this.get("http://60.205.227.84:8101/common-credit/user-auth/callback?user_id="+theRequest.user_id+"&auth_user_id="+this.authId+"&auth_code="+theRequest.auth_code,{
                                    interfaceType:"zhima"
                                }).then(res2=>{
                                    this.post("http://60.205.227.84:8101/common-credit/getUserZMScore",{
                                        "transactionId":new Date().getTime(),
                                        "productCode":"w1010100100000000001",
                                        "authToken":res2.data.accessToken,
                                        "id":this.authId
                                    },{
                                        interfaceType:"zhima"
                                    }).then(res3=>{
                                        // this.res3 = res3.data;
                                        this.setSession("zmScore",res3.data.zmScore)
                                        this.$router.push({path:"/ZhiMa",zmScore:res3.data.zmScore});
                                    })
                                })
                                
                            }else{
                                this.$vux.toast.show({
                                    text: res1.msg,
                                    type: "text"
                                });
                            }
                        }, e => {
                            console.log(e);
                        });
                    }else{

                    }
                })
                
            },
        }
    }
</script>

