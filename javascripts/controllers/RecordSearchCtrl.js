app.controller("RecordSearchCtrl", function($rootScope, $scope, RecordFactory) {
	$scope.userRecordSearch = "";
    $scope.searchedRecords = [];
    $scope.searchedRecordArts = [];
    $scope.searchedArtistNameArray = [];
    $scope.searchedArtistAlbumTitleArray = [];
    // $scope.searchedArtistAndTitleArray = [];


    $scope.searchRecordsButton = () => {
        getSearchedRecords();
        getAlbumArt();
    };

    let getSearchedRecords = () => {
        RecordFactory.getSearchedRecordsList($scope.userRecordSearch).then((searchedRecordz) => {
            $scope.searchedRecords = searchedRecordz;
            // console.log("searchedRecords", $scope.searchedRecords);
        }).catch((error) => {
            console.log("error", error);
        });
    };

    let getAlbumArt = () => {
        $scope.searchedArtistAndTitleArray = [];
        
        RecordFactory.getSearchedRecordArt($scope.userRecordSearch).then((searchedRecordArtz) => {
            $scope.searchedRecordArts = searchedRecordArtz;
            // console.log("searchedRecordArts", $scope.searchedRecordArts);
            $scope.albumArtObject = searchedRecordArtz.data.results.albummatches.album;
            // console.log("$scope.albumArtObject", $scope.albumArtObject);
            angular.forEach($scope.albumArtObject,function(value,index){
                $scope.searchedArtistName = value.artist;
                $scope.searchedArtistAlbumTitle = value.name;
                // $scope.searchedArtistNameArray.push($scope.searchedArtistName);
                // $scope.searchedArtistAlbumTitleArray.push($scope.searchedArtistAlbumTitle);
                $scope.searchedArtistAndTitleArray.push($scope.searchedArtistName + " " + $scope.searchedArtistAlbumTitle);
            });
        }).catch((error) => {
            console.log("error", error);
        });
    };    

});



