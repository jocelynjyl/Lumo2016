var express = require("express"),
    app = express(),
    mongoose = require("mongoose");

    /*============ MONGOOSE ============*/
    mongoose.connect("mongodb://localhost/lumohack");

    /*============ CONNECTION ============*/
    app.listen(3000, function(){
        console.log("Server is listening on port 3000");
    });
