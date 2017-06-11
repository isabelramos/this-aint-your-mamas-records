app.controller("RecordSearchCtrl", function($rootScope, $scope, RecordFactory) {
	$scope.userRecordSearch = "";
    $scope.searchedRecords = [];
    $scope.searchedRecordArts = [];

    $scope.searchRecordsButton = () => {
        getSearchedRecords();
        getAlbumArt();
    };

    let getSearchedRecords = () => {
        RecordFactory.getSearchedRecordsList($scope.userRecordSearch).then((searchedRecordz) => {
            $scope.searchedRecords = searchedRecordz;
            console.log("searchedRecords", $scope.searchedRecords);
        }).catch((error) => {
            console.log("error", error);
        });
    };

    let getAlbumArt = () => {
        RecordFactory.getSearchedRecordArt($scope.userRecordSearch).then((searchedRecordArtz) => {
            $scope.searchedRecordArts = searchedRecordArtz;
            console.log("searchedRecordArts", $scope.searchedRecordArts);
        }).catch((error) => {
            console.log("error", error);
        });
    };    

});