app.factory("RecordFactory", function($http, $q, FIREBASE_CONFIG, LASTFM_CONFIG) {

  let getSearchedRecordArt = (userRecordSearch) => {
    let searchedRecordArtz = [];
    return $q ((resolve, reject) => {
       $http.get(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${userRecordSearch}&api_key=${LASTFM_CONFIG.apiKey}&format=json`)
       .then((results) => {
         resolve(results);
         }).catch((error) => {
           reject(error);
         });
     });
   };


	let getRecordList = (userId) => {
		let recordz = [];
		return $q ((resolve, reject) => {
    		$http.get(`${FIREBASE_CONFIG.databaseURL}/records.json?orderBy="uid"&equalTo="${userId}"`)
    		.then((firebaseItems) => {
          let itemCollection = firebaseItems.data;
          if (itemCollection !== null) {
            Object.keys(itemCollection).forEach((key) => {
              itemCollection[key].id = key;
              recordz.push(itemCollection[key]);
            });
          }
          	resolve(recordz);
	      	}).catch((error) => {
	        	reject(error);
	     	});
    	}); 
 	};
  
    let getSingleRecord = (id) => {
    return $q ((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/records/${id}.json`)
      .then((results) => {
        results.data.id = id;
        resolve(results);
      }).catch((error) => {
        reject(error);
      });
    });
  };

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


return {getSearchedRecordArt:getSearchedRecordArt, getRecordList:getRecordList, getSingleRecord:getSingleRecord};

});