app.controller("RecordSearchCtrl", function($rootScope, $scope, RecordFactory) {
	$scope.userRecordSearch = "";
    $scope.searchedRecords = [];

    $scope.searchRecordsButton = () => {
        getSearchedRecords();
    };

    let getSearchedRecords = () => {
        RecordFactory.getSearchedRecordsList($scope.userRecordSearch).then((searchedRecordz) => {
            $scope.searchedRecords = searchedRecordz;
            console.log($scope.searchedRecords);
        }).catch((error) => {
            console.log("error", error);
        });
    };

});