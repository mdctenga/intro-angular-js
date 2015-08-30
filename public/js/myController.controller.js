//dependency injection
(function() {
  angular
    .module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', 'CharacterVersionFactory', function ($scope, myAppTitle, CharacterVersionFactory){
      $scope.myModel = "hello";
      $scope.title = myAppTitle;
      $scope.characters = CharacterVersionFactory;
    }]);
})();