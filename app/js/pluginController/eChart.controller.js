/**
 * Created by yangwangwang on 2017/9/4.
 */
(function () {
    'use strict';
    angular.module('app').controller('eChart.controller',['$timeout',eChartController]);

    function eChartController($timeout){
        this.element_id = 'chartDemo';

        var self = this;

       
        var data1 = [
            [1, 4862.4],
            [2, 5294.7],
            [5, 8964.4],
            [9, 16909.2],
            [10, 18547.9],
            [11, 21617.8],
            [12, 26638.1],
            [13, 34634.4],
            [14, 46759.4],
            [15, 58478.1],
            [16, 67884.6],
            [17, 74462.6],
            [18, 79395.7]
        ];
        var data2 = [
            [3, 5934.5],
            [4, 7171.0],
            [6, 10202.2],
            [7, 11962.5],
            [8, 14928.3],
        ];
        var data = [
            [1, 4862.4],
            [2, 5294.7],
            [3, 5934.5],
            [4, 7171.0],
            [5, 8964.4],
            [6, 10202.2],
            [7, 11962.5],
            [8, 14928.3],
            [9, 16909.2],
            [10, 18547.9],
            [11, 21617.8],
            [12, 26638.1],
            [13, 34634.4],
            [14, 46759.4],
            [15, 58478.1],
            [16, 67884.6],
            [17, 74462.6],
            [18, 79395.7]
        ];
        function initLine(ele,myOptions){
            //初始化echart对象，将得到一个echartsInstance对象
             //ehcart容器，不能再单个容器下初始化多个echart实例
            var htmlObj = document.getElementById(self.element_id);
            var eChartObj = echarts.init(htmlObj);
            var options = {
                 title: {
                    text: '测试不知道叫什么图'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                xAxis: {
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    },
                    splitNumber: 20
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                },
                series: [{
                    name: 'scatter',
                    type: 'scatter',
                     itemStyle:{
                        normal:{
                             color:'#ff0000',
                        }
                    },
                    data: data1
                },
                {
                    name: 'scatter',
                    type: 'scatter',
                    itemStyle:{
                        normal:{
                             color:'#0099ff',
                        }
                    },
                    data: data2
                },
                 {
                    name: 'line',
                    type: 'line',
                    data: data

                }]
            };
            eChartObj.setOption(options);
        }

        $timeout(initLine,100);
    }


})();




            //配置项
// var options = {
//     title : {
//     text: '世界人口总量',
//     subtext: '数据来自网络'
//     },
//     tooltip : {
//     trigger: 'axis'
//     },
//     legend: {
//     data:['2011年', '2012年']
//     },
//     toolbox: {
//     show : true,
//     feature : {
//     mark : {show: true},
//     dataView : {show: true, readOnly: false},
//     magicType: {show: true, type: ['line', 'bar']},
//     restore : {show: true},
//     saveAsImage : {show: true}
//     }
//     },
//     calculable : true,
//     xAxis : [
//     {
//     type : 'value',
//     boundaryGap : [0, 0.01]
//     }
//     ],
//     grid: { // 控制图的大小，调整下面这些值就可以，
//     x: 400,//x的值可以空值y轴与label标签的距离，效果如下图：
//     x2: 100,
//     y2: 50,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
//     },
//     yAxis : [
//     {
//     type : 'category',
//     data : ['巴西闪亮的空间粉丝的房间里睡觉法律手段尚福林时间浪费时间f'
//     ,'印尼三家公司的房间里睡上了飞机哦我i金佛我i额酸辣粉鸡尾酒佛问'
//     ,'美国','印度','中国'],
//     axisLabel:{
//     interval: 0,//标签设置为全部显示
//     formatter:function(params){
//     var newParamsName = "";// 最终拼接成的字符串
//     var paramsNameNumber = params.length;// 实际标签的个数
//     var provideNumber = 20;// 每行能显示的字的个数
//     var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
//     /**
//      * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
//      */
//     // 条件等同于rowNumber>1
//     if (paramsNameNumber > provideNumber) {
//         /** 循环每一行,p表示行 */
//         for (var p = 0; p < rowNumber; p++) {
//             var tempStr = "";// 表示每一次截取的字符串
//             var start = p * provideNumber;// 开始截取的位置
//             var end = start + provideNumber;// 结束截取的位置
//     // 此处特殊处理最后一行的索引值
//             if (p == rowNumber - 1) {
//     // 最后一次不换行
//                 tempStr = params.substring(start, paramsNameNumber);
//             } else {
//     // 每一次拼接字符串并换行
//                 tempStr = params.substring(start, end) + "\n";
//             }
//             newParamsName += tempStr;// 最终拼成的字符串
//         }

//     } else {
//     // 将旧标签的值赋给新标签
//         newParamsName = params;
//     }
//     //将最终的字符串返回
//     return newParamsName

//     }
//     }
//     }
//     ],
//     series : [
//     {
//     name:'2011年',
//     type:'bar',
//     data:[18203, 23489, 29034, 104970, 131744]
//     },
//     {
//     name:'2012年',
//     type:'bar',
//     data:[19325, 23438, 31000, 121594, 134141]
//     }
//     ]
// };