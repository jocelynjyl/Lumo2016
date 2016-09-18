var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    path = require("path"); 

    var patientSchema = new Schema({
        username: String,
        password: String
    });

module.exports = mongoose.model("Patient", patientSchema);
