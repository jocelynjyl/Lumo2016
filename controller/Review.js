var express = require("express"),
    app = express(),
    router = express.Router(),
    path = require("path");

var Location = require(path.join(process.env.PWD, "model", "locationModel")),
    Review = require(path.join(process.env.PWD, "model", "reviewModel")),
    Patient = require(path.join(process.env.PWD, "model", "patientModel"));

    router.get("/:id", function(req, res){
        if(!req.params.id) throw new Error("");
        Review.findOne({_id: req.params.id}).lean().then(function(resp){
            res.send(resp);
        });
    });

    router.post("/:id", function(req, res){

    });

    module.exports = router;
