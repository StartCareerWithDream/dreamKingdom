/**
 * Created by yangwangwang on 2017/8/24.
 */
angular.
module('myTest')// 将 `myInput`组件注册到 `myTest` 模块上
    .component('myInput',{
        templateUrl:'component/myTest/myTest.template.html',
        controller :function myTestCom(){
            this.text = '';
        }
    });