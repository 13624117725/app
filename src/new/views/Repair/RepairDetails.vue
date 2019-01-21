<template>
   <div class="RepairDetails">
        <div class="pages" :class="[this.$store.state.showWxTitle? 'isWx' : 'isAoI']">
            <div class="orderitem" v-for="(item, i) in itemList" :key="i">
                <div class="itemtop clearfix">
                    <img class="timg" :src="'https://img.guoanfamily.com/' + item.itemImage" alt="">
                    <p class="ptitle">
                        <span>{{item.categoryName}}</span>
                        <span>{{item.faultArea}}</span>
                        <span>{{item.itemName}}</span>
                    </p>
                </div>
                <div class="itemcenter clearfix">
                    <div class="cli" v-for="(Item,I) in item.itemImagePath" :key="I">
                        <img class="timg" style="margin-bottom:.2rem" :src="Item" alt="">
                    </div>
                </div>
                <div class="itembtm">
                    问题描述: {{item.remark}}
                </div>
            </div>
            <div class="detailinfo">
                <div class="infop">
                    <span>服务地址 </span>
                    {{houseAddress}}
                </div>
                 <div class="infop">
                    <span>上门时间 </span>
                    {{startAEndDDate}}
                </div>
                 <div class="infop">
                    <span>联系电话 </span>
                    {{customerPhone}}
                </div>
                 <div class="infop">
                    <span>维修订单 </span>
                    {{orderId}}
                </div>
            </div>
            <div class="btn_box">
                <div class="btn" @click="handleCancel" v-if="$route.query.Status=='已提交'">取消订单</div>
            </div>
        </div>
   </div>
</template>

<script>

export default {
  data() {
    return {
        orderId: '', //维修订单ID
        itemList:[
            {
                itemImage: '',
                furnitures:['电器', '家具', '桌子',],
                imgList: [
                ],
                remark: ''
            },
        ],
        houseAddress: '',
        startDate: '',
        endDate: '',
        startAEndDDate:"",
        customerPhone: '',
        orderId: ''
    }
  },
  methods: {
    // 取消订单
    handleCancel() {
        const _this = this // 需要注意 onCancel 和 onConfirm 的 this 指向
        this.$vux.confirm.show({
            // 组件除show外的属性
            content: '确定删除订单',
            onCancel () {

            },
            onConfirm () {
                _this.post('RepairOrderController/deleteRepairOrderById', {"orderId":_this.orderId})
                .then((res) => {
                    if(res.code == 0) {
                        _this.msgalert('删除成功！')
                        _this.$router.push('/maintenancelist')
                    }else{
                        _this.msgalert(res.msg + '!')
                    }
                })
            }
        })

    },
    msgalert(msg) {
      this.$vux.toast.show({
        text: msg,
        type: "text"
      });
    },
    //　获取订单信息
    getRepairInfo() {
        this.post('RepairOrderController/getOneRepairOrder',{"orderId":this.orderId})
        .then((res) => {
            if(res && res.data) {
                this.itemList = res.data
                this.itemList.forEach((item, i) => {
                    this.itemList[i].itemImagePath = item.itemImagePath.split(',');
                    this.itemList[i].itemImagePath.forEach(items=>{
                        if(items.indexOf('http')==-1){
                           items =  'https://img.guoanfamily.com/'+items
                        }
                    })

                    this.itemList[i].itemImage = item.itemImage || '20090520/1242397_100025082_2.jpg'

                })
                this.houseAddress = res.data[0].houseAddress
                this.startAEndDDate = res.data[0].startAEndDDate
                this.customerPhone = res.data[0].customerPhone
                this.orderId = res.data[0].orderId
                this.endDate = res.data[0].endDate
            }
        })
    }
  },
  mounted() {
    this.orderId = this.$route.query.orderId || 'WX20181213000001'
    // if(this.orderId) {
        this.getRepairInfo()
    // }
  },
};
</script>

<style scoped lang="less">
.clearfix {
    zoom: 1;
}

.clearfix:after {
    content: "\00A0";
    display: block;
    visibility: hidden;
    width: 0;
    height: 0;
    clear: both;
    font-size: 0;
    line-height: 0;
    overflow: hidden;
}
.RepairDetails {
  height: 100%;
  .pages{
    font-size: 14px;
    padding: 0.4rem;
    padding-bottom:1rem;
    &.isWx{
        padding-top:0.6rem;
    }
    &.isAoI{
        padding-top:1.6rem;

    }
    .orderitem{
        padding-top: .4rem;
        padding-bottom: .2rem;
        // height: 1.5rem;
        .itemtop{
            height: .9rem;
            .ptitle{
                float: left;
                span{
                    display: inline-block;
                    margin-right: .3rem;
                    line-height: .48rem;
                    font-size: .32rem;
                    color: #000
                }
            }
        }
        .itemcenter{
            width: 90%;
            padding-top: .2rem;
        }
        .itembtm{
            padding-top: .02rem;
            line-height: .4rem;
            // height: .28rem;
            color: #999;
            text-align: left;
            // overflow:hidden;
            // text-overflow:ellipsis;
            // white-space:nowrap
        }
        .timg{
            float: left;
            width: .9rem;
            height: .9rem;
            margin-right: .24rem;
        }

    }
  }
  .detailinfo{
      border-top: 1px solid #ccc;
      padding-top: .18rem;
      font-size: .28rem;
      padding-bottom: .6rem;
      margin-top: .4rem;
      .infop{
            line-height: .68rem;
            color: #333;
            text-align: left;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            span{
                color: #999;
                padding-right: .25rem;
            }

      }
  }
  .btn_box {
    height: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    .btn {
      width: 100%;
      height: 1rem;
      float: left;
      color: #fff;
      font-size: 0.36rem;
      line-height: 1rem;
      background-color: #666666;
    }
  }
}
</style>
