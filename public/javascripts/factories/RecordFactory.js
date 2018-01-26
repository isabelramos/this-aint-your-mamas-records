app.factory("RecordFactory", function($http, $q, $routeParams, FIREBASE_CONFIG, LASTFM_CONFIG) {

  let lastSelectedAlbum  = {};

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

  let getSelectedRecordInfo = (albumTitle, artistName) => {
    return $q ((resolve, reject) => {
      $http.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${LASTFM_CONFIG.apiKey}&artist=${artistName}&album=${albumTitle}&format=json`)
      .then((results) => {
        lastSelectedAlbum = results.data.album;
        resolve(results.data.album);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  let getLastSelectedAlbum = () => {
    return lastSelectedAlbum;
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

  //   let getRecordList = (userId) => {
  //   return $q ((resolve, reject) => {
  //       $http.get(`${FIREBASE_CONFIG.databaseURL}/records.json?orderBy="uid"&equalTo="${userId}"`)
  //       .then((firebaseItems) => {
  //         let itemCollection = firebaseItems.data;
  //         if (itemCollection !== null) {
  //           let recordKeys = Object.keys(itemCollection);
  //           let recordz = recordKeys.map((key) => {
  //              itemCollection[key].id = key;
  //              return itemCollection[key];
  //           });
  //         }
  //           resolve(recordz);
  //         }).catch((error) => {
  //           reject(error);
  //       });
  //     }); 
  // };
  
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

	let postNewRecord = (newRecord) => {
		return $q ((resolve, reject) => {
    		$http.post(`${FIREBASE_CONFIG.databaseURL}/records.json`, JSON.stringify(newRecord))
    		.then((results) => {
    			resolve(results);
      		}).catch((error) => {
      			reject(error);
      		});
    	});
  	};


  let editRecord = (record) => {
    return $q ((resolve, reject) => {
      $http.put(`${FIREBASE_CONFIG.databaseURL}/records/${record.id}.json`, 
        JSON.stringify({
          name: record.name,
          artist: record.artist,
          purchase_location: record.purchase_location,
          image: record.image,
          uid: record.uid
      })
      ).then((results) => {
          resolve(results);
      }).catch((error) => {
          reject(error);
        });
    });
  };

  let deletz = (recordId) => {
    return $q ((resolve, reject) => {
      $http.delete(`${FIREBASE_CONFIG.databaseURL}/records/${recordId}.json`)
      .then((results) => {
        resolve(results);
      }).catch((error) => {
        reject(error);
      });
    });
  };


return {getSearchedRecordArt:getSearchedRecordArt, getRecordList:getRecordList, getSingleRecord:getSingleRecord, getSelectedRecordInfo:getSelectedRecordInfo, getLastSelectedAlbum:getLastSelectedAlbum, postNewRecord:postNewRecord, editRecord:editRecord, deletz:deletz};

});