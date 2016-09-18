var express = require("express"),
    app = express(),
    router = express.Router(),
    path = require("path");

var Location = require(path.join(process.env.PWD, "model", "locationModel")),
    Review = require(path.join(process.env.PWD, "model", "reviewModel")),
    Patient = require(path.join(process.env.PWD, "model", "patientModel"));

    router.get("/:id/review", function(req, res){
        Location.findOne({_id: req.params.id}).populate("reviews").exec().then(function(populatedLocation){
            res.send(populatedLocation.reviews);
        });
    });

    router.post("/:id/review", function(req, res){
        var newReview = req.body;
		Review.create(newReview).then(function(reviewCreated) {
            console.log(reviewCreated);
            Location.findOne({_id: req.params.id}).then(function(foundLocation){
                console.log("========== foundLocation ==========");
                console.log(foundLocation);
                if(foundLocation){
                    if(!foundLocation.reviews)
                        foundLocation.reviews = [];
                    foundLocation.reviews.push(reviewCreated);
                    foundLocation.save().then(function(resp){
                        console.log(resp);
                        res.send(reviewCreated);
                    });
                } else {
                    Location.create({postalCode: req.params.id}).then(function(createdLocation){
                        createdLocation.reviews.push(reviewCreated);
                        createdLocation.save().then(function(resp){
                            console.log(resp);
                            res.send(reviewCreated);
                        });
                    });
                }
            });
		});
	});

    module.exports = router;
