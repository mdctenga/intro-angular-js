//dependency injection
(function() {
  angular
    .module('myApp')
    .controller('movieController', ['$scope', 'myAppTitle', 'CharacterVersionFactory', 'BookService', 'Movies', function ($scope, myAppTitle, CharacterVersionFactory, BookService, Movies){
      console.log("Movie controller reached");
      $scope.myModel = "hello";
      $scope.title = myAppTitle;
      $scope.movies = Movies.query();
    }]);
})();