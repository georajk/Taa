(function(){
	reqTrainAstApp.controller('viewController', viewController);
	viewController.$inject = ['$uibModal', '$scope','$interval', 'commonService', 'utilFactory', 'selectedRow', '$location', '$uibModalInstance'];
	function viewController($uibModal, $scope, $interval, commonService, utilFactory, selectedRow, $location, $uibModalInstance){
		var viewCtrl = this;
		
		viewCtrl.reportDetails = selectedRow;
		console.log(viewCtrl.reportDetails);
		/*if(viewCtrl.reportDetails == undefined){
			$location.path('report');
		}*/
		hideInitialize();
		hideNdShow();
		function hideInitialize(){
			viewCtrl.hideStdntDetails = true;
			viewCtrl.clsTmHide = true;
			viewCtrl.instNmHide= true;
			viewCtrl.newInstNmHide=true;
			viewCtrl.clsCapHide = true;
			viewCtrl.newClsDtHide = true;
			viewCtrl.existCapHide = true;
			viewCtrl.newClsCapHide = true;
		}
		
		function showAllHide(){
			viewCtrl.clsTmHide = false;
			viewCtrl.instNmHide= false;
			viewCtrl.newInstNmHide=false;
			viewCtrl.clsCapHide = false;
			viewCtrl.hideStdntDetails = false;
			viewCtrl.newClsDtHide = false;
		}
		
		function hideNdShow(){
			if(viewCtrl.reportDetails.requestType == "Class - Add"){
				showAllHide();
				viewCtrl.hideStdntDetails = true;
				viewCtrl.newClsDtHide = true;
			}else if(viewCtrl.reportDetails.requestType == "Instructor Name - Change"){
				hideInitialize();
				viewCtrl.instNmHide= false;
				viewCtrl.newInstNmHide=false;
			}else if(viewCtrl.reportDetails.requestType == "Student - Add"){
				hideInitialize();
				viewCtrl.hideStdntDetails = false;
			}else if(viewCtrl.reportDetails.requestType ==  "Class - Cancel"){
				hideInitialize();
				viewCtrl.clsCapHide = false;
				viewCtrl.instNmHide= false;
				viewCtrl.newInstNmHide=false;
			}else if(viewCtrl.reportDetails.requestType ==  "Class Date - Change"){
				hideInitialize();
				viewCtrl.newInstNmHide=false;
				viewCtrl.newClsDtHide = false;
			}else if(viewCtrl.reportDetails.requestType ==  "Fee - Add"){
				hideInitialize();
				viewCtrl.newInstNmHide=false;
				viewCtrl.hideStdntDetails = false;
			}else if(viewCtrl.reportDetails.requestType == "Student - Remove"){
				hideInitialize();
				viewCtrl.newInstNmHide=false;
				viewCtrl.hideStdntDetails = false;
			}else if(viewCtrl.reportDetails.requestType == "Class Capacity - Change"){
				hideInitialize();
				viewCtrl.existCapHide = false;
				viewCtrl.newClsCapHide = false;
			}
			
		}	
		
		viewCtrl.gridOptions = {
				onRegisterApi : function(gridApi){
					viewCtrl.gridApi = gridApi;
					$interval(function(){
						viewCtrl.gridApi.core.handleWindowResize();
						viewCtrl.gridApi.grid.refresh();
					}, 500, 10);
				},
				columnDefs: [
				             {field: "sno.",displayName:"S.No",width: '20%',
				            	 cellTemplate: '<span>{{grid.renderContainers.body.visibleRowCache.indexOf(row)+1}}</span>'
				             },
				             { field: 'studentName' , displayName: "Student Name", width: '40%'},
				             { field: 'dealerInfo' , displayName: "Dealer", width: '40%'}
				            ]
		};
		
		viewCtrl.gridOptions.data = viewCtrl.reportDetails.tblChangeCancelStudents;
		
		viewCtrl.ok = function () {
			$uibModalInstance.dismiss('cancel');
		  };
		
	}
})();