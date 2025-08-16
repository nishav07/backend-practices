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


function universal(req,res,next){
    console.log("mai universal hu har jagh muh maarta hu")
    next()
}

app.use(universal);

app.listen(port,() => {
    console.log(console.log(`app is running on http://localhost:${port}/`));
})

app.get("/" , (req,res) => {
    res.render("index");
})


function isLoggedIn (req,res,next){
    console.log("middleware chal rha hai")
    next();
}

app.get("/home" ,isLoggedIn,(req,res) => {
    console.log("particular middleware wala hai rest api")
    res.send("hello world")
})