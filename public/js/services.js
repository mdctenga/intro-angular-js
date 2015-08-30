(function() {
  angular
    .module('myApp')
    .service('BookService', function() {
      var books = [
        {title: 'Ready Player One', author: 'Earnest Cline'},
        {title: 'Harry Potter', author: 'J.K. Rowling'},
        {title: 'Neuromancer', author: 'William Gibson'}
      ];
      this.getBooks = function(){
        return books;
      };
      this.getBook = function(){
        if (index <0 || index >= books.length){
          return null;
        }
        return books[index];
      };

      this.addBook = function(title, author){
        books.push( {title: title, author: author});
      };
    });
}());