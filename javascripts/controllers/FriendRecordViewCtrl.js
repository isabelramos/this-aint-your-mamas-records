app.controller("FriendRecordViewCtrl", function($window, $routeParams, $scope, RecordFactory, UserFactory) {

  $scope.isFriendProfile = $routeParams.uid;	
  $scope.friend = [];

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