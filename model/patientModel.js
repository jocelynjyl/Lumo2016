var mongoose = require("mongoose"),
    Schema = new mongoose.Schema;

    var patientSchema = new Schema({
        username: String,
        password: String
    });

module.exports = mongoose.model("Patient", trialSchema);
