/**
 * Created by yangwangwang on 2017/9/4.
 */
(function () {
    'use strict';
    angular.module('app').controller('eChart.controller',['$scope',eChartController]);

    function eChartController($scope){
        this.objId = 'chartDemo';
    }
})();