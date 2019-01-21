<template>
      <div  class="fixContent">
        <div class="contentop" style="overflow-y: scroll;">
          <div :class="{'body_top':IosTop,'body_tops':AndroidTop,'wx_top':wxTop}" >
            <!--轮播图  -->
            <div class="swipertop" style="6.9rem;padding:.3rem .3rem 0px .3rem;">
              <div class="swipertopabs">
                <div
                  v-for="(item, i) in barList"
                  :key="i" :style="{animation: 'danmu '+item.settime+'s linear 0s infinite'}"
                  class="absitem danmu"
                  :class="'danmus' + item.dame"
                >
                  <img src="../../../static/new/img/whiteren.png" alt="">
                  <p class="absitemp">{{item.text}}</p>
                </div>
              </div>
              <div class="swipers">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide :key='index' v-for="(item,index) in newSwiper"><img style=" height:5rem" @click.stop="show1(index)" :src='`${item.src}?imageView2/0/w/370`' /></swiper-slide>
                </swiper>
                <!-- 3D看房 --> <!-- 分享图标 -->
                <div class="swiperpos" :class="{'newswiperpos':!isBanShare}">
                    <div class="swiperpositem swiperpositem01" v-if="build3DList.length > 0 ? true : false" @click="threeClick">
                      <img class="swiperpositemimg" src="../../../static/new/img/3D.png" alt="">
                    </div>
                    <div v-show="isBanShare" class="swiperpositem" @click="ShareClick">
                      <img  src="../../../static/new/img/fx01.png" alt="">
                    </div>
                    <div class="swiperpositem " >
                      <img v-show="quitCollent" @click="quitCollentClick" src="../../../static/new/img/shoucang02.png" alt="">
                      <img v-show="collent" @click="collentClick" src="../../../static/new/img/shoucang01.png" alt="">
                    </div>
                </div>
              </div>
              <!-- 图片头部标记 -->
                <div v-transfer-dom>
                    <previewer :list="newSwiper" ref="previewer" @on-close='close' @on-change='changes'></previewer>
                  </div>
            </div>
            <div class="geshi">
              <div style="width: 100%;overflow:scroll;-webkit-overflow-scrolling:touch;">
                <tab v-model="index001" style="float:left;" active-color="#e34b3e" bar-active-color="black" default-color="#666">
                    <tab-item style="postion:relative;" :selected="itemOne" v-if="EffectImg" @on-item-click="show(xiaoguo)">效果图
                        <span>
                            <span>(</span>{{EffectImg}}</span><span>)
                        </span>
                        <div class="shu"></div>
                    </tab-item>
                    <tab-item  style="postion:relative;" :selected="itemThr" v-if="GuihuaImg" @on-item-click="show(guihua)">规划图
                        <span>
                            <span>(</span>{{GuihuaImg}}</span><span>)
                        </span>
                        <div class="shu"></div>
                    </tab-item>
                    <tab-item  style="postion:relative;" :selected="itemFor" v-if="YangbanImg" @on-item-click="show(yangbanjian)">样板间
                        <span>
                            <span>(</span>{{YangbanImg}}</span><span>)
                        </span>
                        <div class="shu"></div>
                    </tab-item>
                    <tab-item  style="postion:relative;" :selected="itemFive" v-if="ShijingImg" @on-item-click="show(shijing)">实景图
                        <span>
                            <span>(</span>{{ShijingImg}}</span><span>)
                        </span>
                        <div class="shu"></div>
                    </tab-item>
                    <tab-item  style="postion:relative;" :selected="itemSix" v-if="ShapanImg" @on-item-click="show(shapan)">沙盘图
                        <span>
                            <span>(</span>{{ShapanImg}}</span><span>)
                        </span>
                        <div class="shu"></div>
                    </tab-item>
                    <tab-item :selected="itemSeven" v-if="ShapanImg" @on-item-click="show(niaokan)">鸟瞰图
                        <span>
                            <span>(</span>{{ShapanImg}}</span><span>)
                        </span>
                    </tab-item>
                </tab>
              </div>
            </div>


            <!-- 楼盘头部信息 -->
            <div class="buildDetial">
                <!-- 分享图标 -->
                <!-- <div class="share" @click="ShareClick"></div> -->
                <!-- 标题加标签 -->
                <div class="topNmae">
                    <span class="buildName">{{buidDetial.buildname}}</span>

                </div>
                 <span class="buildTag">
                    <ul>
                        <li :key="index" v-for="(item,index) in buidDetial.buildtagnameList">{{item}}</li>
                    </ul>
                </span>
                <div class="detial" style="margin-top: 0.8rem;">
                    <div class="kaitime" style="text-align: justify;">均价
                        <span/>
                    </div>
                    <span class="ovaspan">：</span>
                    <div class="rightContent">
                        <span class="price">{{buidDetial.averageprice}} 元/㎡</span>
                        <!-- <span></span> -->
                    </div>
                </div>
                <div class="detial" style="width:100%;">
                    <div class="kaitime">开盘时间
                        <span/>
                    </div>
                    <span class="ovaspan">：</span>
                    <div class="rightContent">
                        <span class="priceContent">{{buidDetial.openquotationtime}}</span>
                    </div>
                </div>
                <div class="detial">
                    <div class="kaitime">交房时间
                        <span/>
                    </div>
                    <span class="ovaspan">：</span>
                    <div class="rightContent">
                        <span class="priceContent">{{buidDetial.launchtime}}</span>
                    </div>
                </div>
                <!-- --------楼盘定位---------------------------------------------- -->
                <!-- <div class="location" @click="addressLocation"></div> -->
                <div class="detial">
                    <div class="kaitime" style="text-align: justify;">地址
                        <span/>
                    </div>
                    <span class="ovaspan">：</span>
                    <div class="rightContent">
                        <span class="priceContent">{{buidDetial.address}}</span>
                    </div>
                </div>
                <div class='housTypeHeader' v-show="isLand" style="position:relative;" @click="Membership">
                    <img src="../../../static/new/img/ka.png" style="margin-top:.35rem;">
                    <span style="color:red;margin-left:.25rem;">旅居卡</span>
                    <span style="color:red">丨意向登岛</span>
                    <img src="../../../static/new/img/baoming.png" style="postion:absolute;right:0;top:.25rem;width:.5rem;margin-left:39%;">
                </div>
            </div>
            <div class="buildDetialbor"></div>
            <!-- 户型信息 -->
            <div class="buildDetial">
                <div class='housTypeHeader'>
                    <span class="types" style="font-size:0.36rem;color:#000;">在售户型&nbsp;</span>
                    <span style="font-size:0.36rem;color:#000;"> {{houseTypelen}}&nbsp;</span>
                    <span style="font-size:0.36rem;color:#000;">套</span>
                </div>
                <!-- <scroller> -->
                <div class="housTypeImgScroll">
                    <ul>
                        <li :key="index" v-for="(item,index) in housTypeImg" @click="houseTyeImgClick(item.id)">
                            <div class="HousTypeBottomImg">
                                <img :src="`${item.housetypefilename}?imageView2/0/w/235/h/160`" >
                            </div>
                            <div class="HousTypeTop">
                                <div class="HousTypeTopLeft">
                                    <span>{{item.housetypecode}}&nbsp;&nbsp;{{item.salearea}}</span>
                                    <span></span>
                                </div>
                                <div class="HousTypeTopRight">
                                    <span>{{item.housetypedescribe}}</span>
                                    <!-- <span>{{item.housetypedetail}}</span> -->
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- </scroller> -->
            </div>
            <div class="buildDetialbor"></div>
            <div class="buildDetial">
                <!-- 楼盘基础信息 -->
                <div class="housTypeHeader housTypeHeader01">
                    <div class='housTypeHeader'>
                        <!-- <img src="../../../static/new/img/lou.png"> -->
                        <span class="types" style="font-size:0.36rem;color:#000;">楼盘基础信息</span>
                    </div>
                </div>
                <div class="details">
                  <!-- <div class="details01" style="width:49.5%;"></div> -->
                  <div class="detial details01" style="width:49.5%;">
                    <div class="kaitime">开盘时间
                        <span/>
                    </div>
                    <span class="ovaspan">：</span>
                    <div class="rightContent" style="width:40%">
                        <span class="priceContent">{{buidDetial.openquotationtime}}</span>
                    </div>
                  </div>
                  <div class="detial details01" style="width:49.5%;" v-if="this.buidDetial.totalhouseholdnumber!== ''">
                    <div class="kaitime" style="padding-left:.15rem;text-align: justify;" >总户数
                        <span/>
                    </div>
                    <span class="ovaspan">：</span>
                    <div class="rightContent" style="width:40%">
                        <span class="priceContent">{{buidDetial.totalhouseholdnumber}}</span>
                    </div>
                  </div>
                </div>
                <div class="details">
                  <div class="detial details01" style="width:49.5%" v-if="this.buidDetial.tenementtypename !== ''">
                    <div class="kaitime">物业类型
                        <span/>
                    </div>
                    <span class="ovaspan">：</span>
                    <div class="rightContent" style="width:40%">
                        <span class="priceContent">{{buidDetial.tenementtypename}}</span>
                    </div>
                  </div>

                  <div class="detial details01" style="width:49.5%" v-if="this.buidDetial.volumefraction !== ''">
                    <div class="kaitime" style="padding-left:.15rem;text-align: justify;">容积率
                        <span/>
                    </div>
                    <span class="ovaspan">：</span>
                    <div class="rightContent" style="width:40%">
                        <span class="priceContent">{{buidDetial.volumefraction }}</span>
                    </div>
                  </div>
                </div>
                <div class="details">
                  <div class="detial details01" style="width:49.5%" v-if="this.buidDetial.newbuildtype !== ''">
                    <div class="kaitime">建筑类型
                        <span/>
                    </div>
                    <span class="ovaspan">：</span>
                    <div class="rightContent" style="width:40%">
                        <span class="priceContent">{{buidDetial.newbuildtype}}</span>
                    </div>
                  </div>

                  <div class="detial details01" style="width:49.5%" v-if="this.buidDetial.greenrate !== ''">
                    <div class="kaitime" style="padding-left:.15rem;text-align: justify;">绿化率
                        <span/>
                    </div>
                    <span class="ovaspan">：</span>
                    <div class="rightContent" style="width:40%">
                        <span class="priceContent">{{buidDetial.greenrate}}</span>
                    </div>
                  </div>
                </div>

                <div class="detial" v-if="this.buidDetial.carportmatching !== ''">
                    <div class="kaitime">车位配比
                        <span/>
                    </div>
                    <span class="ovaspan">：</span>
                    <div class="rightContent">
                        <span class="priceContent">{{buidDetial.carportmatching}}</span>
                    </div>
                </div>
                <div class="detial" v-if="this.buidDetial.hardcoverstandard !== '' && this.buidDetial.hardcoverstandard !== null">
                    <div class="kaitime">装修情况
                        <span/>
                    </div>
                    <span class="ovaspan">：</span>
                    <div class="rightContent">
                        <span class="priceContent">{{buidDetial.hardcoverstandard }}</span>
                    </div>
                </div>
                <div class="detial" v-if="this.buidDetial.developers != ''">
                    <div class="kaitime" style="text-align: justify;">开发商
                        <span/>
                    </div>
                    <span class="ovaspan">：</span>
                    <div class="rightContent">
                        <span class="priceContent">{{buidDetial.developers}}</span>
                    </div>
                </div>
                <div class="detial" v-if="this.buidDetial.tenementcompany !== ''">
                    <div class="kaitime">物业顾问
                        <span/>
                    </div>
                    <span class="ovaspan">：</span>
                    <div class="rightContent">
                        <span class="priceContent">{{buidDetial.tenementcompany}}</span>
                    </div>
                </div>
                <div class="detial" v-if="this.buidDetial.tenementfee !== ''">
                    <div class="kaitime" style="text-align: justify;">物业费
                        <span/>
                    </div>
                    <span class="ovaspan">：</span>
                    <div class="rightContent">
                        <span class="priceContent">{{buidDetial.tenementfee}}</span>
                    </div>
                </div>
                <!-- ---------隐藏的楼盘基础信息部分------------------------------------------------- -->
                <div class="buildingInfor" v-show="showBuilDetial">
                    <div class="detial" v-if="this.buidDetial.country !== ''">
                        <div class="kaitime" style="text-align: justify;">区域
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.country}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.buidDetial.foolernumber !== ''">
                        <div class="kaitime" style="text-align: justify;">层数
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.foolernumber}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.buidDetial.foolerhight !== ''">
                        <div class="kaitime" style="text-align: justify;">层高
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.foolerhight}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.housepotial !== ''">
                        <div class="kaitime" style="text-align: justify;">医院
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{housepotial}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.school !== ''">
                        <div class="kaitime" style="text-align: justify;">学校
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{shoppingCenter}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.restRant !== ''">
                        <div class="kaitime" style="text-align: justify;">餐饮
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{restRant}}</span>
                        </div>
                    </div>

                    <div class="detial" v-if="this.shoppingCenter !== ''">
                        <div class="kaitime" style="text-align: justify;">购物
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{school}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.othter !==''">
                        <div class="kaitime" style="text-align: justify;">其他
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{othter}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.buidDetial.occupiedarea !==''">
                        <div class="kaitime">占地面积
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.occupiedarea}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.buidDetial.buildingarea!==''">
                        <div class="kaitime">建筑面积
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.buildingarea}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.buidDetial.buildinfo!==''">
                        <div class="kaitime">建筑信息
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.buildinfo}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="buidDetial.noopsychefurnishing!=''">
                        <div class="kaitime">智能家居
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.noopsychefurnishing}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.buidDetial.threeconstantsys!==''">
                        <div class="kaitime">三恒系统
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.threeconstantsys}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.buidDetial.landcertificate!==''">
                        <div class="kaitime" style="text-align: justify;">土地证
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.landcertificate}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.buidDetial.builddesigncompany !==''">
                        <div class="kaitime">建筑设计
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.builddesigncompany}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.buidDetial.parkdesigncompany !==''">
                        <div class="kaitime">园林设计
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.parkdesigncompany}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.buidDetial.buildingexecutionlicence">
                        <div class="kaitime">建筑施工
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.buildingexecutionlicence}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.buidDetial.hardbackdesigncompany !== ''">
                        <div class="kaitime">精装设计
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.hardbackdesigncompany}}</span>
                        </div>
                    </div>
                    <!-- <div class="detial" v-if="this.buidDetial.Volumeratio !== undefined ">
                        <div class="kaitime">智能系统
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.Volumeratio}}</span>
                        </div>
                    </div> -->
                    <div class="detial" v-if="this.buidDetial.buildingplanlicence!==''">
                        <div class="kaitime" style="text-align: justify;">工规证
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.buildingplanlicence}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.buidDetial.buildingexecutionlicence !=='' ">
                        <div class="kaitime" style="text-align: justify;">施工证
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.buildingexecutionlicence}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.buidDetial.buildingopenlicence!==''">
                        <div class="kaitime" style="text-align: justify;">开工证
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.buildingopenlicence}}</span>
                        </div>
                    </div>
                    <div class="detial" v-if="this.buidDetial.commodityhousedeallicence !== ''" >
                        <div class="kaitime" style="text-align: justify;">预售证
                            <span/>
                        </div>
                        <span class="ovaspan">：</span>
                        <div class="rightContent">
                            <span class="priceContent">{{buidDetial.commodityhousedeallicence}}</span>
                        </div>
                    </div>
                </div>
                <div class="showBackBtn">
                    <div v-show="fadeInShow" @click="showBtn"><img :src="zhankai" alt=""></div>
                    <div v-show="fadeInOut" @click="outBtn"><img :src="heqi" alt=""></div>
                </div>
            </div>
            <div class="buildDetialbor"></div>
            <div class="lastBottom">
                <span>专享服务</span>
            </div>
            <div class="bottomBig" :class="{'wx_bottomBig':wxTop}">
                <div style="float:left;">
                    <div class="phoneNumber ">400-900-2225转1</div>
                    <div class="explain">最新政策、更多优惠详情，请致电展示中心</div>
                </div>
                <a href="tel:400-900-2225"></a>
            </div>
            <!-- ----------------弹出层------------------------------------------ -->
            <div class="dialog" v-show="shows" v-transfer-dom>
                <!-- <x-dialog hide-on-blur v-model="show" class="dialog-demo"> -->
                <div class="dialogTop">我要看房</div>
                <div style="border-radius:.25rem;overflow:hidden;">
                    <group class="GGroup">
                        <x-input class="labelStyle" style="font-size:.275rem" title="预约看房" placeholder="预约看房" v-model="rooms" :show-clear="false" placeholder-align="left"></x-input>
                        <x-input class="labelStyle" style="font-size:.275rem" title="姓　　名" name="username" v-model="username" placeholder="请输入姓名"></x-input>
                        <x-input class="labelStyle" style="font-size:.275rem" title="人　　数" name="numberPeople" type="number" v-model="numberPeople" placeholder="请输入看房人数"></x-input>
                        <x-input class="labelStyle" style="font-size:.275rem" title="手机号码" name="mobile" v-model="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
                        <datetime-range class="labelStyle" style="margin-left:.2rem;font-size:.275rem" title="预约时间" :start-date="startdate" :end-date="enddate" :value="Showingsdate" @on-change="onChange"></datetime-range>
                        <button class="btnYuyue" @click="btnSubClick">立即预约</button>
                    </group>
                </div>
                <!-- </x-dialog> -->
            </div>
            <div class="righthorn" style="z-inex:150;" v-show="shareImg" v-transfer-dom>点击右上角进行分享</div>

            </div>
        </div>
         <!-- 收藏,预约看房 -->
        <div class="bottomes ipxButton">
          <div class="bottomdiv">
            <button class="yuyue" @click="appointmentClick">预约看房</button>
            <button class="dingfang" @click="onlineBooking">在线订房</button>
          </div>
        </div>
         <!-- -----------------------遮罩层---------------------------------------------- -->
        <div class="market" style="z-index:149;" v-show="market" @click="markedClick"></div>
        <div class="threekf"  :style="{background: bgDD + 'no-repeat top center / 100% 2rem #fff'}" v-show="isThree" style="z-index:249;backgroundSize: ">
          <div class="threep">请选择您要查看的户型</div>
          <div class="threeimg" @click="handlethreeClear">
            <img src="../../../static/new/img/close3D.png" alt="">
          </div>
          <div class="threeul">
            <div class="threeli" :class="threeIndex === i ? 'activethree' : ''" @click="handle3Dskip(item, i)" v-for="(item, i) in build3DList" :key="i">{{item.explaincontent}}</div>
          </div>
          <div class="threebtn"> <span @click="handelSuccthree">确定</span> </div>

        </div>
        <!-- 分享时候的底部弹出框 -->
        <div class="shareAlert" :class="{'shareAlert1':shareAlert}">
            <div style="width:100%;height:100%;positon:releative;">
                <div class="shareIcon">
                    <div class="weixin" @click="weixinhaoyoufenxiangClick">
                        <span>微信</span>
                    </div>
                    <div class="pengyou" @click="weixinFriendsClick">
                        <span>朋友圈</span>
                    </div>
                </div>
                <div class="exitShare" @click="exitShareClick">取消</div>
            </div>
        </div>
        <div class="loadingBox" v-show="AppShear">
          <div class="loadings">
            <div class="loadings_img">
            </div>
            <div>
              分享中...
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import { TransferDom, Tab, TabItem } from "vux";
import Previewer from "../components/previewer";
import Barrage from "./Barrage";
import headImage from "../../../static/new/img/whiteren.png";
import heqi from "../../../static/new/img/heqi.png";
import zhankai from "../../../static/new/img/zhankai.png";
import bgDD from "../../../static/new/img/3Dbg.png";
export default {
  name: "building_detail",
  directives: {
    TransferDom
  },
  components: {
    Previewer,
    Tab,
    TabItem,
    Barrage
  },
  data() {
    let self = this;
    return {
      AppShear: false,
      heqi: heqi,
      zhankai: zhankai,
      IosTop: false,
      AndroidTop: false,
      wxTop: false,
      swiperOption: {
        loop: true,
        disableOnInteraction: false,
        on: {
          slideChangeTransitionStart: function() {
            let swiperIndex = this.activeIndex;
            self.changes(swiperIndex);
          }
        }
      },
      showMap: false,
      acitves: false,
      bgDD: "url(" + bgDD + ")", //3d背景
      threeItem: {},
      threeIndex: 0,
      // selected:true
      baseList: [], //轮播图数据
      urlList: [],
      demo06_list: [],
      demo06_index: 0,
      houseTypeList: [],
      buidID: "",
      buidDetial: {},
      school: "", //学校
      housepotial: "", //医院
      shoppingCenter: "", //购物
      othter: "", //其他
      restRant: "", //餐饮
      houseTypelen: "",
      housTypeImg: [],
      showBuilDetial: false, //跟多信息的隐藏状态
      fadeInShow: true, //查看跟多按钮
      fadeInOut: false, //收起按钮
      collent: true, //取消收藏按钮
      quitCollent: false, //收藏按钮
      shows: false, //遮罩弹窗
      market: false, //遮罩层
      isLand: false, //旅居卡
      rooms: "", //预约楼盘
      username: "", //看房人姓名
      numberPeople: "", //看房人数
      mobile: "", //手机号码
      Showingsdate: [], //预约时间
      selecteddate: null,
      startdate: "", //开始的时间
      enddate: "", //结束的时间
      // 图片放大功能默认属性
      List: [], //效果图
      List1: [], //户型图
      bottomShows: false,
      buildName: "", //楼盘名称
      buildPrice: "",
      EffectImg: "", //效果图长度
      ApartMentImg: "", //户型图长度
      GuihuaImg: "", //规划图长度
      YangbanImg: "", //样板间长度
      ShijingImg: "", //实景图长度
      ShapanImg: "", //沙盘图长度
      NiaokanImg: "", //鸟瞰图长度
      huxing: "", //户型图index
      xiaoguo: "", //效果图index
      guihua: "", //规划图
      niaokan: "", //鸟瞰图
      shapan: "", //沙盘图
      shijing: "", //实景图
      yangbanjian: "", //样板间
      peitao: "", //配套图
      flag: false,
      collectImg: "", //收藏图片
      shareImg: false, //分享按钮图片
      shareLeftImg: "", //分享图片
      shareTitle: "", //标题
      shareDesc: "", //描述
      shareLink: "", //分享链接

      itemOne: false,
      itemTwo: false,
      itemThr: false,
      itemFor: false,
      itemFive: false,
      itemSix: false,
      itemSeven: false,
      // 分享部分展示
      shareAlert: false,
      index001: 0,
      build3DList: [], //3D看房数组
      // 文本数据
      barrageList: [
        {
          Commentstate: 1,
          Createtime: "2018-02-13T17:51:36+08:00",
          Headurlimg: headImage,
          Id: "65",
          Likenumber: 0,
          Nickname: "吴航宇",
          Ordernumber: 0,
          Uid: "o8awnwvARLDDGFUuQK75JIyHnXxw",
          Usercomment: "加油加油",
          like: 0,
          name: "吴航宇",
          portrait: headImage,
          praised: false,
          text: "加油加油",
          time: "2018-02-13 17:51:36"
        },
        {
          Commentstate: 1,
          Createtime: "2018-02-13T13:17:44+08:00",
          Headurlimg: headImage,
          Id: "64",
          Likenumber: 2,
          Nickname: "关明明",
          Ordernumber: 0,
          Uid: "o8awnwuSOT2RCuzcX5IuxgCfwZig",
          Usercomment: "越来越好",
          like: 2,
          name: "关明明",
          portrait: headImage,
          praised: false,
          text: "越来越好",
          time: "2018-02-13 13:17:44"
        },
        {
          Commentstate: 1,
          Createtime: "2018-02-13T11:51:30+08:00",
          Headurlimg: headImage,
          Id: "63",
          Likenumber: 0,
          Nickname: "机器猫",
          Ordernumber: 0,
          Uid: "o8awnwqkVji0Q-RYNyhdyvzpPWTw",
          Usercomment: "一路顺风",
          like: 0,
          name: "机器猫",
          portrait: headImage,
          praised: false,
          text: "一路顺风",
          time: "2018-02-13 11:51:30"
        },
        {
          Commentstate: 1,
          Createtime: "2018-02-13T09:38:18+08:00",
          Headurlimg: headImage,
          Id: "61",
          Likenumber: 2,
          Nickname: "月含香",
          Ordernumber: 0,
          Uid: "o8awnwoqT6LBSP9yLwZCRQoyLlmM",
          Usercomment: "人心齐泰山移！坚信越来越好！越来越好！",
          like: 2,
          name: "月含香",
          portrait: headImage,
          praised: false,
          text: "人心齐泰山移！坚信越来越好！越来越好！",
          time: "2018-02-13 09:38:18"
        }
      ],
      barList: [
        {
          text: "品牌开发商很有实力，值得信赖。",
          settime: 5,
          num: 5,
          dame: "1"
        },
        {
          text: "楼盘所在的位置很有发展潜力，我觉得可以来一套。",
          settime: 6,
          num: 6,
          dame: "2"
        },
        {
          text: "户型还不错，使用率挺高的！",
          settime: 9,
          num: 6,
          dame: "3"
        },
        {
          text: "项目绿化率挺高，满眼都是绿色。",
          settime: 4,
          num: 2,
          dame: "5"
        },
      ],
      allDanmu: [
        "品牌开发商很有实力，值得信赖",
        "楼盘所在的位置很有发展潜力，我觉得可以来一套",
        "户型还不错，使用率挺高的",
        "项目绿化率挺高，满眼都是绿色",
        "看介绍还不错，有时间准备去现场看看",
        "采光还挺好，楼间距也挺宽",
        "项目周边配套还有待完善，但我相信会越来越好",
        "应该买一套旅居的房产，度假用",
        "有时间带家人去看看，我很喜欢这个楼盘",
        "我觉得平时不住，投资也可以啊，做个民宿也不错"
      ],
      // -----------------最新头部swiper图片控制部分代码-------------------------------------------
      newSwiper: [],
      isBanShare:false,
      isThree: false, // 3D看房
    };
  },
  methods: {
    // 隐藏微信分享图标
    judgeStation() {
      let platform = localStorage.getItem("platform");

      if (this.$store.state.showWxTitle) {
        //微信端--公众号、小程序
        this.isBanShare = false;
      } else if (
        platform == null ||
        platform == "null" ||
        platform == undefined
      ) {
        //网页端
        this.isBanShare = false;
      } else {
        //app端
        this.isBanShare = true;
      }
    },

    // 关闭图片放大事件
    close() {
      this.bottomShows = false;
    },
    changes(index) {
      if (index >= 0 && index < Number(this.EffectImg)) {
        this.itemOne = true;
        this.itemTwo = false;
        this.itemThr = false;
        this.itemFor = false;
        this.itemFive = false;
        this.itemSix = false;
        this.itemSeven = false;
      }
      if (index >= Number(this.EffectImg) && index <= this.guihua) {
        this.itemOne = false;
        this.itemTwo = true;
        this.itemThr = false;
        this.itemFor = false;
        this.itemFive = false;
        this.itemSix = false;
        this.itemSeven = false;
      }
      if (index >= this.guihua && index <= this.yangbanjian) {
        this.itemOne = false;
        this.itemTwo = false;
        this.itemThr = true;
        this.itemFor = false;
        this.itemFive = false;
        this.itemSix = false;
        this.itemSeven = false;
      }
      if (index >= this.yangbanjian && index <= this.shijing) {
        this.itemOne = false;
        this.itemTwo = false;
        this.itemThr = false;
        this.itemFor = true;
        this.itemFive = false;
        this.itemSix = false;
        this.itemSeven = false;
      }
      if (index >= this.shijing && index <= this.shapan) {
        this.itemOne = false;
        this.itemTwo = false;
        this.itemThr = false;
        this.itemFor = false;
        this.itemFive = true;
        this.itemSix = false;
        this.itemSeven = false;
      }
      if (index >= this.shapan && index <= this.niaokan) {
        this.itemOne = false;
        this.itemTwo = false;
        this.itemThr = false;
        this.itemFor = false;
        this.itemFive = false;
        this.itemSix = true;
        this.itemSeven = false;
      }
      if (index >= this.niaokan) {
        this.itemOne = false;
        this.itemTwo = false;
        this.itemThr = false;
        this.itemFor = false;
        this.itemFive = false;
        this.itemSix = false;
        this.itemSeven = true;
      }
      // this.showImg();
      //this.onItemHouseTypeClcik();
    },
    // 轮播图的点击事件
    // 轮播图的点击事件
    show1(num) {
      this.$refs.previewer.show(num);
    },
    // 效果图放大事件
    show(num) {
      this.swiper.slideTo(num, 0, false);
      // this.$vux.loading.show({
      //   text: "Loading"
      // });
      // setTimeout(() => {
      //   this.$vux.loading.hide();
      // }, 500);

      // this.bottomShows = true;
      // if(num == 1) {
      //   this.changes(0);
      //   this.$refs.previewer.show(this.xiaoguo);
      // }else if(num == 2){
      //   this.changes(this.huxing);
      //   this.$refs.previewer.show(this.huxing);
      // }else if(num == 3){
      //   this.changes(this.guihua);
      //   this.$refs.previewer.show(this.guihua);
      // }else if(num == 4){
      //   this.changes(this.yangbanjian);
      //   this.$refs.previewer.show(this.yangbanjian);
      // }
    },
    getDanmu() {
      for (var i = 0; i < 4; i++) {
        let num = Math.floor(Math.random() * 10);
        this.barList[i].text = this.allDanmu[num];
      }
    },
    showImg() {
      this.$vux.loading.show({
        text: "Loading"
      });
      setTimeout(() => {
        this.$vux.loading.hide();
      }, 500);
      this.changes(this.huxing);
      this.bottomShows = true;
      this.$refs.previewer.show(this.huxing);
    },
    // 各种缩放图片的点击事件
    // 效果图
    onItemClick() {
      this.$refs.previewer.goto(this.xiaoguo);
    },
    // 户型图
    onItemHouseTypeClcik() {
      this.$refs.previewer.goto(this.huxing);
    },
    // 规划图
    onGuihuaClick() {
      if (this.guihua !== -1) {
        this.$refs.previewer.goto(this.guihua);
      } else {
        this.msgalert("该楼盘还没有规划图");
      }
    },
    // 鸟瞰图
    niaokanClick() {
      if (this.niaokan !== -1) {
        this.$refs.previewer.goto(this.niaokan);
      } else {
        this.msgalert("该楼盘还没有鸟瞰图");
      }
    },
    // 沙盘图
    shapanClick() {
      if (this.shapan !== -1) {
        this.$refs.previewer.goto(this.shapan);
      } else {
        this.msgalert("该楼盘还没有沙盘图");
      }
    },
    getRandomArrayElements(arr, count) {
      var shuffled = arr.slice(0),
        i = arr.length,
        min = i - count,
        temp,
        index;
      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
      }
      return shuffled.slice(min);
    },
    // 实景图
    shijingClick() {
      if (this.shijing !== -1) {
        this.$refs.previewer.goto(this.shijing);
      } else {
        this.msgalert("该楼盘还没有实景图");
      }
    },
    // 样板间
    yangbanjiaClick() {
      if (this.yangbanjian !== -1) {
        this.$refs.previewer.goto(this.yangbanjian);
      } else {
        this.msgalert("该楼盘没有样板间");
      }
    },
    // 全部的点击事件
    allClick() {
      this.$router.push({
        path: "buildImgList",
        query: { buildId: this.buidID }
      });
    },

    // 筛选各个图片集合长度的方法
    onFilterImg(arr, type, num) {
      let arroy = arr.filter(items => {
        return items[type] == num;
      });
      return arroy;
    },
    // 楼盘数据加载的方法
    buidingLoade() {
      let post = this.buidID;
      this.get("palmsaleapp/api/v1/build/buildBaseInfoiIdApp?id=" + post, {
        interfaceType: "newHouse"
      }).then(
        response => {
          // console.log(response);
          if (response.status == 200) {
            // 将楼盘地址存入vuex
            this.$store.state.location = response.data.address;
            // 全部的图片
            let ImgArray = response.data.buildPictureList;
            for (let i = 0; i < ImgArray.length; i++) {
              // ImgArray[i].picturename = this.ImgSrc + ImgArray[i].picturename;
              ImgArray[i].picturename = this.concatFileUrl(
                ImgArray[i].picturename
              );
            }
            // console.log(ImgArray);
            // 样板间图片长度
            let picturetype = "picturetype";
            this.YangbanImg = this.onFilterImg(
              ImgArray,
              picturetype,
              "2"
            ).length;
            // 实景图长度
            this.ShijingImg = this.onFilterImg(
              ImgArray,
              picturetype,
              "3"
            ).length;
            // 沙盘图长度
            this.ShapanImg = this.onFilterImg(
              ImgArray,
              picturetype,
              "4"
            ).length;
            // 鸟瞰图长度
            this.NiaokanImg = this.onFilterImg(
              ImgArray,
              picturetype,
              "5"
            ).length;
            // 规划图长度
            this.GuihuaImg = this.onFilterImg(
              ImgArray,
              picturetype,
              "6"
            ).length;
            // 筛选效果图
            let Swiper = response.data.buildPictureList.filter(item => {
              return item.picturetype == "0";
            });
            // 效果图图片长度
            this.EffectImg = Swiper.length;
            this.baseList = Swiper; //response.data.buildPictureList;
            // 轮播图集合
            this.urlList = this.baseList.map(item => ({
              img: item.picturename
            }));
            this.collectImg = this.urlList[0].img;
            this.demo06_list = this.urlList;
            //转换物业类型
            // console.log(response.data.tenementTypeListApp);
            // response.data.tenementtype = response.data.tenementtype.split(",");
            // 户型图图片长度
            if (
              response.data.buildTypepictureList &&
              response.data.buildTypepictureList.length
            ) {
              this.ApartMentImg = response.data.buildTypepictureList.length;
            }
            // 查询当前楼盘是否可以入会
            if (response.data.buildinstate == "1") {
              this.isLand = true;
            } else {
              this.isLand = false;
            }
            //楼盘信息集合
            this.buidDetial = response.data;
            // console.log(this.buidDetial)
            if (this.buidDetial.buildPerpheralList.length != 0) {
              var schArr = [];
              var houspotialArr = [];
              var shopArr = [];
              var othArr = [];
              for (
                let i = 0;
                i < this.buidDetial.buildPerpheralList.length;
                i++
              ) {
                if (this.buidDetial.buildPerpheralList[i].perpheraltype == 3) {
                  houspotialArr.push(
                    this.buidDetial.buildPerpheralList[i].perpheralname
                  );
                } else if (
                  this.buidDetial.buildPerpheralList[i].perpheraltype == 2
                ) {
                  shopArr.push(
                    this.buidDetial.buildPerpheralList[i].perpheralname
                  );
                } else if (
                  this.buidDetial.buildPerpheralList[i].perpheraltype == 1
                ) {
                  schArr.push(
                    this.buidDetial.buildPerpheralList[i].perpheralname
                  );
                } else if (
                  this.buidDetial.buildPerpheralList[i].perpheraltype == 0
                ) {
                  othArr.push(
                    this.buidDetial.buildPerpheralList[i].perpheralname
                  );
                }
              }
              // console.log(schArr,houspotialArr,shopArr,othArr)
              this.school = schArr.toString();
              this.housepotial = houspotialArr.toString();
              this.shoppingCenter = shopArr.toString();
              this.othter = othArr.toString();
            }
            this.buildName = response.data.buildname; //楼盘名称
            this.buildPrice = response.data.averageprice; //楼盘价格
            this.housTypeImg = response.data.buildTypeList;
            // console.log(this.housTypeImg);
            this.houseTypelen = this.housTypeImg.length;
            // 户型图图片集合
            this.houseTypeList = response.data.buildTypepictureList;
            // 将户型图片和其他图片合并为一个对象
            this.build3DList = response.data.buildThreeDimensionalInfoList; //3D
            if(this.build3DList && this.build3DList.length > 0) {
              this.threeItem = this.build3DList[0]
            }
            let typeArr = [];
            let obj = {};
            // 取户型数据
            if (this.houseTypeList && this.houseTypeList.length) {
              for (let i = 0; i < this.houseTypeList.length; i++) {
                // this.houseTypeList[i] = this.ImgSrc + this.houseTypeList[i];
                this.houseTypeList[i] = this.concatFileUrl(
                  this.houseTypeList[i]
                );
                obj.picturetype = "7";
                obj.picturename = this.houseTypeList[i];
                typeArr.push(obj);
              }
            }

            // console.log(typeArr);
            // 处理销售面积,图片
            // console.log(this.housTypeImg);
            let houseImgArr = [];
            for (let i = 0; i < this.housTypeImg.length; i++) {
              // console.log(this.housTypeImg[i].housetypefilename);
              if (!this.notEmpty(this.housTypeImg[i].housetypefilename)) {
                houseImgArr.push(this.housTypeImg[i]);
                // this.housTypeImg[i].housetypefilename = this.ImgSrc + this.housTypeImg[i].housetypefilename.split(',')[0];
                this.housTypeImg[i].housetypefilename = this.concatFileUrl(
                  this.housTypeImg[i].housetypefilename.split(",")[0]
                );
                this.housTypeImg[i].salearea =
                  parseInt(this.housTypeImg[i].salearea) + "㎡";
              }
            }
            this.housTypeImg = houseImgArr;
            // console.log(houseImgArr);
            // 图片放大集合
            // console.log(ImgArray)
            ImgArray = ImgArray.concat(typeArr);
            this.List = ImgArray.map((item, index) => ({
              src: item.picturename,
              type: item.picturetype
            }));
            //重新将数组按类型排序
            let v1 = [];
            let v2 = [];
            let v3 = [];
            let v4 = [];
            let v5 = [];
            let v6 = [];
            let v7 = [];
            let v8 = [];
            for (let i = 0; i < this.List.length; i++) {
              if (this.List[i].type == "0") {
                v1.push(this.List[i]);
              } else if (this.List[i].type == "7") {
                v2.push(this.List[i]);
              } else if (this.List[i].type == "6") {
                v3.push(this.List[i]);
              } else if (this.List[i].type == "2") {
                v4.push(this.List[i]);
              } else if (this.List[i].type == "3") {
                v5.push(this.List[i]);
              } else if (this.List[i].type == "4") {
                v6.push(this.List[i]);
              } else if (this.List[i].type == "5") {
                v7.push(this.List[i]);
              } else if (this.List[i].type == "1") {
                v8.push(this.List[i]);
              }
            }
            this.List = [];
            this.List = this.List.concat(v1, v2, v3, v4, v5, v6, v7, v8);
            // 筛选出除去户型图之外的所有图片
            this.newSwiper = this.List.filter(item => {
              return item.type !== "7";
            });
            // console.info(this.List)
            // 效果图index
            this.xiaoguo = this.newSwiper.findIndex((value, index, arr) => {
              return value.type == "0";
            });
            // 户型图index
            this.huxing = this.newSwiper.findIndex((value, index, arr) => {
              return value.type == "7";
            });
            // 规划图index
            this.guihua = this.newSwiper.findIndex((value, index, arr) => {
              return value.type == "6";
            });

            this.guihua =
              this.guihua == -1 ? v1.length + v2.length : this.guihua;

            // 样板间index
            this.yangbanjian = this.newSwiper.findIndex((value, index, arr) => {
              return value.type == "2";
            });

            this.yangbanjian =
              this.yangbanjian == -1
                ? v1.length + v2.length + v3.length
                : this.yangbanjian;
            // 实景图index
            this.shijing = this.newSwiper.findIndex((value, index, arr) => {
              return value.type == "3";
            });
            this.shijing =
              this.shijing == -1
                ? v1.length + v2.length + v3.length + v4.length
                : this.shijing;
            // 沙盘图index
            this.shapan = this.newSwiper.findIndex((value, index, arr) => {
              return value.type == "4";
            });
            this.shapan =
              this.shapan == -1
                ? v1.length + v2.length + v3.length + v4.length + v5.length
                : this.shapan;
            // 鸟瞰图index
            this.niaokan = this.newSwiper.findIndex((value, index, arr) => {
              return value.type == "5";
            });
            this.niaokan =
              this.niaokan == -1
                ? v1.length +
                  v2.length +
                  v3.length +
                  v4.length +
                  v5.length +
                  v6.length
                : this.niaokan;

            // 配套图index
            this.peitao = this.newSwiper.findIndex((value, index, arr) => {
              return value.type == "1";
            });
            this.peitao =
              this.peitao == -1
                ? v1.length +
                  v2.length +
                  v3.length +
                  v4.length +
                  v5.length +
                  v6.length +
                  v7.length
                : this.peitao;
          }
          this.changes(0);
          let Mself = this;
          let Path = window.location.href.split("#")[0] + "#/";
          let Hashs = window.location.hash;

          this.$wechat.miniProgram.getEnv(res => {
            if (res.miniprogram) {
              Mself.$wechat.miniProgram.postMessage({
                data: {
                  shearData: {
                    title: Mself.buildName,
                    imgurl:
                      "https://img.guoanfamily.com/" +
                      response.data.firstpicture +
                      "?imageView2/0/w/500",
                    path: encodeURIComponent(
                      `#/building_detial?buildID=${
                        Mself.buidID
                      }&from=xiaochengxu`
                    ),
                    tyle: true
                  }
                }
              });
            }
          });
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 定位的点击事件
    addressLocation() {
      // this.showMap =  true;
      this.addLocation = this.$store.state.location;
      this.$router.push({ path: "map", query: { address: this.addLocation } });
    },

    // 旅居卡的点击事件
    Membership() {
      let src = "https://www.guoanfamily.com/MemberShipExplain/#/";
      let title = "入会说明";
      this.$router.push({
        path: "/MemberIfream",
        query: { buildid: this.buidID, title: title, src: src }
      });
    },
    // 户型图的点击事件
    houseTyeImgClick(val) {
      // console.log(val);
      let id = val;
      this.$router.push({
        path: "houseType",
        query: { typeid: id, buildid: this.buidID }
      });
    },
    //查看更多按钮的点击事件
    showBtn() {
      this.showBuilDetial = true; //跟多信息的隐藏状态
      this.fadeInShow = false; //查看跟多按钮
      this.fadeInOut = true; //收起按钮
    },
    // 查看全部房源的点击事件
    allHouse() {
      // this.showalert('敬请期待')
      // let userPhone = localStorage.getItem('userPhone');
      if (!this.LoToken() && !this.UserPhone()) {
        // this.$router.push({ path: 'house_resource', query: { buildid: this.buidID } })
        if (this.buidDetial.buildname == "北海第一城") {
          this.msgalert("暂无房源信息");
          return false;
        }
        this.Buildonload();
      } else {
        this.$store.state.loginShow = true;
      }
    },
    // 在线订房的点击事件
    onlineBooking() {
      if (this.buidDetial.buildname == "北海第一城") {
        this.msgalert("暂无房源信息");
        return false;
      }
      // this.showalert('敬请期待')

      if (!this.LoToken() && !this.UserPhone()) {
        this.Buildonload();
      } else {
        this.$store.state.loginShow = true;
      }
    },
    // 查询楼盘是否有房源的方法
    Buildonload() {
      let buildid = this.buidID;
      let housebaseinfoport = this.buidDetial.housebaseinfoport;
      if (housebaseinfoport == "国安家服务端") {
        this.get(
          "palmsaleapp/api/v1/build/buildhousenumber?buildid=" +
            buildid +
            "&housetypeid=",
          { interfaceType: "newHouse" }
        ).then(
          response => {
            if (response.status == 200) {
              if (response.data.error == "暂无房源信息") {
                this.msgalert(response.data.error);
                return false;
              } else {
                this.$router.push({
                  path: "house_resource",
                  query: { buildid: this.buidID }
                });
              }
            }
          },
          response => {
            this.showalert(response.msg);
          }
        );
      } else {
        this.msgalert("暂无房源信息");
      }
    },
    //收起按钮的点击事件
    outBtn() {
      this.showBuilDetial = false; //跟多信息的隐藏状态
      this.fadeInShow = true; //查看跟多按钮
      this.fadeInOut = false; //收起按钮
    },
    //收藏按钮的点击事件
    collentClick() {
      // let userPhone = localStorage.getItem('userPhone');
      // if (!this.notEmpty(userPhone)) {
      if (!this.LoToken() && !this.UserPhone()) {
        let post_data = {
          collectTitle: this.buidDetial.buildname, //楼盘名
          collectResume: this.buidDetial.averageprice, //价格
          collectContent: this.buidDetial.address, //地址
          adjunctContent: this.buidDetial.buildingarea, //建筑面积
          imageName: this.collectImg, //图片名称
          collectUrl: window.location.hash, //当前url
          type: "1" //收藏的类型,楼盘为1,户型为2
        };
        // console.log('参数',post_data);
        this.post("CollectController/saveCollectInfo", post_data, {
          interfaceType: "collect"
        }).then(
          response => {
            // console.log('进来接口'+JSON.stringify(response));
            if (response.code == 200) {
              this.msgalert("收藏成功");
              let a = JSON.parse(localStorage.getItem("userInfroMap"));
              a.collectList.push(window.location.hash);
              localStorage.setItem("userInfroMap", JSON.stringify(a));
              this.collent = false; //取消收藏按钮
              this.quitCollent = true; //收藏按钮
            } else {
              this.showalert(response.msg);
            }
          },
          response => {
            this.showalert(response.msg);
          }
        );
      } else {
        this.$store.state.loginShow = true;
      }
    },
    // 取消收藏的点击事件
    quitCollentClick() {
      let post_data = {
        collectUrl: window.location.hash
      };
      this.post("CollectController/delCollectInfo", post_data, {
        interfaceType: "collect"
      }).then(
        response => {
          // console.log(response);
          if (response.code == 200) {
            this.msgalert("取消收藏成功");
            let a = JSON.parse(localStorage.getItem("userInfroMap"));
            let arr = a.collectList;
            let hrefs = window.location.href;
            arr.splice(arr.indexOf(hrefs), 1);
            a.collectList = arr;
            localStorage.setItem("userInfroMap", JSON.stringify(a));
            this.collent = true; //取消收藏按钮
            this.quitCollent = false; //收藏按钮
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 时间选择框
    onChange(val) {
      // console.log('change', val)
      this.selecteddate = val[0] + " " + val[1] + ":" + val[2] + ":" + "00";
    },
    // 预约看房的点击事件
    appointmentClick() {
      // let userPhone = localStorage.getItem('userPhone');
      if (!this.LoToken() && !this.UserPhone()) {
        // this.rooms = this.buidDetial.buildname;
        let username = localStorage.getItem("userName");
        if (!this.notEmpty(username)) {
          this.username = username;
        } else {
          this.username = "";
        }
        this.mobile = localStorage.getItem("userPhone");
        // this.shows = true;
        // this.market = true;
        let buildID = this.$route.query.buildID;
        this.$router.push({
          path: "reservationPages",
          query: { buildID: buildID }
        });
      } else {
        this.$store.state.loginShow = true;
      }
    },
    // 立即预约的点击事件
    btnSubClick() {
      if (this.notEmpty(this.username)) {
        // this.showalert('请输入姓名');
        this.msgalert("请输入姓名");
        return false;
      }
      if (this.notEmpty(this.mobile)) {
        this.msgalert("请输入电话");
        return false;
      }
      if (this.notEmpty(this.numberPeople)) {
        this.msgalert("请输入带看人数");
        return false;
      }
      if (this.notEmpty(this.selecteddate)) {
        this.msgalert("请选择看房时间");
        return false;
      }

      let post_data = {
        custname: this.username, //姓名
        phonenum: this.mobile, //客户电话
        custphone: localStorage.getItem("userPhone"), //注册手机号
        scancount: this.numberPeople, //看房人数
        buildid: this.buidID, //楼盘id
        scantime: this.selecteddate, //预约时间
        myappointmentUrl: window.location.href,
        buildname: this.rooms
      };
      // console.log(JSON.stringify(post_data))
      this.post("palmsaleapp/api/v1/build/collectsave", post_data, {
        interfaceType: "newHouse"
      }).then(
        response => {
          if (response.status == 200) {
            this.msgalert(response.msg);
            this.market = false;
            this.shows = false;
          } else {
            this.msgalert(response.msg);
          }
        },
        response => {
          this.showalert(response.msg);
        }
      );
    },
    // 遮罩层的点击事件
    markedClick() {
      this.shows = false;
      this.market = false;
      this.shareImg = false;
      this.shareAlert = false;
      this.isThree = false;
    },
    // 3D看房
    threeClick() {
      if(this.build3DList.length > 0) {
        this.market = true;
        this.isThree = true;
      }else {
        // this.msgalert('')
      }


    },
    // 3D li 关闭
    handlethreeClear() {
      this.isThree = false;
      this.market = false;
    },
    handle3Dskip(item, i) {
      this.threeItem = item
      this.threeIndex = i
    },
    handelSuccthree() {
      if(this.threeIndex !== '') {
        this.$router.push({path: 'framePage', query: {src: this.threeItem.addressurl, title: this.threeItem.explaincontent}})
      }else {
        this.msgalert('请选择一个要查看的户型！')
      }
    },
    // 分享的点击事件
    ShareClick() {
      if (this.buidDetial.buildname == "晋唐海湾") {
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/jintang.html";
        this.shareTitle = "晋唐海湾";
        this.shareDesc = "晋唐海湾";
        this.shareLeftImg = this.collectImg;
        // this.onLoadWx();
      } else if (this.buidDetial.buildname == "北海第一城") {
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/northSea.html";
        this.shareTitle = "中信国安 · 北海第一城";
        this.shareDesc = "中信国安 · 北海第一城";
        this.shareLeftImg = this.collectImg;
        // this.onLoadWx();
      } else if (this.buidDetial.buildname == "山海龙城") {
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/shanhailongcheng.html";
        this.shareTitle = "山海龙城";
        this.shareDesc = "山海龙城";
        this.shareLeftImg = this.collectImg;
        // this.onLoadWx();
      } else if (this.buidDetial.buildname == "峨眉国安公馆") {
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/gongguan.html";
        this.shareTitle = "峨眉国安公馆";
        this.shareDesc = "峨眉国安公馆";
        this.shareLeftImg = this.collectImg;
        // this.onLoadWx();
      } else if (this.buidDetial.buildname == "华亚欢乐城") {
        // this.shareLink = "http://act.guoanfamily.com/microHBrochure/gongguan.html";
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/huaya.html?";
        this.shareTitle = "华亚欢乐城";
        this.shareDesc = "华亚欢乐城";
        this.shareLeftImg = this.collectImg;
        // this.onLoadWx();
      } else if (this.buidDetial.buildname == "平海·美龄湾") {
        // this.shareLink = "http://act.guoanfamily.com/microHBrochure/gongguan.html";
        this.shareLink =
          "http://act.guoanfamily.com/microHBrochure/meilingwan.html";
        this.shareTitle = "平海·美龄湾";
        this.shareDesc = "平海·美龄湾";
        this.shareLeftImg = this.collectImg;
        // this.onLoadWx();
      } else {
        if (this.$store.state.showWxTitle) {
          this.shareLink = window.location.href;
          this.shareTitle = this.buidDetial.buildname;
          this.shareDesc = this.buidDetial.buildname;
          this.shareLeftImg = this.collectImg;
        } else {
          this.shareLink =
            "https://www.guoanfamily.com/guoanjiaApp/#/building_detial?buildID=" +
            this.buidID;
          this.shareTitle = this.buidDetial.buildname;
          this.shareDesc = this.buidDetial.buildname;
          this.shareLeftImg = this.collectImg;
        }
      }
      if (this.$store.state.showWxTitle) {
        this.market = true;
        this.shareImg = true;
        this.wxduanShare();
      } else {
        this.shareAlert = true;
        this.market = true;
      }
    },
    // 分享到微信的点击事件
    weixinhaoyoufenxiangClick() {
      this.market = false;
      this.shareAlert = false;
      this.wxShare();
    },
    // 分享到朋友圈的点击点击事件
    weixinFriendsClick() {
      this.market = false;
      this.shareAlert = false;
      this.friendShare();
    },
    // 取消分享的点击事件
    exitShareClick() {
      let setTime = setTimeout(() => {
        this.market = false;
      }, 900);
      this.shareAlert = false;
    },
    //分享到朋友圈方法
    friendShare() {
      let self = this;
      this.AppShear = true;
      Wechat.share(
        {
          message: {
            title: self.shareTitle, //标题
            description: self.shareDesc, //描述
            thumb: self.shareLeftImg, //图片
            media: {
              type: Wechat.Type.WEBPAGE,
              webpageUrl: self.shareLink //连接地址指打开分享时页面地址
            }
          },
          scene: Wechat.Scene.TIMELINE // share to Timeline
        },
        function() {
          self.AppShear = false;
          self.msgalert("已成功分享到朋友圈");
        },
        function(reason) {
          self.AppShear = false;
          // alert("Failed: " + reason);
          // this.msgalert('已取消分享');
        }
      );
    },
    // 分享到微信朋友方法
    wxShare() {
      let self = this;

      self.AppShear = true;
      let Hashs = encodeURIComponent(
        `#/building_detial?buildID=${this.buidID}&from=xiaochengxu`
      );
      // let Path = "https://www.guoanfamily.com/guoanjiaApp/#/";
      // let urls = encodeURIComponent(`${Path}?from=xiaochengxu&Hashs=${Hashs}`);
      Wechat.share(
        {
          message: {
            title: self.shareTitle, //标题
            description: self.shareDesc, //描述
            thumb: self.shareLeftImg + "?imageView2/0/w/500", //图片
            media: {
              type: 9,
              webpageUrl: self.shareLink, //连接地址指打开分享时页面地址

              // url: `/pages/index/index?Hashs=${Hashs}` // this.buidID
              url: `/pages/new/newHouseDetail/newHouseDetail?buildId=${this.buidID}` // this.buidID
            }
          },
          scene: Wechat.Scene.SESSION // share to Timeline
        },
        function() {
          self.AppShear = false;
          self.msgalert("已成功分享给朋友");
        },
        function(reason) {
          self.AppShear = false;
          //    this.msgalert('已取消分享');
        }
      );
    },
    // 微信端的分享
    wxduanShare() {
      // 分享给朋友
      let self = this;
      this.$wechat.onMenuShareAppMessage({
        title: self.shareTitle, //标题
        desc: self.shareDesc, //描述
        link: self.shareLink, //连接地址指打开分享时页面地址
        imgUrl: self.shareLeftImg, //图片
        trigger: function(res) {
          // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
        },
        success: function(res) {
          self.market = false;
          self.shareImg = false;
        },
        cancel: function(res) {
          self.msgalert("已取消");
          self.market = false;
          self.shareImg = false;
        },
        fail: function(res) {
          self.msgalert("分享失败");
        }
      });
      // 分享到朋友圈
      self.$wechat.onMenuShareTimeline({
        title: self.shareTitle, //标题
        desc: self.shareDesc, //描述
        link: self.shareLink, //连接地址指打开分享时页面地址
        imgUrl: self.shareLeftImg, //图片
        trigger: function(res) {
          // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
        },
        success: function(res) {
          self.market = false;
          self.shareImg = false;
        },
        cancel: function(res) {
          self.msgalert("已取消");
          self.market = false;
          self.shareImg = false;
        },
        fail: function(res) {
          self.msgalert("分享失败");
        }
      });
      self.$wechat.error(function(res) {});
    },

    //alert弹窗
    showalert(msg) {
      // 显示
      this.$vux.alert.show({
        title: "提示信息",
        content: msg
      });
    },
    msgalert(msg) {
      this.$vux.toast.show({
        text: msg,
        type: "text"
      });
    }
  },
  created () {
    this.getDanmu(); // 加弹幕

  },
  mounted() {
    // 获取从上个页面传过来的楼盘id
    this.buidID = this.$route.query.buildID;
    if(this.buidID) {
      this.buidingLoade();
    }
    // 判断是否是小程序条件
    this.judgeStation();
    // 日期时间处理
    let date = new Date();
    let nowmonth = date.getMonth() + 1;
    this.startdate = date.getFullYear() + "/" + nowmonth + "/" + date.getDate();
    date.setMonth(date.getMonth() + 1);
    let nextmonth = date.getMonth() + 1;
    this.enddate = date.getFullYear() + "/" + nextmonth + "/" + date.getDate();
    // 判断类型
    if (!this.$store.state.showWxTitle) {
      if (!this.AndroidOrIos()) {
        this.AndroidTop = false;
        this.IosTop = true;
        this.wxTop = false;
      } else {
        this.AndroidTop = true;
        this.IosTop = false;
        this.wxTop = false;
      }
    } else {
      this.wxTop = true;
      this.AndroidTop = false;
      this.IosTop = false;
    }
    // 获取localstorage
    let user = JSON.parse(localStorage.getItem("userInfroMap"));
    if (!this.notEmpty(user)) {
      let userArr = user.collectList;
      // alert('收藏列表'+userArr.toString())
      let hres = window.location.hash;
      // console.log('地址',hres);
      for (let i = 0; i < userArr.length; i++) {
        if (hres == userArr[i]) {
          this.collent = false; //取消收藏按钮
          this.quitCollent = true; //收藏按钮
          return;
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style scoped lang='less'>
.fixContent {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .loadingBox {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    .loadings {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba(0, 0, 0, 0.8);
      width: 2.4rem;
      height: 2.4rem;
      border-radius: 5px;
      div {
        font-size: 0.3rem;
        color: #fff;
        line-height: 0.8rem;
      }
      .loadings_img {
        height: 1.2rem;
        width: 1.2rem;
        background: url("../../../static/new/img/shear1.png") center no-repeat;
        background-size: 80%;
        margin: 0.2rem auto;
        margin-bottom: 0;
      }
    }
  }
}
.contentop {
  flex: 1;
  font-family: "SourceHanSansCN-Normal", "MicrosoftYaGHei";
  box-sizing: border-box;
  padding-bottom: 1rem;
}
.body_top {
  margin-top: 1.3rem;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 1.2rem;
  right: 0;
  overflow: auto;
  transform: translate3d(0, 0, 0);
}
.body_tops {
  margin-top: 0.6rem;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
}
.wx_top {
  margin-top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
}
  //轮播图样式
.copyright {
  font-size: 0.3rem;
  color: #ccc;
  text-align: center;
}

.text-scroll {
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
}

.text-scroll p {
  font-size: 0.3rem;
  text-align: center;
  line-height: 30px;
}
.black {
  background-color: #000;
}
.title {
  line-height: 100px;
  text-align: center;
  color: #fff;
}

// 图片放大功能的外层样式
.blackmarket {
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.9;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  margin: auto;
  z-index: 11;
}
// 头部轮播图部分
.swipertop {
  width: 100%;
  box-sizing: border-box;
  height: 5.3rem;
  padding: 0.3rem 0.3rem 0px 0.4rem;
  position: relative;
}
.swipertopabs {
  position: absolute;
  top: 0.6rem;
  width: 6.9rem;
  height: 2rem;
  text-align: left;
  overflow: hidden;
  z-index: 230;
}
.absitem {
  width: 2.8rem;
  height: 0.4rem;
  border-radius: 0.16rem;
  background: rgba(46, 44, 44, 0.6);
  margin-bottom: 0.1rem;
}
.absitem img {
  float: left;
  margin: 0.05rem 0.12rem 0 0.16rem;
  width: 0.26rem;
  height: 0.26rem;
}
.absitemp {
  width: 2.2rem;
  font-size: 0.24rem;
  line-height: 0.4rem;
  color: #fff;
  font-family: "SourceHanSansCN-Regular", "MicrosoftYaGHei";
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.swipers {
  width: 6.9rem;
  height: 100%;
  position: relative;
}
.swiperpos {
  position: absolute;
  z-index: 10000;
  right: 0.1rem;
  top: 0.3rem;
  width: 3rem;
  height: 0.6rem;
}
.swiperpositem {
  float: right;
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 0.2rem;
}
.swiperpositem01{
  background-color: rgba(70, 70, 70, 0.6);
  border-radius: 50%;
}
.swiperpositemimg{
  width: 70%;
  margin-top: 13%;
  margin-left: 14%;
}
// 头部样式
.ImgHeader {
  width: 100%;
  height: 1rem;
  background: rgba(51, 51, 51, 0.8);
  position: absolute;
  bottom: 0rem;
  left: 0;
  z-index: 80;
  line-height: 1rem;
  .EffectImg {
    width: 50%;
    height: 100%;
    float: left;
    position: relative;
    border-right: 0.05rem solid #fff;
  }
  .ApartMentImg {
    width: 49%;
    height: 100%;
    float: right;
    position: relative;
  }
  img {
    width: 0.5rem;
    margin-top: 0.25rem;
    position: absolute;
    left: 0.75rem;
  }
  span {
    font-size: 0.3rem;
    color: #ffffff;
    margin-bottom: 10px;
    display: block;
    position: absolute;
    top: 0em;
    left: 1.5rem;
  }
}
.ImgHeader1 {
  width: 100%;
  height: 1rem;
  background: rgba(51, 51, 51, 0.5);
  position: absolute;
  top: 4rem;
  left: 0;
  z-index: 2;
  line-height: 1rem;
  .EffectImg {
    width: 50%;
    height: 100%;
    float: left;
    position: relative;
    border-right: 0.05rem solid #fff;
  }
  .ApartMentImg {
    width: 49%;
    height: 100%;
    float: right;
    position: relative;
  }
  img {
    width: 0.5rem;
    margin-top: 0.25rem;
    position: absolute;
    left: 0.75rem;
  }
  span {
    font-size: 0.3rem;
    color: #ffffff;
    margin-bottom: 10px;
    display: block;
    position: absolute;
    top: 0em;
    left: 1.5rem;
  }
}

.buildDetial {
  width: 100%;
  position: relative;
  margin-top: 0.2rem;
  // border-bottom: 1px solid #666;
  .allHouse {
    position: absolute;
    right: 0;
    top: 1rem;
    font-size: 0.3rem;
    img {
      width: 0.4rem;
      float: left;
    }
    span {
      display: block;
      float: right;
      margin-left: 0.1rem;
      margin-right: 0.5rem;
      font-size: 0.25rem;
      line-height: 0.5rem;
      font-weight: bold;
    }
  }
  .location {
    width: 0.5rem;
    height: 0.5rem;
    background: url("../../../static/new/img/dingwei.png") no-repeat;
    background-size: 75%;
    position: absolute;
    bottom: 1.25rem;
    right: 0.5rem;
  }
  .share {
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    z-index: 0;
    right: 0.25rem;
    top: 0.25rem;
    background: url("../../../static/new/img/shares.png") no-repeat;
    background-size: 80%;
  }
  .topNmae {
    width: 100%;
    height: 1rem;
    .buildName {
      font-weight: 600;
      line-height: 1rem;
      font-size: 0.4rem;
      color: #323232;
      display: block;
      float: left;
      text-align: left;
      padding-left: 0.4rem;
      width: 90%;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .buildTag {
    display: block;
    float: left;
    height: 0.7rem;
    overflow-x: auto;
    white-space: nowrap;
    width: 94%;
    padding-left: 0.3rem;
    ul {
      margin-top: -0.62rem;
      text-align: left;
      white-space: nowrap;
      // text-overflow:ellipsis;
      li {
        background: #f5f5f5;
        color: #999;
        line-height: 0.48rem;
        display: block;
        height: 0.48rem;
        display: inline-block;
        padding: 0 0.2rem;
        font-size: 0.25rem;
        margin-left: 0.125rem;
        white-space: nowrap;
      }
      li:first-child {
        margin-left: 0;
      }
    }
  }
  .details {
    height: 0.75rem;
  }
  .detial {
    overflow: hidden;
    // padding-left: 0.25rem;
    height: 0.68rem;
    .kaitime {
      line-height: 0.5rem;
      width: 1.17rem;
      text-align: left;
      float: left;
      color: #999;
      padding-left: 0.4rem;
      font-size: 0.28rem; // height: 1.6rem;
      span {
        display: inline-block;
        padding-left: 100%;
      }
    }
    .ovaspan {
      float: left;
      line-height: 0.5rem;
      color: #999;
    }
    .rightContent {
      height: 100%;
      float: left;
      line-height: 0.03rem;
      width: 60%;
      text-align: left;
      overflow: hidden;
      .price {
        color: #000;
        font-size: 0.3rem;
      }
      .priceContent {
        font-size: 0.28rem;
        display: inline-block;
        height: 0.5rem;
        color: #000;
        line-height: 0.5rem;
        overflow: hidden;
      }
    }
    span {
      font-size: 0.3rem;
    }
  }
  .details01 {
    width: 50%;
    float: left;
    height: 0.75rem;
  }
}
.buildDetialbor {
  margin: 0 0.3rem 0 0.3rem;
  border-bottom: 1px solid #ddd;
}
// 户型样式
.housTypeHeader {
  width: 100%;
  height: 1rem;
  text-align: left;
  line-height: 0.75rem;
  img {
    margin-top: 0.25rem;
    width: 0.45rem;
    float: left;
    margin-left: 0.25rem;
  }
  .types {
    margin-left: 0.4rem;
    color: #000;
  }
  span {
    font-size: 0.32rem;
    display: block;
    float: left;
    line-height: 1.1rem;
  }
}
.housTypeHeader01 {
  margin-bottom: 0.1rem;
}
.housTypeImgScroll {
  padding-bottom: 0.2rem;
  padding-left: 0.3rem;
  ul {
    width: 100%;
    overflow-x: auto;
    display: flex;
    li {
      margin-left: 0.3rem;
    }
    li:first-child {
      margin-left: 0;
    }
  }
  .HousTypeTop {
    width: 4.5rem;
    height: 1rem;
    background: #f5f5f5;
    border: 1px solid #ddd;
    .HousTypeTopLeft {
      width: 4.2rem;
      float: left;
      padding: 0.15rem;
      border-top: 1px solid #ddd;
      padding-bottom: 0rem;
      padding-top: 0.1rem;
      span {
        width: 100%;
        display: block;
        color: #000;
        font-size: 0.26rem;
        text-align: left;
      }
    }
    .HousTypeTopRight {
      float: left;
      width: 100%;
      padding: 0.15rem; // background: red;
      padding-top: 0.06rem;
      span {
        width: 100%;
        display: block;
        color: #999;
        text-align: left;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 0.26rem;
      }
    }
  }
  .HousTypeBottomImg {
    clear: left;
    text-align: center;
    width: 100%;
    height: 3.375rem;
    padding-top: 10px;
    img {
      width: 4.5rem;
      height: 100%;
      border: 1px solid #ddd;
    }
  }
}

// 按钮样式
.showBackBtn {
  width: 6.8rem;
  height: 0.42rem;
  margin: 0 auto;
  margin-bottom: 0.3rem;
  background: #f5f5f5;
  position: relative;
  div {
    font-size: 0.35rem;
    color: #666666;
    border-radius: 0.2rem;
    background: #f5f5f5;
    width: 50%;
    text-align: center;
    line-height: 0.8rem;
    background: #ffffff;
    position: absolute;
    left: 25%;
    top: 0;
    img {
      position: absolute;
      left: 50%;
      top: 0.13rem;
      width: 0.16rem;
      margin-left: -0.085rem;
    }
  }
}
// 最底部样式
.lastBottom {
  padding: 0 14px;
  margin-bottom: 10px;
  line-height: 42px;
  height: 41px;
  text-align: left;
  span {
    color: #000;
    font-size: 0.36rem;
    padding-left: 5px;
  }
}
.bottomBig {
  overflow: hidden;
  padding: 0 0.35rem 0.8rem 0.4rem;
  position: relative;
  .phoneNumber {
    display: block;
    font-size: 0.42rem;
    font-weight: 400;
    color: #e45044;
    text-align: left;
  }
  a {
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    background: url("../../../static/new/img/hotphone.png");
    background-size: cover;
    position: absolute;
    right: 0.6rem;
    bottom: 0.8rem;
  }
  .explain {
    font-size: 0.26rem;
    color: #999;
    padding-top: 3px;
  }
}
.wx_bottomBig {
  padding: 0 0.35rem 2rem 0.4rem;
}
.wx_bottomBig a {
  display: block;
  width: 0.8rem;
  height: 0.8rem;
  background: url("../../../static/new/img/hotphone.png");
  background-size: cover;
  position: absolute;
  right: 0.6rem;
  bottom: 2rem;
}
.shareAlert {
  width: 100%;
  height: 0rem;
  position: fixed;
  transition: 0.9s;
  bottom: 0;
  background: #fff;
  z-index: 200;
  .shareIcon {
    width: 100%;
    height: 1.5rem;
    div {
      float: left;
      width: 1.5rem;
      height: 1.5rem;
      background: red;
      margin-left: 0.3rem;
      position: relative;
    }
    div:nth-child(1) {
      background: url(../../../static/new/img/Wx.png) no-repeat;
      background-size: 60%;
      background-position: 50% 26%;
      span {
        display: block;
        width: 100%;
        font-size: 0.3rem;
        position: absolute;
        bottom: 0;
        text-align: center;
      }
    }
    div:nth-child(2) {
      background: url(../../../static/new/img/friends.png) no-repeat;
      background-size: 60%;
      background-position: 50% 26%;
      span {
        display: block;
        width: 100%;
        font-size: 0.3rem;
        position: absolute;
        bottom: 0;
        text-align: center;
      }
    }
  }
  .exitShare {
    padding-top: 5px;
    font-size: 0.4rem;
    border-top: 1px solid #e6e6e6;
    margin-top: 0.6rem;
    bottom: 0;
    text-align: center;
    width: 100%;
  }
}
.shareAlert1 {
  height: 3rem;
}
.bottomes {
  font-family: "SourceHanSansCN-Normal", "MicrosoftYaGHei";
  -webkit-transform: translateZ(0);
  width: 100%;
  height: 1rem;
  z-index: 10;
  background: #ffffff; // background:red;
  button {
    border: none;
    float: left;
  }
  .bottomdiv {
    width: 100%;
    height: 1rem;
    box-sizing: border-box;
  }
  .collentDiv {
    width: 30%;
    height: 100%;
    position: relative;
    float: left;
  }

  .yuyue {
    width: 50%;
    height: 100%;
    background: #e34e3b;
    text-align: center;
    color: #ffffff;
    font-size: 0.35rem;
    font-family: "SourceHanSansCN-Regular", "MicrosoftYaGHei";
  }
  .dingfang {
    width: 50%;
    height: 100%;
    background: #cccccc;
    background-size: cover;
    text-align: center;
    color: #ffffff;
    font-size: 0.35rem;
    font-family: "SourceHanSansCN-Normal", "MicrosoftYaGHei";
  }
}

//遮罩层样式
.dialog {
  background: #ffffff;
  position: fixed;
  width: 90%;
  top: 20%;
  left: 5%;
  z-index: 150;
  border-radius: 0.25rem;
}
//遮罩内部样式
.dialogTop {
  position: relative;
  text-align: center;
  line-height: 1.05rem;
  background: #ff8a00;
  border-radius: 0.125rem 0.125rem 0 0;
  color: #fff;
  font-size: 0.4rem; // border-radius: .4rem .4rem 0 0;
}
// 底部图片缩放栏
.bottomFixed {
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
  z-index: 12; // background: red;
  background: red;
  overflow-x: auto;
}

// 遮罩样式
.market {
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.8;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  margin: auto;
  z-index: 11;
}
.threekf{ //3D 样式
  position: absolute;
  left: 0;  right: 0;
  bottom: 0;  top: 0;
  border-radius: .14rem;
  margin: auto;
  width: 5rem;
  height: 5rem;
  padding-top: 2rem;
  background-color: #fff;
  .threep{
    position: absolute;
    left: 0; top: 0;
    font-size: .34rem;
    color: #ffffff;
    line-height: 1rem;
    width: 100%;
  }
  .threeul{
    height: 67%;
    padding: .25rem 0;
    overflow-x: hidden;
    overflow-y: auto;
    .threeli{
      padding: .2rem 0;
      font-size: .28rem;
      line-height: .28rem;
      text-align: center;
      width: 3.6rem;
      margin-left: .7rem;
      border: 1px solid #e44e3d;
      border-radius: .4rem;
      margin-bottom: .2rem;
    }
  }
  .threebtn{
    height: 20%;
    span{
      display: block;
      width: 1.8rem;
      height: .8rem;
      line-height: .8rem;
      text-align: center;
      margin: 0 auto;
      font-size: .28rem;
      border-radius: .4rem;
      background-color: #e44e3d;

      color: #fff;
    }
  }
  .threeimg{
    width: .2rem;
    height: .2rem;
    top: .12rem;
    right: .14rem;
    position: absolute;
    img{
      width: 100%;
    }
  }
  .activethree{
    color: #fff;
    background-color: #e44e3d;
  }
}
// 分享提示文字样式
.righthorn {
  width: 100%;
  font-size: 0.75rem;
  text-align: center;
  height: 0.8rem;
  color: #ffffff;
  position: fixed;
  z-index: 12;
  left: 0;
  top: 0;
  line-height: 0.75rem;
  font-weight: 500;
  margin-top: 3.5rem;
}
.btnYuyue {
  width: 100%;
  height: 1rem;
  text-align: center;
  color: #ff8a00;
  font-size: 0.35rem;
  background: #ffffff;
  border: none;
  border-top: 1px solid #ccc;
  border-radius: 0.125rem;
}
// tab样式
.bottomTab {
  width: 100%;
  display: flex;
  height: 1.2rem;
  line-height: 1.2rem; // background: red;
  position: fixed;
  left: 0;
  bottom: -0.35rem;
  z-index: 100005;
  overflow-x: auto;
}
.bottomTab01 {
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  overflow-x: auto;
}
.box {
  padding: 15px;
}
.shu {
  position: absolute;
  width: 1px;
  height: 0.4rem;
  right: 0;
  top: 0.28rem;
  background: #ccc;
}
.vux-tab-item {
  position: relative;
}
.vux-tab .vux-tab-item.vux-tab-selected {
  color: red;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}

.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #333333;
  color: #ffffff;
  height: 100px;
}
.vux-tab .vux-tab-item {
  color: #fff;
  font-size: 0.3rem;
  width: 2rem;
  text-align: center;
}
.danmu {
  position: absolute;
  left: 100%;
}
.aniactive {
  animation: danmu 5s linear 0s 3;
}
.danmus1 {
  top: 0.5rem;
}
.danmus2 {
  top: 1rem;
}
.danmus3 {
  top: 1.5rem;
}
@keyframes danmu {
  from {
    left: 100%;
  }
  to {
    left: -50%;
  }
}
</style>
<style lang='less'>
.pswp__img {
  display: block !important;
}
.swipertop .weui-cells {
  font-size: 0.35rem !important;
}
.swipertop .vux-swiper-desc {
  display: none;
}
.swipertop .swiper-slide img {
  width: 100%;
  height: 100%;
}
.geshi {
  padding: 0 0.3rem 0 0.3rem;
}
.geshi .vux-tab {
  background: #fff;
}
.geshi .vux-tab .vux-tab-item {
  flex: 0 0 24%;
  width: 2rem !important;
}
.geshi .vux-tab-wrap {
  height: 100%;
  width: 100%;
}
.weui-toast {
  width: 4.6em !important;
}
.weui-toast_text {
  width: 4.6em !important;
}
.vux-tab-ink-bar {
  display: none !important;
}
</style>