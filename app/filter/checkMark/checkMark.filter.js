/**
 * Created by yangwangwang on 2017/8/24.
 */
angular.module('checkMark').
    filter('checkmark',function(){
        return function(input){
            return input ? "\u2713":"\u2718";
        }
});