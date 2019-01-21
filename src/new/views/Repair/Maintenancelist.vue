<template>
  <div class="fixContent">
  <IosorAndroid></IosorAndroid>
  <div class = "list" :class="[this.$store.state.showWxTitle? 'isWx' : 'isAoI']">
 		<scroller
			class="scroller"
            :on-refresh="refresh"
            :on-infinite="infinite"
            v-show = "scrollerShow"
        >
		    <div class="listContent" :class="{wxListContent:this.$store.state.showWxTitle}">
		      <div class="listDiv" :key="index" v-for="(item,index) in maintenanceList" @click="listClick(item.orderId,item.orderStatusContent)">
		        <div class="list_top">
		          <div>维修单号：{{item.orderId}}</div>
		          <div>{{item.orderStatusContent}}</div>
		        </div>
		        <div class="list_content" :key="index" v-for="(items,index) in item.list">
		          <div class="list_content_Info">
		          	<div class="list_content_info_img" v-if = "items.itemImage!=null" :style="{backgroundImage:`url(https://img.guoanfamily.com/${items.itemImage})`}"></div>
		          	<div class="list_content_info_img" v-else :style="{backgroundImage:`url(https://media.guoanfamily.com/rent/static/HomePage/noimgAPP.jpg)`}"></div>

		            <div class="list_content_infomation">
		              <div>{{item.categoryName}}&nbsp;&nbsp;{{items.faultArea}}&nbsp;&nbsp;{{items.itemName}}</div>
		              <div>问题描述：{{items.remark}}</div>
		            </div>
		          </div>
		        </div>
		        <div class="list_bottom">
		          <div v-if="item.orderStatusContent !== '已维修'">预计上门时间:{{item.startAndEndDate}}</div>
		          <div v-if="item.orderStatusContent == '已维修'">已于{{item.finishDate}}完成订单</div>
		          <button class="list_bottom_btn" v-if="item.orderStatusContent == '已提交'" @click.stop="quitClick(item.orderId,index)">取消订单</button>
		        </div>
		      </div>
		    </div>
    </scroller>
    </div>
    <div class = "guarantee" @click="goRepair">我要报修</div>
    <div class="noData" v-show = "imgShow">
			<!--<img src="../../../../static/new/img/noData.png"/>-->
		</div>
  </div>
</template>

<script>
import IosorAndroid from "../../components/IosorAndroid"; //引入导航栏
import dayjs from "dayjs"; //引入时间处理方法
export default {
  components: {
    IosorAndroid
  },
  data() {
    return {
      maintenanceList: [],
      currentPageNo:"1",
      totalPageNo:"",//总页数
			yesno:false,//第一次加载时禁止上拉
			imgShow:false,
			scrollerShow:false
    };
  },
  methods: {
    //  加载列表
    loadList() {
      let url = `RepairOrderController/getRepairItemsList`;
      let post_data = {
      	"currentPageNo":this.currentPageNo,
				"pageCount":""
      };
     return  this.post(url, post_data).then(res => {
        if (res.code == 0) {
          if (res.data.content.length > 0) {
          	this.scrollerShow = true;
          	this.imgShow = false;

					this.totalPageNo = res.data.totalPageNo;
          res.data.content.map((item,index)=>{
          	this.yesno = true;
          	item.list.map((its,indexs)=>{
          		if(its.InDoorTimeStart){
          			its.InDoorTimeStart = dayjs(its.InDoorTimeStart).format("YYYY.MM.DD");
          		}else{
          			its.InDoorTimeStart = "";
          		}
          		if(its.InDoorTimeEnd){
          			its.InDoorTimeEnd = dayjs(its.InDoorTimeEnd).format("YYYY.MM.DD");
          		}else{
          			its.InDoorTimeEnd = "";
          		}

          	})
          	this.maintenanceList.push(item)
          })
          }else{
          	this.scrollerShow = false;
            this.imgShow = true;
          }
        }else{
          this.scrollerShow = false;
          this.imgShow = true;
        }
      });
    },
    //  取消订单
    quitClick(item,index) {
    	let url = `RepairOrderController/deleteRepairOrderById`;
      let post_data = {
        orderId: item
      };
      let  that = this;
			this.$vux.confirm.show({
				//title:"是否取消",
				content:"是否需要取消该订单",
				onCancel () {//取消执行
				},
				onConfirm (e) {//确定执行
					 that.post(url, post_data).then(res => {
		        if (res.code == 0) {
		//        this.loadList();
							that.maintenanceList.splice(index,1);
		          that.msgalert("取消订单成功");
		          if(that.maintenanceList.length === 0){
								that.scrollerShow = false;
            		that.imgShow = true;
							}
		        }
		      });
				}
			})

    },
    // 详情页跳转
    listClick(item,orderStatusContent) {
      this.$router.push({
        path: "/RepairDetails",
        query: { orderId: item,Status:orderStatusContent }
      });
    },
    // 消息提示框
    msgalert(msg) {
      this.$vux.toast.show({
        text: msg,
        type: "text"
      });
    },
    //跳转我要报修
    goRepair(){
    	  this.$router.push({
        path: "/Repair",
      });
    },
    refresh(done){
				this.yesno=false;
				this.maintenanceList = [];
				this.currentPageNo = "1";
				this.loadList().then((res)=>{
             done(res)
				})
    },
    infinite(done){
    	let that = this;
			if(this.yesno == true){
				done(true);
				if(this.currentPageNo<this.totalPageNo){
					this.currentPageNo++;
					that.loadList().then((res)=>{
						done(res)
					})
				}
				if(this.currentPageNo===this.totalPageNo){
						this.scrollerShow = true;
            this.imgShow = false;
				}
			}else{
				done(true);
				return;
			}
    },
  },
  created(){

  },
  mounted() {
    var orderHight = document.body.clientHeight
    if(this.$store.state.showWxTitle){
    	 document.querySelector(".list").style.height = (orderHight/100)*100+"px";
    }else{
    	 document.querySelector(".list").style.height = (orderHight/100-1.2)*100+"px";
    }

    this.loadList();
  }
};
</script>

<style lang='less' scoped>
.market1 {
  width: 100%;
  height: 80%;
  background: url("../../../../static/rent/img/noData.jpg") no-repeat 50% 40%;
  background-size: 70%;
  opacity: 0.8;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  margin: auto;
  z-index: 11;
}
.listContent {

  margin: auto;
  overflow-y: auto;
  //   background: yellow;
  &.wxListContent {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    // background: yellow;
  }
  .listDiv {
    width: 94%;
    // height: 5rem;
    margin-left: 3%;
    box-shadow: #cccccc 0px 0px 0.3rem;
    margin-top: 0.2rem;
    .list_top {
      width: 94%;
      height: 0.8rem;
      margin-left: 3%;
      border-bottom: 1px solid #ccc;
      div {
        float: left;
      }
      div:nth-child(1) {
        width: 75%;
        height: 100%;
        line-height: 0.8rem;
        font-size: 0.28rem;
        color: #999999;
        text-align: left;
      }
      div:nth-child(2) {
        width: 25%;
        height: 100%;
        line-height: 0.8rem;
        float: right;
        text-align: center;
        font-size: 0.28rem;
        color: #999999;
      }
    }
    .list_content {
      width: 94%;
      margin: 0 auto;
      height: auto;
      .list_content_Info {
        width: 100%;
        height: 1.5rem;
        display: flex;
        flex-direction: row;
        .list_content_info_img {
          flex: 1;
          background-size: 90%;
          background-repeat: no-repeat;
          background-position: center;
          margin-left: 0.2rem;
        }
        .list_content_infomation {
          flex: 4.5;
          margin-left: 0.2rem;
          display: flex;
          flex-direction: column;
          width: 0;
          div {
            flex: 1;
            height: 0.75rem;
          }
          div:nth-child(1) {
            width: 100%;
            font-size: 0.32rem;
            color: #000;
            line-height: 0.9rem;
            text-align: left;
          }
          div:nth-child(2) {
            width: 100%;
            font-size: 0.28rem;
            color: #999999;
            line-height: 0.65rem;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
    .list_bottom {
      width: 94%;
      height: 0.87rem;
      margin-left: 3%;
      margin-bottom: 0.2rem;
      border-top: 1px solid #ccc;
      position: relative;
      div {
        float: left;
      }
      div:nth-child(1) {
        width: 75%;
        height: 100%;
        line-height: 0.87rem;
        font-size: 0.28rem;
        color: #999999;
        text-align: left;
      }
      div:nth-child(2) {
        width: 75%;
        height: 100%;
        line-height: 0.87rem;
        font-size: 0.28rem;
        color: #999999;
        text-align: left;
      }
      .list_bottom_btn {
        width: 1.4rem;
        height: 0.52rem;
        background: #999999;
        color: #fff;
        font-size: 0.24rem;
        line-height: 0.52rem;
        border: none;
        text-align: center;
        border-radius: 0.05rem;
        position: absolute;
        right: 0.1rem;
        top: 0.15rem;
      }
    }
  }
}
.guarantee{
	width: 100%;
	position: absolute;
	bottom:0;
	left: 0;
	height: 1rem;
  line-height: 1rem;
	background: #e34b3e;
	font-size: 0.32rem;
	color:#FFFFFF;
	z-index: 12;
}
.fixContent{
	width: 100%;
	overflow-y: hidden !important;
}
.list{
	overflow: hidden;
	height: 100%;
  position: relative;
  &.isWx{
   /* margin-top: 0.3rem;*/
  }
  &.isAoI{
    margin-top: 1.3rem;

  }
}
.noData{
		width: 100%;
    height: 100%;
    background: url(../../../../static/new/img/noData.png) no-repeat 50% 20%;
    background-size: 70%;
    opacity: 0.8;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 17%;
    right: 0;
    margin: auto;
    z-index: 11;
	}
	.scroller{
		z-index: 0;
	}
</style>
