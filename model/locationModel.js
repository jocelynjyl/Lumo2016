var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    path = require("path");

    var locationSchema = new Schema({
        postalCode: {type: String, required: true},
        _id: String,
        reviews: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }]
    });

    locationSchema.pre("save", function(next){
        if(this.isNew){
            this._id = this.postalCode;
        }
        next(); 
    });

module.exports = mongoose.model("Location", locationSchema);
