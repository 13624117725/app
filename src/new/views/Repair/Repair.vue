<template>
   <div class="Repair" ref="Repair">
        <div class="mask" v-if="maskShow" @click="ToCancal" :class="{maskOpactB:!transMask}">
            <div class="camBox" :class="{beginB:!transMask}">
                <div class="cbtn" @click.stop="takePic">
                    <input type="file" v-if="platform" class="fileInp" id="imgTest" @change="imgChange" accept=".gif,.jpg,.jpeg,.png">
                    拍照
                </div>
                <div class="cbtn" @click.stop="takePhonePic">
                    <input type="file" v-if="platform" class="fileInp" id="imgTest" @change="imgChange" accept=".gif,.jpg,.jpeg,.png">
                    选取相册
                </div>
                <div class="cbtn" @click="ToCancal">取消</div>
            </div>
        </div>
        <!-- 不要喷我不用plugin，实在是不想污染全局的toast -->
        <loading class="myloading" :show="loadshow" ></loading>

        <!-- this.$store.state.showWxTitle -->
       <div class="pages fixContent" ref="Repairpages" :class="[this.$store.state.showWxTitle? 'isAoI' : 'isBorwer']">
            <div class="checkBox">
                <div class="titles">
                    选择维修的项目
                </div>
                <div class="cheaked clearfix">
                    <div class="checks">
                        <span class="opactions" :class="{redF:Chouse.first[0]!='选择类别'}">{{Chouse.first[0]}}</span>
                        <span class="chouseType"></span>
                        <popup-picker class="pickerDom" v-model="Chouse.first" @on-change="PChange(0)" :data="list1"></popup-picker>
                    </div>
                    <div class="checks">
                        <span class="opactions" :class="{redF:Chouse.second[0]!='选择物品'}">{{Chouse.second[0]}}</span>
                        <span class="chouseType"></span>
                        <popup-picker class="pickerDom" v-model="Chouse.second" :data="list2" ></popup-picker>
                    </div>
                    <div class="checks">
                        <span class="opactions" :class="{redF:Chouse.third[0]!='选择位置'}">{{Chouse.third[0]}}</span>
                        <span class="chouseType"></span>
                        <popup-picker class="pickerDom" v-model="Chouse.third" :data="list3"></popup-picker>
                    </div>
                </div>
            </div>
            <div class="checkBox">
                <div class="titles ">
                    上传照片
                </div>
                <div class="photoList clearfix" ref="imgbox">
                    <!-- 添加的图片 -->
                    <div class="photos" v-for="(item,index) in imgArr" :key="index">
                        <img :src="`${item}?imageView2/0/w/100/h/100`" class="me_img" alt="" @click="showInfo(index)">
                        <span class="closed" @click.stop="closeImg(index)"></span>
                    </div>
                    <!-- 添加按钮 -->
                    <div class=" Adds"  @click="UpPhoto">

                    </div>
                </div>
            </div>
             <div class="checkBox">
                <div class="titles ">
                    填写问题
                </div>
                <div class="Myerrmag">
                    <x-textarea :autosize="true" @on-blur="textBluer" @on-focus="textFocus" :rows="8" placeholder="问题描述" v-model="ErrText"></x-textarea>
                </div>
            </div>
            <div class="null_box"></div>

       </div>


        <div class="btn_box">
            <div class="btn btn1" @click="saveAgain">继续添加</div>
            <div class="btn btn2" @click="SaveMyList">提交订单</div>
        </div>
        <!-- 图片头部标记 -->
        <div v-transfer-dom>
            <previewer :list="preImg" ref="previewer"></previewer>
        </div>
   </div>
</template>

<script>
    import {XTextarea ,PopupPicker,TransferDom,Loading } from "vux"
    import Previewer from "../../components/previewer";
    export default {
        data() {
            return {
                loadshow:false,
                defaultValue:"",
                list1:[["选择类别"]],
                list2:[["选择物品"]],
                list3:[['选择位置']],
                //选择结果
                Chouse:{
                    first:['选择类别'],
                    second:['选择物品'],
                    third:['选择位置']
                },
                ErrText:"",
                chouseResolute:{},//页面筛选后的结果
                ChouseArr:[],//筛选的原始数组
                localIds:[],
                imgArr:[],
                WiXintest:false,
                maskShow:false,
                transMask:false,
                preImg:[],
                pictures:[],
                platform:false
            }
        },
        mounted() {
            this.pageInit()
            if(this.$store.state.showWxTitle){
                this.wexinInit()
            }
            let platform = localStorage.getItem('platform');
            if(platform){
                this.platform =  !platform

            }else{
                this.platform = true
            }
        },
        methods: {
            // 上传照片
            UpPhoto(){
                if(this.$store.state.showWxTitle){
                    this.WxchooseImage();
                }else{
                    this.maskShow = true
                    setTimeout(()=>{
                        this.transMask = true
                    },100)
                }
            },
            // 查看照片详情
            showInfo(n){
                this.preImg = []
                this.imgArr.forEach(item=>{
                    let obj = {};
                    obj.src = item;
                    this.preImg.push(obj)
                })
                this.$refs.previewer.show(n);
            },
            textBluer(){
                this.$refs.Repairpages.scrollTop = 0;
                document.body.scrollTop = 0;
            },
            textFocus(){
                 this.$refs.Repairpages.scrollTop = 990;
                document.body.scrollTop =  990;
            },
            // 下拉改变
            PChange(n){
                let ChangeData = this.ChouseArr[n]
                if(n==0){
                    this.getnextClass('first',ChangeData,n)
                }
            },

            // 获取下级分类
            getnextClass(key,ChangeData,n){
                let postData = {}
                let postObj = new Object()
                ChangeData.forEach(item=>{
                    if(item.oneLevleItemName==this.Chouse[key][0]){
                        postObj.oneLevleItemNumber = item.oneLevleItemNumber
                    }
                })
                this.loadshow = true
                this.post(`RepairOrderController/getRepairItemTwoLevel`,postObj).then(res=>{
                    if(res.code==0){
                        this.ChouseArr[++n] = res.data
                        if(n==1){
                            let Arr = ['选择物品']
                            this.ChouseArr[n].forEach(objs=>{
                                Arr.push(objs.twoLevleItemName)
                            })
                             this.list2= [Arr]
                        }
                        this.loadshow = false
                    }
                })
            },
            // 获取第二个的下级分类
            getScondClass(){
                this.post(`RepairOrderController/getRepairItemArea`,{}).then(res=>{
                    if(res.code==0){
                        this.ChouseArr[2] = res.data
                        let Arr = ['选择位置']
                        res.data.forEach(item=>{
                            Arr.push(item.repairArea)
                        })
                        this.list3 = [Arr];
                    }
                })
            },
            // 初始化微信
            wexinInit(){
                this.post('jsapi/getJsapiSignature?local_url=' + encodeURIComponent(location.href.split('#')[0]), {}, {
                    interfaceType: "weichat"
                }).then(response => {
                    //  alert(JSON.stringify(response.noncestr))
                    // alert('初始化微信,配置config');
                    this.$wechat.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: response.appid, // 必填，公众号的唯一标识
                        timestamp: parseInt(response.timestamp), // 必填，生成签名的时间戳
                        nonceStr: response.noncestr, // 必填，生成签名的随机串
                        signature: response.signature, // 必填，签名，见附录1
                        jsApiList: [
                            'chooseImage',
                            'uploadImage',
                            'downloadImage'
                        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });

                    var self = this;
                    this.$wechat.ready(function() {
                        this.WiXintest = true
                    })
                    this.$wechat.error(function(res) {
                        alert('上传失败')
                    });
                }, response => {
                    alert(JSON.stringify(err))
                })
            },
            WxchooseImage(){
                let self = this;
                this.$wechat.chooseImage({
                    count: 1, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success(res){
                        self.localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                        self.upLoadImg()
                    }
                });
            },
            upLoadImg(){
                let self = this
                self.$wechat.uploadImage({
                    localId: self.localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
                    isShowProgressTips: 1, // 默认为1，显示进度提示
                    success(res) {
                        // alert("serverId" + res.serverId);
                        self.serverid = res.serverId;
                        self.$wechat.downloadImage({
                            serverId: self.serverid, // 需要下载的图片的服务器端ID，由uploadImage接口获得
                            isShowProgressTips: 1, // 默认为1，显示进度提示
                            success(res) {
                                self.Imgsrce = res.localId; // 返回图片下载后的本地ID
                                // alert( self.serverid)
                                let timer2 = setTimeout(()=>{
                                    self.WxUpLoadImg();
                                    window.clearTimeout(timer2);
                                },200)
                            }
                        })
                    },
                    fail(err){
                        console.log(123,err)
                    }

                });
            },
            // 提交订单
            SaveMyList(){
                let result = {}

                // 获取选择结果
                // 位置
                if(this.Chouse.third[0]!='选择位置'){
                    this.ChouseArr[2].forEach(item=>{
                       if(item.repairArea==this.Chouse.third[0]){
                           result.AreaData = item
                       }
                    })
                }else{
                    this.toast('请选择位置');
                    return false
                }

                 // 类别

                if(this.Chouse.first[0]!='选择类别'){
                    this.ChouseArr[0].forEach(item=>{
                       if(item.oneLevleItemName==this.Chouse.first[0]){
                           result.oneLevleItem = item
                       }
                    })
                }else{
                    this.toast('请选择类别');
                    return false
                }

                // 获取选择结果
                // 物品选择
                if(this.Chouse.second[0]!='选择物品'){
                    this.ChouseArr[1].forEach(item=>{
                       if(item.twoLevleItemName==this.Chouse.second[0]){
                           result.itemCategory = item
                       }
                    })
                }else{
                    this.toast('请选择物品');
                    return false
                }
                result.ErrText = this.ErrText;
                if(result.ErrText.length==0){
                    this.toast('请填写具体问题');
                    return false
                }

                result.imgArr = this.imgArr
                if( result.imgArr.length==0){
                    this.toast('请上传照片');
                    return false
                }
                this.$store.state.RepairMyList.resolute.push(result)
                this.$router.replace({path:'/RepairMyList'})

            },
            saveAgain(){
                 let result = {}
                // 获取选择结果
                // 位置
                if(this.Chouse.third[0]!='选择位置'){
                    this.ChouseArr[2].forEach(item=>{
                       if(item.repairArea==this.Chouse.third[0]){
                           result.AreaData = item
                       }
                    })
                }else{
                    this.toast('请选择位置');
                    return false
                }

                 // 类别

                if(this.Chouse.first[0]!='选择类别'){
                    this.ChouseArr[0].forEach(item=>{
                       if(item.oneLevleItemName==this.Chouse.first[0]){
                           result.oneLevleItem = item
                       }
                    })
                }else{
                    this.toast('请选择类别');
                    return false
                }

                // 获取选择结果
                // 物品选择
                if(this.Chouse.second[0]!='选择物品'){
                    this.ChouseArr[1].forEach(item=>{
                       if(item.twoLevleItemName==this.Chouse.second[0]){
                           result.itemCategory = item
                       }
                    })
                }else{
                    this.toast('请选择物品');
                    return false
                }


                result.ErrText = this.ErrText;
                if(result.ErrText.length==0){
                    this.toast('请填写具体问题');
                    return false
                }

                result.imgArr = this.imgArr
                if( result.imgArr.length==0){
                    this.toast('请上传图片');
                    return false
                }
                this.$store.state.RepairMyList.resolute.push(result)
                this.Chouse={
                    first:['选择类别'],
                    second:['选择物品'],
                    third:['选择位置']
                };
                this.ErrText="";
                this.imgArr =[]
            },
            WxUpLoadImg() {
                var self = this;
                let post_data = {
                    "SERVERID": this.serverid // 返回图片的服务器端ID
                }
                // alert('SERVERID:'+ " " + post_data.SERVERID)
                this.loadshow = true
                self.post('user/PictureManagerController/wxModelFileUpload', post_data,{interfaceType:"newHouse"}).then(response => {
                    self.loadshow = false
                    if (response.code == 200) {
                        let Imgsrce="";
                        if(response.data.imgName.indexOf('http')==-1){
                            Imgsrce = "https://img.guoanfamily.com/" + response.data.imgName;
                        }else{
                            Imgsrce = response.data.imgName
                        }

                        self.imgArr.push(Imgsrce);
                        self.imgArr.forEach(item=>{
                            let obj = {};
                            obj.src = item;
                            self.preImg.push(obj)
                        })
                        // self.VeritionCode =  true;
                        // this.disable001 = true;
                        // this.submit001 = '已上传';

                    }

                }, response => {
                    alert(response.msg);
                });

            },
            // app照片上传
            	//拍照
			takePic(e){
				e.cancelBubble = true;
				this.changeGetPic('pz');
			},
			//相册
			takePhonePic(e){
				e.cancelBubble = true;
				this.isShowCamere = false;
				this.changeGetPic('xc');
            },
            // 照片上传
            changeGetPic(e){
                if(!navigator.camera||!navigator.camera.getPicture){
                    this.toast('您的app版本过低，请及时升级');
                    return false
                }
                if(!this.platform){
                    var me = this;
                    if(e == 'xc'){
                        //打开相册
                        navigator.camera.getPicture(this.onSuccess, this.onFail, {
                            quality : 30,   //照片品质
                            destinationType : Camera.DestinationType.DATA_URL,
                            sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
                            targetWidth: 500
                        });
                    }else{
                        //拍照
                        navigator.camera.getPicture(this.onSuccess, this.onFail, {
                            quality : 30,
                            correctOrientation:true,
                            destinationType : Camera.DestinationType.DATA_URL,
                            targetWidth: 500
                        });
                    }
                        // app
                }

            },
            // 成功回调
            onSuccess(imageData) {
                var name = 1;
                this.upload(imageData, name);// 图片上传;
            },
            // 失败回调
            onFail(message) {
                console.log(205,message)
            },
            // base64图片转换回去
            dataURLtoFile(dataurl, filename) {//将base64转换为文件
                var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1];
                var bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                while(n--){
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new Blob([u8arr],{type:mime});
            //     return new File([u8arr], filename, {type:mime});
            },
            filePost(formFile){
                let oReq = new XMLHttpRequest();
                this.loadshow = true
                oReq.open("POST", "https://www.guoanfamily.com/agenthouseApp/PictureManagerController/upload", true);
                oReq.send(formFile);
                let self = this
                oReq.onreadystatechange = ()=>{
                    self.loadshow = false
                    if(oReq.readyState==4){
                        let responseText = JSON.parse(oReq.responseText)
                        let iSrc = "https://img.guoanfamily.com/"+responseText.data
                        self.imgArr.push(iSrc)
                        self.toast('上传成功！');
                    }else{
                        self.toast('上传失败！');
                    }
                    self.ToCancal()
                };
            },
            // 上传
		    upload(imageData,sid){
                let num = Math.floor(Math.random()*1000*sid)
                let Fname = num + ".jpg";// 文件名
				let formFile = new FormData();
                formFile.append("action", "UploadVMKImagePath");
                if(imageData.indexOf("data:image/jpeg;base64,")==-1){
                    imageData ="data:image/jpeg;base64,"+imageData;
                }
                let blob =this.dataURLtoFile(imageData,Fname);
                formFile.append("file", blob,Fname); //加入文件对象
                this.filePost(formFile)
            },


            imgChange(e){
                let oReq = new XMLHttpRequest();
                let formFile = new FormData();
                formFile.append("action", "UploadVMKImagePath");
                let blob = e.target.files[0]
                formFile.append("file", blob); //加入文件对象
                this.filePost(formFile)
            },
            // 删除照片
            closeImg(i){
                this.imgArr.splice(i,1);
            },
            toast(msg){
                this.$vux.toast.show({
                    text: msg,
                    type: "text",
                    width:'4em'
                });
            },
            // 初始化
            pageInit(){
                this.post(`RepairOrderController/getRepairItemOneLevel`,{}).then(res=>{
                    if(res.code===0){
                        let arr = ["选择类别"];
                        this.ChouseArr[0] =  res.data
                        res.data.forEach(item => {
                            arr.push(item.oneLevleItemName)
                        });
                        this.list1 = [arr];

                    }
                }).then(()=>{
                    this.getScondClass()
                })
            },
            // 取消
            ToCancal(){
                this.transMask=false;
               let timer = setTimeout(()=>{
                    this.maskShow=false;
                    clearTimeout(timer)
                },400)


            }
        },
        components: {
            XTextarea,
            PopupPicker,
            Previewer,
            Loading
        },
        directives: {
            TransferDom
        },
    }
</script>

<style scoped lang="less">
.Repair{
    // position: relative;
    // top: 0 ;
    // left: 0;
    // right: 0;
    // bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    .fixContent {
        width: 100%;
        // height: 100%;
        box-sizing: border-box;

        // display: flex;
        // flex-direction: column;
    }
    .pages{
        font-size: 14px;
        padding: 0.3rem;
        padding-bottom:1rem;
        overflow-y: scroll;
        overflow-x: hidden;
        &.isBorwer{
            padding-top:1.6rem;
        }
        .checkBox{
            border-bottom:1px solid #ccc;
            margin-bottom: .3rem;
            &:nth-child(3){
                border: none;
            }
        }
        .titles{
            font-size: .34rem;
            line-height: .38rem;
            color: #999;
            text-align: left;
            margin-bottom: .25rem;
        }
        .cheaked{

            .checks{

                float: left;
                height: .6rem;
                width: 33%;
                border-right: 1px solid #ccc;
                margin-bottom: .3rem;
                position:relative;
                &:last-child{
                    border-right:none;
                }
                .opactions{
                    line-height: .6rem;
                    font-size: .3rem;
                    &.redF{
                        color:red;
                    }
                }
                .chouseType{
                    display: inline-block;
                    height: 20px;
                    width:20px;
                    vertical-align: middle;
                    background: url("../../../../static/new/img/open.png") center no-repeat/120%;
                }
                .pickerDom{
                    position:absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                    opacity: 0;
                }
            }
        }
        .photoList{
            padding: .3rem 0;
        }
        .photos{
            position: relative;
            float: left;
            margin-right: .5rem;
            margin-bottom: .5rem;
            width: 1.8rem;
            height: 1.8rem;
            .closed{
                position: absolute;
                right:-10px;
                top: -10px;
                display: block;
                width:20px;
                height:20px;
                background: url("https://img.guoanfamily.com/miniProgram/imgClose.png") center no-repeat/100% 100%;
            }

            .me_img{
                vertical-align: top;
                width: 100%;
                height:100%;
            }
        }
        .Adds{
            float: left;
            width: 1.8rem;
            height: 1.8rem;
            background: url("https://img.guoanfamily.com/miniProgram/AddPhoto.png") center no-repeat/100% 100%;

        }
        .Myerrmag{
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: .3rem
        }
        .null_box{
            height: 150px;
        }
    }

    .btn_box{
        height: 1rem;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        .btn{
            width: 50%;
            height: 1rem;
            float: left;
            color: #fff;
            font-size: .36rem;
            line-height:1rem;
            &.btn1{

                background-color: #666666;
            }
            &.btn2{
                background-color: #E34B3E;
            }
        }
    }
    .mask{
        position: fixed;
        z-index: 2;
        background-color: rgba(0,0,0,0.6);
        width: 100%;
        height: 100%;
        opacity:1;
         transition: opacity 0.4s;
        &.maskOpactB{
            opacity: 0;
        }
        .camBox{
            width: 4.6rem;
            height: 2.1rem;
            position: absolute;
            bottom: 40px;
            left: 50%;
            border-radius: 5px;
            transform: translateX(-50%);
            overflow: hidden;
            transition: bottom 0.4s;
            &.beginB{

                bottom: -2.1rem;

            }
            .cbtn{
                position: relative;
                background-color: #fff;
                height: .7rem;
                line-height: .7rem;
                font-size: .28rem;
                margin-bottom:1px;
                .fileInp{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                }
            }
        }
    }

}

</style>
<style lang="less">
.Repair{
    .myloading{
        .weui-toast{
            width: 2em;
        }
    }

}

</style>


