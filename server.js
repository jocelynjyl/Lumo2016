process.env.PWD = process.cwd();

var mongoose = require("mongoose"),
    path = require("path"),
    bluebird = require("bluebird");

var Location = require(path.join(process.env.PWD, "model", "locationModel")),
    Review = require(path.join(process.env.PWD, "model", "reviewModel")),
    Patient = require(path.join(process.env.PWD, "model", "patientModel"));

    /*============ MONGOOSE ============*/
    mongoose.Promise = bluebird;
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lumohack");

module.exports = require(path.join(process.env.PWD, "index"));
