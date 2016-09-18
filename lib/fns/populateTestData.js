var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    path = require("path"),
    Location = require(path.join(process.env.PWD, "model", "locationModel")),
    Review = require(path.join(process.env.PWD, "model", "reviewModel")),
    Patient = require(path.join(process.env.PWD, "model", "patientModel"));

var populateTestData = function(){
    var newLocation = {
        postalCode: "EC-FV-06"
    };

    Location.create(newLocation, function(err, resp){
        console.log(err);
        console.log(resp);

    });
};

module.exports = populateTestData;
