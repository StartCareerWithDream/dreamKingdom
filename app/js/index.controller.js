/**
 * Created by yangwangwang on 2017/8/28.
 */
angular.module('app').config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    /*路由重定向 $urlRouterProvider:如果没有路由引擎能匹配当前的导航状态，那它就会默认将路径路由至 home.html,
     *这个页面就是状态名称被声明的地方. */
    $urlRouterProvider.otherwise('/mySelect');
    $stateProvider
        .state('mySelect', {
            url: '/mySelect',
            templateUrl: './views/mySelect/mySelect.html',
            controller:'mySelect.controller as ctrl',
            resolve :{
                deps:['$ocLazyLoad',function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name:'app',
                        files:[
                            './js/mySelect/mySelect.controller.js'
                        ]
                    });
                }

                ]
            }
        })
        .state('citySelector', {
            url: '/citySelector',
            templateUrl: './views/citySelector/citySelector.html',
            controller:'citySelector.controller as ctrl',
            resolve :{
                deps:['$ocLazyLoad',function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name:'app',
                        files:[
                            './js/citySelector/citySelector.controller.js'
                        ]
                    });
                }

                ]
            }
        })
        .state('dmDirective', {
            url: '/dmDirective',
            templateUrl: './views/dmDirective/dmDirective.html',
            controller:'dmDirective.controller as ctrl',
            resolve :{
                deps:['$ocLazyLoad',function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name:'app',
                        files:[
                            './js/dmDirective/dmDirective.controller.js',
                            './directive/test.directive.js'
                        ]
                    });
                }

                ]
            }
        })
        .state('eChart', {
            url: '/eChart',
            templateUrl: './views/pluginView/eChart.html',
            controller:'eChart.controller as ctrl',
            resolve :{
                deps:['$ocLazyLoad',function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name:'app',
                        files:[
                            './js/pluginController/eChart.controller.js'
                        ]
                    });
                }

                ]
            }
        })
        .state('agGrid', {
            url: '/agGrid',
            templateUrl: './views/pluginView/agGrid.html',
            controller:'agGrid.controller as ctrl',
            resolve :{
                deps:['$ocLazyLoad',function($ocLazyLoad){
                    return $ocLazyLoad.load({
                        name:'app',
                        files:[
                            './js/pluginController/agGrid.controller.js'
                        ]
                    });
                }

                ]
            }
        })
}]);