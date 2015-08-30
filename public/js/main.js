(function() {
  var app = angular.module('myApp', []);

  //runs after application is loaded
  app.run(function($rootScope, APP_VERSION) {
    $rootScope.APP_VERSION = APP_VERSION;
  });
}());
