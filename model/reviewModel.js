var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    path = require("path"); 

    var reviewSchema = new Schema({
        content: String,
        rating: Number,
        author: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Patient"
            },
            username: String
        }
    });

module.exports = mongoose.model("Review", reviewSchema);
