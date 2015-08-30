//dependency injection
(function() {
  angular
    .module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', 'APP_VERSION', function ($scope, myAppTitle){
      $scope.myModel = "hello";
      $scope.title = myAppTitle;
    }]);
})();