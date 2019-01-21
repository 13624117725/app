<style scoped lang="scss">
 @import "../../style/theme.scss";
        $listColor:#d4d4d4;
        .regloin{
            background-color: $titleColor;
            width: 100%;
            font-size:$mostFontSize;
            position: absolute;
            width: 100%;
            // height: 100%;   
            top:2.14rem;
            bottom: 0rem;
            left: 0rem;
            z-index: 20 !important;
            opacity: 1;
            .search-house-list{
                width: 100%;
                height:100%;
                overflow: hidden;
                .house-type-ul{
                    height: 100%;
                    overflow-y: scroll;
                    overflow-x:hidden;
                    float: left;
                    width: 50%;
                    background-color: $titleColor;
                    // padding-left:0.3rem;
                    box-sizing: border-box;
                    border-right: 1px solid $lineColor;
                    background-color: #fff;
                    -webkit-overflow-scrolling: touch;
                        &:last-child{
                            border-right:none
                        }
                        &:nth-child(1){
                            background-color: #eee;
                        }
                 .oLi{
                    width: 100%;
                    height: 0.54rem;
                    line-height: 0.54rem;
                    text-align: center;
                    padding:0.15rem 0rem;
                    font-size: 0.28rem;
                    margin-top: 0px;
                    border-radius: 0px;
                    border: none;
                    &:last-child{
                        margin-bottom:1.2rem;
                    }
                    .textregion{
                        display: inline-block;
                        padding: 0.05rem 0.2rem;
                    }
                }
                .no-limit{
                    
                }
                .redColor {
                    display: inline-block;
                    padding: 0.05rem 0.2rem;
                    background-color: $mineColor;
                    color: #fff;
                }
                .subColor{
                    display: inline-block;
                    padding: 0.05rem 0.2rem;
                    background-color: $mineColor;
                    color: #fff;
                }
            }
        }  
    }
    .iosregloin{
        top:1.9rem;
    }
    .isand{
        top:2.34rem;
    }
    .bounce-enter-active {
        animation: bounce-in  .5s ease;
    }
    .bounce-leave-active {
        animation: bounce-out .2s;
    }
    @keyframes bounce-in {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(0rem);
        }
    }
    @keyframes bounce-out {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }
</style>

<template>
        <!--筛选部分  -->
        <transition name="bounce">
            <div class="regloin" v-show="isSearchShow" :class="{iosregloin:isWex,isand:isAndrion}">
                <div class="search-house-list">
                    <ul class="house-type-ul">
                        <template>
                            <li  class=" oLi no-limit"  @click="areaLimitClick"> <span class="textregion" :class="{redColor:isLimit}">不限</span> </li> 
                            <li v-for="(item,index) in regionSubway" :key="index" class="oLi area-list"  @click="allAreaClick(item.id,item.name)"> <span class="textregion" :class="{redColor:item.id===isAreaType.isAreaTypeid}">{{item.name}}</span> </li>
                        </template>
                    </ul>
                    <ul class="house-type-ul" id="area">
                        <template>
                            <li  class=" oLi no-limit" v-if="isNoLimit"  @click="subwayLimitClick"><span class="textregion" :class="{subColor:isSubwayLimit}">不限</span></li> 
                            <li v-for="item in regionSubwayChildList" :key="item.id" class="oLi area-list"  @click="subwayClick(item.id,item.name)"><span class="textregion" :class="{subColor:item.id==isSubwayType}">{{item.name}}</span></li>
                        </template>
                    </ul>
                </div>   
            </div>
        </transition>
</template>

<script>
export default {
        props:{
        isShow:{
            type:Boolean,
            default:"",
        },
        type:{
            type:String,
            default:"",
        },
        RegionList:{
            type:Array,
            default:[]
        },
        isMap:{
            type:Boolean,
            default:true,
        }
        },
        data(){
            return{
                regionSubway:[],
                regionSubwayChildList:[],
                AllRegionSubway:{},
                isAreaType:{
                    isAreaTypeid:"",
                    name:"",
                },
                isSubwayType:"",
                isLimit:true, 
                isSubwayLimit:false,
                isNoLimit:false,
                region:false,
                isAndrion:false,
                isWex:false,
                clear:true,
            }
        },
        created(){
            if(this.isECTouch()){
                 this.isWex = true;
            }
        },
        mounted(){
            
        },
        methods:{
            compare(prop){
                return function(obj1, obj2) {
                    let val1 = obj1[prop];
                    let val2 = obj2[prop];
                    if (!isNaN(parseInt(val1)) && !isNaN(parseInt(val2))) {
                        val1 = parseInt(val1);
                        val2 = parseInt(val2);
                    }
                    if (val1 < val2) {
                        return -1;
                    } else if (val1 > val2) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            },
        //区域地铁筛选
            allAreaClick(id,name){
                this.isAreaType.isAreaTypeid = id;
                this.isAreaType.name = name;
                this.isLimit = false;
                this.isNoLimit = true;
                let url = "";
                if(this.type=="region"){
                    url = "common/getRegionList"
                }else if(this.type=="subway"){
                    url = "common/getStationLine"
                }
                if(this.AllRegionSubway[id] == undefined){
                    this.post(url,{
                        areaId: id
                    }).then((res)=>{
                        this.regionSubwayChildList = res.data;
                        this.AllRegionSubway[id] = res.data;
                    })
                }else{
                    this.regionSubwayChildList = this.AllRegionSubway[id];
                }
            },
            //二级筛选
            subwayClick(id,name){
                // this.clear = false;
                this.isSubwayType = id;
                var id = id || "";
                this.isSubwayLimit = false;
                this.$emit("changeRegionSubway",this.isAreaType.isAreaTypeid,id,name);
            },
            //区域不限
            areaLimitClick(){
                // this.clear = false;
                this.isAreaType = {isAreaTypeid:"",name:""};
                this.isLimit = !this.isLimit;
                this.regionSubwayChildList = [];
                this.isSubwayType = "";
                this.$emit("changeRegionSubway","");
            },
            //具体不限
            subwayLimitClick(){
                // this.clear = false;
                this.isSubwayType = "";
                if(this.isSubwayLimit){
                    this.isSubwayLimit  = true;
                }else{
                    this.isSubwayLimit = !this.isSubwayLimit;
                }
                
                this.$emit("changeRegionSubway",this.isAreaType);
            },
            regionClear(data){
                if(data==='区域'){
                    this.clear = false;
                }else if(data==='search2'){
                    this.clear = true;
                }
                this.isAreaType = {};
                this.isSubwayType = "";
                this.isLimit = false;
                this.isSubwayLimit =false;
                this.regionSubwayChildList = [];
            },
        
        },
        watch:{
            regionSubwayChildList: function () {
                if(this.isShow){
                    setTimeout(function(){
                        var area =  document.getElementById("area")
                        // let h = area.innerHeight || area.clientHeight;  
                        // let offseHeight =area.scrollHeight;
                        if(area.scrollHeight <= area.clientHeight){
                            area.addEventListener('touchmove', handler, false);
                        }else{
                            area.addEventListener('touchmove', function (e) {
                                e.returnValue = true;
                            }, false);
                        }
                        function handler() {
                            event.preventDefault();
                        }
                    },500)
                }
            }
        },
        computed:{
            isSearchShow(){
                if(this.isShow){
                    this.regionSubway = this.RegionList;
                };
                if(this.isIosandroid()){
                    this.isAndrion = true;
                }else{
                    this.isAndrion = false;
                }
                if(this.$route.query.search &&this.clear){
                    this.post("common/getAreaList",{}).then((res)=>{
                        res.data = res.data.sort(this.compare("name"))
                        return res.data;
                    }).then(res=>{
                        res.forEach(item=>{
                            if(item.name===this.$route.query.search){
                                this.regionSubway = res;
                                this.isAreaType.isAreaTypeid = item.id;
                                this.isAreaType.name = item.name;
                                this.isLimit = false;
                                this.isNoLimit = true;
                                this.isSubwayLimit = true;
                                if(this.AllRegionSubway[item.id] == undefined){
                                    this.post("common/getRegionList",{
                                        areaId: item.id
                                    }).then((res)=>{
                                        this.regionSubwayChildList = res.data;
                                        this.AllRegionSubway[item.id] = res.data;
                                    })
                                }else{
                                    this.regionSubwayChildList = this.AllRegionSubway[item.id];
                                }
                            }
                            this.clear = false;
                        })
                    })
                }
                return this.isShow;
            }
        },
    }
 </script>
 