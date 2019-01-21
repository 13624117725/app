 <style scoped lang="scss">
    .exhibition{
        width: 100%;
        position: absolute;
        top:1.3rem;
        bottom:0rem;
        left: 0rem;
        background-color: #312317;
        overflow: hidden;
        .exhibition-top{
            width:100%;
            margin-top:0.3rem;
            h1{
                width: 100%;
                height: 0.5rem;
                margin-left: 0.36rem;
                img{
                    width: 1.48rem;
                    height: 100%;
                }
            }
            .exhibition-text{
                margin-top:0.35rem;
                .text{
                    margin:0 auto;
                    width: 40%;
                }
            }
        }
        .exhibition-img{
            width: 100%;
            height: 5.32rem;
            margin-top: 0.48rem;
            position: relative;
            .stripe{
                width: 100%;
                height: 0.16rem;
                background: linear-gradient(45deg, #65564a 50%, #3f2c1d 0);
                background-size:2px 2px;
            }
            .swiper-container{
                overflow: initial !important;
            }
            .swiper-pagination{
                bottom: -0.8rem;
            }
            .exhibition-3D{
                width: 1.3rem;
                height: 0.48rem;
                text-align: center;
                line-height: .48rem;
                background-color: #1c1109;
                color: #fff;
                font-size: 0.28rem;
                position: absolute;
                bottom: 0.5rem;
                right: 0.4rem;
                z-index: 1000;
                border: 1px solid #fff;
            }
        }
        .exhibition-bottom{
            width: 100%;
            height: auto;
            margin-top:0.72rem;
            margin-left: 0.6rem;
            .exhibition-bottom-text{
                font-size: 0.24rem;
                height: auto;
                color:#fff;
                text-align: left;
                p{
                    height: 0.48rem;
                    line-height: 0.48rem;
                }
            }
            .exhibition-bottom-phone{
                font-size: 0.32rem;
                color:#fff;
                text-align: left;
                margin-top:0.44rem;
                .phone-img{
                    display:inline-block;
                    width: 0.6rem;
                    height: 0.6rem;
                    background: url("../../../../static/rent/exhibition-center/phone.png") no-repeat;
                    background-size: 100%;
                    vertical-align:middle;
                    margin-left: 0.2rem;
                }
                a{
                    color: #fff;
                }
            }
        }
    }
    .wexcss{
        top:0rem;
    }
 </style>
 <style lang="scss">
    .my-bullet-active{
        background-color: #fff !important;
    }
 </style>

 <template>
     <div class="exhibition" style="overflow-y:hidden;" :class="{wexcss:isWex}">
         <div class="exhibition-top" >
            <h1>
                <img src="../../../../static/rent/exhibition-center/logo.png" alt="国安家展示中心">
            </h1>
            <div class="exhibition-text">
               <img src="../../../../static/rent/exhibition-center/text.png" alt="" class="text">
            </div>
         </div>
         <div class="exhibition-img">
            <div class="stripe"></div>
               <swiper :options="swiperOption" style="height: 5rem;border-radius: 0.1rem;" >
			        <swiper-slide v-for="(item,index) in newBaseList" :key="index">
			        	<div style="width: 100%;height: 100%;">
			        		<img  :src="item.img" alt=""  style="height:100%;width:100%;"/>
			        	</div>
			        </swiper-slide>
			        <div class="swiper-pagination" slot="pagination"></div>
			    </swiper>
            <div class="stripe"></div>
            <div class="exhibition-3D" @click="exhibition3D">
                 3D实景
             </div>
         </div>
         <div class="exhibition-bottom">
             <div class="exhibition-bottom-text">
                 <p>为商务会议、团建而生</p>
                 <p>更是私人会客的绝佳场所</p>
                 <p>在此展开有关生意与生活的对话</p>
                 <p>在繁华中心,入席一场盛宴</p>
             </div>

             <div class="exhibition-bottom-phone">
                 <div>预约咨询电话:&nbsp; <a href="tel:010-59070532" style="font-size:0.36rem;">010-5907&nbsp;0532</a>  <a href="tel:010-59070532" class="phone-img"></a> </div>
             </div>
         </div>
     </div>
 </template>
 <script>
     export default {
         data(){
            return{
                isWex:false,
                swiperOption: {
                    autoplay: true,
                    pagination: {
                        el: ".swiper-pagination",
                        bulletActiveClass: 'my-bullet-active'
                    },
                },
                swiperOptionRoom:{

                },
                newBaseList:[{
                            url: '',
                            img: 'https://img.guoanfamily.com/rent/exhibition-center/01.png',

                        },{
                            url: '',
                            img: 'https://img.guoanfamily.com/rent/exhibition-center/02.png',

                        },{
                            url: '',
                            img: 'https://img.guoanfamily.com/rent/exhibition-center/03.png',

                        },{
                            url: '',
                            img: 'https://img.guoanfamily.com/rent/exhibition-center/04.png',

                        },{
                            url: '',
                            img: 'https://img.guoanfamily.com/rent/exhibition-center/05.png',

                }]
            }
         },
         created(){
             if(this.isECTouch()){
                this.isWex = true;
            }else{
                this.isWex = false;
            }
        },
        methods:{
        	msgalert(msg) {
				this.$vux.toast.show({
					text: msg,
					type: "text"
				});
			},
            exhibition3D(){
            	let platform = this.getStorage('platformnow');
		  		if(platform == 'xiaochengxu'){
		  			this.msgalert("请在国安家APP中打开");
		  		}else{
		  			let src = "https://beyond.3dnest.cn/play/?m=zhq_gaj_83";
	                let title = "展示中心";
	                this.$router.push({
	                    path: "framePage",
	                    query: { src: src, title: title }
	                });
		  		}

            }
        }
     }
 </script>
