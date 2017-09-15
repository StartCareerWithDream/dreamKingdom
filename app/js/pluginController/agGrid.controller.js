/**
 * Created by yangwangwang on 2017/9/8.
 */
(function () {
    'use strict';

    angular.module('app').controller('agGrid.controller',['$scope','$timeout',agGridController]);

    function agGridController($scope,$timeout) {
        this.id = 'tableDemo';
        var self = this;

        var columnsDefs = [
            {
                headerName: "Athlete Details",
                children: [
                    {headerName: "Name", field: "name"},
                    {headerName: "Age", field: "age"},
                    {headerName: "Country", field: "country"}
                ]
            },
            {
                headerName: "Sports Results",
                children: [
                    {headerName: "Sport", field: "sport"},
                    {headerName: "Total", columnGroupShow: 'closed',field: "sport"},
                    {headerName: "Gold", columnGroupShow: 'open',field: "gold"},
                    {headerName: "Silver", columnGroupShow: 'open',field: "silver"},
                    {headerName: "Bronze", columnGroupShow: 'open',field: "bronze"}
                ]
            }
        ];

        var rowsData = [
            {name:'杨旺旺',age:'23',country:'中国',sport:'600',gold:'100',silver:'200',bronze:'300'}
        ];

        var newRowsData = [
            {name:'巴啦啦',age:'23',country:'中国',sport:'600',gold:'100',silver:'200',bronze:'300'}
        ];

        this.gridOptions = {
            columnDefs: columnsDefs,
            headerHeight: 36,
            rowHeight: 36,
            minColWidth: 180,
            enableColResize: true,
            localeText: {
                pinLeft: '固定在左侧',
                pinRight: '固定在右侧',
                noPin: '不固定',
                pinColumn: '固定列'
            },
            suppressNoRowsOverlay:false,
            rowSelection: 'single'
        };


        $timeout(function() {
            console.log(self.gridOptions);
            self.gridOptions.api.sizeColumnsToFit();
            self.gridOptions.api.setRowData(rowsData);
           // self.gridOptions.api.updateRowData(rowsData,newRowsData);
        }, 0);

    }
})();