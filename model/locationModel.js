var mongoose = require("mongoose"),
    Schema = new mongoose.Schema;

    var locationSchema = new Schema({
        postalCode: String,
        reviews: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }]
    });

module.exports = mongoose.model("Location", locationSchema);
