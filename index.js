import express from `express`;
import ejs from `ejs`;
const app = express();
const port = 6969;
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")))
app.set("views",path.join(__dirname,"views"))
app.set("view engine","ejs")
app.use("uploads",express.static(__dirname,"uploads"))
app.listen(port,() => {
    console.log(console.log(`app is running on port ${port}`));
})

app.get("/" , (req,res) => {
    res.send("HOME")
})
