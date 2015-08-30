var app = angular.module('myApp', []);

//dependency injection
app.controller('myController', ['$scope', function ($scope){
  $scope.test = "hello";
}]);