const express = require('express');
const router = express.Router();;
var app = express();
const bodyParser = require('body-parser');
const Database = require('./Database.js');
var mysql = require('mysql');
const http = require('http')

var con = mysql.createConnection({
    host: "remotemysql.com",
    user: "DOYn2nt6oc",
    password: "7ad5NZgfHB",
    database: "DOYn2nt6oc",
    queueLimit : 0, // unlimited queueing
    connectionLimit : 0 // unlimited connections 
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', Database.Testone);
app.get('/getAll', function(req, res, next) {
    var db = req.con;
    var data = "";
    con.query("SELECT * FROM Course", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
      }) 
});

app.post('/addCourse', function(req, res, next) {
    var db = req.con;
    var data = "";
    var sql ="INSERT INTO Course ( `course_name`, `course_description`, `instructor_name`, `credit_hours`, `department_id`) VALUES ("+'"' +req.body.course_name+'"' +"," +'"' +req.body.course_description+'"' +"," +'"'+req.body.instructor_name+'"' +"," +req.body.credit_hours+"," +req.body.department_id+")"
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
      }) 
});
app.get('/getAllCourses', function(req, res, next) {
    var db = req.con;
    var data = "";
    con.query("SELECT * FROM Course", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
      }) 
});
app.delete('/DeleteCourse', function(req, res, next) {
    var db = req.con;
    var data = "";
    var sql ="DELETE FROM Course WHERE course_name="+"'"+req.body.course_name+"'"
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
      }) 
});
app.post('/addDept', function(req, res, next) {
    var db = req.con;
    var data = "";
    var sql ="INSERT INTO department ( `Name`, `Description`) VALUES ("+'"' +req.body.Name+'"' +"," +'"' +req.body.Description+'"' +")"
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
      }) 
});
module.exports = app;