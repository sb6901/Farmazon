require('dotenv').config();
const express = require("express");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

app.get("/", function(req,res)
{
    res.render("home");
});

app.get("/login", function(req,res) {
    res.render("login");
})
app.get("/register", function(req,res) {
    res.render("register");
})
app.get("/about", function(req,res) {
    res.render("about");
})
app.get("/contact", function(req,res) {
    res.render("contact");
})

app.listen(PORT, function(){
    console.log("Server is running on port " + PORT);
})