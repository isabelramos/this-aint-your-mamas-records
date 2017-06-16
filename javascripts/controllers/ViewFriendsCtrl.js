app.controller("ViewFriendsCtrl", function($rootScope, $scope, UserFactory, RecordFactory) {
	$scope.users = [];

	let getFriends = () => {
    	UserFactory.getAllUsers($rootScope.user.uid).then((userz) => {
    		$scope.users = userz;
            console.log(userz);
    	}).catch((error) => {
      		console.log("error", error);
    	});
  	};

	getFriends();



});
