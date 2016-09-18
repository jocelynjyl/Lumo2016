process.env.PWD = process.cwd();

var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    path = require("path"),
    jsonGetCall = require(path.join(process.env.PWD, "/lib/fns/jsonGetCall"));

    console.log("process.env.PWD: " + process.env.PWD);

    /*============ MONGOOSE ============*/
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lumohack");

    /*============ TEST API CALL ============*/
    // jsonGetCall("https://clinicaltrialsapi.cancer.gov/v1/clinical-trial.json",
    //     function(res){
    //         console.log(res);
    //     },
    //     function(error){
    //         console.log(error);
    //     }
    // );

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
