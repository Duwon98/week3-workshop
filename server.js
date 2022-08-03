var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname + '/www'));
let server = http.listen(3000, function () {
    console.log('My First Nodejs Server!');
});