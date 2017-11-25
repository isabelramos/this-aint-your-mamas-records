app.controller("FriendRecordListCtrl", function($rootScope, $routeParams, $scope, RecordFactory, UserFactory) {

  $scope.isFriendProfile = $routeParams.uid;

  $scope.records = [];
  $scope.friend = [];

  UserFactory.getUser($routeParams.uid).then((user) => {
      $scope.friend = user;
      console.log("$scope.friend", $scope.friend);
  }).catch((error) => {
    console.log("error", error);
  });

  let getFriendsCollection = () => {
      RecordFactory.getRecordList($routeParams.uid).then((recordz) => {
        console.log($routeParams.uid);
        $scope.records = recordz;
          console.log(recordz);
      }).catch((error) => {
        console.log("error", error);
    });
  };

  getFriendsCollection();

});