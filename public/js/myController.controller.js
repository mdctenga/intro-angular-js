//dependency injection
(function () {
  angular
    .module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', function ($scope, myAppTitle){
      $scope.myModel = "hello";
      $scope.title = myAppTitle;
    }]);
})();