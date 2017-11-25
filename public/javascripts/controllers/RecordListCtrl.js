app.controller("RecordListCtrl", function($rootScope, $routeParams, $scope, RecordFactory, UserFactory) {

	$scope.records = [];

	let getRecords = () => {
    	RecordFactory.getRecordList($rootScope.user.uid).then((recordz) => {
    		$scope.records = recordz;
            console.log(recordz);
    	}).catch((error) => {
      		console.log("error", error);
    	});
  	};

	getRecords();

});
