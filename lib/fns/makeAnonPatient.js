var mongoose = require("mongoose"),
    path = require("path"),
    Patient = require(path.join(process.env.PWD, "model", "patientModel"));

var RAND_USERNAME_LENGTH = 8;
var RAND_PASSWORD_LENGTH = 10;
var VALID_RAND_CHAR = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()_+-={}[]:;<>?,./|";

function getRandomUsername(randLength){
    var randUsername = "";
    console.log("random username: " + randUsername);
    return randUsername;
};

function getRandomPassword(randLength){
    var randPassword = "";
    console.log("random password: " + randPassword);
    return randPassword;
};


function makeAnonPatient(){
    var anonPatient = {

    };
};

module.exports = makeAnonPatient;
