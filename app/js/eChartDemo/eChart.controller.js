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
            var options = {
                title:{
                    text:'测试成绩'
                },
                legend:{
                    data:['一年级','二年级']
                },
                //X轴设置
                xAxis:{
                    data:['60分以下','60分','70分','80分','90分','100分']
                },
                yAxis:{
                },
                //name=legend.data的时候才能显示图例
                series:[{
                    name:'一年级',
                    type:'bar',
                    data:['8','12','32','45','21','1'],
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                },{
                    name:'二年级',
                    type:'bar',
                    data:['4','10','20','60','30','5'],
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                }],
                color: ['#A3E28F','#ff0000'],
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                }
            };
            eChartObj.setOption(options);
        });
    }


})();