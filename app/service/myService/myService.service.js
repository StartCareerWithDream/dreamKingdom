/**
 * Created by yangwangwang on 2017/8/25.
 */
angular.module('myService').
    factory('myService',function(){
        this.getter = function () {
            return 123;
        }
    }
);