/**
 * Created by yangwangwang on 2017/8/25.
 */
angular.module('userList').
    component('userList',{
        templateUrl:'component/userList/userList.template.html',
        controller:['$http',function ($http) {
            this.data = [];

            var self = this;
            $http.get('json/myTest/myTest.json').then(function (res) {
                if(res && res.data)
                    self.data = res.data;
            });
        }]
});