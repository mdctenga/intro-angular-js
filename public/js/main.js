(function() {
  var app = angular.module('myApp', ['ngResource', 'ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/books', {
      templateUrl: 'views/books.html',
      controller: 'bookController'
    })
    // .when('/movies', {
    //   templateUrl: 'views/movies.html',
    //   controller: 'MoviesController'
    // })
    // .when('/other', {
    //   templateUrl: 'views/other.html',
    //   controller: 'OtherController'
    // })
    .when('/', {
      templateUrl: 'views/default.html',
      controller: 'homeController'
    })
    .otherwise({
      redirectTo: "/"
    });
  }]);

  //runs after application is loaded
  app.run(function($rootScope, APP_VERSION) {
    $rootScope.APP_VERSION = APP_VERSION;
  });
}());
