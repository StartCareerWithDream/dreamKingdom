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
            var htmlObj = document.getElementById(self.element_id);
            var eChartObj = echarts.init(htmlObj);

            //柱状图配置
           /* var options = {
                title:{
                    text:'一年级月考成绩分布'
                },
                tooltip: {},
                legend:{
                    data:['一班','二班']
                },
                //X轴设置
                xAxis:{
                    data:['60分以下','60分','70分','80分','90分','100分']
                },
                yAxis:{
                },
                //name=legend.data的时候才能显示图例
                series:[{
                    name:'一班',
                    type:'line',
                    data:['8','12','32','45','21','1']
                },{
                    name:'二班',
                    type:'line',
                    data:['4','10','20','60','30','5']
                }],
                color: ['#A3E28F','#ff0000'],
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                }
            };*/

          /* var options = {
               backgroundColor: '#2c343c',
               visualMap: {
                   show: false,
                   min: 80,
                   max: 600,
                   inRange: {
                       colorLightness: [0, 1]
                   }
               },
               series : [
                   {
                       name: '访问来源',
                       type: 'pie',
                       radius: '55%',
                       data:[
                           {value:235, name:'视频广告'},
                           {value:274, name:'联盟广告'},
                           {value:310, name:'邮件营销'},
                           {value:335, name:'直接访问'},
                           {value:400, name:'搜索引擎'}
                      ]
                   }
               ]
           };*/

            var base = +new Date(1968, 9, 3);
            var oneDay = 24 * 3600 * 1000;
            var date = [];

            var data = [Math.random() * 300];

            for (var i = 1; i < 20000; i++) {
                var now = new Date(base += oneDay);
                date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
                data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
            }

            var options = {
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                title: {
                    left: 'center',
                    text: '大数据量面积图',
                },
                toolbox: {
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: date
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                },
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 10
                }, {
                    start: 0,
                    end: 10,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }],
                series: [
                    {
                        name:'模拟数据',
                        type:'line',
                        smooth:true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: 'rgb(255, 70, 131)'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgb(255, 158, 68)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(255, 70, 131)'
                                }])
                            }
                        },
                        data: data
                    }
                ]
            };



            eChartObj.setOption(options);
        });
    }


})();