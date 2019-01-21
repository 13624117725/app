<style lang="scss" scoped>
        .surrender{
            font-size: 0.28rem;
            .height{
                width: 100%;
                height: 1.3rem;
            }
            .input{
                width: 6.8rem;
                height: 1rem;
                margin: 0 auto;
                border-bottom: 1px solid #cccccc;
                span{
                    float: left;
                    height: 1rem;
                    line-height: 1rem;
                    width: 1.2rem;
                    color:#000;
                    text-align: left;
                }
                input{
                    float: left;
                    height: 1rem;
                    width: 5.6rem;
                    list-style: none;
                    border: none;
                    text-align: right;
                }
                .date{
                    float: left;
                    height: 1rem;
                    width: 5.6rem;
                    line-height: 1rem;
                    padding:0px;
                }
                .amount{
                    // width: 2rem;
                    height: 0.5rem;
                    float:right;
                    background-color: #ccc;
                    padding: 0.05rem;
                    line-height: 0.5rem;
                    text-align: center;
                    border-radius: 0.05rem;
                    // cursor:pointer;
                    margin-top:0.25rem;
                    min-width: 1.2rem;
                }
            }
            .recommend-bottom{
                width: 100%;
                background: white;
                height: 1.1rem;
                box-sizing: border-box;
                .recommend-li2{
                    width: 50%;
                    float: left;
                    text-align: center;
                    line-height: 1rem;
                    background: #e34b3e;
                    font-size: 0.32rem;
                    color: white;

                }
                .recommend-li3{
                    box-sizing: border-box;
                    border-left:1px solid white;
                    background: #ccc;
                }

            }
            .message{
                width: 100%;
                height: 1rem;
                background-color: #f6f6f6;
                line-height: 1rem;
            
                h3{
                    width: 6.8rem;
                    margin:0 auto;
                    text-align: left;
                    font-weight: 700;
                    font-size: 0.32rem;
                }
            }
            .step{
                width: 6.8rem;
                margin:0 auto;
                height: 1.9rem;
                .one{
                    width: 1.45rem;
                    height: 100;
                    font-size: 0.12rem;
                    text-align: left;
                    float: left;
                    .circle{
                        display:inline-block;
                        width: 0.9rem;
                        height: 0.9rem;
                        background-color: #ccc;
                        border-radius: 50%;
                        float: left;
                        text-align: center;
                        line-height: 0.9rem;
                        color:#fff;
                        margin:0.3rem 0rem 0.2rem;
                        // margin-left: 0.1rem;
                        font-size: 0.42rem;
                    }
                    .circleone{
                        background-color: #ff0001;
                    }
                    .two{
                        background-color: #ff0001;
                    }
                    .three{
                        background-color: #ff0001;
                    }
                    .four{
                        background-color: #ff0001;
                    }
                    .five{
                        background-color: #ff0001;
                    }
                    .san{
                        display:inline-block;
                        float: left;
                        margin-top:50%;
                        margin-left: 0.25rem;
                        width:0;
                        height:0;
                        border-width:0.15rem 0 0.15rem 0.15rem;
                        border-style:solid;
                        border-color:transparent transparent transparent #ccc;/*透明 透明 透明 灰*/
                        // margin:40px auto;
                        // position:relative;
                    }
                }
            }
            @media only screen and (device-width: 375px) and (device-height:812px) and (-webkit-device-pixel-ratio:3) {
                .recommend-bottom {
                    height: 1.4rem;
                    // bottom: 0.1rem;
                }
            }
        }  
      
</style>
<template>
    <div class="surrender">
        <div class="height" v-if="!this.$store.state.showWxTitle"></div>
        <div class="step">
            <div class="one">
                <span class="circle" :class="{circleone:one}">1</span>
                <span class="san"></span>
                <div style="clear:both; "></div>
                <span>待处理</span>
            </div>
            <div class="one">
                <span class="circle" :class="{two:two}">2</span>
                <span class="san"></span>
                <div style="clear:both; "></div>
                <span>房管提交</span>
            </div>
            <div class="one">
                <span class="circle" :class="{three:three}">3</span>
                <span class="san"></span>
                <div style="clear:both; "></div>
                <span>风控审批</span>
            </div>
            <div class="one">
                <span class="circle" :class="{four:four}">4</span>
                <span class="san"></span>
                <div style="clear:both; "></div>
                <span>财务审批</span>
            </div>
            <div class="one" style="width:0.9rem;">
                <span class="circle" :class="{five:five}">5</span>
                <!-- <span class="san"></span> -->
                <div style="clear:both; "></div>
                <span>审批完成</span>
            </div>
        </div>
        <div class="message">
            <h3>个人信息</h3>
        </div>
        <div class="input">
            <span>姓名</span>
            <input type="text" placeholder="" v-model="form.ownerName"  readonly="true">
        </div>
        <div class="input">
            <span>手机号</span>
            <input type="text" placeholder="" v-model="form.ownerPhone" readonly="true">
        </div>
        <div class="input">
            <span>证件类型</span>
            <input type="text" placeholder="" v-model="IdCardName" readonly="true">
        </div>
        <div class="input" style="border:none;">
            <span>证件号码</span>
            <input type="text" placeholder="" v-model="form.bankUserIdCard" readonly="true">
        </div>
        <div class="message">
            <h3>房屋信息</h3>
        </div>
        <div class="input" style="border:none;">
            <span>物业地址</span>
            <input type="text" placeholder="" v-model="form.houseAddress" readonly="true">
        </div>
        <div class="message">
            <h3>解约信息</h3>
        </div>
        <div class="input">
            <span>申请日期</span>
            <input type="text" placeholder="" v-model="form.unRentDate" readonly="true">
             <!-- <datetime v-model="form.contentDate" format="YYYY-MM-DD" :placeholder="selectTime" class="date"></datetime> -->
        </div>
        <div class="input" style="border:none;">
            <span>解约信息</span>
            <input type="text" placeholder="" v-model="form.unrentRemark" readonly="true">
        </div>
        <div class="message">
            <h3>费用结算</h3>
        </div>
        <div class="input" style="border:none;">
            <span>结算费用</span>
            <p class="amount" @click="AmountClick">{{amountprice}}</p>
            <!-- <input type="text" placeholder="请输入姓名" v-model="form.realRefundAmount"> -->
        </div>
        <div class="recommend-bottom">
			<ul>
				<li class="recommend-li2" @click="submit('save')"><span>确认退租</span></li>
				<li class="recommend-li2 recommend-li3" @click="submit('back')"><span>拒绝退租</span></li>
			</ul>
		</div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                form:{
                    ownerName:"",
                    ownerPhone:"",
                    unrentRemark:"",
                    unRentDate:"",
                    houseAddress:"",
                    bankUserIdCard:"",
                    amountprice:"",
                },
                IdCardName:"身份证",
                unRentId:this.$route.query.id,
                amountprice:"查看",
                one:false,
                two:false,
                three:false,
                four:false,
                five:false,
                
            }
        },
        created(){
            this.getUnRentById()
        },
        mounted(){

        },
        methods:{
            getUnRentById(){ 
                this.post("unrentController/getUnRentById",{
                    id:this.unRentId
                }).then(res=>{
                    this.form = Object.assign(res.data);
                    let date = new Date(this.form.unRentDate)
                    let Str=date.getFullYear() + '-' +
                    (date.getMonth() + 1) + '-' + 
                    date.getDate()
                    this.form.unRentDate = Str;
                    var billStep = res.data.billStep.split(",")
                    billStep.forEach(item=>{
                        if(item=="0072001" || item=="0072002"){
                            this.one = true;
                        }else if(item=="0072004" || item=="0072005"){
                            this.two = true;
                        }else if(item=="0072006"){
                            this.three = true;
                        }else if(item=="0072007"){
                            this.four = true;
                        }else if(item=="0072008"){
                            this.five = true;
                        }
                    })
                })
            },
            AmountClick(){
                this.amountprice = this.form.realRefundAmount +'元';
            },
            submit(type){
                if(type==='save'){
                    if(this.form.billStep.indexOf("0072008")===-1){
                        this.$vux.confirm.show({
                            //title:"是否取消",
                            content:"退租流程还没审批完成请耐心等待!",
                            onCancel () {//取消执行
                            },
                            onConfirm () {//确定执行
                            }
                        })
                        return;
                    }
                    this.post("unrentController/confirm",{billStatus:'0072009',unRentId:this.unRentId}).then(res=>{
                        if(res.code==0){
                            this.$vux.confirm.show({
                                //title:"是否取消",
                                content:res.msg,
                                onCancel () {//取消执行
                                },
                                onConfirm () {//确定执行
                                }
                            })
                        }else{
                            this.$vux.confirm.show({
                                //title:"是否取消",
                                content:res.msg,
                                onCancel () {//取消执行
                                },
                                onConfirm () {//确定执行
                                }
                            })
                        }
                    })
                }else{
                    this.post("unrentController/confirm",{billStatus:'0072010',unRentId:this.unRentId}).then(res=>{
                        if(res.code==0){
                            this.$vux.confirm.show({
                                //title:"是否取消",
                                content:res.msg,
                                onCancel () {//取消执行
                                },
                                onConfirm () {//确定执行
                                }
                            })
                        }else{
                            this.$vux.confirm.show({
                                //title:"是否取消",
                                content:res.msg,
                                onCancel () {//取消执行
                                },
                                onConfirm () {//确定执行
                                }
                            })
                        }
                    })
                }
            }
        }
    }
</script>