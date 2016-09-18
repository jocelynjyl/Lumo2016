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

var MAX_SEARCH_ITEM = 5;
var NCI_API_DOMAIN = "https://clinicaltrialsapi.cancer.gov/v1/clinical-trials";
var VALID_FIELDS = ["central_contact", "collaborators", "completion_date", "current_trial_status", "current_trial_status_date", "diseases",
"eligibility", "keywords", "nct_id", "phase", "principal_investigator", "protocol_id", "sites", "start_date", "brief_title"];
var INCLUDE_FIELDS = ["central_contact", "current_trial_status", "diseases", "eligibility", "nct_id", "phase", "principal_investigator", "sites", "start_date", "brief_title"];

    router.post("/", [filterSearchFields, flattenSearchFields], function(req, res){

        var body = req.body;
        var uri = NCI_API_DOMAIN + "?";

        _.each(_.keys(body), function(key, index){
            uri += (key + "=" + body[key]);
            if(index !== _.keys(body).length - 1){
                uri += "&";
            }
        });

        _.each(INCLUDE_FIELDS, function(fields, index){
            uri += ("&include=" + fields);
        });

        uri += ("&size=" + MAX_SEARCH_ITEM);

        uri = encodeURI(uri);
        console.log("URI: " + uri);

        jsonGetCall(uri,function(resp){
            res.send(resp);
        }, function(error){
            throw new Error("Something went wrong");
        });
    });


    function filterSearchFields(req, res, next){
        if(!req.body){
            next();
        } else {
            req.body = _.pick(req.body, function(val, key){
                return VALID_FIELDS.indexOf(key) !== -1;
            });
            next();
        }
    };

    function flattenObj(obj){
        var allKeys = _.keys(obj);
        var flattenedObj = {};

        for(var i = 0; i < allKeys.length; i++){
            var key = allKeys[i];
            var val = obj[key];
            if(typeof val != "object"){
                flattenedObj[key] = val;
            } else {
                flattenedNestedObj = flattenObj(val);
                var allChildKeys = _.keys(flattenedNestedObj);
                for(var j = 0; j < allChildKeys.length; j++){
                    var childKey = allChildKeys[j];
                    var childVal = flattenedNestedObj[childKey];
                    flattenedObj[key + "." + childKey] = childVal;
                }
            }
        }

        return flattenedObj;
    };

    function flattenSearchFields(req, res, next) {
        var flattenedBody = flattenObj(req.body);
        req.body = flattenedBody;
        next();
    };

    module.exports = router;
