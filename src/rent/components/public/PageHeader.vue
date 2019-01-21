<style scoped lang="scss">
    @import "../../style/theme.scss";
    $height: 1.3rem;
    $btnSize: 0.47rem;

    .header{
        position:absolute;
        left: 0;
        top: 0;
        width: 100%;
        height:1.3rem;
        /*border-bottom: $baseBorder;*/
        border-bottom:1px solid #ddd;
        z-index: 1000;
        background: #ffffff;
        box-sizing: border-box;
    }
    .androidStyle{
    	position:absolute;
        left: 0;
        top: 0;
        width: 100%;
        height:1.5rem;
        /*border-bottom: $baseBorder;*/
        border-bottom:1px solid #ddd;
        z-index: 1000;
        background: #ffffff;
        box-sizing: border-box;
        border-top: 0.2rem solid white;
    }
    .back-btn{
        float: left;
        height: 1.2rem;
        width: $height;
        background: url("../../../../static/rent/icon-back-btn.png") no-repeat center;
        background-size: 20%;
        display: inline-block;
    }
    .An-back-btn{
        float: left;
        height: 1.3rem;
        width: $height;
        background: url("../../../../static/rent/icon-back-btn.png") no-repeat center;
        background-size: 20%;
        display: inline-block;
    }
    .middle{
        text-align: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: $height;
        right: $height;
        background:#ffffff;
        .title{
        	height: 1.1rem;
      		font-size: 0.36rem;//$titleFontSize;
            line-height: 1.6rem;
            color: #000000;//$titleColor;
        }
        .Antitle{
            height: 1.1rem;
      		font-size: 0.36rem;//$titleFontSize;
            line-height: 1.5rem;
            color: #000000;//$titleColor;
        }
    }
    .An-middle{
    	top: 0.06rem;
    }

    .right-part{
        float: right;
        height: 1.1rem;
        width: 1.1rem;
    }
    .ExhibitionCenter{
        background-color: #312317;
        .middle{
            .title{
                color:#fff;
            }
            background-color: #312317;
        }
        .back-btn{
            background: url("../../../../static/rent/icon-back-btn1.png") no-repeat center;
            background-size: 20%;
        }
    }
     ::-webkit-input-placeholder {
        color: #e24e59;
    }

    :-moz-placeholder {
        color: #e24e59;
    }

    ::-moz-placeholder {
        color: #e24e59;
    }

    :-ms-input-placeholder {
        color: #e24e59;
    }
</style>

<template>
    <div class="header" :class="{ExhibitionCenter:isExhibitionCenter,androidStyle:this.isIosandroid()}">
    	<div style="height: 0.2rem;"></div>
        <span class="back-btn" :class="{'An-back-btn':onheader}"  @click="back" v-if="!this.$store.state.showWxTitle" v-show="_needBack"></span>

        <div class="middle" :class="{'An-middle':onheader}">
            <slot name="middle" v-if="!title"></slot>
            <p class="title" else="!title">{{title}}</p>
        </div>

        <div class="right-part">
            <slot name="right-btn"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,

            needBack: {
                type: Boolean,
                default: true,
            }
        },
        computed:{
            _needBack(){
                return this.needBack;
            },
            isonLinerent(){
                return this.$store.state.isonLinerent;
            }
        },
        data() {
            return {
                // 判断安卓和ios样式控制
                onheader:false,
                isExhibitionCenter:false,
            }
        },

        created() {
            if(this.$route.meta.title==="国安家展示中心"){
                this.isExhibitionCenter = true;
            }else{
                this.isExhibitionCenter = false;
            }
        },

        mounted() {
            
        },

        methods: {
            back(){
                if(this.$store.state.loginShow){
                     this.$store.state.loginShow =  false;
                }else{
                    this.$router.go(-1);
                }
            },
        },

        components: {},
    }
</script>
