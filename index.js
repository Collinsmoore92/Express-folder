const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const path = require("path");


app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world");
});

// const addReqUser = require("./middlewares/middleware");
// const PORT = process.env.PORT || 3000;
// const fs = require("fs");

// const path = require('path');

// app.use(addReqUser);


// app.get("/addReqUser", (req, res) =>{
//     res.send(req.user.name);
// });

// app.get("/about", function (req, res){
//     res.send("This is the about page")
// });

// app.get("/contact", function (req, res){
//     res.send("This is the contact page")
// });

// app.get("/Help", function (req, res){
//     res.send("This is the Help page")
// });

// app.get("/Services", function (req, res){
//     res.send("This is the Services page")
// });

app.post("/", (req, res) => {
    res.json(req.body);
});

app.post("/contact", (req, res) => {
    const name = req.body.name;
    const user = req.body.user;
    const time = req.body.time;
    const email = req.body.email;
    const date = req.body.date;

    res.render("contact", {
        name: name,
        user: user,
        time: time,
        email: email,
        date: date,
    });
});

server.listen(3000, function () {
    console.log(`app is running`)
});


