var express = require("express"),
    app = express(),
    router = express.Router(),
    path = require("path"),
    jsonGetCall = require(path.join(process.env.PWD, "/lib/fns/jsonGetCall"));

// var Location = require(path.join(process.env.PWD, "model", "locationModel")),
//     Review = require(path.join(process.env.PWD, "model", "reviewModel")),
//     Patient = require(path.join(process.env.PWD, "model", "patientModel"));

    router.get("/:keyword", function(req, res){ // TODO: dummy
        var url = encodeURI("https://clinicaltrialsapi.cancer.gov/v1/clinical-trials?keywords=" + req.params.keyword);
        module.exports = jsonGetCall(url,
            function(resp){
                res.send(resp);
            }, function(error){
                throw new Error("Something went wrong");
            })
    });

    module.exports = router;
