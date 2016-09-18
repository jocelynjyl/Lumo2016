var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    path = require("path"),
    constant = require(path.join(process.env.PWD, "/lib/constant"));

    var reviewSchema = new Schema({
        content: String,
        rating: {
            type: Number,
            required: true,
            validate: {
                validator: function(val){
                    return val >= constant.RATING_MIN && val <= constant.RATING_MAX;
                },
                message: "Rating must be a value between " + constant.RATING_MIN + " and " + constant.RATING_MAX
            }
        },
        author: {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Patient"
            },
            username: String
        }
    }, {
        timestamps: true
    });

    reviewSchema.pre('save', function(next){
        if(!this.isNew){
            this.updatedAt = new Date();
        }
        next();
    });

module.exports = mongoose.model("Review", reviewSchema);
