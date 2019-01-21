 // 文件路径 @/lib/echarts.js 自行配置

 // 加载echarts，注意引入文件的路径
 import echarts from 'echarts/lib/echarts'

 // 再引入你需要使用的图表类型，标题，提示信息等
 import 'echarts/lib/component/legend'
 import 'echarts/lib/component/title'
 import 'echarts/lib/chart/line'
 import "echarts/lib/component/graphic";
 import "echarts/lib/component/grid";
 import "echarts/lib/component/legendScroll";
 import "echarts/lib/component/tooltip";
 import "echarts/lib/component/axisPointer"
 import "echarts/lib/component/singleAxis"
 import "echarts/lib/component/visualMap";
 import "echarts/lib/component/timeline";

 // require("echarts/lib/component/toolbox");

 export default echarts