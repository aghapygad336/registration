
var mysql = require('mysql');
const express = require('express');
var cors = require('cors');
var App = require('./router');
const app = express();
const bodyParser = require('body-parser');
// content of index.js
const http = require('http')

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}
//HTTPS config

var port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api', App);

var con = mysql.createConnection({
  host: "remotemysql.com",
  user: "DOYn2nt6oc",
  password: "7ad5NZgfHB"
});
const server = http.createServer(requestHandler)

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


//connection.once('open', () => app.listen(3000, () => console.log('Listening on port 3000')));
server.listen( port, () => {
		console.log( 'Express server listening on port ' + server.address().port );
})
