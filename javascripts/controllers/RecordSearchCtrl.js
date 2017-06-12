app.controller("RecordSearchCtrl", function($rootScope, $scope, RecordFactory) {
	$scope.userRecordSearch = "";
    $scope.searchedRecordArts = [];


    $scope.searchRecordsButton = () => {
        getAlbumInfo();
    };


    let getAlbumInfo = () => {
        $scope.searchedArtistAndTitleArray = [];

        RecordFactory.getSearchedRecordArt($scope.userRecordSearch).then((searchedRecordArtz) => {
            let searchedRecordArts = searchedRecordArtz;
            let albumArtObject = searchedRecordArtz.data.results.albummatches.album;
            angular.forEach(albumArtObject,function(value,index){
                let singleAlbumInfo = {};
                singleAlbumInfo.searchedArtistName = value.artist;
                singleAlbumInfo.searchedArtistAlbumTitle = value.name;
                singleAlbumInfo.searchedAlbumArt = value.image[3]["#text"];
                $scope.searchedArtistAndTitleArray.push(singleAlbumInfo);
            });
        }).catch((error) => {
            console.log("error", error);
        });
    };    

});



