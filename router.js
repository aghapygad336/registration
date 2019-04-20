const express = require('express');
const router = express.Router();;
var app = express();
const bodyParser = require('body-parser');
const Database = require('./Database.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', Database.Testone);

module.exports = app;