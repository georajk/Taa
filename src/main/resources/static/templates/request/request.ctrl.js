(function(){
	reqTrainAstApp.controller('reqController', reqController);
	reqController.$inject = ['$uibModal', '$scope','$interval', 'commonService', 'utilFactory'];
	function reqController($uibModal, $scope, $interval, commonService, utilFactory){
		var reqCtrl = this;

		reqCtrl.tblChangeCancelStudents = [
						{ studentName: '', dealerInfo: ''}
		               ];
		//To initialize Screen
		initialPage();

		reqCtrl.extclsAdd= false;
		reqCtrl.add = add;
		reqCtrl.newClsfromDt="";
		reqCtrl.newClstoDt ="";
		reqCtrl.otherLoc = true;
		var initializeHide = initializeHide;
		initializeHide();
		reqCtrl.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
		reqCtrl.format = reqCtrl.formats[0];
		//OPtions for select drop down
		reqCtrl.options = [
		                  { label: 'select', value: 0 },
		                  { label: 'Class - Cancel', value: 1 },
		                  { label: 'class - Add', value: 2 },
		                  { label: 'Class Date - Change ', value: 3 },
		                  { label: 'Class Location - Change', value: 4 },
		                  { label: 'Class Time - Change', value: 5 },
		                  { label: 'Class Capacity - Change', value: 6 },
		                  { label: 'Instructor Name - Change', value: 7 },
		                  { label: 'Student - Add', value: 8 },
		                  { label: 'Student - Remove', value: 9 },
		                  { label: 'Fee - Waive', value: 10 },
		                  { label: 'Fee - Add', value: 11 }
		                ];
		
		reqCtrl.requestType = reqCtrl.options[0].value;
		//To load option for location Dropdown
		reqCtrl.classLocs =[
			{ label: 'select', value: 0 },
            { label: 'Montvale', value: 1 },
            { label: 'Jacksonville', value: 2 },
            { label: 'Itasca', value: 3 },
            { label: 'Long Beach', value: 4 },
            { label: 'Houston - MB Education Center', value: 5 },
            { label: 'Houston - MB collision Center', value: 6 },
            { label: 'DFW - (JW)', value: 7 },
            { label: 'DFW - Collision(JU)', value: 8 },
            { label: 'Other', value: 9 }
		];
		
		reqCtrl.classLocation = reqCtrl.classLocs[0];
		
		reqCtrl.newLocation = reqCtrl.classLocs[0];
		
		reqCtrl.selectedLoc  = function(clsLoc){
			if(clsLoc.label == "Other"){
				reqCtrl.otherLoc = false;
			}else{
				reqCtrl.otherLoc = true;
			}
		}
		//To initialize hide fields
		function initializeHide(){
			
			reqCtrl.addStdnt = true;
			reqCtrl.insNmChg= true;
			reqCtrl.clsCapChg= true;
			reqCtrl.clsTmChg= true;
			reqCtrl.clsDtChg= true;
			reqCtrl.clsAdd= true;
			reqCtrl.extclsAdd= false;
			reqCtrl.newClsLoctn = true;
			reqCtrl.oldClsLoctn = false;
		}
		//To show hided fields based on selection
		reqCtrl.selectedItem  = function(rqtTyp){
			if(rqtTyp == 0){
				initializeHide();
			}else if(rqtTyp == 1){
				initializeHide();
			}else if(rqtTyp == 2){
				initializeHide();
				reqCtrl.clsAdd= false;
				reqCtrl.extclsAdd= true;
			}else if(rqtTyp == 3){
				initializeHide();
				reqCtrl.clsDtChg= false;
			}else if(rqtTyp == 4){
				initializeHide();
				reqCtrl.newClsLoctn = false;
				reqCtrl.oldClsLoctn = true;
			}else if(rqtTyp == 5){
				initializeHide();
				reqCtrl.clsTmChg= false;
			}else if(rqtTyp == 6){
				initializeHide();
				reqCtrl.clsCapChg= false;
			}else if(rqtTyp == 7 ){
				initializeHide();
				reqCtrl.insNmChg= false;
			}else{
				initializeHide();
				reqCtrl.addStdnt = false;
			}
		}
		//To Add student details
		function add(){
			if(reqCtrl.tblChangeCancelStudents.length<=9){
				var stdObj = {studentName:'', dealerInfo:''};
				reqCtrl.tblChangeCancelStudents.push(stdObj);
			}
		}
		//To Open from Date popup 		
		reqCtrl.fromDate = function($event) {
			$event.preventDefault();
			$event.stopPropagation();
			this.opened = !this.opened;
		};
		//To Open to Date popup 
		reqCtrl.toDate = function($event){
			$event.preventDefault();
			$event.stopPropagation();
			this.toopened = !this.toopened;
		}
		//To open from Date popup 
		reqCtrl.newClsfromDate =function($event){
			$event.preventDefault();
			$event.stopPropagation();
			this.newClsfromopened = !this.newClsfromopened;
		}
		//To open to Date popup 
		reqCtrl.newClstoDate=function($event){
			$event.preventDefault();
			$event.stopPropagation();
			this.newClstoopened = !this.newClstoopened;
		}
		//To Open from Date popup 
		reqCtrl.clsfromDate =function($event){
			$event.preventDefault();
			$event.stopPropagation();
			this.clsfromopened = !this.clsfromopened;
		}
		//To open To Date popup
		reqCtrl.clstoDate=function($event){
			$event.preventDefault();
            $event.stopPropagation();
            this.clstoopened = !this.clstoopened;
		}
		
		//To validate variable
		function isNullOrEmptyOrUndefined(value) {
			return !value;
		}
		//To validate student Fields
		function validateStudentList(studentsList){
			for(i=0;i<studentsList.length;i++){
				if(isNullOrEmptyOrUndefined(studentsList[i].studentName) &&  isNullOrEmptyOrUndefined(studentsList[i].dealerInfo)){
					studentsList.splice(parseInt(i),1);
				}
			}
			return studentsList;
		}
		
		//To submit form Details
		reqCtrl.submit = function(){
			if(reqCtrl.courseName !== ""){
				
				var formData = {
						requestId:	reqCtrl.requestId,
						requesterName:	reqCtrl.requesterName,
						reqEmailAddr: reqCtrl.reqEmailAddr,
						courseName: reqCtrl.courseName,
						courseId: reqCtrl.courseId,
						classStartDt: reqCtrl.classStartDt,
						classEndDt: reqCtrl.classEndDt ,
						classLocation: reqCtrl.classLocation.label,
						otherLocation: reqCtrl.otherLocation, 
						requestType: reqCtrl.options[reqCtrl.requestType].label, 
						newClassStartDt: reqCtrl.newClassStartDt,
						newClassEndDt: reqCtrl.newClassEndDt,
						reasonForChange: reqCtrl.reasonForChange,
						impactOfRequest: reqCtrl.impactOfRequest,
						managerOrSupervisorName: reqCtrl.managerOrSupervisorName[0],
						newStartDate: reqCtrl.newStartDate,
						newEndDate: reqCtrl.newEndDate,
						newLocation: reqCtrl.newLocation.label,
						originalClassStartTm: reqCtrl.originalClassStartTm,
						originalClassEndTm: reqCtrl.originalClassEndTm,
						classNewStartTm: reqCtrl.classNewStartTm,
						classNewEndTm: reqCtrl.classNewEndTm,
						trainingClassInitialCapacity: reqCtrl.trainingClassInitialCapacity,
						newCapacity: reqCtrl.newCapacity,
						trainingClassInstructorNm: reqCtrl.trainingClassInstructorNm,
						hotelLocation: reqCtrl.hotelLocation,
						initialCapacity: reqCtrl.initialCapacity,
						approvedStatus: reqCtrl.approvedStatus,
						approvedBy: reqCtrl.approvedBy,
						requestStatus: reqCtrl.requestStatus,
						requestedDate: reqCtrl.requestedDate,
						newInstructorName: reqCtrl.newInstructorName,
						requestCompletedDate: reqCtrl.requestCompletedDate,
						tblChangeCancelStudents : reqCtrl.tblChangeCancelStudents
				}
				
				if(reqCtrl.requestType == 1){
					if (isNullOrEmptyOrUndefined(reqCtrl.classStartDt)){
						utilFactory.info("Please Enter Existing Start Date");  
					}else if(isNullOrEmptyOrUndefined(reqCtrl.classEndDt)){
					  utilFactory.info("Please Enter Existing End Date");
					}else{
						sendFormService(formData);
					}
				}else if(reqCtrl.requestType == 2){
					if(isNullOrEmptyOrUndefined(reqCtrl.classLocation)){
						utilFactory.info("Please Enter the Class Location."); 
						}else if(isNullOrEmptyOrUndefined(reqCtrl.newClassStartDt)){
							utilFactory.info("Please Enter the Start Date");
						}else if (isNullOrEmptyOrUndefined(reqCtrl.newClassEndDt)){
							utilFactory.info("Please Enter the End Date"); 
						}else if(isNullOrEmptyOrUndefined(reqCtrl.originalClassStartTm)) {
							utilFactory.info("Please Enter the Existing Start Time");
						}else if(isNullOrEmptyOrUndefined(reqCtrl.originalClassEndTm)) {
							utilFactory.info("Please Enter the Existing End Time");
						}else if (isNullOrEmptyOrUndefined(reqCtrl.hotelLocation)){
							utilFactory.info("Please Enter the Hotel Location");
						}else if(isNullOrEmptyOrUndefined(reqCtrl.newCapacity)){
							utilFactory.info("Please Enter the New Capacity");
						}else{
							sendFormService(formData);
						}
				}else if(reqCtrl.requestType == 3){
					if(isNullOrEmptyOrUndefined(reqCtrl.classStartDt)){
						utilFactory.info("Please Enter the Class Start Date");
					}else if(isNullOrEmptyOrUndefined(reqCtrl.classEndDt)){
						utilFactory.info("Please Enter the End Date"); 
					}else if(isNullOrEmptyOrUndefined(reqCtrl.newStartDate)){
						utilFactory.info("Please Enter the New Class Start Date");
					}else if(isNullOrEmptyOrUndefined(reqCtrl.newEndDate)){
						utilFactory.info("Please Enter the New Class End Date");
					}else{
						sendFormService(formData);
					}
				}else if(reqCtrl.requestType == 4){
					if(isNullOrEmptyOrUndefined(reqCtrl.newLocation)){
						utilFactory.info("Please Enter the New Location");
					}else{
						sendFormService(formData);
					}
				}else if(reqCtrl.requestType == 5){
					if(isNullOrEmptyOrUndefined(reqCtrl.classNewStartTm)){
						utilFactory.info("Please Enter the class Start Time");
					}else if(isNullOrEmptyOrUndefined(reqCtrl.classNewEndTm)){
						utilFactory.info("Please Enter the Class End Time");
					}else{
						sendFormService(formData);
					}
				}else if(reqCtrl.requestType == 6){
					if(isNullOrEmptyOrUndefined(reqCtrl.initialCapacity)){
						utilFactory.info("Please Enter the Initial Capacity");
					}else if(isNullOrEmptyOrUndefined(reqCtrl.newCapacity)){
						utilFactory.info("Please Enter the New Capacity");
					}else{
						sendFormService(formData);
					}
				}else if(reqCtrl.requestType == 7 ){
					if(isNullOrEmptyOrUndefined(reqCtrl.trainingClassInstructorNm)){
						utilFactory.info("Please Enter the Instruction Name");
					}else if (isNullOrEmptyOrUndefined(reqCtrl.newInstructorName)){
						utilFactory.info("Please Enter the new Instructor Name");
					}else{
						sendFormService(formData);
					}
				}else if(reqCtrl.requestType == 8){
					reqCtrl.tblChangeCancelStudents	= validateStudentList(reqCtrl.tblChangeCancelStudents);
					if(reqCtrl.tblChangeCancelStudents.length == 0) {
						utilFactory.info("Please Enter the Student Details");
					}else{
						sendFormService(formData);
					}
				}else{
					sendFormService(formData);
				}
			}else{
				utilFactory.info("Please Enter the Course Code");
			}
		}
		
		function sendFormService(formData){
			commonService.post('request/form/create', formData).then(function(response){
				if(response.status === 200){
					utilFactory.success("Form Submitted Successfully");
					initialPage();
					initializeHide();
				}else{
					utilFactory.error("error while saving the record");
				}
			}, function(response){
				utilFactory.error("Web page error",formData);
			});
		}
		
		function initialPage(){
			reqCtrl.hstep = 1;
			reqCtrl.mstep = 15;
			reqCtrl.requestId ="";
			reqCtrl.requesterName="";
			reqCtrl.reqEmailAddr="";
			reqCtrl.courseName = "";
			reqCtrl.courseId = "";
			reqCtrl.classStartDt = "";
			reqCtrl.classEndDt = "";
			reqCtrl.classLocation = "";
			reqCtrl.otherLocation = "";
			reqCtrl.requestType = "";
			reqCtrl.newClassStartDt = "";
			reqCtrl.newClassEndDt = "";
			reqCtrl.reasonForChange = "";
			reqCtrl.impactOfRequest="";
			reqCtrl.managerOrSupervisorName="";
			reqCtrl.newStartDate="";
			reqCtrl.newEndDate="";
			reqCtrl.newLocation="";
			reqCtrl.originalClassStartTm="";
			reqCtrl.originalClassEndTm="";
			reqCtrl.classNewStartTm = "";
			reqCtrl.classNewEndTm="";
			reqCtrl.trainingClassInitialCapacity="";
			reqCtrl.newCapacity="";
			reqCtrl.trainingClassInstructorNm = "";
			reqCtrl.hotelLocation="";
			reqCtrl.initialCapacity="";
			reqCtrl.approvedStatus="";
			reqCtrl.approvedBy="";
			reqCtrl.requestStatus="";
			reqCtrl.requestedDate="";
			reqCtrl.newInstructorName="";
			reqCtrl.requestCompletedDate="";
			//Student Dealer
		}
		
	
		
	}
})();