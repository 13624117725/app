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
                height: 100%;
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
                    /* border: 1px solid #ccc; */
                    // margin-left: 2%;
                    margin-top: 0px;
                    border-radius: 0px;
                    border: none;
                    &:last-child{
                        margin-bottom: 1.2rem;
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
                // transform: translateY(0rem);
            }
            100% {
                opacity: 0;
                // transform: translateY(-100%);
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
                            <li  class=" oLi no-limit" @click="areaLimitClick"><span class="textregion" :class="{redColor:isLimit}">不限</span></li> 
                            <li v-for="(item,index) in regionSubway" :key="index" class="oLi area-list"  @click="allAreaClick(item.id,index,item.name)"><span class="textregion" :class="{redColor:item.id===isAreaType.isAreaTypeid}">{{item.name}}({{item.totalNum ? item.totalNum : "0"}})</span>
                                <!-- <span style="float:right; margin-right:60px;" v-if="type==='houseMap'">{{item.totalNum ? item.totalNum +"套" : "0套"}}</span> -->
                            </li>
                        </template>
                    </ul>
                    <ul class="house-type-ul" id="area">
                        <template>
                            <li  class=" oLi no-limit" v-if="isNoLimit" @click="subwayLimitClick"><span class="textregion" :class="{subColor:isSubwayLimit}" >不限</span></li> 
                            <li v-for="item in regionSubwayChildList" :key="item.id" class="oLi area-list"  @click="subwayClick(item.id,item.name)"><span class="textregion" :class="{subColor:item.id===isSubwayType}">{{item.name}}({{item.totalNum?item.totalNum :"0"}})</span>
                                <!-- <span style="float:right; margin-right:60px; color:#e24e59" v-if="type==='houseMap'">{{item.totalNum?item.totalNum+&nbsp;"套":"0套"}}</span> -->
                            </li>
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
            subwayList:{
                type:Array,
                default:[]
            },
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
                  isAndrion:false,
                  isStation:{
                      subwayId:"",
                      subwayLineId:"",
                      name:"",
                  },
                  subwayLineName:"",
                  isWex:false,
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
            //地铁筛选
             allAreaClick(id,index,name){
                this.isAreaType.isAreaTypeid = id;
                this.isAreaType.name= name;
                this.isLimit = false;
                this.isNoLimit = true;
                let url = "";
                this.subwayLineName = name;
                this.isStation.subwayLineId = id;
                // let logId = id + index;
                // console.log(logId)
                if(this.type=="region"){
                    url = "common/getRegionList"
                }else if(this.type=="subway" || this.type==="houseMap"){
                    url = "common/getStationLine"
                }
                if(this.AllRegionSubway[id] == undefined){
                    this.post(url,{
                        subwayId: id
                    }).then((res)=>{
                        console.log(res.data)
                        this.regionSubwayChildList = res.data;
                        this.AllRegionSubway[id] = res.data;
                        return res;
                    }).then(res=>{
                        this.post("pc/HouseInfoController/getSubwayLineHouseCount",{ //地图里展示站点套数
                            subwayLineId: id,
                        }).then(res=>{
                            this.regionSubwayChildList = this.regionSubwayChildList.map((item,index)=>{
                                for(var i = 0;i < res.data.length;i++){
                                    if(res.data[i].stationsOne === item.id){
                                        item.totalNum = res.data[i].totalNum;
                                    }
                                }
                                return item;
                            })
                            this.AllRegionSubway[id] = this.regionSubwayChildList;
                        })
                    })
                }else{
                    this.regionSubwayChildList = this.AllRegionSubway[id];
                }
                  
             },
             //二级筛选
             subwayClick(id,name){
                this.isSubwayType = id;
                this.isSubwayLimit = false;
                // this.isAreaType = "";
                this.isStation.subwayLineId = this.isAreaType.isAreaTypeid;   //线路ID
                this.isStation.name = name || "";  
                this.isStation.subwayId = id; //站点ID
                if(this.type==="houseMap"){
                    this.$emit("changeSubway",this.subwayLineName,this.regionSubwayChildList,this.isStation,name);
                }else{
                    this.$emit("changeSubway",id,this.isAreaType,name);
                }
             },
             //地铁不限
             areaLimitClick(){
                 this.isAreaType = {id:"",name:""};
                 this.isSubwayType = "";
                 this.isLimit = !this.isLimit;
                 this.regionSubwayChildList = [];
                 let name = this.subwayLineName;
                 if(this.type==="houseMap"){
                    this.isStation.name = "";
                    this.isStation.subwayId = "";
                    this.isStation.subwayLineId = "";
                    name = "";
                    this.$emit("changeSubway",name,this.regionSubwayChildList,this.isStation);
                }else{
                    this.$emit("changeSubway","",this.isAreaType,);
                }
             },
             //具体不限
             subwayLimitClick(){
                this.isSubwayType = "";
                if(this.isSubwayLimit){
                    this.isSubwayLimit  = true;
                }else{
                    this.isSubwayLimit = !this.isSubwayLimit;
                }
                if(this.type==="houseMap"){
                    this.isStation.name ="";
                    this.isStation.subwayId = "";
                    this.$emit("changeSubway",this.subwayLineName,this.regionSubwayChildList,this.isStation);
                }else{
                    this.$emit("changeSubway","",this.isAreaType);
                }
             },
            
            clear(){
                this.isAreaType = {};
                this.isSubwayType = "";
                this.isLimit = false;
                this.regionSubwayChildList = [];
            }
         },
         watch:{
        //      isShow:function(){
        //          if(!this.isShow){
        //             //  this.isAreaType = "";
        //              this.isSubwayType = "";
        //              this.isSubwayLimit = false;
        //              this.isLimit = false;
        //          }
        //      }
            regionSubwayChildList: function () {
                if(this.isShow){
                    setTimeout(function(){
                        var area =  document.getElementById("area")
                        let h = area.innerHeight || area.clientHeight || area.clientHeight;  
                        let offseHeight =area.scrollHeight;
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
         watch:{
             
         },
         computed:{
            isSearchShow(){
                if(this.isShow){
                    this.regionSubway = this.subwayList;
                    // this.regionSubwayChildList = this.regionSubwayChild;
                };
                if(this.isIosandroid()){
                    this.isAndrion = true;
                }else{
                    this.isAndrion = false;
                }
                return this.isShow;
            }
         },
     }
 </script>
 