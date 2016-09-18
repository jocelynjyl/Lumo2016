var https = require("https");

module.exports = function jsonGetCall(url, onSuccess, onError){
    var req = https.get(url, function(res){
        var body = "";

        res.on("data", function(chunk){
            if(chunk) body += chunk;
        });

        res.on("end", function(){
            console.log(JSON.parse(body));
            onSuccess(body);
        });
    });
    req.end();

    req.on("error", function(error){
        onError(error);
    });
};
