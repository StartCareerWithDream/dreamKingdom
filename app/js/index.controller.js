/**
 * Created by yangwangwang on 2017/8/28.
 */
angular.module('app').config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    /*路由重定向 $urlRouterProvider:如果没有路由引擎能匹配当前的导航状态，那它就会默认将路径路由至 home.html,
     *这个页面就是状态名称被声明的地方. */
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: './views/login/login.html'
        })
        .state('mySelect', {
            url: '/mySelect',
            template: '<my-select></my-select>'
        })
}]);