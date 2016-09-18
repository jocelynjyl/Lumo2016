var mongoose = require("mongoose"),
    path = require("path"),
    Patient = require(path.join(process.env.PWD, "model", "patientModel"));

var RAND_USERNAME_LENGTH = 8;
var RAND_PASSWORD_LENGTH = 10;
var VALID_RAND_CHAR = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";

function getRandomUsername(randLength){
    var randUsername = "";

    for(var i = 0; i < randLength; i++){
        randUsername += VALID_RAND_CHAR[Math.floor(Math.random() * VALID_RAND_CHAR.length)];
    }
    return randUsername;
};

function getRandomPassword(randLength){
    var randPassword = "";

    for(var i = 0; i < randLength; i++){
        randPassword += VALID_RAND_CHAR[Math.floor(Math.random() * VALID_RAND_CHAR.length)];
    }
    return randPassword;
};


function makeAnonPatient(callback){
    var anonPatient = {
        username: getRandomUsername(RAND_USERNAME_LENGTH),
        password: getRandomPassword(RAND_PASSWORD_LENGTH)
    };
    Patient.create(anonPatient).then(callback);
};

module.exports = makeAnonPatient;
