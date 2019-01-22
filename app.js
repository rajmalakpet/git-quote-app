var express = require("express");

var app = express();

var port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log('<=== app is listening on port: ', port);
})

app.get("/", function(req, res){
    res.sendFile(__dirname+"/quote.html")
})