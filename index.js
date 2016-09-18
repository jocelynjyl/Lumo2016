process.env.PWD = process.cwd();

var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    path = require("path"),
    jsonGetCall = require(path.join(process.env.PWD, "/lib/fns/jsonGetCall")),
    Location = require(path.join(process.env.PWD, "model", "locationModel")),
    Review = require(path.join(process.env.PWD, "model", "reviewModel")),
    Patient = require(path.join(process.env.PWD, "model", "patientModel"));

    console.log("process.env.PWD: " + process.env.PWD);

    /*============ MONGOOSE ============*/
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lumohack");

    /*============ TEST ============*/

    /*============ CONNECTION ============*/
    app.get("/", function(req, res){
        res.send("hello world");
    });

    app.get("/favicon.ico", function(req, res){
        res.sendFile(path.join(process.env.PWD, "favicon.ico"));
    });

    app.listen(process.env.PORT || 3000, function(){
        console.log("Server is listening on port " + this.address().port);
    });
