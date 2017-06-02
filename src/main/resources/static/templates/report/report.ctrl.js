(function(){
	angular.module('reqTrainAstApp').controller('reportController', reportController);
	reportController.$inject = ['$uibModal', '$scope','$interval', 'commonService', 'utilFactory', '$location', 'selectedRow'];
	function reportController($uibModal, $scope, $interval, commonService, utilFactory, $location, selectedRow){
		var rptCtrl = this;
		
		rptCtrl.gridOptions = {
				enableRowSelection: true,
				multiSelect : false,
				enableColumnResizing: true,
				enableFullRowSelection: true,
				enableRowHeaderSelection: false,
				enableFiltering: true,
				enableVerticalScrollbar:false,
				enableHorizontalScrollbar:false,
				paginationPageSize: 14,
				onRegisterApi : function(gridApi){
					rptCtrl.gridApi = gridApi;
					$interval(function(){
						rptCtrl.gridApi.core.handleWindowResize();
						rptCtrl.gridApi.grid.refresh();
					}, 500, 10);
				},
				appScopeProvider: { 
					onClick : function(row) {
						$uibModal.open({
						      templateUrl: 'templates/view/view.html',
						      controller: 'viewController',
						      controllerAs: 'viewCtrl',
						      size:'lg',
						      resolve: {
						        selectedRow: function () {
						          return row.entity;
						        }
						      }
						    });
						//selectedRow.setData(row.entity);
						//$location.path('view');
					}
				},
				columnDefs: [
				             {field: "sno.",displayName:"S.No",width: '7%', headerCellClass : 'headerGrid',
				            	 cellTemplate: '<span style="text-align: center; display: block;">{{grid.renderContainers.body.visibleRowCache.indexOf(row)+1}}</span>'
				             },
				             { field: 'courseName' , displayName: "Course Name", width: '20%', headerCellClass : 'headerGrid',},
				             { field: 'requestType' , displayName: "Type", width: '15%', headerCellClass : 'headerGrid',},
				             { field: 'submittedBy' , displayName: "Submitted By", width: '15%', headerCellClass : 'headerGrid',},
				             { field: 'appr' , displayName: "Appr ?", width: '15%', headerCellClass : 'headerGrid',},
				             { field: 'comp' , displayName: "Comp ?", width: '15%', headerCellClass : 'headerGrid',},
				             {field: 'view' , displayName: "",width: '14%', enableFiltering: false, headerCellClass : 'headerGrid',
				            	 cellTemplate:'<div><a href="" data-ng-click="grid.appScope.onClick(row)" style="text-align:center;display:block;">View</a></div>'
							}]
		};
		
		loadReportData();
		
		function loadReportData(){
			commonService.get('report/fetch').then(function(response){
				if(response.status === 200){
					rptCtrl.gridOptions.data = response.data;
				}else{
					utilFactory.error("error while searching");
				}
			}, function(response){
				utilFactory.error("Web page error");
			});
		}
	
	}
})();