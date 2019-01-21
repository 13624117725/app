<style scoped lang="scss">
     @import "../../style/theme.scss";
     $height: 0.7rem;
    .content {
        width: 100%;
        // height: 100%;
        position: absolute;
        top:1.3rem;
        bottom:0rem;
        background-color: white;
    }
    .Wexcontent{
        top:0rem;
    }
    .contentAndroid{
    	top:1.5rem;
    }
    // .innerStyle{
    // 	position: fixed;
    // 	top: 0;
    // 	left: 0;
    // 	width: 100%;
    // 	height: 100%;
    // 	overflow-y:scroll ;
    // }
    .logo {
    }
    .top{
        height:1.3rem;
    }
    .tab{
    	width: 100%;
    	margin: auto;
        height:0.8rem;
        line-height:0.8rem;
        position:relative;
        z-index: 11;
        .wantC {
            float:left;
            width:50%;
            font-size:0.32rem;
            text-align:center;
            height: 100%;
        }
        .cRecord {
            float:left;
            height: 100%;
            width:50%;
            font-size:0.32rem;
            text-align:center;
            // box-sizing: border-box;
            // margin-top: 0.01rem;
        }
        .sanjiao {
            width: 0;
            height: 0;
            z-index:100;
            border-width: 0.16rem 0.16rem 0.16rem 0.16rem;
			border-style: solid;
			border-color: #fff transparent transparent transparent ;
            position: absolute;
            bottom:-0.32rem;
            left:25%;
            margin-left:-0.16rem;
            transition: all 0.5s;
        }
    }
    .scroll {
        // overflow:scroll;
        height: 8.8rem;
    }
    .emptyios{
		height: 1.3rem;
	}
	.emptyandroid{
		height: 1.1rem;
	}
</style>

<template>
    <div class="content" :class="{Wexcontent:isWex,contentAndroid:this.isIosandroid()}">
		<div class="fixContent innerStyle" >
	        <!-- <div :class="[androidOrIos ? 'emptyandroid' : 'emptyios']" v-if="!this.$store.state.showWxTitle"></div> -->
	        <div class="tab">
	            <div class="wantC" @click="wantc" :style="wtc">我要投诉</div>
	            <div class="cRecord" @click="cRecord" :style="crd">查看投诉记录</div>
	            <!--<div class="sanjiao" :style="{left:showSj}"></div>-->
	        </div>
	        <div class="scroll">
	            <component :is="showCpt"></component>
	        </div>
		</div>
    </div>
</template>

<script>
    import Wantc from '../../components/tab/Wantc'
    import Crecord from '../../components/tab/Crecord'
    export default {
        name: 'Collection',
        data() {
            return {
                username: "",
                password: "",
                showSj:'25%',
                showCpt:'Wantc',
                wtc:{
                    color:'#e34b3e',
                    fontSize:'0.28rem',
                    background:'white',
                    borderBottom:'1px solid #DDDDDD'
                },
                crd:{
                	color:'#999999',
                    fontSize:'0.28rem',
                    background:'#eeeeee',
                    height:'100%',
                    borderBottom:'1px solid #DDDDDD'
                },
                token:"",
                androidOrIos:true,	//默认为安卓登录
                isWantc:false,
                isWex:false,
            }
        },
        components: {
            Wantc,
            Crecord
        },
        computed: {
           show(){
               return this.showSj
           },
        },
        created(){
            if(this.isECTouch()){
                 this.isWex = true;
			}
        },
        mounted(){
            this.token = this.getUrlStr();
            this.getlocal();
            this.isIosAndroid();
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
            getUrlStr() {
                 var url = window.location.href;
                 if(url.indexOf('?') != 1) {
                    url =  url.substring(url.indexOf('?')+1);
                   var arr =  url.split("=");
                   return arr[1]
                 }
            },
            getlocal(){
            },
            wantc(){
                this.showSj = "25%",
                this.wtc = {
                     color:'#e34b3e',
                    fontSize:'0.28rem',
                    borderBottom:'1px solid #DDDDDD'
                },
                this.crd = {
                	color:'#999999',
                    fontSize:'0.28rem',
                    background:'#eeeeee',
                    borderBottom:'1px solid #DDDDDD'
                	
                	
                   
                },
                this.showCpt = "Wantc"
            },
            cRecord() {
                this.showSj = "75%",
                this.crd = {
                    color:'#e34b3e',
                    fontSize:'0.28rem',
                    background:'white',
                    borderBottom:'1px solid #DDDDDD'
                },
                this.wtc = {
                	color:'#999999',
                    fontSize:'0.28rem',
                    background:'#eeeeee',
                    borderBottom:'1px solid #DDDDDD'
                	
                	
                },
                this.showCpt = "Crecord"
            }
        },
        watch:{
           isWantc:function(){
               if(this.isWantc){
                   this.cRecord()
               }
           }
        }
    }
</script>
