var mongoose = require("mongoose"),
    Schema = new mongoose.Schema;

    var reviewSchema = new Schema({
        content: String,
        rating: Number,
        author: {
            id: {
                type: Schema.Types.ObjectId,
                ref: "Patient"
            },
            username: String
        }
    });

module.exports = mongoose.model("Review", reviewSchema);
