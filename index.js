const http = require("http");
const express = require("express");
const app = express();
const addReqUser = require("./middlewares/middleware");
const PORT = process.env.PORT || 3000;
// const fs = require("fs");

// const path = require('path');

app.use(addReqUser);


app.get("/addReqUser", (req, res) =>{
    res.send(req.user.name);
});

app.get("/about", function (req, res){
    res.send("This is the about page")
});

app.get("/contact", function (req, res){
    res.send("This is the contact page")
});

app.get("/Help", function (req, res){
    res.send("This is the Help page")
});

app.get("/Services", function (req, res){
    res.send("This is the Services page")
});

app.post("/Home", function (req, res){
    res.send("This is the home page")
});

app.get("/News", function (req, res){
    res.send("This is the news page")
});

app.listen(PORT, ()=>console.log("Server is running"));