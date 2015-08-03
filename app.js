//Require dependencies
var express = require('express');
var http = require('http');
var path = require('path');

//Configure settings
var app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//Connect to database [optional]

//Define middleware

//Define routes
app.all('*', function(req, res) {
  res.render('index', { msg:'Welcome to the Practical Node.js!' });
});

//Start the server
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port'+app.get('port'));
});

//Start workers with clusters(a term spawn workers is also used for this)[optional]
