/**
 * Created by yangwangwang on 2017/9/1.
 */
angular.module('app').directive('testDirective',function () {
   return {
       restrict:'E',   //四个取值，E 元素，A 属性，C 类，M注释
       template:function(tElement,tAttrs){
           var _html = '';
           _html += '<div><label class="control-label">子作用域：{{name}}</label><input placeholder="请输入姓名" ng-model="name" class="form-control"></div>';
           return _html;
       },
       replace:true,
       scope:{
           name:'@'
       }
       /*
       作用域取值 false表示继承（继承不隔离），true表示继承（继承隔离），{}表示新建子作用域（两不相干）
       使用{}时，可以使用三种方式来与隔离之外的作用域进行交互
       @表示局部，&使用函数表到时
       */
   }
});