/**
 * 
 */
var reqTrainAstApp;
(function(){
	reqTrainAstApp = angular.module('reqTrainAstApp', ['ui.bootstrap', 'ngRoute', 'blockUI', 'ui.grid', 'ui.grid.selection', 'ui.grid.pagination']);
	
	reqTrainAstApp.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/home', {
			templateUrl: 'home.html',
			controller: 'homePageController as homePgCtrl'
		}).when('/about', {
			templateUrl: 'about.html',
			controller: 'homePageController as homePgCtrl'
		}).when('/request', {
			templateUrl: 'templates/request/request.html',
			controller: 'reqController as reqCtrl'
		}).when('/report', {
			templateUrl: 'templates/report/report.html',
			controller: 'reportController as rptCtrl'
		}).when('/view', {
			templateUrl: 'templates/view/view.html',
			controller: 'viewController as viewCtrl'
		}).otherwise({
			redirectTo: '/home'
		});
	}]);
	
	reqTrainAstApp.config(['blockUIConfig',function (blockUIConfig) {
	    blockUIConfig.template = '<div class=\"block-ui-overlay\"></div><div class=\"block-ui-message-container\" aria-live=\"assertive\" aria-atomic=\"true\"><div ng-class=\"$_blockUiMessageClass\"><img src="static/images/giphy.gif"/></div></div>';
	    blockUIConfig.requestFilter = function (config) {
	      
	    };
	}]);
	
	reqTrainAstApp.factory('selectedRow', function() {
           var selectedData;
           return {
               setData: function(data) {
            	   selectedData = data;
               },
               getData: function() {
                   return selectedData;
               }
           }
    });
	
	reqTrainAstApp.controller('appCtrl', appCtrl);
	appCtrl.$inject = ['$scope', '$interval','$uibModal', '$location'];
	function appCtrl($scope, $interval, $uibModal, $location){
		
		
		
	}
	})();