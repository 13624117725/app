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
                //   line-height: 1rem;
                  width: 5.6rem;
                  list-style: none;
                  border: none;
                  text-align: right;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  padding:0 0.1rem;
                  font-size: 0.28rem;
                  letter-spacing:0.5px;
              }
              .date{
                  float: left;
                  height: 1rem;
                  width: 5.6rem;
                  line-height: 1rem;
                  padding:0px;
              }
          }
          .message{
                width: 100%;
                height: 1rem;
                margin-top: 0.5rem;
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
          .payBtn {
            width: 100%;
            background: white;
            color: white;
            font-size: 0.28rem;
            text-align: center;
            margin-top:0.4rem;
            .payBtn-inner{
                height: 1rem;
                line-height: 1rem;
                background: #e34b3e;
            }
        }
        @media only screen and (device-width: 375px) and (device-height:812px) and (-webkit-device-pixel-ratio:3) {
            .payBtn {
                margin-bottom:0.4rem;
            }
        }
      }  
      
</style>
<template>
    <div class="surrender">
        <div class="height" v-if="!this.$store.state.showWxTitle"></div>
        <div class="input">
            <span>姓名</span>
            <input type="text" placeholder="请输入姓名" v-model="form.bankUserName" maxlength="12" @input="inputChange" ref="input">
        </div>
        <div class="input">
            <span>身份证</span>
            <input type="text" placeholder="请输入身份证" v-model="form.bankUserIdCard" maxlength="18">
        </div>
        <div class="input">
            <span>开户行</span>
            <input type="text" placeholder="请输入开户行" v-model="form.bankName" maxlength="32">
        </div>
        <div class="input">
            <span>银行账号</span>
            <input type="text" placeholder="请输入银行账号" v-model="form.bankCard" maxlength="32">
        </div>
        <div class="input">
            <span>搬离日期</span>
            <!-- <input type="text" placeholder="请输入搬离日期" v-model="form.name"> -->
             <datetime v-model="form.leaveDate" format="YYYY-MM-DD" :placeholder="selectTime" class="date"></datetime>
        </div>
        <div class="input">
            <span>退租原因</span>
            <input type="text" placeholder="请输入退租原因" v-model="form.unrentRemark" maxlength="200">
        </div>
        <div class="message">
            <h3>基本信息</h3>
            
        </div>
        <div class="input">
            <span>姓名</span>
            <input type="text" placeholder="" v-model="form.ownerName" readonly="true" >
        </div>
        <div class="input">
            <span>电话</span>
            <input type="text" placeholder="" v-model="form.ownerPhone" readonly="true" >
        </div>
        <div class="input">
            <span>起租日期</span>
            <input type="text" placeholder="" v-model="form.startDate" readonly="true" >
        </div>
        <div class="input">
            <span>房间地址</span>
            <input type="text" placeholder="" v-model="form.houseAddress" readonly="true" >
        </div>
        <div class="input">
            <span>房间号</span>
            <input type="text" placeholder="" v-model="form.roomName" readonly="true" >
        </div>
        <div class="input">
            <span>房间价格</span>
            <input type="text" placeholder="" v-model="form.rentPrice" readonly="true" >
        </div>
        <div class="input" style="border:none;">
            <span>申请日期</span>
            <input type="text" placeholder="" v-model="form.unRentDate" readonly="true" >
            <!-- <datetime v-model="form.contentDate" format="YYYY-MM-DD" :placeholder="selectTime" class="date"></datetime> -->
        </div>
        <div class="payBtn" @click="tojy">
			<div class="payBtn-inner">
				提交申请
			</div>

		</div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                selectTime: '选择搬离时间',
                id:this.$route.query.id,
                form:{
                    ownerName:"",
                    ownerPhone:"",
                    startDate:"",
                    houseAddress:"",
                    roomName:"",
                    unrentRemark:"",
                    rentPrice:"",
                    unRentDate:"",
                    contentDate:"",
                    bankUserName:"",  //开户行姓名
                    bankUserIdCard:"", //银行卡身份证
                    bankName:"",   //开户行
                    bankCard:"",   //银行卡号
                    leaveDate:"",
                    
                }
                
            }
        },
        created(){
            
        },
        mounted(){
            this.getUnRentBySaleContractId();
            // var sel = window.getSelection();
            // sel.collapse(this.$refs.input, 0);
        },
        methods:{
            inputChange(val) {
                // // console.log(val)
                //  if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
                //     // var range = document.createRange();
                //     // range.selectNodeContents(val.srcElement,10);
                //     // range.collapse(true);
                //     var sel = window.getSelection();
                //     sel.collapse(val.srcElement, 0);
                //     // sel.addRange(range);
                // } else if (typeof document.body.createTextRange != "undefined") {
                //     var textRange = val.createTextRange();
                //     textRange.moveStart('character',val.target.value.length+2); //设置开头的位置
                //     textRange.collapse(true);
                //     textRange.select();
                // }
            },
            tojy(){
                if(!this.form.bankUserName){
                    this.$vux.confirm.show({
                        //title:"是否取消",
                        content:"请输入姓名",
                        onCancel () {//取消执行
                        },
                        onConfirm () {//确定执行
                        }
                    })
                    return;
                }else if(!this.form.bankUserIdCard){
                    this.$vux.confirm.show({
                        //title:"是否取消",
                        content:"请输入身份证号",
                        onCancel () {//取消执行
                        },
                        onConfirm () {//确定执行
                        }
                    })
                    return;
                }else if(!this.IC(this.form.bankUserIdCard)){
                    this.$vux.confirm.show({
                        //title:"是否取消",
                        content:"身份证号码格式错误",
                        onCancel () {//取消执行
                        },
                        onConfirm () {//确定执行
                        }
                    })
                    return;
                }else if(!this.form.bankName){
                    this.$vux.confirm.show({
                        //title:"是否取消",
                        content:"请输入开户行",
                        onCancel () {//取消执行
                        },
                        onConfirm () {//确定执行
                        }
                    })
                    return;
                }else if(!this.form.bankCard){
                    this.$vux.confirm.show({
                        //title:"是否取消",
                        content:"请输入银行账号",
                        onCancel () {//取消执行
                        },
                        onConfirm () {//确定执行
                        }
                    })
                    return;
                }else if(!this.form.leaveDate){
                    this.$vux.confirm.show({
                        //title:"是否取消",
                        content:"请输入搬离日期",
                        onCancel () {//取消执行
                        },
                        onConfirm () {//确定执行
                        }
                    })
                    return;
                }else if(!this.form.unrentRemark){
                    this.$vux.confirm.show({
                        //title:"是否取消",
                        content:"请输入退租原因",
                        onCancel () {//取消执行
                        },
                        onConfirm () {//确定执行
                        }
                    })
                    return;
                }
                this.post("unrentController/save",Object.assign(this.form,{
                    saleContractId:this.id
                })).then(res=>{
                    if(res.code===0){
                        this.$router.push({path:"/MyContract",query:{tab:1}});
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
            },
            getUnRentBySaleContractId(){
                this.post("/unrentController/getUnRentBySaleContractId",{
                    saleContractId:this.id
                }).then(res=>{
                    if(res.code===0){
                        this.form = Object.assign(res.data);
                        var myDate = new Date();
                        myDate.getFullYear();    //获取完整的年份(4位,1970-????)
                        myDate.getMonth();       //获取当前月份(0-11,0代表1月)
                        myDate.getDate();        //获取当前日(1-31)
                        this.form.unRentDate = myDate.getFullYear() + '-'+( myDate.getMonth()+1)+'-'+myDate.getDate();
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
                
            },
        },
        watch:{
            'this.form.bankUserName':()=>{
                console.log(1111)
            }
        }
    }
</script>