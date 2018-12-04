var app = require("express")();
var request = require('request');

// app.set("view engine", "ejs");

// INDEX ROUTE

app.get("/", function(req, res){
  request('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22DC%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(error, response, body){
    if(error){
      } else {
        var data = JSON.parse(body);
        res.render("weather.ejs", {data: data});
    } 
  });
});

app.listen(process.env.PORT || 3000, process.env.IP || "LOCALHOST", function() {
    console.log("Yahoo Weather Checker Started");
})