var app = require("express")();
var request = require("request");

app.set("view engine", "ejs");

// ROUTING

app.get("/", function(req, res){
   res.render("search"); 
});

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = `http://omdbapi.com/?s=${query}&apikey=thewdb`;
    request(url, function(error, response, body){
        var search = req.query.search
        if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results",{data: data});
        }
    });
})

app.listen(process.env.PORT || 3000, process.env.IP || "LOCALHOST", function() {
    console.log("Movie App Started");
});