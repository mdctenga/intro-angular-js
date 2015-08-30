//dependency injection
(function() {
  angular
    .module('myApp')
    .controller('myController', ['$scope', 'myAppTitle', 'CharacterVersionFactory', 'BookService', function ($scope, myAppTitle, CharacterVersionFactory, BookService){
      $scope.myModel = "hello";
      $scope.title = myAppTitle;
      $scope.characters = CharacterVersionFactory;
      $scope.books = BookService.getBooks();
    }]);
})();