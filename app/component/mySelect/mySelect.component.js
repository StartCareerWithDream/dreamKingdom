/**
 * Created by yangwangwang on 2017/8/25.
 */
angular.module('mySelect').
    component('mySelect',{
        templateUrl:'component/mySelect/mySelect.template.html',
        controller:['$http',function($http) {
            this.dataList = [];
            var self = this;
            $http.get('json/myTest/myTest.json').then(function (res) {
                self.dataList = res.data;
            });

            this.selectValue = '';
            this.showList = false;

            this.changeStatus = function () {
                this.showList = !this.showList;
            };

            this.selectOption = function () {
                this.showList = false;
            }
        }]});





