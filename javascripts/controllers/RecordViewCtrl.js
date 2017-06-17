app.controller("RecordViewCtrl", function($location, $routeParams, $scope, RecordFactory) {

  $scope.selectedRecord = {};

  RecordFactory.getSingleRecord($routeParams.id).then((results) => {
  	$scope.selectedRecord = results.data;
  }).catch((error) => {
  	console.log("getSingleRecord error", error);
  });

    $scope.deleteRecord = (id) => {
    	RecordFactory.deletz(id).then(() => {
    		$location.url("/record/list");
    	}).catch((error) => {
    		console.log("deleteRecord error", error);
    	});
    };

});