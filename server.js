var express = require('express');
var http = require('http');
var path = require('path');
var feedByte = require('../server/feedbyte.js');

var app = express(); //initialize express app
app.set('port', process.env.PORT || 3000); //set port
app.use(express.static(__dirname + '/public')); //serving static files - css, js, html

app.get('/', function (req, res) { //request to root index
  res.sendFile(path.join(__dirname, 'public/html/index.html')); //serve index.html
});

app.post('/feedback', function (req, res) {
  var data = req.body;
  feedByte.send(data);
  res.send(201);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Server at port: ' + app.get('port')); //launch server
});
