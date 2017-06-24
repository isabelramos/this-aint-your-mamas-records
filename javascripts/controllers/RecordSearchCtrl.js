app.controller("RecordSearchCtrl", function($rootScope, $location, $scope, RecordFactory) {
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
                singleAlbumInfo.searchedArtistAlbumTitle = value.name;
                singleAlbumInfo.searchedArtistName = value.artist;
                singleAlbumInfo.searchedAlbumArt = value.image[3]["#text"];
                $scope.searchedArtistAndTitleArray.push(singleAlbumInfo);
                console.log("singleAlbumInfo", singleAlbumInfo);
            });
        }).catch((error) => {
            console.log("error", error);
        });
    }; 

    $scope.viewSelectedRecord = (album, artist) => {
        RecordFactory.getSelectedRecordInfo(album, artist)
        .then((results) => {
            console.log("results", results);           
            $location.url("/record/new");
        }).catch((error) => {
            console.log("getSelectedRecordInfo error", error);
        });
    };

});



