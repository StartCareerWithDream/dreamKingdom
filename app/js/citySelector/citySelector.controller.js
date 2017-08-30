/**
 * Created by yangwangwang on 2017/8/30.
 */
angular.module('app').controller('citySelector.controller',['$http',citySelectorController]);

function citySelectorController($http){
    var self = this;
    this.addressList = [];
    this.address = {
        province : '',
        city : '',
        district :'',
        selected :''
    };

    this.street = '';

    $http.get('json/citySelector.json').then(function (res) {
       self.addressList = res.data;
    });
}