/**
 * Created by yangwangwang on 2017/8/24.
 */
angular.module('app').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
       // $locationProvider.hashPrefix('!');
        //配置$route服务
        $routeProvider
            .when('/myinput', {
            template: '<my-input></my-input>'
        })
            .when('/userlist', {
            template: '<user-list></user-list>'
        })
            .when('/mySelect', {
            template: '<my-select></my-select>'
        })
    }
]);
