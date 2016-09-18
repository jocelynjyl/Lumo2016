process.env.PWD = process.cwd();

var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    path = require("path"),
    jsonGetCall = require("./lib/fns/jsonGetCall");

    console.log("process.env.PWD: " + process.env.PWD);

    /*============ MONGOOSE ============*/
    console.log("mongooseURL: " + process.env.MONGOLAB_URI);
    mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/lumohack");

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

    app.listen(3000, function(){
        console.log("Server is listening on port 3000");
    });
