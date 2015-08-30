var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api', function(req, res){
  var movies = [
    {title: "Star Wars: Return of the Jedi", year: 1983},
    {title: "Avengers: Age of Utron", year: 2015},
    {title: "Captain Americal: Civil War", year: 2016}
  ];
  res.send(movies);
});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
});

//set up an array of movies