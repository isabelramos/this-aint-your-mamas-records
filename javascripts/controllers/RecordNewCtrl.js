app.controller("RecordNewCtrl", function($rootScope, $http, $location, $q, $scope, FIREBASE_CONFIG, RecordFactory) {

    $scope.selectedRecordInfo = RecordFactory.getLastSelectedAlbum();

    $scope.addedRecordInfo = {
    	name: $scope.selectedRecordInfo.name,
    	artist: $scope.selectedRecordInfo.artist,
    	photo: $scope.selectedRecordInfo.photo
    };

    $scope.addNewRecord = () => {
    	$scope.addedRecordInfo.photo = "test";
    	$scope.addedRecordInfo.uid = $rootScope.user.uid;
    		RecordFactory.postNewRecord($scope.addedRecordInfo).then(() => {
      			$scope.addedRecordInfo = {};
        		$location.url("/record/list");
    		}).catch((error) => {
     		console.log("add error", error);
   		});
 	 };

});