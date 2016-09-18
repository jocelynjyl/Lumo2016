var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    path = require("path");

var Location = require(path.join(process.env.PWD, "model", "locationModel")),
    Review = require(path.join(process.env.PWD, "model", "reviewModel")),
    Patient = require(path.join(process.env.PWD, "model", "patientModel")),
    makeAnonPatient = require(path.join(process.env.PWD, "/lib/fns/makeAnonPatient"));

var populateTestData = function(){
    var clearDatabase = [Location.remove({}), Review.remove({}), Patient.remove({})];

    Promise.all(clearDatabase).then(function(){
        console.log("Populating test data...");

        var newReview = {
            rating: 1,
            content: "The nurses are very friendly"
        };

        var newLocation = {
            postalCode: "48201"
        };

        makeAnonPatient(function(newPatient){
            console.log(newPatient);
            Review.create(newReview).then(function(newReview){
                newReview.author.id = newPatient._id;
                newReview.author.username = newPatient.username;

                newReview.save().then(function(reviewResp){
                    console.log(reviewResp);
                });
                Location.create(newLocation).then(function(newLocation){
                    newLocation.reviews.push(newReview);
                    newLocation.save().then(function(locationResp){
                        console.log(locationResp);
                    });
                });
            });
        });
    });
};

module.exports = populateTestData;
