app.controller("RecordNewCtrl", function($rootScope, $location, $scope, RecordFactory) {

    $scope.selectedRecordInfo = RecordFactory.getLastSelectedAlbum();

});