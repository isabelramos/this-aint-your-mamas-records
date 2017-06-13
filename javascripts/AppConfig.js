let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if(AuthFactory.isAuthenticated()){
    // console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    // console.log("User is not authenticated, reject route promise");
    reject();
  }
});

app.run(function($location, $rootScope, FIREBASE_CONFIG, AuthFactory) {
  firebase.initializeApp(FIREBASE_CONFIG);

  //watch method that fires on change of a route.  3 inputs. 
  //event is a change event
  //currRoute is information about your current route
  //prevRoute is information about the route you came from
  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
    // checks to see if there is a current user
    var logged = AuthFactory.isAuthenticated();

    var appTo;

    // to keep error from being thrown on page refresh
    if (currRoute.originalPath) {
      // check if the user is going to the auth page = currRoute.originalPath
      // if user is on auth page then appTo is true
      // if it finds something other than /auth it return a -1 and -1!==-1 so resolves to false
      appTo = currRoute.originalPath.indexOf('/login') !== -1;
    }

    //if not on /auth page AND not logged in redirect to /auth
    if (!appTo && !logged) {
      event.preventDefault();
      $location.path('/login');
    }
  });
});

app.config(function($routeProvider) {
  $routeProvider
    .when("/login", {
      templateUrl: "partials/login.html",
      controller: "AuthCtrl"
    })
    .when("/record/list", {
      templateUrl: "partials/record-list.html",
      controller: "RecordListCtrl",
      resolve: {isAuth}
    })
    .when("/record/new", {
      templateUrl: "partials/record-new.html",
      controller: "RecordNewCtrl",
      resolve: {isAuth}
    })
    .when("/record/view/:id", {
      templateUrl: "partials/record-view.html",
      controller: "RecordViewCtrl",
      resolve: {isAuth}
    })
    .when("/record/edit/:id", {
      templateUrl: "partials/record-new.html",
      controller: "RecordEditCtrl",
      resolve: {isAuth}
    })
    .when("/record/search", {
      templateUrl: "partials/record-search.html",
      controller: "RecordSearchCtrl",
      resolve: {isAuth}
    })
    .when("/view-friends", {
      templateUrl: "partials/view-friends.html",
      controller: "ViewFriendsCtrl",
      resolve: {isAuth}
    })
    .when("/view-friends/collection", {
      templateUrl: "partials/view-friends-collection.html",
      controller: "ViewFriendsCollectionCtrl",
      resolve: {isAuth}
    })
    .when("/view-friends/collection/:id", {
      templateUrl: "partials/view-friends-record.html",
      controller: "ViewFriendsRecordCtrl",
      resolve: {isAuth}
    })
    .when("/logout", {
      templateUrl: "partials/login.html",
      controller: "AuthCtrl",
      resolve: {isAuth}
    })
    .otherwise("/login");
});