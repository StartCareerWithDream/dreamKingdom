/**
 * ag-grid - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
 * @version v6.2.1
 * @link http://www.ag-grid.com/
 * @license MIT
 */
var gridOptionsWrapper_1 = require("./gridOptionsWrapper.d");
var paginationController_1 = require("./rowControllers/paginationController.d");
var floatingRowModel_1 = require("./rowControllers/floatingRowModel.d");
var selectionController_1 = require("./selectionController.d");
var columnController_1 = require("./columnController/columnController.d");
var rowRenderer_1 = require("./rendering/rowRenderer.d");
var headerRenderer_1 = require("./headerRendering/headerRenderer.d");
var filterManager_1 = require("./filter/filterManager.d");
var valueService_1 = require("./valueService.d");
var masterSlaveService_1 = require("./masterSlaveService.d");
var eventService_1 = require("./eventService.d");
var gridPanel_1 = require("./gridPanel/gridPanel.d");
var gridApi_1 = require("./gridApi.d");
var headerTemplateLoader_1 = require("./headerRendering/headerTemplateLoader.d");
var balancedColumnTreeBuilder_1 = require("./columnController/balancedColumnTreeBuilder.d");
var displayedGroupCreator_1 = require("./columnController/displayedGroupCreator.d");
var expressionService_1 = require("./expressionService.d");
var templateService_1 = require("./templateService.d");
var popupService_1 = require("./widgets/popupService.d");
var logger_1 = require("./logger.d");
var columnUtils_1 = require("./columnController/columnUtils.d");
var autoWidthCalculator_1 = require("./rendering/autoWidthCalculator.d");
var horizontalDragService_1 = require("./headerRendering/horizontalDragService.d");
var context_1 = require("./context/context.d");
var csvCreator_1 = require("./csvCreator.d");
var gridCore_1 = require("./gridCore.d");
var standardMenu_1 = require("./headerRendering/standardMenu.d");
var dragAndDropService_1 = require("./dragAndDrop/dragAndDropService.d");
var dragService_1 = require("./dragAndDrop/dragService.d");
var sortController_1 = require("./sortController.d");
var focusedCellController_1 = require("./focusedCellController.d");
var mouseEventService_1 = require("./gridPanel/mouseEventService.d");
var cellNavigationService_1 = require("./cellNavigationService.d");
var utils_1 = require("./utils.d");
var filterStage_1 = require("./rowControllers/inMemory/filterStage.d");
var sortStage_1 = require("./rowControllers/inMemory/sortStage.d");
var flattenStage_1 = require("./rowControllers/inMemory/flattenStage.d");
var focusService_1 = require("./misc/focusService.d");
var cellEditorFactory_1 = require("./rendering/cellEditorFactory.d");
var events_1 = require("./events.d");
var virtualPageRowModel_1 = require("./rowControllers/virtualPagination/virtualPageRowModel.d");
var inMemoryRowModel_1 = require("./rowControllers/inMemory/inMemoryRowModel.d");
var cellRendererFactory_1 = require("./rendering/cellRendererFactory.d");
var cellRendererService_1 = require("./rendering/cellRendererService.d");
var valueFormatterService_1 = require("./rendering/valueFormatterService.d");
var agCheckbox_1 = require("./widgets/agCheckbox.d");
var baseFrameworkFactory_1 = require("./baseFrameworkFactory.d");
var Grid = (function () {
    function Grid(eGridDiv, gridOptions, params) {
        if (!eGridDiv) {
            console.error('ag-Grid: no div element provided to the grid');
        }
        if (!gridOptions) {
            console.error('ag-Grid: no gridOptions provided to the grid');
        }
        var rowModelClass = this.getRowModelClass(gridOptions);
        var enterprise = utils_1.Utils.exists(Grid.enterpriseBeans);
        var frameworkFactory = params ? params.frameworkFactory : null;
        if (utils_1.Utils.missing(frameworkFactory)) {
            frameworkFactory = new baseFrameworkFactory_1.BaseFrameworkFactory();
        }
        this.context = new context_1.Context({
            overrideBeans: Grid.enterpriseBeans,
            seed: {
                enterprise: enterprise,
                gridOptions: gridOptions,
                eGridDiv: eGridDiv,
                $scope: params ? params.$scope : null,
                $compile: params ? params.$compile : null,
                quickFilterOnScope: params ? params.quickFilterOnScope : null,
                globalEventListener: params ? params.globalEventListener : null,
                frameworkFactory: frameworkFactory
            },
            beans: [rowModelClass, cellRendererFactory_1.CellRendererFactory, horizontalDragService_1.HorizontalDragService, headerTemplateLoader_1.HeaderTemplateLoader, floatingRowModel_1.FloatingRowModel, dragService_1.DragService,
                displayedGroupCreator_1.DisplayedGroupCreator, eventService_1.EventService, gridOptionsWrapper_1.GridOptionsWrapper, selectionController_1.SelectionController,
                filterManager_1.FilterManager, columnController_1.ColumnController, rowRenderer_1.RowRenderer,
                headerRenderer_1.HeaderRenderer, expressionService_1.ExpressionService, balancedColumnTreeBuilder_1.BalancedColumnTreeBuilder, csvCreator_1.CsvCreator,
                templateService_1.TemplateService, gridPanel_1.GridPanel, popupService_1.PopupService, valueService_1.ValueService, masterSlaveService_1.MasterSlaveService,
                logger_1.LoggerFactory, columnUtils_1.ColumnUtils, autoWidthCalculator_1.AutoWidthCalculator, gridApi_1.GridApi,
                paginationController_1.PaginationController, popupService_1.PopupService, gridCore_1.GridCore, standardMenu_1.StandardMenuFactory,
                dragAndDropService_1.DragAndDropService, sortController_1.SortController, columnController_1.ColumnApi, focusedCellController_1.FocusedCellController, mouseEventService_1.MouseEventService,
                cellNavigationService_1.CellNavigationService, filterStage_1.FilterStage, sortStage_1.SortStage, flattenStage_1.FlattenStage, focusService_1.FocusService,
                cellEditorFactory_1.CellEditorFactory, cellRendererService_1.CellRendererService, valueFormatterService_1.ValueFormatterService],
            components: [{ componentName: 'AgCheckbox', theClass: agCheckbox_1.AgCheckbox }],
            debug: !!gridOptions.debug
        });
        var eventService = this.context.getBean('eventService');
        var readyEvent = {
            api: gridOptions.api,
            columnApi: gridOptions.columnApi
        };
        eventService.dispatchEvent(events_1.Events.EVENT_GRID_READY, readyEvent);
        if (gridOptions.debug) {
            console.log('ag-Grid -> initialised successfully, enterprise = ' + enterprise);
        }
    }
    Grid.setEnterpriseBeans = function (enterpriseBeans, rowModelClasses) {
        this.enterpriseBeans = enterpriseBeans;
        // the enterprise can inject additional row models. this is how it injects the viewportRowModel
        utils_1.Utils.iterateObject(rowModelClasses, function (key, value) { return Grid.RowModelClasses[key] = value; });
    };
    Grid.prototype.getRowModelClass = function (gridOptions) {
        var rowModelType = gridOptions.rowModelType;
        if (utils_1.Utils.exists(rowModelType)) {
            var rowModelClass = Grid.RowModelClasses[rowModelType];
            if (utils_1.Utils.exists(rowModelClass)) {
                return rowModelClass;
            }
            else {
                console.error('ag-Grid: count not find matching row model for rowModelType ' + rowModelType);
                if (rowModelType === 'viewport') {
                    console.error('ag-Grid: rowModelType viewport is only available in ag-Grid Enterprise');
                }
            }
        }
        return inMemoryRowModel_1.InMemoryRowModel;
    };
    ;
    Grid.prototype.destroy = function () {
        this.context.destroy();
    };
    // the default is InMemoryRowModel, which is also used for pagination.
    // the enterprise adds viewport to this list.
    Grid.RowModelClasses = {
        virtual: virtualPageRowModel_1.VirtualPageRowModel,
        pagination: inMemoryRowModel_1.InMemoryRowModel
    };
    return Grid;
})();
exports.Grid = Grid;
