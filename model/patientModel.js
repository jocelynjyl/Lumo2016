var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    path = require("path");

    var patientSchema = new Schema({
        username: {type: String, required: true}
    });

module.exports = mongoose.model("Patient", patientSchema);
