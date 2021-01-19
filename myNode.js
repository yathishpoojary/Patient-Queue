var express=require("express");
var bodyParser=require("body-parser");

var app=express();

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// Process application/json
app.use(bodyParser.json());

app.post('/createEmp', function(req, res){  
//now req.body will be populated with the object you sent
console.log(req.body.name); //prints john
});