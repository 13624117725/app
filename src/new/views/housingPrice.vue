<style lang='less' scoped>
@import '~vux/src/styles/1px.less';
@import "../common/public.css";
.flex-demo {
    text-align: center;
    background-clip: padding-box;
    color: #333333;
    position: relative; // border-bottom: 1px solid #ccc;
    font-size: 0.28rem;
    position: relative;
}
.long-string{
    position: absolute;
    left: 2rem;
    top:0.15rem;
    width: 1px;
    height: 0.5rem;
    background-color: #eee;
}
.imgIcon {
    position: absolute;
    width: 0.1rem;
    top: 0.4rem;
    left: 1.4rem;
}

.quyuname {
    color: #de0319;
}

.moneyname {
    color: #de0319;
}

.houseTypename {
    color: #de0319;
}

.gengduoname {
    color: #de0319;
}


.imgIcon1 {
    position: absolute;
    width: 0.1rem;
    top: 0.4rem;
    left: 1.4rem;
}

.topSearchInput {
    width: 100%;
    position: fixed;
    top: 1.3rem;
    left: 0;
    z-index: 103;
    background: #fff;
}
.topSearchInput1 {
    width: 100%;
    position: fixed;
    top: 1.3rem;
    left: 0;
    z-index: 103;
    background: #fff;
}
.topSearchInput2 {
    width: 100%;
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 103;
    background: #fff;
}
.searchInput {
    width: 100%;
    height: 0.75rem;
    line-height: .7rem; // background: red;
    // margin-left: 2%; // margin-bottom: 0.5rem; // position: fixed;
    margin-top: 0.15rem;
    z-index: 1;
    border: 1px solid #cccccc;
    border-radius: .375rem .375rem 0 0;
    div {
        float: left;
        width: 50%;
        height: .75rem;
        line-height: .75rem;
        font-size: .35rem;
    }
    .leftTab {
        width: 50%;
        height: .75rem;
        line-height: .75rem;
        font-size: .35rem;
        color:#fff;
        background:url('../../../static/new/img/buildListLeft.png') no-repeat;
        background-size: 100%;
        background-position: center;
    } // input {
    //     width: 100%;
    //     font-size: 0.55rem;
    //     float: left;
    //     padding-left: 10%;
    //     height: 100%;
    //     border-radius: 0.8rem;
    //     border: 1px solid #ccc;
    //     background: #f0f0f0;
    //     color: #999999;
    //     border: none;
    //     box-shadow: none;
    // }
    // .search {
    //     width: 10%;
    //     position: absolute;
    //     right: 7%;
    //     top: 0.3rem;
    //     height: 1.5rem;
    //     background: url(../../static/img/sousuo.png) no-repeat;
    //     background-size: 56%;
    //     background-position: center;
    // }
}

.market {
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0.8;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    margin: auto;
    z-index: 102;
}

.typeSearch {
    width: 100%;
    height: 0.8rem;
    line-height: 0.9rem; // background: red;
    // margin-top: .2rem;
    background: #fff;
    font-size: 0.35rem;
    // padding-bottom: .5rem;
    border-bottom: 1px solid #ddd;
    // border-top: 1px solid #ddd;
    // padding-bottom: .75rem; // border-bottom: 1px solid #ccc;
}

.redColor {
    width: 30%;
    float: left;
    font-size: 0.28rem;
    line-height: .6rem;
    height: 0.6rem;
    border: 1px solid red;
    margin-left: 2%;
    // margin-top: 0.25rem;
    // border-radius: 3px;
    color: red;
    // box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    // margin-top: 0.1rem;
}
.redColor:nth-child(n+4) {
    margin-top: 0.25rem;
}

.reglogins {
    // height: 4.5rem;
    overflow-y: scroll;
    position: absolute; // margin-top: .05rem;
}

.searchBottom {
    width: 100%;
    // height: .75rem;
    // left: 0;
    position: fixed;
    bottom: 0;
    // margin-top: 0.3rem;
    background: #ffffff;
    z-index: 1000;
    .exit {
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        /* margin-top: 0.25rem; */
        float: left;
        font-size: 0.35rem;
        border: none;
        width: 50%;
        font-size: 0.35rem;
        background-color: #999;
        color: #fff;
        box-sizing: border-box;
        /* border-top: 1px solid #ccc; */
    }
    .subMit {
        width: 50%;
        height: 1rem;
        line-height: 1rem;
        background-color: #e34b3e;
        text-align: center;
        color: #fff;
        /* margin-top: 0.25rem; */
        float: left;
        font-size: 0.35rem;
        border: none;
        /* border-top:1px solid #ccc; */
    }
}


.filerbj {
    width: 100%;
    height: 80%;
    background: url('../../../static/new/img/filter.png') no-repeat;
    background-size: 40%;
    background-position: 50% 20%;
    opacity: 0.8;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 15%;
    right: 0;
    margin: auto;
    z-index: 11;
}

.onInput {
    width: 6rem;
    margin-left: 10%;
    height: 1rem;
    // border: 4px solid #ccc; // background: red;
    position: relative;
    .mineprice {
        width: 6rem;
        height: 1rem;
        text-align: center; // background: #ccc;
        margin: 0 auto;
        div {
            float: left;
        }
        .nput {
            width: 40%;
            height: .8rem; // background: red;
            float: left;
        }
        .lines {
            width: 15%;
            line-height: .8rem;
            color: #333333;
            margin-left: 5px;
            height: .9rem; // margin-top: .1rem;
            text-align: center;
            overflow: hidden;
            background: #ccc;
        }
        .nput1 {
            // background: red;
            width: 40%;
            height: .8rem;
            float: right;
            font-size: .3rem;
        }
        .moneyInput {
            width: 100%;
            height: 100%;
            border: none;
            font-size: .3rem;
        }
    }  .mineprice {
        width: 6rem;
        height: 1rem;
        text-align: center; // background: #ccc;
        margin: 0 auto;
        div {
            float: left;
        }
        .nput {
            position: relative;
            width: 2.4rem;
            height: 1rem;
            // background: red;
            float: left;
        }
        .lines {
            width: 1rem;
            line-height: .9rem;
            color: #333333;
            // margin-left: 5px;
            height: 1rem; // margin-top: .1rem;
            text-align: center;
            overflow: hidden;
            background: #ccc;
        }
        .nput1 {
             position: relative;
            // background: red;
            width: 2.4rem;
            height: 1rem;
            float: right;
            font-size: .8rem;
        }
        .moneyInput {
            position: absolute;
            left: 0;
            top:0;
            width: 100%;
            height: 100%;
            border: none;
            font-size: .3rem;
            text-align: center
        }
    }
}
.clearfloat{
    clear:both;height:0;font-size: 1px;line-height: 0px;
}
.fixContent{
    background-color: #fff;
}
// .regloin{
//     top: .75rem;
// }
.button{
    width:100%;
    height:1rem;
    position:absolute;
    bottom:0rem;
}


.andcss{
    bottom:0.2rem;
}
</style>
<style>
    .typeSearch .vux-flexbox{
        height: 0.8rem;
    }
    .typeSearch .vux-flexbox-item{
        height: 0.8rem;
    }
    .typeSearch .flex-demo{
        height: 0.8rem;
    }
</style>

<template>
       <div  class="fixContent" >
        <div :class="{'topSearchInput':IosTop,'topSearchInput1':AndroidTop,'topSearchInput2':wxTop}">
            <div class="typeSearch" >
                <flexbox>
                    <flexbox-item>
                        <div class="flex-demo" @click="regionClick">
                            <span :class="{quyuname:add||quyuArr.length>0}">区域</span>
                            <img class="imgIcon" v-if="!quyu" src="../../../static/rent/img/stop1.png" />
                            <img class="imgIcon1" v-if="quyu" src="../../../static/rent/img/open1.png" />
                            <span class="long-string"></span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-demo" @click="jiageClick">
                            <span :class="{moneyname:add1||jiageArr.length>0}">价格</span>
                            <img class="imgIcon" v-if="!jiage" src="../../../static/rent/img/stop1.png" />
                            <img class="imgIcon1" v-if="jiage" src="../../../static/rent/img/open1.png" />
                            <span class="long-string"></span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-demo" @click="huxingClick">
                            <span :class="{houseTypename:add2||houseTypeIndex.length>0}">户型</span>
                            <img class="imgIcon" v-if="!huxing" src="../../../static/rent/img/stop1.png" />
                            <img class="imgIcon1" v-if="huxing" src="../../../static/rent/img/open1.png" />
                            <span class="long-string"></span>
                        </div>
                    </flexbox-item>
                    <flexbox-item>
                        <div class="flex-demo" @click="gengduoClick">
                            <span :class="{gengduoname:add3||allType}">更多</span>
                            <img class="imgIcon" v-if="!gengduo" src="../../../static/rent/img/stop1.png" />
                            <img class="imgIcon1" v-if="gengduo" src="../../../static/rent/img/open1.png" />
                            <span class="long-string"></span>
                        </div>
                    </flexbox-item>
                </flexbox>
            </div>
        </div>
        <div style="width:100%;height:100%;overflow-y: scroll;">
        <!--区域部分  -->
        <div @click="markets" class="regloin" :class="{'regloin1':AndroidTop,'regloin2':apTop}" v-show="quyu" >
            <ul style="margin-top:0.2rem">
                <template v-for="(item,index) in region">
                    <li :key="index" class="oLi" v-if="quyuArr.indexOf(item)== -1 " @click.stop="oquyuClick(index,item)">{{item}}</li>
                    <li :key="index" class="redColor" v-else @click.stop="oquyuClick(index,item)">{{item}}</li>
                </template>
                <div class="clearfloat"></div>
            </ul>
            <div class="button ipxButton">
                <button style='width:50%;float:left;'  class="subMit" @click.stop="quyuSubClick">确定</button>
                <button style='width:50%;float:left;' class="exit" @click.stop="quyuExitClick">重置</button>

            </div>
        </div>
        <!--价格部分  -->
        <div  class="regloin" :class="{'regloin1':AndroidTop,'regloin2':apTop}" v-if="jiage" >
            <ul style="margin-top:0.2rem">
                <template v-for="(item,index) in price">
                    <li :key="index" class="oLi" v-if="!item.active" @click.stop="ojiageClick(index,item.money)">{{item.money}}</li>
                    <li :key="index" class="redColor" v-else @click.stop="ojiageClick(index,item.money)">{{item.money}}</li>
                </template>
                 <div class="clearfloat"></div>
            </ul>
            <div class="types">请选择价格区间</div>
            <div class="onInput">
                <vue-slider  @callback="cb" ref="slider3" v-bind="demo" v-model="demo.value"></vue-slider>
                <!-- <div class="mineprice">
                    <div class="nput">
                        <input class="moneyInput" type="number" name="value" v-model="moneybeginValue">
                    </div>
                    <div class="lines">——</div>
                    <div class="nput1">
                        <input class="moneyInput" type="number" name="value" v-model="moneyendValue">
                    </div>
                </div> -->
            </div>
            <div class="button ipxButton">
                <button style='width:50%;float:left;' class="subMit" @click.stop="buidPrice">确定</button>
                <button style='width:50%;float:left;' class="exit" @click.stop="buidExitPrice">重置</button>
            </div>
        </div>
        <!--户型筛选部分  -->
        <div @click="markets" class="regloin" :class="{'regloin1':AndroidTop,'regloin2':apTop}" v-show="huxing" >
            <ul style="margin-top:0.2rem">
                <template v-for="(item,index) in housType">
                    <li :key="index" class="oLi" v-if="!item.active" @click.stop="ohuxingClick(index,item.house)">{{item.house}}</li>
                    <li :key="index" class="redColor" v-else @click.stop="ohuxingClick(index,item.house)">{{item.house}}</li>
                </template>
                 <div class="clearfloat"></div>
            </ul>
             <div class="button ipxButton">
                 <button style='width:50%;float:left;' class="subMit" @click.stop="houseTypeClick">确定</button>
                <button style='width:50%;float:left;' class="exit" @click.stop="houseTypeExitClick">重置</button>

            </div>

        </div>
        <!--更多部分  -->
         <div @click="markets" class="regloin reglogins" :class="{'regloin1':AndroidTop,'regloin2':apTop}" v-show="gengduo" >
            <div style="width:100%;height:100%;overflow-y:scroll;">
                <div style="width:100%;">
                    <div class="types" style="clear:both;">特色标签</div>
                    <ul>
                        <template v-for="(item,index) in Property">
                            <li :key="index" class="oLi" v-if="!item.active" @click.stop="PropertyClik(index,item.Property)">{{item.Property}}</li>
                            <li :key="index" class="redColor" v-else @click.stop="PropertyClik(index,item.Property)">{{item.Property}}</li>
                        </template>
                         <div class="clearfloat"></div>
                    </ul>
                </div>
                <div style="width:100%;">
                    <div class="types" style="clear:both;">面积</div>
                    <ul>
                        <template v-for="(item,index) in area">
                            <li :key="index" class="oLi" v-if="!item.active" @click.stop="allAreaClick(index,item.area)">{{item.area}}</li>
                            <li :key="index" class="redColor" v-else @click.stop="allAreaClick(index,item.area)">{{item.area}}</li>
                        </template>
                    </ul>
                </div>
                <div style="width:100%;">
                    <div class="types">物业类型</div>
                    <ul>
                        <template v-for="(item,index) in Typearr">
                            <li :key="index" class="oLi" v-if="!item.active" @click.stop="allMoreTypeClick(index,item)">{{item.types}}</li>
                            <li :key="index" class="redColor" v-else @click.stop="allMoreTypeClick(index,item)">{{item.types}}</li>
                        </template>
                        <div style="clear:both;height:0;line-height:0;"></div>
                    </ul>
                </div>
                <div style="widht:100%;height:1.3rem;"></div>
            </div>
        </div>
        <div class="searchBottom ipxButton" v-show="gengduo">
            <div style='width:100%;height:1rem;'>
                <button style='width:50%;float:left;' class="subMit subMit1" @click.stop="allBuildClick">确定</button>
                <button style='width:50%;float:left;' class="exit exit1" @click.stop="allBuildExitClick">重置</button>

            </div>
        </div>

        <!--楼盘列表  -->
        <template>
            <builds @receive='deal' :child='searchArr' :fjStatus='true'></builds>
        </template>
        <!-- 遮罩层 -->
        <div class="market" v-show="market" @click="markets"></div>
        <!-- 没有数据的图片 -->
        <div class="filerbj" v-show="buildFilter"></div>
        </div>
    </div>
</template>

<script>
import builds from '../components/build1'
import vueSlider from 'vue-slider-component'
export default {
    name: 'housingPrice',
    components: {
        builds,
        vueSlider
    },
    data() {
        return {
            AndroidTop:false,
            apTop:false,
            IosTop:false,
            wxTop:false,
            SearchbuildName: '',//输入框内的姓名
            topLeft: true,//头部左侧样式控制
            topRight: false,//头部右侧样式控制
            buildName: [],//接收到的参数
            searchArr: [],//筛选之后的数组
            modelData: [],//原来的数据集
            region: [],//区域的数据集
            moneybeginValue: '',//价格区间1
            moneyendValue: '',//价格区间2
            price: [{ "money": "5000以下" }, { "money": "5000-6000" }, { "money": "6000-7000" }, { "money": "7000-8000" }, { "money": "8000-10000" }, { "money": "10000-15000" }
                , { "money": "15000-20000" }, { "money": "20000以上" }
            ],
            // 厅室
            housType: [{ 'house': '一室' }, { 'house': '两室' }, { 'house': '三室' }, { 'house': '四室' }, { 'house': '五室及以上' }],
            // 类型
            Typearr: [],
            // 面积
            area: [{ 'area': "60㎡以下" }, { 'area': "60㎡-80㎡" }, { 'area': "60㎡-100㎡" }, { 'area': "100㎡以上" },],
            // buildstate: [{ 'state': '精装' }, { 'state': '简装' }, { 'state': '毛坯' }],
            Property: [],
            sort: [{ 'sort': '默认排序' }, { 'sort': '均价由低到高' }, { 'sort': '均价由高到低' }, { 'sort': '开盘时间倒序' }, { 'sort': '开盘时间顺序' },],
            quyu: false,
            jiage: false,
            huxing: false,
            gengduo: false,
            market: false,//遮罩层
            quyuArr: [],//区域选择后的数据集
            jiageArr: [],//价格选择后的数据集
            huxingArr: [],//户型选择后的数据集
            allTypeArr: [],//更多选择类型后的数据集
            allType:false,
            areaArr: [],//更多选择面积后的数据集
            houseTypeIndex: [],//户型的下标
            houseArea: [],//面积的下标

            renovationArr: [],//装修的数据集合
            renovation: [],//装修的下标
            PropertyArr: [],//物业的数据集合
            propertys: [],//物业的下标
            sortArr: [],//排序的数据集合
            sorts: [],//排序的下表
            add: false,
            add1: false,
            add2: false,
            add3: false,
            buildFilter: false,
            demo: {
                value: [0, 50000],
                width: '97%',
                height: 24,
                dotSize: 26,
                min: 0,
                max: 50000,
                interval:100,
                disabled: false,
                show: true,
                tooltip: 'always',
                formatter: '{value}元',
                tooltipDir: [
                "bottom",
                "bottom"
                ],
                bgStyle: {
                    backgroundColor: '#e8e8e8',
                    boxShadow: 'inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)'
                },
                tooltipStyle: {
                    backgroundColor: 'rgba(255,255,255,0)',
                    borderColor: 'rgba(255,255,255,0)',
                    color:'#e42929',
                    marginRright:"18",
                    top:"0",
                    bottom:"0"
                },
                processStyle: {
                    backgroundColor: '#e24e59',
                },
                sliderStyle:{
                    // backgroundColor: '#ff9b2f',
                    background:'url("https://img.guoanfamily.com/price-icon.png") no-repeat',
                    backgroundSize:'100%',
                }
            },
        }
    },
    methods: {
        cb (val) {
            this.moneybeginValue = val[0];
            this.moneyendValue = val[1]
        },
        // 头部tab点击事件
        rentHouseClick(){
            this.msgalert('敬请期待');
        },
        searchInput() {
            let searchBuild = this.SearchbuildName;
            // 判断输入的值，如果没有输入或者输入后又删除的，则恢复原来的所有数据
            if (this.SearchbuildName === '' || this.SearchbuildName == null) {
                this.searchArr = this.modelData;
            } else {
                var buildArr = this.buildName.filter(function(item) {
                    return item.buildname.indexOf(searchBuild) !== -1;
                });
                this.searchArr = buildArr;
            }
        },
        // 区域筛选的点击事件
        regionClick() {
            this.quyu = !this.quyu;
            this.add = !this.add;
            this.add1 = false;
            this.add2 = false;
            this.add3 = false
            this.jiage = false;
            this.huxing = false;
            this.gengduo = false;
            if (this.quyu === true) this.market = true;
            else this.market = false;
        },
        // 区域筛选里面区域的点击事件
        oquyuClick(index, item) {
            this.modelData = this.modelData.map((obj, i) => {
                if (i === index) {
                    obj.active = !obj.active;
                    if (obj.active == true) {
                        this.quyuArr.push(item);
                    } else {
                        var index2 = this.quyuArr.indexOf(item);
                        this.quyuArr.splice(index2, 1);
                    }
                }
                // console.log(this.quyuArr);
                return obj;
            });

            // console.log(this.quyuArr);


        },
        // 区域筛选确定的点击事件
        quyuSubClick() {
            // let buildArr = '';
            // buildArr = this.buildName.filter(items => {
            //     let bool = false
            //     this.quyuArr.map((item) => {
            //         if (items.city == item) {
            //             bool = true
            //         }
            //     })
            //     return bool
            //     this.searchArr.push(buildArr.join(""));
            // });
            // // console.log(buildArr);
            // if(buildArr.length>0){
            //     this.searchArr = buildArr;
            // }else{
            //     this.searchArr =  this.modelData;
            // }

            // this.quyu =  false;
            // this.market = false;
            // let city = city;
            // console.log(this.quyuarr);

            // if (this.quyuArr !== '' && this.quyuArr !== undefined && this.quyuArr !== null) {
            let city = 'city';
            this.Communal(city, this.quyuArr);
            // } else {
            //     this.showalert('请选择筛选条件');
            // }
            // }

        },
        // 公共筛选方法
        Communal(type, array) {
            // console.log(type)
            let buildArr = '';
            buildArr = this.buildName.filter(items => {
                let bool = false
                array.map((item) => {
                    if (items[type] == item) {
                        bool = true
                    }

                })
                return bool
                this.searchArr.push(buildArr.join(""));
            });
            if (buildArr.length > 0) {
                this.searchArr = buildArr;
            } else {
                this.searchArr = this.modelData;
            }
            this.add = false;
            this.quyu = false;
            this.market = false;
        },
        // 遮罩层点击事件
        markets() {
            this.quyu = false;
            this.jiage = false;
            this.huxing = false;
            this.gengduo = false;
            this.market = false;
            this.add = false;
            this.add1 = false;
            this.add2 = false;
            this.add3 = false;
        },
        // 区域筛选取消的点击事件
        quyuExitClick() {
            this.modelData = this.modelData.map((obj, i) => {
                obj.active = false;
                this.quyuArr = [];
                return obj;
            });
        },
        // 价格的筛选的点击事件
        jiageClick() {
            this.add1 = !this.add1;
            this.add = false;
            this.add2 = false;
            this.add3 = false;
            this.jiage = !this.jiage;
            this.quyu = false;
            this.huxing = false;
            this.gengduo = false;
            if (this.jiage == true) this.market = true;
            else this.market = false;
        },
        // 价格内容选择
        ojiageClick(index, item) {
            this.price = this.price.map((obj, i) => {
                if (i === index) {
                    obj.active = !obj.active;
                    if (obj.active == true) {
                        this.jiageArr.push(item);
                    } else {
                        var index2 = this.jiageArr.indexOf(item);
                        this.jiageArr.splice(index2, 1);
                    }
                }
                return obj;
            });

        },
        // 价格筛选确定的点击事件
        buidPrice() {
            // if (this.jiageArr.length !== 0) {
            if (!this.notEmpty(this.moneybeginValue) && !this.notEmpty(this.moneyendValue)) {
                let money = this.moneybeginValue + '-' + this.moneyendValue;
                this.jiageArr.push(money);
            }
            this.onFilterClick();
            // } else {
            //     this.showalert('请选择要筛选的条件')
            // }

        },
        // 价格取消的点击事件
        buidExitPrice() {
            this.price = this.price.map((obj, i) => {
                obj.active = false;
                return obj;
            });
            this.jiageArr = [];
            this.houseTypeIndex = [];
            this.houseArea = [];
            this.moneybeginValue = '';
            this.moneyendValue = '';
        },
        // 户型展开的点击事件
        huxingClick() {
            this.add2 = !this.add2;
            this.add1 = false;
            this.add3 = false;
            this.add = false;
            this.huxing = !this.huxing;
            this.quyu = false;
            this.jiage = false;
            this.gengduo = false;
            if (this.huxing == true) this.market = true;
            else this.market = false;
        },
        // 户型类型的点击事件
        ohuxingClick(index, item) {
            this.housType = this.housType.map((obj, i) => {
                if (i === index) {
                    obj.active = !obj.active;
                    if (obj.active == true) {
                        this.huxingArr.push(item);
                        this.houseTypeIndex.push(index);
                    } else {
                        var index2 = this.huxingArr.indexOf(item);
                        this.huxingArr.splice(index2, 1);
                        var index3 = this.houseTypeIndex.indexOf(index);
                        this.houseTypeIndex.splice(index3, 1);
                    }
                }
                return obj;
            });
        },
        // 户型确定的点击事件
        houseTypeClick() {
            this.onFilterClick();
        },
        // 户型取消的点击事件
        houseTypeExitClick() {
            this.housType = this.housType.map((obj, i) => {
                obj.active = false;
                return obj;
            });
            this.jiageArr = [];
            this.houseTypeIndex = [];
            this.houseArea = [];
        },
        // 更多的点击事件
        gengduoClick() {
            this.add3 = !this.add3;
            this.add2 = false;
            this.add1 = false;
            this.add = false;
            this.gengduo = !this.gengduo;
            this.quyu = false;
            this.jiage = false;
            this.huxing = false;
            if (this.gengduo == true) this.market = true
            else this.market = false;
        },
        // 更多类型的点击事件
        allMoreTypeClick(index, item) {
            this.Typearr = this.Typearr.map((obj, i) => {
                if (i === index) {

                    obj.active = !obj.active;
                    if (obj.active == true) {
                        this.allTypeArr.push(item.types);
                        // this.allTypeArr.push(index);
                    } else {
                        var index2 = this.allTypeArr.indexOf(item);
                        this.allTypeArr.splice(index2, 1);
                        // var index3 = this.houseTypeIndex.indexOf(index);
                        // this.houseTypeIndex.splice(index3, 1);
                    }
                }
                return obj;
            });
            // console.log(this.allTypeArr);
        },
        // 更多面积的点击事件
        allAreaClick(index, item) {
            this.area = this.area.map((obj, i) => {
                if (i === index) {
                    obj.active = !obj.active;
                    if (obj.active == true) {
                        this.areaArr.push(item);
                        this.houseArea.push(index);
                    } else {
                        var index2 = this.areaArr.indexOf(item);
                        this.areaArr.splice(index2, 1);
                        var index3 = this.houseArea.indexOf(index);
                        this.houseArea.splice(index3, 1);
                    }
                }
                return obj;
            });
        },


        // 更多特色标签的点击事件
        PropertyClik(index, item) {
            this.Property = this.Property.map((obj, i) => {
                if (i === index) {

                    obj.active = !obj.active;
                    if (obj.active == true) {
                        // console.log(obj.active)
                        this.PropertyArr.push(item);
                        this.propertys.push(index);
                    } else {
                        // console.log(obj.active + "  1")
                        var index2 = this.PropertyArr.indexOf(item);
                        this.PropertyArr.splice(index2, 1);
                        var index3 = this.propertys.indexOf(index);
                        this.propertys.splice(index3, 1);
                    }
                }
                return obj;
            });
        },
        // 更多排序的点击事件
        sortClick(index, item) {
            this.sort = this.sort.map((obj, i) => {
                if (i === index) {
                    obj.active = !obj.active;
                    if (obj.active == true) {
                        this.sortArr.push(item);
                        this.sorts.push(index);
                    } else {
                        var index2 = this.sortArr.indexOf(item);
                        this.sortArr.splice(index2, 1);
                        var index3 = this.sorts.indexOf(index);
                        this.sorts.splice(index3, 1);
                    }
                }
                return obj;
            });
        },
        // 更多确定的点击事件
        allBuildClick() {
            this.onFilterClick();
        },
        // 更多的重置条件的点击事件
        allBuildExitClick() {
            // alert('123456789');
            this.area = this.area.map((obj, i) => {
                obj.active = false;
                return obj;
            });
            this.Typearr = this.Typearr.map((obj, i) => {
                obj.active = false;
                return obj;
            })
            this.Property = this.Property.map((obj, i) => {
                obj.active = false;
                return obj;
            })
            this.sort = this.sort.map((obj, i) => {
                obj.active = false;
                return obj;
            })
            this.jiageArr = [];
            this.houseTypeIndex = [];
            this.houseArea = [];
            this.allTypeArr = [];
            this.renovationArr = [];
            this.PropertyArr = [];
        },
        // 筛选的公共方法
        onFilterClick() {
            if(  this.houseArea.length>0||this.allTypeArr.length>0||this.PropertyArr.length>0){
                this.allType = true;
            }else{
                this.allType = false;
            }
            console.log(this.houseTypeIndex)
            this.get('palmsaleapp/api/v1/build/buildLitsAppm?averagepriceList=' + this.jiageArr + '&typeList=' + this.houseTypeIndex + '&areaList=' + this.houseArea + "&tenementtypeList=" + this.allTypeArr + "&buildtagList=" + this.PropertyArr + "&hardcoverstandardList=",{interfaceType: "newHouse"}).then(response => {
                if (response.status == 200) {
                    // console.log(response);
                    for (let i = 0; i < response.data.length; i++) {
                        // response.data[i].firstpicture = this.ImgSrc + response.data[i].firstpicture;
                        response.data[i].firstpicture = this.concatFileUrl(response.data[i].firstpicture);
                        // console.log('---------',response.data[i].averageprice.substr(response.data[i].averageprice.length - 2));
                        if (response.data[i].averageprice !== null) {
                            if (response.data[i].averageprice == '售价待定') {
                                response.data[i].averageprice = '售价待定'
                            } else if (response.data[i].averageprice.toString().substr(response.data[i].averageprice.length - 2) == '/㎡') {
                                response.data[i].averageprice =  response.data[i].averageprice;
                            } else if (response.data[i].averageprice == '') {
                                response.data[i].averageprice = '售价待定'
                            } else {
                                response.data[i].averageprice = response.data[i].averageprice;
                            }
                        }
                    }
                    this.searchArr = response.data;
                    if (this.searchArr.length > 0) {
                        // console.log(Typearr1.length);
                        this.buildFilter = false;
                        this.quyu = false;
                        this.jiage = false;
                        this.huxing = false;
                        this.gengduo = false;
                        this.market = false;
                        this.add1 = false;
                        this.add2 = false;
                        this.add3 = false;
                    } else {
                        this.buildFilter = true;
                        this.quyu = false;
                        this.jiage = false;
                        this.huxing = false;
                        this.gengduo = false;
                        this.market = false;
                        this.add1 = false;
                        this.add2 = false;
                        this.add3 = false;
                    }
                }
            }, response => {
                this.showalert(response.msg);
            });
        },
        // 接受参数
        deal(list) {
            this.buildName = list.list;
            this.modelData = list.listArr;

            this.region = Array.from(new Set(this.modelData.map(function(item) {
                return item.city;
            })));
            if (this.Typearr.length <= 0 && this.Property.length <= 0) {
                let Typearr1 = Array.from(new Set((this.modelData.map((item) => {
                    return item.tenementtype;
                })).toString().split(",")));
                // console.log(Typearr1);
                // this.Typearr = [];
                for (let i = 0; i < Typearr1.length; i++) {
                    var obj = {};
                    obj.types = Typearr1[i];
                    this.Typearr.push(obj);
                }
                let Property = this.modelData.map((item) => {
                    return item.buildtagnameList;
                })
                let Property1 = [];
                for (let i = 0; i < Property.length; i++) {
                    Property1 = Property1.concat(Property[i]);
                }
                Property1 = Array.from(new Set(Property1));
                this.Property = [];
                for (let i = 0; i < Property1.length; i++) {
                    var obj = {};
                    obj.Property = Property1[i];
                    this.Property.push(obj);
                }
            }

        },

        //alert弹窗
        showalert(msg) {
            // 显示
            this.$vux.alert.show({
                title: '提示信息',
                content: msg
            })
        },
        msgalert(msg) {
            this.$vux.toast.show({
                text: msg,
                type: "text"
            })
        }

    },
    mounted(){
        // if(!this.AndroidOrIos()){
        //     this.AndroidTop =  false;
        // }else{
        //     this.AndroidTop =  true;
        // }
        // $('.regloin').on('touchmove', function(event) {
        //     event.preventDefault();
        // });
        if(this.$store.state.showWxTitle){
            this.AndroidTop =  false;
            this.IosTop =  false;
            this.wxTop = true;
        }else if(!this.AndroidOrIos()){
            this.AndroidTop =  false;
            this.IosTop =  true;
            this.wxTop = false;
            this.apTop =  true;
        }else{
            this.AndroidTop =  true;
            this.IosTop =  false;
            this.wxTop = false;
            this.apTop =  true;
        }
    },
    watch: {
        SearchbuildName() {
            this.searchInput();
        },
    }
}
</script>



