//dependency injection
(function() {
  angular
    .module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', 'CharacterVersionFactory', 'BookService', 'Movies', function ($scope, myAppTitle, CharacterVersionFactory, BookService, Movies){
      $scope.myModel = "hello";
      $scope.title = myAppTitle;
      $scope.characters = CharacterVersionFactory;
      $scope.books = BookService.getBooks();
      $scope.addBook = BookService.addBook;
      $scope.movies = Movies.query();
    }]);
})();