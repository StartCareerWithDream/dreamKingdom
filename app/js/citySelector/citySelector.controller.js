/**
 * Created by yangwangwang on 2017/8/30.
 */
angular.module('app').controller('citySelector.controller',['$http',citySelectorController]);

function citySelectorController($http){
    var self = this;
    this.addressList = [];
    $http.get('json/citySelector.json').then(function (res) {
       self.addressList = res.data;
    });
}