//dependency injection
(function() {
  angular
    .module('myApp')
    .controller('otherController', ['$scope', 'myAppTitle', 'CharacterVersionFactory', 'BookService', 'Movies', function ($scope, myAppTitle, CharacterVersionFactory, BookService, Movies){
      console.log('Reaching otherController');
      $scope.myModel = "hello";
      $scope.title = myAppTitle;
      $scope.characters = CharacterVersionFactory;
      $scope.books = BookService.getBooks();
      $scope.addBook = BookService.addBook;
      $scope.movies = Movies.query();
    }]);
})();