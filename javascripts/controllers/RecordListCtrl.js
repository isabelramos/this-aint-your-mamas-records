app.controller("RecordListCtrl", function($rootScope, $scope, RecordFactory) {
	$scope.records = [];

	let getRecords = () => {
    	RecordFactory.getRecordList($rootScope.user.uid).then((recordz) => {
    		$scope.records = recordz;
            console.log(recordz);
    	}).catch((error) => {
      		console.log("error", error);
    	});
  	};

	getRecords();


 //    $scope.deleteAddress = (id) => {
 //    	AddressFactory.deletz(id).then(() => {
 //    		getAddresses();
 //    	}).catch((error) => {
 //    		console.log("deleteAddress error", error);
 //    	});
 //    };


});
