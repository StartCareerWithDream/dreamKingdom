/**
 * Created by yangwangwang on 2017/8/25.
 */
angular.module('myService').
    factory('myService',['$resource',function($resource){
        return $resource('phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: {personId: 'person'},
                isArray: true
            }
        });
    }
]);