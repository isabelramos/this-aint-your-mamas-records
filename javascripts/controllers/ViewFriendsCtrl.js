app.controller("ViewFriendsCtrl", function($routeParams, $scope, UserFactory) {
	$scope.users = [];

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