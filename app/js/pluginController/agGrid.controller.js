/**
 * Created by yangwangwang on 2017/9/8.
 */
(function () {
    'use strict';

    angular.module('app').controller('agGrid.controller',['$scope',agGridController]);

    function agGridController($scope) {
        this.id = 'tableDemo';

        this.rows = [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ];

        this.columns = [
            {headerName: "Make", field: "make"},
            {headerName: "Model", field: "model", cellRendererFramework: RedComponentComponent},
            {headerName: "Price", field: "price"}
        ];

        $scope.gridOptions = {
            columnDefs: columnDefs,
            headerHeight: 36,
            rowHeight: 36,
            minColWidth: 180,
            getMainMenuItems: getMainMenuItems,
            localeText: {
                pinLeft: '固定在左侧',
                pinRight: '固定在右侧',
                noPin: '不固定',
                pinColumn: '固定列',
            },
            suppressNoRowsOverlay:true
        };
    }
})();