<template>
    <div class="RepairMyList" >
        <div class="pages" :class="[this.$store.state.showWxTitle? 'isAoI' : 'isBorwer']">
            <!-- 报修列表 -->
            <ul>
                <li v-for="(item,index) in resolute" :key="index">
                    <div class="topTitle">
                        <div class="icon">
                            <img :src="`https://img.guoanfamily.com/${item.itemCategory.itemImage}`" alt="">
                        </div>
                        <div class="name">
                            <span>{{item.oneLevleItem.oneLevleItemName}}类</span>
                            <span>{{item.AreaData.repairArea}}</span>
                            <span>{{item.itemCategory.twoLevleItemName}}</span>
                        </div>
                        <div class="closed" @click="remItem(index)"></div>
                    </div>
                    <div class="m_img clearfix">
                        <img class="my_img" @click="showImg(item.imgArr,i)" v-for="(its,i) in item.imgArr" :key="i" :src="`${its}?imageView2/0/w/100/h/100`" alt="">
                    </div>
                    <div class="marks">
                        {{item.ErrText}}
                    </div>
                </li>
            </ul>
            <!-- 住户信息 -->

                <!-- 住址 -->
            <div class="adressInfo">
                <div class="titles">
                    服务地址
                </div>
                <div class="adreess" v-if="houseAddress">
                    {{houseAddress}}
                </div>
            </div>

            <div class="adressInfo2">
                <div class="titles">
                    上门时间
                </div>
                <div class="repTime">
                    <popup-picker placeholder="选择上门时间" v-model="repTime" :data="titmeArr"></popup-picker>
                </div>
            </div>
            <div class="adressInfo2">
                <div class="titles">
                    联系电话
                </div>
                <div class="repTime">
                    <x-input  mask="99999999999" placeholder="请输入电话号" v-model="telNum" :max="13" is-type="china-mobile"></x-input>
                </div>
            </div>
        </div>
        <div class="datasave" @click="submit">
            确认提交订单
        </div>
        <div v-transfer-dom>
            <previewer :list="preImg" ref="previewer2" ></previewer>
        </div>
    </div>
</template>

<script>
    import { PopupPicker,TransferDom  } from 'vux'
    import Previewer from "../../components/previewer";
    import dayjs from 'dayjs'
    export default {
        data() {
            return {
                repTime:[],
                titmeArr:[[],[" 9:00-12:00"," 13:00-17:00"," 18:00-20:00"]],
                telNum:"13624117725",
                houseAddress:"",
                resolute:[],
                preImg:[]//放大组件
            }
        },
        created() {
            this.makeDate();
            let userPhone = localStorage.getItem('userPhone');
            if(userPhone){
                this.telNum = userPhone
            }
        },
        mounted() {
            this.getLocal()
            this.resolute = this.$store.state.RepairMyList.resolute

        },
        methods: {
            makeDate(){
                let mDate = Date.parse(new Date());
                let Arr = []
                for(let i=0;i<7;i++){
                    let mDateT = new Date(mDate)
                    let mtoDay = mDateT.Format('yyyy.MM.dd')
                    Arr.push(mtoDay)
                    mDate+=86400000
                }
                this.titmeArr[0] = Arr
            },
            getLocal(){
                this.post(`RepairOrderController/getRepairHouseAddress`,{}).then(res=>{
                    if(res.code==0){
                        this.houseAddress = res.data.houseAddress
                    }
                })
            },
            // 删除单项
            remItem(i){
                this.resolute.splice(i,1);
            },
            showImg(arr,n){
                this.preImg = []
                arr.forEach(item=>{
                    let obj = {} ;
                    obj.src = item;
                    this.preImg.push(obj)
                })
                let timer = setTimeout(()=>{
                    this.$refs.previewer2.show(n);
                    window.clearTimeout(timer)
                },200)
            },
            submit(){
                let postData = {
                    repairOrderItemsEntities:[]
                }
                this.resolute.forEach(result=>{
                    let RepairData = {
                        "faultArea": result.AreaData.code ,
                        "images": result.imgArr,
                        "itemCategory": result.itemCategory.itemNumber,
                        "oneLevelNumber":result.oneLevleItem.oneLevleItemNumber,
                        "remark":result.ErrText
                    }
                    postData.repairOrderItemsEntities.push(RepairData);
                })
                if(this.repTime.length<2){
                    this.$vux.toast.show({
                        text: '请选择上门时间',
                        type: "text",
                        width:'4em'
                    });
                    return false
                }
                let sthour = this.repTime[1].split("-")[0]
                let endhour = this.repTime[1].split("-")[1]
                let startDate =this.repTime[0]+sthour;
                let endDate =this.repTime[0]+" "+endhour;
                endDate = dayjs(endDate.replace(/\./g,"/")).valueOf();
                startDate = dayjs(startDate.replace(/\./g,"/")).valueOf();
                postData.repairOrderEntity = {
                    "customerPhone": this.telNum,
                    "endDate":endDate,
                    "houseAddress": this.houseAddress,
                    "startDate": startDate
                }
                this.post(`RepairOrderController/saveRepairOrder`,postData).then(res=>{
                    if(res.code==0){
                        this.$store.state.RepairMyList.resolute = []
                        this.$router.go(-1)
                    }
                })
            }
        },
        directives: {
            TransferDom
        },
        components: {
            PopupPicker,
            Previewer
        }
    }
</script>

<style scoped lang="less">
.RepairMyList{
    font-size: 0.3rem;
    position: fixed;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    .pages{
        padding: 0.3rem;
        padding-bottom: 1.3rem;
        &.isBorwer{
            padding-top:1.6rem;
        }
        .topTitle{
            height: 1rem;
            padding-top:.1rem;
            .icon{
                width: .9rem;
                height: .9rem;
                float: left;
                img{
                    vertical-align: top;
                    width: 100%;
                }
            }
            .name{
                font-size: .36rem;
                color: #000;
                float: left;
                padding-left:.3rem;
            }
            .closed{
                width: .5rem;
                height: .5rem;
                background: url("../../../../static/rent/img/clear1.png") center no-repeat/100% 100%;

                float: right;
                border-radius: 50%;
            }
        }
        .m_img{
            .my_img{
                float: left;
                width: .9rem;
                height: .9rem;
                margin-right: .2rem;
                margin-top: .2rem;
            }
        }
        .marks{
            margin-top: .2rem;
            width: 80%;
            text-align: left;
            height: .6rem;
            line-height: .6rem;
            font-size: .32rem;
            color: #999;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap
        }
        .adressInfo{
            padding: .3rem 0 .15rem 0;
            margin-top: .3rem;
            border-top:1px solid #ccc;

        }
        .adressInfo2{
            padding: .3rem 0;
            border-top:1px solid #ccc;
        }
        .titles{
            color: #999;
            text-align: left;
            font-size: .32rem;
            line-height: .5rem;
        }
        .adreess{
            margin-top: .08rem;
            font-size: .32rem;
            line-height: .5rem;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space:nowrap
        }
        .repTime{
            margin-top: .08rem;

            height: .5rem;
        }

    }
    .datasave{
        height: 1rem;
        width: 100%;
        background-color: #E34B3E;
        position: fixed;
        bottom: 0;
        left: 0;
        line-height:  1rem;
        font-size: .36rem;
        color: #fff;
    }

}
</style>
<style lang="less">
    .RepairMyList{
        .repTime{
            .weui-cell{
                padding: 5px 0px;
                .vux-popup-picker-select{
                    text-align: left !important;
                    .vux-cell-value{
                        font-size:.32rem;
                        color:#333;
                    }
                }
                .weui-input{
                    height: .5rem;
                    line-height: .5rem;
                    font-size:.32rem;
                }
            }
            // text-align: left;

        }
    }
</style>