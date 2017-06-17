app.controller("ViewFriendsCtrl", function($routeParams, $scope, UserFactory) {
	$scope.users = [];

  UserFactory.getUser($routeParams.uid);

	let getFriends = () => {
    	UserFactory.getAllUsers().then((userz) => {
    		$scope.users = userz;
            console.log(userz);
    	}).catch((error) => {
      		console.log("error", error);
    	});
  	};

	getFriends();



});