/**
 * Created by yangwangwang on 2017/9/8.
 */
(function () {
    'use strict';

    angular.module('app').controller('agGrid.controller',['$scope',agGridController]);

    function agGridController($scope) {
        this.id = 'tableDemo';
        var self = this;

        var columnsDefs = [
            {headerName: "区域", field: "regionName", pinned: 'left', suppressMovable: true,headerClass:'textLeft', cellStyle: {'text-align': "left"}},
            {headerName: "项目", field: "projectName", cellStyle: {'text-align': "left"},headerClass:'textLeft'},
            {headerName: "楼宇", field: "buildingName", cellStyle: {'text-align': "left"},headerClass:'textLeft'},
            {headerName: "楼层", field: "floorName", cellStyle: {'text-align': "left"},headerClass:'textLeft'}
        ];
        var rowsData = [
            {table:'表格'}
        ];

        $scope.gridOptions = {
            columnDefs: columnsDefs,
            rowData: rowsData,
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