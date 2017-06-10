app.factory("RecordFactory", function($http, $q, FIREBASE_CONFIG, DISCOGS_CONFIG) {

  let getSearchedRecordsList = (userRecordSearch) => {
    let searchedRecordz = [];
    return $q ((resolve, reject) => {
       $http.get(`https://api.discogs.com/database/search?q={${userRecordSearch}}&{?title,release_title,credit,artist,label,year,format,catno,barcode,track}&key=${DISCOGS_CONFIG.key}&secret=${DISCOGS_CONFIG.secret}`)
       .then((results) => {
         resolve(results);
         }).catch((error) => {
           reject(error);
         });
     });
   };


	// let getAddressList = (userId) => {
	// 	let addressez = [];
	// 	return $q ((resolve, reject) => {
 //    		$http.get(`${FIREBASE_CONFIG.databaseURL}/addresses.json?orderBy="uid"&equalTo="${userId}"`)
 //    		.then((firebaseItems) => {
 //          let itemCollection = firebaseItems.data;
 //          if (itemCollection !== null) {
 //            Object.keys(itemCollection).forEach((key) => {
 //              itemCollection[key].id = key;
 //              addressez.push(itemCollection[key]);
 //            });
 //          }
 //          	resolve(addressez);
	//       	}).catch((error) => {
	//         	reject(error);
	//      	});
 //    	}); 
 // 	};

	// let postNewAddress = (newAddress) => {
	// 	return $q ((resolve, reject) => {
 //    		$http.post(`${FIREBASE_CONFIG.databaseURL}/addresses.json`, JSON.stringify(newAddress))
 //    		.then((results) => {
 //    			resolve(results);
 //      		}).catch((error) => {
 //      			reject(error);
 //      		});
 //    	});
 //  	};

 //  let getSingleAddress = (id) => {
 //    return $q ((resolve, reject) => {
 //      $http.get(`${FIREBASE_CONFIG.databaseURL}/addresses/${id}.json`)
 //      .then((results) => {
 //        results.data.id = id;
 //        resolve(results);
 //      }).catch((error) => {
 //        reject(error);
 //      });
 //    });
 //  };

 //  let editAddress = (address) => {
 //    return $q ((resolve, reject) => {
 //      $http.put(`${FIREBASE_CONFIG.databaseURL}/addresses/${address.id}.json`, 
 //        JSON.stringify({
 //          name: address.name,
 //          street_address: address.street_address,
 //          city: address.city,
 //          state: address.state,
 //          photo: address.photo,
 //          uid: address.uid
 //      })
 //      ).then((results) => {
 //          resolve(results);
 //      }).catch((error) => {
 //          reject(error);
 //        });
 //    });
 //  };

 //  let deletz = (addressId) => {
 //    return $q ((resolve, reject) => {
 //      $http.delete(`${FIREBASE_CONFIG.databaseURL}/addresses/${addressId}.json`)
 //      .then((results) => {
 //        resolve(results);
 //      }).catch((error) => {
 //        reject(error);
 //      });
 //    });
 //  };


return {getSearchedRecordsList:getSearchedRecordsList};

// return {getAddressList:getAddressList, postNewAddress:postNewAddress, getSingleAddress:getSingleAddress, editAddress:editAddress, deletz:deletz};


});