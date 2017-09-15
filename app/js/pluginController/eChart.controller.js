/**
 * Created by yangwangwang on 2017/9/4.
 */
(function () {
    'use strict';
    angular.module('app').controller('eChart.controller',['$timeout',eChartController]);

    function eChartController($timeout){
        this.element_id = 'chartDemo';

        var self = this;

        $timeout(function () {
            //ehcart容器，不能再单个容器下初始化多个echart实例
            var htmlObj = document.getElementById(self.element_id);
          //  var htmlObjNew = document.getElementById(self.element_id+'_new');

            //初始化echart对象，将得到一个echartsInstance对象
            var eChartObj = echarts.init(htmlObj);
           // var eChartObjNew = echarts.init(htmlObjNew);


            //设置多个实例联动有两种方法
            //1.设置group id
          /*  eChartObj.group = 'group_one';
            eChartObjNew.group = 'group_one';
            echarts.connect('group_one');*/
            //2.直接传入需要联动的实例数组
             /*echarts.connect([eChartObj,eChartObjNew]); */

           //配置项
            var options = {
                title : {
                    text: '世界人口总量',
                    subtext: '数据来自网络'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['2011年', '2012年']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'value',
                        boundaryGap : [0, 0.01]
                    }
                ],
                grid: { // 控制图的大小，调整下面这些值就可以，
                    x: 400,//x的值可以空值y轴与label标签的距离，效果如下图：
                    x2: 100,
                    y2: 50,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
                },
                yAxis : [
                    {
                        type : 'category',
                        data : ['巴西闪亮的空间粉丝的房间里睡觉法律手段尚福林时间浪费时间f'
                            ,'印尼三家公司的房间里睡上了飞机哦我i金佛我i额酸辣粉鸡尾酒佛问'
                            ,'美国','印度','中国'],
                        axisLabel:{
                            interval: 0,//标签设置为全部显示
                            formatter:function(params){
                                var newParamsName = "";// 最终拼接成的字符串
                                var paramsNameNumber = params.length;// 实际标签的个数
                                var provideNumber = 20;// 每行能显示的字的个数
                                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                                /**
                                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                                 */
// 条件等同于rowNumber>1
                                if (paramsNameNumber > provideNumber) {
                                    /** 循环每一行,p表示行 */
                                    for (var p = 0; p < rowNumber; p++) {
                                        var tempStr = "";// 表示每一次截取的字符串
                                        var start = p * provideNumber;// 开始截取的位置
                                        var end = start + provideNumber;// 结束截取的位置
// 此处特殊处理最后一行的索引值
                                        if (p == rowNumber - 1) {
// 最后一次不换行
                                            tempStr = params.substring(start, paramsNameNumber);
                                        } else {
// 每一次拼接字符串并换行
                                            tempStr = params.substring(start, end) + "\n";
                                        }
                                        newParamsName += tempStr;// 最终拼成的字符串
                                    }

                                } else {
// 将旧标签的值赋给新标签
                                    newParamsName = params;
                                }
//将最终的字符串返回
                                return newParamsName

                            }
                        }
                    }
                ],
                series : [
                    {
                        name:'2011年',
                        type:'bar',
                        data:[18203, 23489, 29034, 104970, 131744]
                    },
                    {
                        name:'2012年',
                        type:'bar',
                        data:[19325, 23438, 31000, 121594, 134141]
                    }
                ]
            };

            //配置echart图表
        /*    eChartObj.resize({
                width:'1015px',//不支持百分比
                height:'600px'
            });*/
            eChartObj.dispatchAction({
                type:'highlight',
                name:'意向'
            });

            eChartObj.setOption(options);
         //   eChartObjNew.setOption(options);

        });
    }


})();