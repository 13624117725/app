<style scoped lang="scss">
@import "../../style/theme.scss";
    .zhima{
        position: absolute;
        top:1.3rem;
        left:0rem;
        right: 0rem;
        bottom:0rem;
        // margin-top:1.3rem;
        // overflow-y: scroll;
        h2{
            color: $mineColor;
            font-size: $littleFontSize;
            text-align: center;
            line-height: 0.4rem;
        }
        .zhima-fen{
            margin-top: 0.2rem;
            text-align: center;
            font-size: $reminderFontSize;
            line-height: 0.45rem;
        }
        .china-img{
            width: 100%;
        }
        .zhima_title {
            font-size: 0.24rem;
            line-height: 0.15rem;
            text-align: left;
            padding:0rem 0.3rem;
            margin-top: 0.2rem;
            .zhima_icon1, .zhima_icon2 {
                display: inline-block;
                background: url("../../../../static/rent/personalCenter/zhima_icon.png") no-repeat;
                background-size: 100%;
                width: 0.25rem;
                height: 0.35rem;
                vertical-align: middle;
                margin-right: 0.05rem;
            }
        }
        .color_gray {
            color: #959ea7;
            padding:0rem 0.3rem;
            text-align: left;
            font-size: $reminderFontSize;
            line-height: 0.45rem;
        }
        canvas {
            // border: 1px solid #eee;
            // position: relative;
            // left: 0rem;
            background-color: #0e83f5;
            // transform: translate(-50%, -50%);
            // background: -webkit-linear-gradient(top, #0e83f5 0%, #21bdf6 100%);
            // background: -ms-linear-gradient(top, #0e83f5 0%, #21bdf6 100%);
            // background: -moz-linear-gradient(top, #0e83f5 0%, #21bdf6 100%);
            // background: linear-gradient(top, #0e83f5 0%, #21bdf6 100%);
        }
    }
    .macbook{
        // position: absolute;
        // bottom: 0rem;
        // left: 0rem;
        font-size: 0.28rem;
        border:none;
        background-color: #e24e59;
        height: 1rem;
        line-height: 1rem;
        // margin-top:0.3rem;
        width: 100%;
        color:#fff;
        // position: fixed;
        // bottom: 0rem;
    }
    .imgwex{
        top: 0rem;
    }
</style>


<template>
        <div class="zhima" :class="{imgwex:isWex}">
            <!-- <div v-show="!this.$store.state.showWxTitle">
                <ga-page-header slot="header" title="芝麻信分"></ga-page-header>
            </div> -->
            <canvas id="canvas" width="0" height="0"></canvas>
            <div style="widht:100%; height:100%;">
                <div style="margin-top:0.3rem">
                    <h2>有信用，免押金</h2>
                    <p class="zhima-fen">授权芝麻信用，满600分<br>可在全国范围享受免押金入住</p>
                </div>
                <img class="china-img" src="../../../../static/rent/personalCenter/china.jpg"/>
                <!-- <p></p> -->
                <h5 class="zhima_title mt15"><span class="zhima_icon1"></span>什么是芝麻分？</h5>
                <p class="color_gray pt5">由芝麻信用提供，它是面向社会的信用服务体系，提供方方面面的信用状况，运用大数据及云计算客观呈现个人的信用状况，通过连接各种服务，让每个人都能体验信用带来的价值。
                    <!-- <span class="color_pink">
                    <a href="https://xzh5.xiaozhu.com/xzhtml5.php?op=ZhiMaSpecialTopic&amp;userId=32858426201&amp;sessId=3023089b5cf0fbd54ea0a17eaaee40ed&amp;client=html5">了解更多&gt;</a></span>       -->
                    </p>
                <h5 class="zhima_title mt15"><span class="zhima_icon1"></span>如何芝麻免押入住</h5>
                <p class="color_gray pt5">国安家联合芝麻信用推出“有信用，免押金”服务，为授权芝麻信用且分数在600以上的用户垫付押金（担保上限2000元），满足条件的用户可在全国范围的活动房源享受免押入住。免押房间在房间详情处有免押标识。
                    <!-- <span class="color_pink">
                    <a href="https://xzh5.xiaozhu.com/xzhtml5.php?op=ZhiMaSpecialTopic&amp;userId=32858426201&amp;sessId=3023089b5cf0fbd54ea0a17eaaee40ed&amp;client=html5">了解更多&gt;</a></span>       -->
                </p>
                <p style="font-size:0.12rem;">{{this.$route.query.zmScore}}</p>
                <div style="height:1.3rem;"></div>
                <div calss="button" style="width:100%; height:1rem;">   
                    <button class="macbook"  @click="macbookClick" :disabled="ismacbook">立即授权</button>
                </div>
                

            </div>
            
        </div>
</template>
<script>
    export default {
        data(){
            return{
                isWex:false,
                dataScore:false,
                scoreNmb:"0",
                ismacbook:false,
            }
        },
        created(){
            if(this.isECTouch()){
                 this.isWex = true;
            }
            
        },
        mounted(){
            if(this.getSession("zmScore")){
                this.scoreNmb = this.getSession("zmScore");
                this.zhima();
                this.ismacbook = true;
            }
        },
        methods:{
            macbookClick(){
                this.$router.push({path:"/Accredit"})
            },
            zhima(){
                let canvas = document.getElementById("canvas");
                var ctx = canvas.getContext('2d');
                if (canvas.width  < window.innerWidth){
                    canvas.width  = window.innerWidth;
                }
                canvas.height  = "300";
                var cWidth = canvas.width;
                var cHeight = canvas.height;
                var score = this.scoreNmb;
                var stage = ['较差', '中等', '良好', '优秀', '极好'];
                var radius = 150;
                var deg0 = Math.PI / 9;
                var deg1 = Math.PI * 11 / 45;
                if(score < 400 || score > 900) {
                    console.log('信用分数区间：400~900');
                } else {
                    var dot = new Dot(),
                    dotSpeed = 0.03,
                    textSpeed = Math.round(dotSpeed * 100 / deg1),
                    angle = 0,
                    credit = 400;
                
                    (function drawFrame() {
                        ctx.save();
                        ctx.clearRect(0, 0, cWidth, cHeight);
                        ctx.translate(cWidth/2, 180);
                        ctx.rotate(8 * deg0);
                        
                        dot.x = radius * Math.cos(angle);
                        dot.y = radius * Math.sin(angle);
                        
                        var aim = (score - 400) * deg1 / 100;
                        if(angle < aim) {
                            angle += dotSpeed;
                        }
                        dot.draw(ctx);
                        
                        if(credit < score - textSpeed) {
                            credit += textSpeed;
                        } else if(credit >= score - textSpeed && credit < score) {
                            credit += 1;
                        }
                        text(credit);
                        
                        ctx.save();
                        ctx.beginPath();
                        ctx.lineWidth = 3;
                        ctx.strokeStyle = 'rgba(255, 255, 255, .5)';
                        ctx.arc(0, 0, radius, 0, angle, false);
                        ctx.stroke();
                        ctx.restore();
                        
                        window.requestAnimationFrame(drawFrame);
                        
                        ctx.save(); //中间刻度层
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgba(255, 255, 255, .2)';
                        ctx.lineWidth = 10;
                        ctx.arc(0, 0, 135, 0, 11 * deg0, false);
                        ctx.stroke();
                        ctx.restore();
                        
                        ctx.save(); // 刻度线
                        for(var i = 0; i < 6; i++) {
                            ctx.beginPath();
                            ctx.lineWidth = 2;
                            ctx.strokeStyle = 'rgba(255, 255, 255, .3)';
                            ctx.moveTo(140, 0);
                            ctx.lineTo(130, 0);
                            ctx.stroke();
                            ctx.rotate(deg1);
                        }
                        ctx.restore();
                        
                        ctx.save(); // 细分刻度线
                        for(i = 0; i < 25; i++) {
                            if(i % 5 !== 0) {
                            ctx.beginPath();
                            ctx.lineWidth = 2;
                            ctx.strokeStyle = 'rgba(255, 255, 255, .1)';
                            ctx.moveTo(140, 0);
                            ctx.lineTo(133, 0);
                            ctx.stroke();
                            }
                            ctx.rotate(deg1 / 5);
                        }
                        ctx.restore();
                        
                        ctx.save(); //信用分数
                        ctx.rotate(Math.PI / 2);
                        for(i = 0; i < 6; i++) {
                            ctx.fillStyle = 'rgba(255, 255, 255, .4)';
                            ctx.font = '10px Microsoft yahei';
                            ctx.textAlign = 'center';
                            ctx.fillText(400 + 100 * i, 0, -115);
                            ctx.rotate(deg1);
                        }
                        ctx.restore();
                        
                        ctx.save(); //分数段
                        ctx.rotate(Math.PI / 2 + deg0);
                        for(i = 0; i < 5; i++) {
                            ctx.fillStyle = 'rgba(255, 255, 255, .4)';
                            ctx.font = '10px Microsoft yahei';
                            ctx.textAlign = 'center';
                            ctx.fillText(stage[i], 5, -115);
                            ctx.rotate(deg1);
                        }
                        ctx.restore();
                        
                        ctx.save(); //信用阶段及评估时间文字
                        ctx.rotate(10 * deg0);
                        ctx.fillStyle = '#fff';
                        ctx.font = '28px Microsoft yahei';
                        ctx.textAlign = 'center';
                        if(score < 500) {
                            ctx.fillText('信用较差', 0, 40);
                        } else if(score < 600 && score >= 500) {
                            ctx.fillText('信用中等', 0, 40);
                        } else if(score < 700 && score >= 600) {
                            ctx.fillText('信用良好', 0, 40);
                        } else if(score < 800 && score >= 700) {
                            ctx.fillText('信用优秀', 0, 40);
                        } else if(score <= 900 && score >= 800) {
                            ctx.fillText('信用极好', 0, 40);
                        }
                        
                        ctx.fillStyle = '#80cbfa';
                        ctx.font = '14px Microsoft yahei';
                        ctx.fillText('评估时间：2016.11.06', 0, 60);
                        
                        ctx.fillStyle = '#7ec5f9';
                        ctx.font = '14px Microsoft yahei';
                        ctx.fillText('BETA', 0, -60);
                        ctx.restore();
                        
                        // ctx.save(); //最外层轨道
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgba(255, 255, 255, .4)';
                        ctx.lineWidth = 3;
                        ctx.arc(0, 0, radius, 0, 11 * deg0, false);
                        ctx.stroke();
                        ctx.restore();
                    
                    })();
                }
                
                function Dot() {
                    this.x = 0;
                    this.y = 0;
                    this.draw = function(ctx) {
                        ctx.save();
                        ctx.beginPath();
                        ctx.fillStyle = 'rgba(255, 255, 255, .7)';
                        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
                        ctx.fill();
                        ctx.restore();
                    };
                }
                
                function text(process) {
                    ctx.save();
                    ctx.rotate(10 * deg0);
                    ctx.fillStyle = '#fff';
                    ctx.font = '80px Microsoft yahei';
                    ctx.textAlign = 'center';
                    ctx.textBaseLine = 'top';
                    ctx.fillText(process, 0, 10);
                    ctx.restore();
                }
            }
        }
    }
</script>

