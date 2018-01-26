app.factory("UserFactory", function($q, $http, FIREBASE_CONFIG) {

  let addUser = (authData) => {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/users.json`, 
        JSON.stringify({ 
          uid: authData.uid,
          username: authData.username
        })
      )
      .then((storeUserSuccess) => {
        resolve(storeUserSuccess);
      })
      .catch((storeUserError) => {
        reject(storeUserError);
      });
    });
  };

  let getUser = (userId) => {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/users.json?orderBy="uid"&equalTo="${userId}"`)
        .then((userObject) => {
          let userKeys = Object.keys(userObject.data);
          let users = userKeys.map((key) => {
             return userObject.data[key];
          });
          resolve(users[0]);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  let getAllUsers = () => {
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/users.json`)
        .then((userObject) => {
          let userKeys = Object.keys(userObject.data);
          let users = userKeys.map((key) => {
             return userObject.data[key];
          });
          resolve(users);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return {addUser:addUser, getUser:getUser, getAllUsers:getAllUsers};
});