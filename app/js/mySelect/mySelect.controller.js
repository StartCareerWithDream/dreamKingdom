/**
 * Created by yangwangwang on 2017/8/28.
 */
angular.module('app').controller('mySelect.controller',['$scope','$http',mySelectController]);

function mySelectController($scope,$http){
    //测试用户名与密码
    $scope.userDate = {
        userName : '',
        password : ''
    };

    //绑定到模板的数据
    this.user = [
        {name:'杨旺旺'}
    ];

    $scope.tips = '\u2718';

    //获取当前对象
    var ctrl = this;

    $http.get('json/mySelectTest.json').then(function(res){
        ctrl.user = res.data.response;
    });

}