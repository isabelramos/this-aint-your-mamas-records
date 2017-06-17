app.controller("RecordListCtrl", function($rootScope, $routeParams, $scope, RecordFactory, UserFactory) {
	$scope.records = [];

	let getRecords = () => {
    	RecordFactory.getRecordList($rootScope.user.uid).then((recordz) => {
        console.log("getRecords", Date.now())
    		$scope.records = recordz;
            console.log(recordz);
    	}).catch((error) => {
      		console.log("error", error);
    	});
  	};

	getRecords();

});
