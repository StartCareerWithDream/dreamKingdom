/**
 * Created by yangwangwang on 2017/8/25.
 */
angular.module('mySelect').
    component('mySelect',{
        templateUrl:'component/mySelect/mySelect.template.html',
        controller:function() {
            var self = this;

            this.dataList = [{name:'请选择'}];

            this.selectValue = '';

            this.showList = false;

            this.changeStatus = function () {
                this.showList = !this.showList;
            };

            this.selectOption = function () {
                this.showList = false;
            }
        },
        bindings:{
            dataList:'<'          //  '<'表示单项绑定
        }
    });





