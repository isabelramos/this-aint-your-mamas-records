app.controller("FriendRecordViewCtrl", function($window, $routeParams, $scope, RecordFactory) {

  $scope.isFriendProfile = $routeParams.uid;
  $scope.selectedRecord = {};

  RecordFactory.getSingleRecord($routeParams.id).then((results) => {
  	$scope.selectedRecord = results.data;
  }).catch((error) => {
  	console.log("getSingleRecord error", error);
  });

	$scope.backToCollectionButton = () => {
		$window.history.back();
	};

});