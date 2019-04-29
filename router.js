const express = require('express');
const router = express.Router();;
var app = express();
const bodyParser = require('body-parser');
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

app.get('/getAllCourses', function(req, res, next) {
    var db = req.con;
    var data = "";
    con.query("SELECT * FROM Course", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
      }) 
});

app.post('/addCourse', function(req, res, next) {
    console.log("result");
    var db = req.con;
    var data = "";
    var sql ="INSERT INTO Course ( `course_name`, `course_description`, `instructor_name`, `credit_hours`, `department_id`) VALUES ("+'"' +req.body.course_name+'"' +"," +'"' +req.body.course_description+'"' +"," +'"'+req.body.instructor_name+'"' +"," +req.body.credit_hours+"," +req.body.department_id+")"
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result);
      }) 
});
app.get('/getCourse/:id', function(req, res, next) {
  var db = req.con;
  var data = "";
  con.query("SELECT * FROM Course where course_id="+req.params.id, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result[0]);
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


//dept functions 
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
app.get('/getAllDepts', function(req, res, next) {
  var db = req.con;
  var data = "";
  con.query("SELECT * FROM department", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    }) 
});

app.get('/getDept/:id', function(req, res, next) {
var db = req.con;
var data = "";
con.query("SELECT * FROM department where ID="+req.params.id, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result[0]);
  }) 
});
app.delete('/DeleteDept/Name', function(req, res, next) {
  var db = req.con;
  var data = "";
  var sql ="DELETE FROM department WHERE Name="+"'"+req.params.Name+"'"
  con.query(sql, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    }) 
});
app.delete('/DeleteDeptbyID/:ID', function(req, res, next) {
  var db = req.con;
  var data = "";
  var sql ="DELETE FROM department WHERE ID="+"'"+req.params.ID+"'"
  con.query(sql, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    }) 
});


//student functions
app.post('/addStudent', function(req, res, next) {
  var db = req.con;
  var data = "";
  var sql ="INSERT INTO Student ( `Name`, `Email`, `Password`,`gender`) VALUES ("+'"' +req.body.Name+'"' +"," +'"' +req.body.Email+'"' +"," +'"' +req.body.Password+'"'+"," +'"' +req.body.gender+'"'+")"
  con.query(sql, function (err, result, fields) {
      if (err) throw err;
      res.redirect('/Users/khaledmohab/College/DataBase/registration/coursesView.html');
    
    }) 
});

app.get('/getAllStudent', function(req, res, next) {
  var db = req.con;
  var data = "";
  con.query("SELECT * FROM Student", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
      
    }) 
});

app.get('/getStudent/:id', function(req, res, next) {
var db = req.con;
var data = "";
con.query("SELECT * FROM Student where ID="+req.params.id, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.send(result[0]);
  }) 
});

app.post('/signIn',(req,res,next)=>{
  var db = req.con;
  var data = "";
  con.query("SELECT * FROM Student where Email="+"'"+req.body.Email+"'" , function (err, result, fields) {
    //console.log(req.body)
    if(result!=undefined){
      if(result[0].Password==req.body.Password)
      { 
        if (err) throw err;
        res.sendFile(__dirname +'/coursesView.html');
        //res.redirect('/coursesView');
      }else
        res.send("wrong password");
      }else
        res.send(err);
    }
    ) 
  
})
app.delete('/DeleteStudent/Name', function(req, res, next) {
  var db = req.con;
  var data = "";
  var sql ="DELETE FROM Student WHERE Name="+"'"+req.params.Name+"'"
  con.query(sql, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    }) 
});
app.delete('/DeleteStudentbyID/:ID', function(req, res, next) {
  var db = req.con;
  var data = "";
  var sql ="DELETE FROM Student WHERE ID="+"'"+req.params.ID+"'"
  con.query(sql, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    }) 
});


module.exports = app;