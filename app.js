const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

let posts = [];

const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req,res){
    let homeContent = "Today is monday but yesterday was Tuesday. Does that even make any sense?";
    res.render("home",{content:homeContent, posts:posts});
});

// About

app.get("/about", function(req,res){
    let aboutContent = "This is about me. Me is Tommy Tham. Well who is Tommy Tham? Tommy Tham is the creater of this blog website, he used some technologies he has not used before to create this";
    res.render("about",{content: aboutContent});
});

// Contact

app.get("/contact",function(req,res){
    let contactContent = "You can contact me at tommytham@hotmail.co.uk";
    res.render("contact",{content:contactContent});
});

// Compose

app.get("/compose",function(req,res){
    res.render("compose");
});

app.post("/compose",function(req,res){
    
    const userPost = {
        title: req.body.titlePost,
        content: req.body.contentPost
    };
    console.log(userPost);
    posts.push(userPost);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server running on port 3000.");
});