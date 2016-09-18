var mongoose = require("mongoose"),
    path = require("path"),
    Patient = require(path.join(process.env.PWD, "model", "patientModel"));

var RAND_USERNAME_LENGTH = 8;
var VALID_RAND_CHAR = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

function getRandomUsername(randLength){
    var randUsername = "";

    for(var i = 0; i < randLength; i++){
        randUsername += VALID_RAND_CHAR[Math.floor(Math.random() * VALID_RAND_CHAR.length)];
    }
    return randUsername;
};

function makeAnonPatient(callback){
    var anonPatient = {
        username: getRandomUsername(RAND_USERNAME_LENGTH)
    };
    Patient.create(anonPatient).then(callback);
};

module.exports = makeAnonPatient;
