app.controller("RecordViewCtrl", function($location, $routeParams, $scope, RecordFactory) {

  $scope.selectedRecord = {};
  $scope.deleteButtonClicked = false;

  RecordFactory.getSingleRecord($routeParams.id).then((results) => {
  	$scope.selectedRecord = results.data;
  }).catch((error) => {
  	console.log("getSingleRecord error", error);
  });

  $scope.closeModal = () => {
      $scope.deleteButtonClicked = false;
  };

  $scope.activateAreYouSureModal = () => {
      $scope.deleteButtonClicked = true;
  };

    $scope.deleteRecord = (id) => {
    	RecordFactory.deletz(id).then(() => {
    		$location.url("/record/list");
    	}).catch((error) => {
    		console.log("deleteRecord error", error);
    	});
    };

});