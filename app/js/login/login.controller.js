/**
 * Created by yangwangwang on 2017/8/28.
 */
angular.module('app').controller('login.controller',['$scope',loginController]);

function loginController($scope){
    //测试用户名与密码
    $scope.userDate = {
        userName : '',
        password : ''
    };
}