app.controller("AuthCtrl", function($location, $rootScope, $scope, AuthFactory, UserFactory) {
	$scope.auth = {
		email: "i@i.com",
		password: "123456"
	};

	if ($location.path() === "/logout") {
		AuthFactory.logout();
		$rootScope.user = {};
		$location.url("/login");
	}

	let logMeIn = () => {
		AuthFactory.authenticate($scope.auth).then((userCreds) => {
			return UserFactory.getUser(userCreds.uid);
		}, (error) => {
			console.log("authenticate error", error);
		}).then((user) => {
			console.log("user", user);
			$rootScope.user = user;
			$location.url("/record/list");
		}).catch((error) => {
			console.log("getUser error", error);
		});
	};

	$scope.registerUser = () => {
		AuthFactory.registerWithEmail($scope.auth).then((didRegister) => {
			console.log("didRegister", didRegister);
			$scope.auth.uid = didRegister.uid;
			return UserFactory.addUser($scope.auth);
		}, (error) => {
			console.log("registerWithEmail error", error);
		}).then((registerComplete) => {
			logMeIn();
		}).catch(() =>{
			console.log("addUser error", error);
		});
	};

	$scope.loginUser = () => {
		logMeIn();
	};


});