const express = require('express');
const router = express.Router();;
var app = express();
const bodyParser = require('body-parser');
const Testone = require('./Database.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', Testone.Testone);

module.exports = app;