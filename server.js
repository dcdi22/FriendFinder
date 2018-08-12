// Dependencies
// ======================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");

// Set up Express
// ======================================
var app = express();
var PORT = process.env.PORT || 3000;

// Evoke 
// ======================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function(){
    console.log("App listening on PORT #" + PORT);
})

// Logic and Routes
// ======================================
app.use(htmlRoutes);
app.use(apiRoutes);

// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname, "home.html"))
// })
