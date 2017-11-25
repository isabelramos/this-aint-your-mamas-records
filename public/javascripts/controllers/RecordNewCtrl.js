app.controller("RecordNewCtrl", function($window, $rootScope, $http, $location, $q, $scope, FIREBASE_CONFIG, RecordFactory) {

    $scope.selectedRecordInfo = RecordFactory.getLastSelectedAlbum();

    $scope.addedRecordInfo = {
    	name: $scope.selectedRecordInfo.name,
    	artist: $scope.selectedRecordInfo.artist,
    	image: $scope.selectedRecordInfo.image[3]["#text"]
    };

    $scope.addNewRecord = () => {
    	$scope.addedRecordInfo.uid = $rootScope.user.uid;
    		RecordFactory.postNewRecord($scope.addedRecordInfo).then(() => {
      			$scope.addedRecordInfo = {};
        		$location.url("/record/list");
    		}).catch((error) => {
     		console.log("add error", error);
   		});
 	 };
   
   $scope.backToRecordInfoButton = () => {
      $window.history.back();
   };

});