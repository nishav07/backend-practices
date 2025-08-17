import express from 'express';
import ejs from 'ejs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 
const app = express();
const port = 6969;
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use("/uploads",express.static(path.join(__dirname,"uploads")));


app.listen(port,() => {
    console.log(`app is running on http://localhost:${port}/`);
})

// function universalMiddleware(req,res,next){
//     console.log("this is checking from universal middleware :)");
//     next();
// }

// app.use(universalMiddleware);

// function check(req,res,next){
//     console.log("welcome to home")
//     next();
// }

function greet(req,res,next){
    console.log("welcome to home")
    next()
}

function isLoggedIn(req,res,next){
    const user = req.query.user
    if(user === "admin"){
        console.log("admin verified")
        next();
    } else {
        console.log("user detected")
        return res.redirect("/")
    }
}


app.get("/",(req,res) => {
    res.render("index")
})

app.get("/dashboard",isLoggedIn,(req,res) => {
    const user = req.query.user
    console.log(user)
    res.send("dashboard aa gya oyee")
})
