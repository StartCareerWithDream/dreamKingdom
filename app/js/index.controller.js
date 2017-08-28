/**
 * Created by yangwangwang on 2017/8/28.
 */
angular.module('app').config(['$stateProvider',function($stateProvider){
    $stateProvider.state('index',{
        url:'/',
        views: {
            'lazyLoadView': {
                templateUrl: 'views/login/login.html',
                controller: 'login.controller'
            }
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad){
                return $ocLazyLoad.load('js/login/login.controller.js')
            }]
        }
    });
}]);