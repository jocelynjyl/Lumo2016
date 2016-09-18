var express = require("express"),
    app = express(),
    path = require("path"),
    populateTestData = require(path.join(process.env.PWD, "/lib/fns/populateTestData"));

    /*============ TEST ============*/
    populateTestData();

    /*============ CONNECTION ============*/
    app.get("/", function(req, res){
        res.send("Welcome to the clinical trial app.  Please checkout our Android app.");
    });

    app.get("/favicon.ico", function(req, res){
        res.sendFile(path.join(process.env.PWD, "favicon.ico"));
    });

    app.listen(process.env.PORT || 3000, function(){
        console.log("Server is listening on port " + this.address().port);
    });
