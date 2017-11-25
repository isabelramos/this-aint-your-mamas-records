app.controller("ViewFriendsCtrl", function($rootScope, $routeParams, $scope, UserFactory) {

  $scope.isFriendProfile = $routeParams.uid;
  $scope.isCurrentUser = $rootScope.user.uid;
  console.log("$scope.isCurrentUser", $scope.isCurrentUser);

	$scope.users = [];

	let getFriends = () => {
    	UserFactory.getAllUsers().then((userz) => {
    		$scope.users = userz;
            console.log("userz", userz);
    	}).catch((error) => {
      		console.log("error", error);
    	});
  	};

	getFriends();



});