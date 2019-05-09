const express = require('express');
var fs = require('fs');
var http = require('http');
var cors = require('cors');
var App = require('./router');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('', App);
var port = process.env.PORT || 3000;
var server = http.createServer(app);
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');
server.listen( port,'127.0.0.1', () => {
  console.log( 'Express server listening on port ' + server.address().port );
})