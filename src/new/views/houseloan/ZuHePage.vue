<template>
  <div>
    <group v-show="!showRatePage">
      <x-input  title="商业贷款:"  placeholder="请输入贷款总额" v-model="sloanMoney">
        <span slot="right">万元</span>
      </x-input>
       <popup-picker  :data="sloanYearsList" title="商业贷款按揭年数:"  v-model="sloanYear" style="text-align:left">
      </popup-picker>
      <x-input  title="公积金贷款:"  placeholder="请输入贷款总额" v-model="gloanMoney">
        <span slot="right">万元</span>
      </x-input>
       <popup-picker  :data="gloanYearsList" title="公积金贷款按揭年数" v-model="gloanYear"  style="text-align:left">
      </popup-picker>
        <cell is-link @click.native="srateClick">
        <span slot="title"><span>商业利率:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{{sshowRate}}</span></span>
      </cell>
      <cell is-link @click.native="grateClick">
        <span slot="title"><span>公积金利率:</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{gshowRate}}</span></span>
      </cell>        
      <x-button type="warn" @click.native="caculateLoan">开始计算</x-button>
    </group>
    <MoneyRate v-show="showRatePage" class="payRate" @submit="RateSubmit" :baseRate="baseRate"></MoneyRate>
  </div>
</template>
<script>
import MoneyRate from "../../components/calculator/MoneyRate"
import {PopupPicker } from 'vux';
export default {
  components: {
    MoneyRate,
    PopupPicker
  },
  mounted(){
    let initalLoanYears=[];
    for (let i=1;i<31;i++){
      initalLoanYears.push(i+"年"+"("+i*12+"期)")
    }
    this.sloanYearsList.push(initalLoanYears);
    this.gloanYearsList.push(initalLoanYears);
  },
  data() {
    return {
      sloanMoney:'',
      gloanMoney:'',
      sloanYearsList:[],
      sloanYear:["20年(240期)"],
      gloanYearsList:[],
      gloanYear:["20年(240期)"],
      sshowRate:'4.90%',
      gshowRate:'3.25%',
      sactRate:'0.049',
      gactRate:'0.0325',
      showRatePage:false,
      baseRate:""
    };
  },
  methods:{
      caculateLoan() {
      let smonth = this.sloanYear[0].match(/\((\S*)\)/);			
      let smonths = smonth[1].substr(0,smonth[1].length-1);
      let gmonth = this.gloanYear[0].match(/\((\S*)\)/);			
      let gmonths = gmonth[1].substr(0,gmonth[1].length-1);
      this.$router.push({
        path: "/ZuhePayment",
        query: { 
        sloanMoney:this.sloanMoney,//商业贷款总额
        gloanMoney:this.gloanMoney,//公积金贷款总额
        smonths:smonths,//商业贷款年限
        gmonths:gmonths,//公积金贷款年限
        srate:this.sactRate,//商业贷款利率
        grate:this.gactRate,//公积金贷款利率
         }
      });
    },
    RateSubmit(showValue,actRate){
      this.showRatePage=false;
      this.actRate =actRate;
      if(this.baseRate == 4.90/100){
        this.sshowRate = showValue;
        this.sactRate = actRate
      }else if(this.baseRate == 3.25/100){
        this.gshowRate = showValue;
        this.gactRate = actRate;
      }
    },
    srateClick(){
      this.showRatePage = true;
      this.baseRate = 4.90/100;
    },
    grateClick(){
      this.showRatePage = true;
      this.baseRate = 3.25/100;
    },
  }
};
</script>
<style lang = 'less'>
.payRate{
  position: absolute;
  top:1.3rem;
  bottom: 0;
  background-color: #ffffff;
  .vux-x-input weui-cell{
    font-size: 14px;
  }
  .vux-x-input weui-cell{
    font-size: 14px;
    .weui-cell__hd{
      font-size: 14px;
    }
    .weui-cell__bd weui-cell__primary{
      font-size: 14px;
    }
  }
  
}
</style>
