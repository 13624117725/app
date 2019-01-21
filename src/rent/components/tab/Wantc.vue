<style scoped lang="scss">
    @import "../../style/theme.scss";
    @import "../../style/public.scss";
    .content {
      width:100%;
      height: 100%;
      background-color: white;
    }
    .ts {
      width:6.9rem;
      margin: auto;
      background-color:#fff;
      text-indent:0.1rem;
      text-align: left;

      .tsxq {
      	width: 6.9rem;
      	margin: auto;
      	height: 0.9rem;
      	line-height: 1.1rem;
        font-size:0.32rem;
        color: black;
      }
    }
    .tsnr {
      width:6.9rem;
      margin: auto;
      background-color:#fff;
      textarea {
      	width: 100%;
        font-size:0.25rem;
        margin:0 auto;
        display:block;
        padding:0.2rem;
        outline:none;
        resize:none;
        height: 2.4rem;
        border-radius:0.12rem;
        background: #eeeeee;
        border: 0;
        line-height: 0.4rem;
      }
    }
    .tslxfs {
      width:100%;
      height:0.7rem;
      line-height:0.7rem;
      background-color:#fff;
      text-indent:0.8rem;
      margin-top:0.4rem;
      position:relative;
      .tsxq {
        font-size:0.22rem;
        color:$partColor;
      }
      img{
        position: absolute;
        width: 0.3rem;
        left: 0.3rem;
        top: 50%;
        margin-top: -0.15rem;
      }
    }
    .lxr {
      width:100%;
      height:1.4rem;
      line-height:0.7rem;
      background-color:#fff;
      text-indent:0.8rem;
      margin-top:0.1rem;
      position:relative;
      .line {
        width:100%;
        height:1rem;
        line-height:1rem;
        padding-top: 0.2rem;
        .tsrxm {
          font-size:0.35rem;
          float:left;
          text-indent:0.3rem;
          width:1.9rem;
        }
        .xingming {
          font-size: 0.35rem;
          float: left;
          width: 4.5rem;
          height: 0.8rem;
          text-indent: 0.3rem;
          border: none;
          background-size: 100% 100%;
        }
      }
    }
    .sumbit {
      width: 100%;
      background-color: #fff;
      position: absolute;
      bottom: 0rem;
      left: 0;
      z-index: 2;
      height: 1rem;
      .button{
        width:100%;
        height:1rem;
        line-height:1rem;
        font-size:0.32rem;
        text-align:center;
        background-color:#e34b3e;
        color:#fff;

      }
    }
    // .andcss{
    //   bottom:0.2rem;
    // }
    .weui-dialog__hd {
        padding: 0.2em 0.6em 0.5em;
    }
</style>

<template>
	<div style="background: white;height: 100%;">
		<!-- 投诉详情 -->
	    <div class="content">
	      <div class="ts">
	        <div class="tsxq">投诉详情</div>
	      </div>
	      <div class="tsnr">
	        <textarea maxlength="200" v-model="questionDescription" placeholder="请您详细描述投诉对象及理由，保证国安家及时准确处理您的投诉（200个汉字以内）" cols="30" rows="10"></textarea>
	      </div>
	      <div class="sumbit ipxButton" @click="sumbit">
          <div class="button">
            提交投诉
          </div>

	      </div>

	    </div>
	</div>
</template>

<script>
    export default {
        data() {
          return {
            //userId:this.getStorage(this.KEYS.USER_INFO).id,//投诉者id
            questionDescription:"",    //问题描述
            phone:localStorage.getItem("userPhone").substr(0, 3) + '****' + localStorage.getItem("userPhone").substr(7),//投诉者电话
            sourceCode:"",
            isAndrion:false,
          }
        },
        components: {
        },
        computed: {
        },
        created(){
          this.questionDescription = "";
          this.isIosAndroid();
        },
        methods: {
        	isIosAndroid(){
				//判断用户的来源和收款渠道
				var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
                if (ua.match(/MicroMessenger/i) == "micromessenger") {
                    //微信
					this.sourceCode = "0056003";
                } else if(!window.location.host.indexOf("m.zufang.guoanfamily.com") === -1){
                	//在m站中打开
					this.sourceCode = "0056002";
                } else if(this.CheckAndroiIos()){
                	//安卓APP
					this.sourceCode = "0056011";
                }else{
                	//IOS APP
					this.sourceCode = "0056012";

                }
			},
			CheckAndroiIos(){
				//安卓返回true,ios返回false
	            let u = navigator.userAgent;
	            let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	            let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	            if (isAndroid === true && isiOS === false) {
	                return true;
	            }
	            if (isAndroid === false && isiOS === true) {
	                return false;
	            }
			},
          sumbit(){
            console.log({
                complaintId:this.userId,//用户id
                questionDescription:this.questionDescription,//问题描述
                complaintIdentity:this.complaintIdentity,//投诉对象
                sourceCode:this.sourceCode,
            })
            // this.post("CComplaintController/save",{
            //     complaintId:this.userId,//用户id
            //     questionDescription:this.questionDescription,//问题描述
            //     complaintIdentity:this.complaintIdentity,//投诉对象
            //     sourceCode:this.sourceCode,
            // }).then(res =>{
            // 	if(res.code == 10038){
            // 		this.questionDescription = "";
		        //     this.$vux.alert.show({
		        //         title: '投诉结果',
		        //         content: res.msg,
		        //         onShow () {
		        //         },
		        //         onHide () {

		        //         }
		        //     })
            // 	}else{
            // 		this.questionDescription = "";
		        //     this.$parent.isWantc = true;
		        //     this.$vux.alert.show({
		        //         title: '投诉结果',
		        //         content: res.msg,
		        //         onShow () {
		        //         },
		        //         onHide () {

		        //         }
		        //     })
            // 	}

            // })
          }
        }
    }
</script>
