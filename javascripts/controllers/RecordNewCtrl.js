app.controller("RecordNewCtrl", function($rootScope, $http, $location, $q, $scope, FIREBASE_CONFIG, RecordFactory) {

    $scope.selectedRecordInfo = RecordFactory.getLastSelectedAlbum();

    $scope.addNewRecord = () => {
    	$scope.selectedRecordInfo.photo = "test";
    	$scope.selectedRecordInfo.purchase_location = "test";
    	$scope.selectedRecordInfo.uid = $rootScope.user.uid;
    		RecordFactory.postNewRecord($scope.selectedRecordInfo).then(() => {
      			$scope.selectedRecordInfo = {};
        		$location.url("/record/list");
    		}).catch((error) => {
     		console.log("add error", error);
   		});
 	 };

});