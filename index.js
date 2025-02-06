const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));


app.use(express.urlencoded({ extended: true }));

let posts = [
    {
        username: "Bhumika Sharma",
        content: "I am a student.",
        id:uuidv4()
    },
    {
        username: "Rahul Verma",
        content: "Learning JavaScript is fun!",
        id:uuidv4()
    },
    {
        username: "Ananya Gupta",
        content: "I love reading books.",
        id:uuidv4()
    },
    {
        username: "Vikram Singh",
        content: "Exploring new coding challenges.",
        id:uuidv4()
    },
    {
        username: "Priya Mehta",
        content: "Just started my web development journey!",
        id:uuidv4()
    },
    {
        username: "Arjun Rao",
        content: "Excited to build my first project.",
        id:uuidv4()
    }
];


app.get("/posts", (req, res) => {
    res.render("index.ejs",{posts});
});

app.get("/posts/new" , (req , res)=>{

   res.render("new.ejs");

});

app.post("/posts",(req , res)=>{
 let {username,content} = req.body;
 let id = uuidv4();
 posts.push({id,username,content});
 res.redirect("/posts");

});
app.get("/posts/:id" , (req , res)=>{
    let {id} = req.params;
    const post = posts.find(p => p.id === id);
    res.render("show.ejs" , {post});
});
app.patch("/posts/:id" , (req , res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    const post = posts.find(p => p.id === id);
    post.content = newContent;
    res.redirect("/posts");
});
app.get("/posts/:id/edit" , (req , res)=>{
    let {id} = req.params;
    const post = posts.find(p => p.id === id);
    res.render("edit.ejs" , {post});
});
app.delete("/posts/:id" , (req , res)=>{
    let {id} = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect("/posts");
});
app.listen(port, () => {
    console.log(`The app is listening at port ${port}`);
});
