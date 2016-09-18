// search controller

var express = require("express"),
    app = express(),
    router = express.Router(),
    path = require("path"),
    _ = require("underscore"),
    jsonGetCall = require(path.join(process.env.PWD, "/lib/fns/jsonGetCall"));

var Location = require(path.join(process.env.PWD, "model", "locationModel")),
    Review = require(path.join(process.env.PWD, "model", "reviewModel")),
    Patient = require(path.join(process.env.PWD, "model", "patientModel"));

var NCI_API_DOMAIN = "https://clinicaltrialsapi.cancer.gov/v1/clinical-trials";
var VALID_FIELDS = ["central_contact", "collaborators", "completion_date", "current_trial_status", "current_trial_status_date", "diseases",
"eligibility", "keywords", "nct_id", "phase", "principal_investigator", "protocol_id", "sites", "start_date"];

    router.get("/:keyword", function(req, res){ // TODO: dummy
        var url = encodeURI("https://clinicaltrialsapi.cancer.gov/v1/clinical-trials?keywords=" + req.params.keyword);
        module.exports = jsonGetCall(url,
            function(resp){
                res.send(resp);
            }, function(error){
                throw new Error("Something went wrong");
            })
    });

    router.post("/", filterSearchFields, function(req, res){
        console.log("you have hit the post route");
    });

    function filterSearchFields(req, res, next){
        console.log(req.body);
        if(!req.body){
            next();
        } else {
            req.body = _.pick(req.body, function(val, key){
                return VALID_FIELDS.indexOf(key) !== -1;
            });
            console.log(req.body);
            next();
        }
    };

    module.exports = router;
