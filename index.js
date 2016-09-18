var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    populateTestData = require(path.join(process.env.PWD, "/lib/fns/populateTestData"));

var ReviewRouter = require(path.join(process.env.PWD, "controller", "Review")),
    SearchRouter = require(path.join(process.env.PWD, "controller", "Search"));

    /*============ TEST ============*/
    populateTestData();

    /*============ ROUTING ============*/
    app.use(bodyParser.json());

    app.use("/reviews", ReviewRouter);
    app.use("/search", SearchRouter);

    app.post("/location/:id/review", function(req, res){
		Review.create(newReview).then(function(newReview) {
			newReview.push(newReview);
			newReview.save().then(function(locationRes) {
				console.log(locationResp);
			});
		res.send (newReview);
		});
	});
	
    /*============ CONNECTION ============*/
    app.get("/", function(req, res){
        res.send("Welcome to the clinical trial app.  Please checkout our Android app.");
    });

    app.get("/favicon.ico", function(req, res){
        res.sendFile(path.join(process.env.PWD, "favicon.ico"));
    });

    app.listen(process.env.PORT || 3000, function(){
        console.log("Server is listening on port " + this.address().port);
    });
