var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    path = require("path"),
    jsonGetCall = require(path.join(__dirname, "lib", "fns", "jsonGetCall"));

    /*============ MONGOOSE ============*/
    var mongooseURL = process.env.MONGOLAB_URI || "mongodb://localhost/lumohack";
    mongoose.connect(mongooseURL);

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
        res.send(path.join(__dirname, "favicon.ico"));
    });

    app.listen(3000, function(){
        console.log("Server is listening on port 3000");
    });
