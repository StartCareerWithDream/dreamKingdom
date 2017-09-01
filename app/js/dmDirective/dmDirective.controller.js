/**
 * Created by yangwangwang on 2017/9/1.
 */
angular.module('app').controller('dmDirective.controller',["$scope",directiveController]);

function directiveController($scope) {
    $scope.name = '';
}