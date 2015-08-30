var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api', function(req, res){
  var movies = [
    {title: "Avengers"},
    {title: "Avengers: Age of Utron"},
    {title: "Captain Americal: Civil War"}
  ];
  res.send(movies);
});

var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;
});

//set up an array of movies