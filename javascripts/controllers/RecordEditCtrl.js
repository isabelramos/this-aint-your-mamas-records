app.controller("RecordEditCtrl", function($location, $routeParams, $scope, RecordFactory) {
	$scope.addedRecordInfo = {};

	RecordFactory.getSingleRecord($routeParams.id).then((results) => {
		$scope.addedRecordInfo = results.data;
	}).catch((error) => {
	  	console.log("getSingleRecord error", error);
	});

	$scope.addNewRecord = () => {
	  	RecordFactory.editRecord($scope.addedRecordInfo).then(() => {
	  		$location.url("/record/list");
	  	}).catch((error) => {
	  		console.log("editRecord error", error);
	  	});
	};

});