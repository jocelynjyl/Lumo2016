var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    path = require("path"),
    Location = require(path.join(process.env.PWD, "model", "locationModel")),
    Review = require(path.join(process.env.PWD, "model", "reviewModel")),
    Patient = require(path.join(process.env.PWD, "model", "patientModel"));

var populateTestData = function(){
    var clearDatabase = [Location.remove({}), Review.remove({}), Patient.remove({})];

    Promise.all(clearDatabase).then(function(){
        console.log("Populating test data...");

        var newLocation = {
            postalCode: "48201"
        };

        Location.create(newLocation).then(function(resp){
            console.log(resp);
        });

        var newReview = {
            rating: 1,
            content: "The nurses are very friendly"
        };

        Review.create(newReview).then(function(resp){
            console.log(resp);
        });

    });
};

module.exports = populateTestData;
